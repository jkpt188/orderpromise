# OrderPromise

**Track the promise. Find the delay. Resolve the issue.** A working, offline prototype for finding incomplete or contradictory customer order journeys behind technically successful integrations.

## Run immediately

Open `index.html` in Chrome, Edge, or Firefox. No installation, build, account, database, API key, or internet connection is required. Keep `app.js`, `engine.js`, and `styles.css` alongside the HTML file.

Optional local server with Node.js 18 or later:

```powershell
node server.cjs
```

The server prints a loopback URL. If a port is reserved on your machine, let the OS select an available one:

```powershell
$env:PORT='0'
node server.cjs
```

The server only serves the four app files and binds to 127.0.0.1. Stop it with Ctrl+C. It does not expose the application to external judges.

## What works

- Six synthetic order journeys and a watchlist with filtering and investigation.
- Missing-shipment, duplicate-shipment, invoice-without-shipment, and feed-freshness checks.
- Evidence timelines containing event IDs, source systems, shipment references, and timestamps.
- A human approval gate for one simulated shipment recovery; repeated recovery requests do not create another shipment in the same session.
- Validation and ingestion of user-supplied synthetic event JSON, deduplication, late-event handling, and simulation clock controls.
- A session audit trail, 16-case in-app regression suite, and JSON evidence export.
- Responsive desktop/mobile CSS and keyboard-operable native controls.

## Judge demo

1. Open the app. There are **20 successful recorded calls**, **three flagged orders**, and **$6,950 synthetic flagged order value**. This is not measured revenue loss.
2. Inspect A101. It has an inventory reservation but no shipment after its deadline.
3. Review the event references. Check the approval box, then click **Approve sandbox recovery**.
4. A101 becomes Healthy for its shipment check. Click **Replay recovery request**: no second shipment is created.
5. Inspect A102 (two shipment references) and A103 (invoice but no shipment). These cases require investigation and have no automated action.
6. Open **Scenario lab**, reset, and simulate a stale feed. Return to overview: missing-event conclusions become Unknown. A102 remains flagged because two observed shipment references are positive evidence.
7. Refresh the feed watermark. Inject the provided late shipment event; A101 resolves. Ingest it again to see duplicate delivery ignored.
8. Open **Evaluation** and run the suite. Download the evidence report.

Full narration: `DEMO-SCRIPT.md`. Submission field answers: `SUBMISSION-ANSWERS.md`.

## Verify

```powershell
node --test tests/engine.test.cjs
```

No npm install is needed. `npm test` runs the same tests. The command-line suite includes seven additional validation/audit assertions beyond the 16 in-app cases. See `TEST-REPORT.md` for recorded results and verification limits.

## Files

| File | Purpose |
| --- | --- |
| index.html, styles.css, app.js | Static interface and event handlers |
| engine.js | Shared domain logic used by browser and Node tests |
| server.cjs | Optional static preview server |
| tests/engine.test.cjs | Domain regression tests |
| SUBMISSION-ANSWERS.md | Four form answers and submission checklist |
| DEMO-SCRIPT.md | Three-minute presentation and reproducible demo |
| ARCHITECTURE.md | Implemented design and proposed Oracle/Java path |
| AI-HANDOFF-PROMPT.md | Optional manual AI explanation experiment |
| evidence/ | Generated baseline and synthetic evaluation evidence |

## Honest scope

All orders, customers, amounts, call statuses and recoveries are synthetic. Everything is stored in page memory; reload resets it. No database, Oracle service, OIC instance, live AI model, production account, or external fulfillment system is connected. The explanation preview uses deterministic templates, clearly labeled in the UI.

This is a client-side JavaScript prototype. Java/Spring Boot, OIC and Oracle persistence are an implementation roadmap, not delivered integrations. AI assisted development of this project; the running app does not call a model. If the event mandates live AI or an Oracle service, this prototype alone does not meet that condition.

The engine assumes a single shipment per order and checks observed existence/uniqueness, not physical delivery, cancellation, split shipment, return, or actual financial loss. Feed watermarks and approval are simulated. Production concurrency, durable audit, authentication, external action reconciliation and transactional idempotency are not implemented.

## Rubric and hosting status

The v1.1 update adds a Customer & business case page, primary-source evidence, an alternatives comparison, investment milestones, a rubric coverage report, and a downloadable source bundle. Read `RUBRIC-REVIEW.md` and `MARKET-EVIDENCE.md` before submission. This public release excludes local deployment metadata and previous Git history. See `PUBLICATION-REVIEW.md` for the publication audit scope.

## Hosting for the required Demo URL

The supplied form requires a reachable Demo URL. A local file or localhost URL will not work for remote judges. Upload the contents of `dist/` to an approved static host: `index.html`, `styles.css`, `engine.js`, `app.js` and `source-bundle.json`. Serve them together at the site root. No backend or database is needed. Set JavaScript MIME type to `text/javascript`, CSS to `text/css` and JSON to `application/json`. Use the version 1.1 static-demo ZIP, which contains those files.

Test the hosted site in a private browser window with no login. Populate the actual URL in the form; leave repository/video blank unless you have real links. Download the portal's verification prompt after the fields are completed and use its exact contract. `evidence/*.json` is project evidence, not that contract.

## License and attribution

MIT; see LICENSE. Built with AI assistance. No third-party packages, remote assets, customer records or copied product branding are bundled.
