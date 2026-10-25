# Architecture and design decisions

## Delivered prototype

```text
Synthetic sales / inventory / shipping / billing events
                         |
                validation + deduplication
                         |
       browser-memory state (orders, events, recoveries, audit)
                         |
                shared engine.js rules
                 /                 \
     evidence timeline        findings and explanations
                 \                 /
                  operator reviews
                         |
          approval + current-state recheck
                         |
          simulated shipment + recovery key
                         |
                  re-evaluate outcome
```

The browser is the application runtime. The optional Node server serves static files only. Automated tests import the same engine. There are no runtime dependencies and no network, database or cloud connections in the application.

## Rules and precedence

| Rule | Trigger | Behavior |
| --- | --- | --- |
| R02 | More than one distinct shipment reference | Flag duplicate, even when feed is stale; it is positive observed evidence |
| R04 | Feed watermark older than 15 minutes | Remaining journeys become Unknown; no recovery |
| R03 | Invoice observed, shipment absent | Billing conflict; human investigation |
| R01 | No shipment and simulation clock beyond deadline | Missing shipment; recoverable only with inventory reservation |
| R01 | No shipment, deadline not passed | Pending |
| R01–R03 | Shipment observed, no duplicate/conflict | Shipment outcome met; physical delivery and on-time SLA are not asserted |

The UI shows the highest-priority current finding per order. Deadline misses are not maintained as a separate historical KPI after a late shipment. Audit records and source timestamps remain available for inspection during the session.

## Event contract

Required strings, each 1–200 characters: `id`, `orderId`, `type`, `at`, `ref`, `source`. Allowed types: accepted, reserved, shipped, invoiced. Order ID must exist. Event timestamp must be UTC and no later than the simulation clock. Unknown properties are discarded. A repeated event ID with identical content is ignored; conflicting content is rejected. Distinct event IDs sharing a shipment reference do not count as separate shipments.

## Recovery contract

Only an overdue, reserved order with no shipment, no invoice conflict and a fresh feed may receive the single supported action. Approval is explicit. The engine checks the current finding immediately before mutation. The action key is `shipment:<orderId>:v1`. Repeating it leaves the previous shipment unchanged and appends a blocked-replay audit entry.

This is single-threaded browser-memory behavior. A production service needs atomic claims on a durable unique key, source-system idempotency keys, authorization, delivery acknowledgments, and reconciliation after uncertain remote outcomes. A unique key in our UI does not establish those properties across systems.

## Proposed enterprise implementation — not built

- OIC adapters or event APIs map application records to correlation IDs and source-specific watermarks.
- Java Spring Boot provides ingestion, validation, evaluation and reviewer APIs.
- Oracle stores append-only events, outcome rule versions, approvals and unique recovery attempts.
- A source adapter reconciles shipping state before requesting a mutation.
- An AI service receives a bounded evidence package and retrieves approved runbooks, returning cited explanations and escalation recommendations. It does not determine whether an external shipment happened.
- Identity, roles, secret management, retention, operational monitoring and audit integrity are implementation work for that future system.

## AI design and disclosure

AI assisted development. Runtime explanation is deterministic. AI-HANDOFF-PROMPT.md provides a manual experiment using exported synthetic evidence; it is not integrated into the running app. Do not describe it as a live agent, deployed Oracle integration or autonomous recovery system.

## Known scope limits

Single-shipment orders only; no split shipments, cancellation or returns. A global feed watermark simplifies per-source completeness. An invoice-without-shipment alert identifies a review candidate, not a proven accounting error. Physical delivery, actual losses and user time savings are not measured. No authentication, database or durable recovery state is included, as requested.
