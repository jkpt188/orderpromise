const test=require('node:test'),assert=require('node:assert/strict'),E=require('../engine.js');
for(const c of E.evaluate().cases)test(c.name,()=>assert.equal(c.actual,c.expected));
test('Malformed events and unknown orders are rejected',()=>{const s=E.seed();assert.throws(()=>E.addEvent(s,{}));assert.throws(()=>E.addEvent(s,{id:'x',orderId:'not-real',type:'shipped',at:s.now,ref:'x',source:'Shipping'}));assert.equal(s.events.length,E.seed().events.length);});
test('Event ID collision cannot overwrite evidence',()=>{const s=E.seed();assert.throws(()=>E.addEvent(s,{...s.events[0],ref:'altered'}),/collision/);assert.notEqual(s.events[0].ref,'altered');});
test('Stale evidence blocks recovery',()=>{const s=E.seed();s.feedThrough='2026-10-25T10:00:00Z';assert.throws(()=>E.recover(s,'A101',true));assert.equal(s.recoveries.length,0);});
test('Duplicate shipment and invoice conflict cannot auto-recover',()=>{const s=E.seed();for(const id of ['A102','A103'])assert.throws(()=>E.recover(s,id,true));});
test('Audit records approval and blocked replay',()=>{const s=E.seed();E.recover(s,'A101',true);E.recover(s,'A101',true);assert.deepEqual(s.audit.map(a=>a.action),['HUMAN_APPROVED_RECOVERY','REPLAY_BLOCKED']);assert.equal(s.recoveries.length,1);});
test('Explanation cites source references',()=>{const s=E.seed(),ex=E.explain(s,s.orders[0]);assert.match(ex.summary,/Shipment deadline missed/);assert.match(ex.evidence,/ORD-A101/);assert.match(ex.mode,/no live AI/);});
test('Baseline flags three orders totaling synthetic $6950',()=>{const s=E.seed(),fs=E.findings(s).filter(f=>f.status==='At risk');assert.equal(fs.length,3);assert.equal(fs.reduce((sum,f)=>sum+s.orders.find(o=>o.id===f.orderId).value,0),6950);});
