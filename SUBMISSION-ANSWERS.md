# Submission draft — OrderPromise

Copy the following answers into the matching fields shown in the supplied hackathon screenshots. Do not claim a hosted URL, live AI, OIC or Oracle connection until one exists. These answers describe this exact delivered prototype.

## What did you build?

We built OrderPromise, a working browser prototype that finds broken customer order journeys even when every recorded integration call reports success. It correlates synthetic sales, inventory, shipping and billing events by order ID, detects missed shipment deadlines, duplicate shipment references and invoices without shipments, and exposes the source evidence behind each finding. An operator can approve one sandbox shipment recovery, verify the updated outcome, and replay the request to demonstrate duplicate suppression. A scenario lab, regression evaluation and evidence export make the behavior reproducible. No account or database is required to use the demo.

## Who has this problem?

Our initial target user is an order-operations analyst at a distributor whose ERP, external warehouse and billing applications have different owners. The buyer hypothesis is its head of order operations; the technical evaluator is the integration lead. The analyst may need to compare order IDs, shipment references and invoice records before choosing whether to retry, contact fulfillment or escalate to billing. Oracle's published Order Manager role, fulfillment monitoring documentation and Order Exception Assistant establish that exception investigation and recovery are recognized enterprise tasks. They also establish a strong alternative: existing Oracle tools already solve parts of this problem. Our segment hypothesis is teams with a remaining evidence gap across mixed systems. We have not conducted firsthand interviews, quantified incident frequency or validated willingness to pay. Scope should be estimated bottom-up from qualified teams and observed workload, not an invented market-size number. Source links and a comparison are available in the demo's Customer & business case page and MARKET-EVIDENCE.md.

## How does your app solve it?

OrderPromise brings the order journey and supporting records into one review screen. On the initial scenario, all 20 recorded calls report success, but three of six orders violate explicit outcome rules. The operator opens A101, sees the missing shipment, checks the source evidence and approves one simulated recovery. The app rechecks current state, creates one sandbox shipment, records the action and updates the finding. Replaying the recovery creates no additional shipment. Duplicate-shipment and billing-conflict cases remain human investigations. If the source feed becomes stale, missing-event conclusions become Unknown instead of confidently asserting failure. The demo also supports late events, duplicate event delivery, a simulation clock, 16 in-app regression cases, and JSON evidence export. The intended benefit is less manual investigation and fewer unsafe replays; production savings have not yet been measured.

## How did you build it?

We used dependency-free HTML, CSS and JavaScript, with a shared domain engine that runs in the browser and in Node.js tests. State is held entirely in page memory. An optional Node static server serves the app; there is no database, external API, account or live AI model connection. The engine implements four outcome rules, validates synthetic events, deduplicates event IDs and shipment references, checks source freshness, and gates the sandbox recovery on explicit approval and current evidence. The explanation panel is a deterministic simulation, not a model response. The command-line suite has 23 passing checks, and the in-app suite has 16 synthetic regression cases. We used AI to help design and implement the prototype. A future enterprise version could use OIC adapters, a Java Spring Boot service, Oracle persistence and an AI explanation service, but those integrations are not claimed in this build. The strongest demonstrated feature is the complete evidence-to-approved-recovery workflow; the next work is validating the problem with users and connecting one real event source.

## Remaining fields

- Demo URL: use the actual publicly reachable static-host URL once deployed. A local file/localhost is not a remote judge URL.
- Repo URL: optional; include only an actual repository containing this source.
- Video URL: optional; use DEMO-SCRIPT.md to record a real walkthrough if useful.
- App uses login: unchecked. This prototype has no sign-in.
- AI verification response: obtain the portal's Download Prompt after entering the real URL and answers. Run the supplied prompt against the actual demo and paste its returned contract. Do not invent a schema or evaluation evidence.

## Before submission

1. Confirm the intended team and coordinate with teammates before submitting a version.
2. Read Rubric and confirm whether live AI, Oracle services or a particular track is mandatory.
3. Publish the four static app files and test from a signed-out browser.
4. Verify the recovery, replay, stale-feed and evaluation workflows on the hosted version.
5. Enter these answers, actual links and the generated verification contract.
6. Submit the intended latest version and inspect the resulting feedback.

The proposed differentiation is a small mixed-system evidence workbench with explicit stale-data uncertainty and reproducible recovery checks. Rules and dashboards alone are easy to copy. Future defensibility would require reliable adapters and permissioned, validated recovery examples. The next investment should validate the problem with five analysts and two managers, then measure investigation time and alert precision on a read-only pilot. Proposed targets of 30% lower median investigation time and 90% alert precision are not achieved results. Stop or change direction if existing tools sufficiently solve the workflow or pilot benefit does not exceed operational cost.

This draft is not an official submission and does not guarantee acceptance or a score.
