// Produce self-contained static assets and reproducible synthetic evidence.
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),E=require('./engine.js');
const root=__dirname;
const tests=cp.spawnSync(process.execPath,['--test','tests/engine.test.cjs'],{cwd:root,encoding:'utf8'});
process.stdout.write(tests.stdout||'');process.stderr.write(tests.stderr||'');
if(tests.status!==0)process.exit(tests.status||1);
const evaluation=E.evaluate();if(evaluation.passed!==evaluation.total)throw Error('Synthetic suite failed');
for(const dir of ['dist','evidence'])fs.mkdirSync(path.join(root,dir),{recursive:true});
for(const name of ['index.html','styles.css','engine.js','app.js'])fs.copyFileSync(path.join(root,name),path.join(root,'dist',name));
const sourceFiles=['index.html','styles.css','engine.js','app.js','server.cjs','build.cjs','package.json','tests/engine.test.cjs','README.md','DEMO-SCRIPT.md','ARCHITECTURE.md','SUBMISSION-ANSWERS.md','RUBRIC-REVIEW.md','MARKET-EVIDENCE.md','TEST-REPORT.md','LICENSE'];
const sourceBundle={project:'OrderPromise',version:'1.1.0',format:'filename-to-UTF8-text map; recreate files preserving paths',instructions:'Open index.html directly, or use Node 18+: node server.cjs. Verify with node --test tests/engine.test.cjs. No database, install or login.',files:Object.fromEntries(sourceFiles.filter(name=>fs.existsSync(path.join(root,name))).map(name=>[name,fs.readFileSync(path.join(root,name),'utf8')]))};
for(const target of ['source-bundle.json','dist/source-bundle.json'])fs.writeFileSync(path.join(root,target),JSON.stringify(sourceBundle,null,2)+'\n');
const write=(name,value)=>fs.writeFileSync(path.join(root,'evidence',name),JSON.stringify(value,null,2)+'\n');
const state=E.seed();
write('baseline.json',{application:'OrderPromise',disclosure:'Synthetic prototype, no database or live AI. This is not the portal verification contract.',state,findings:E.findings(state)});
write('regression-results.json',evaluation);
fs.writeFileSync(path.join(root,'evidence','node-tests.tap'),tests.stdout);
console.log('Static build: dist/ (app plus source bundle). Synthetic evidence: evidence/. No dependencies installed or external services contacted.');
