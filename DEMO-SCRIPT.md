# Three-minute demo

## 0:00–0:25 — Customer and problem

“An order analyst sees green integration calls, but the customer is still waiting. Finding the missing step means comparing sales, inventory, shipping and billing records. Retrying the whole order may create another shipment. OrderPromise checks the business outcome and shows the evidence before any recovery.”

## 0:25–0:50 — Establish the contradiction

Start from a fresh page. Point to 20/20 successful recorded calls, three flagged orders, and the $6,950 synthetic flagged order value. Say explicitly: “These records are synthetic; the dollar figure is order value, not a measured loss.”

## 0:50–1:25 — Investigate and recover

A101 is selected initially. Show its reservation, missed shipment deadline, source references and fresh watermark. “The evidence supports a missing shipment. The operator reviews it and approves one sandbox action.” Check the approval box and click Approve sandbox recovery. Show the new event and Healthy shipment check.

“Now replay the same request.” Click Replay recovery request. Show the blocked-replay message. “There is still only one shipment. This is session-local repeat suppression, not a claim of production exactly-once delivery.”

## 1:25–1:50 — Cases that should not auto-recover

Open A102: two distinct shipment references. Open A103: invoice without shipment. “These require human investigation. The app does not offer a blind replay.”

## 1:50–2:15 — Trustworthy uncertainty

Scenario lab → Reset demo scenario → Simulate stale feed → Outcome overview. “We cannot infer a missing event from an old feed. The app now shows Unknown. Positive duplicate evidence remains visible.”

## 2:15–2:40 — Reproducible evidence

Evaluation → Run regression suite. Show 16/16. “These are explicit synthetic regression cases covering deadlines, duplicate references, stale feeds, approval, late events and replay. They are not a production accuracy benchmark.” Click Export evidence if desired.

## 2:40–3:00 — Architecture and next step

“The prototype runs entirely in browser memory, without a database or external systems. The explanation is a labeled deterministic preview. Our next step is to validate the analyst workflow with users and connect one event source. The proposed enterprise path uses OIC, a Java service and Oracle persistence. We are demonstrating that technical success and customer success need separate checks.”

## Optional challenge from a judge

Reset in Scenario lab. Ingest the preloaded A101 shipment event, then ingest it again. The second event is ignored. Return to overview to see A101 resolved from source evidence. Use a different shipment reference and event ID for A101 to produce a duplicate-shipment finding. Unknown orders and future events produce validation messages.

## Recovery if the demo gets messy

Scenario lab → Reset demo scenario. Reloading the page also restores the initial scenario. No data survives the session.
