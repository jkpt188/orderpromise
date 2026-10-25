# Public release review

The public release is a separate, allowlisted copy of the prototype. Previous Git history, local hosting configuration, deployment troubleshooting notes, conversation screenshots, credentials and personal filesystem paths are excluded.

## Content and data

- Application code and documentation were created for this prototype during development. No employer repository, production export, internal document or customer database was imported.
- Order identifiers, customer labels, amounts, events and recoveries are synthetic demonstration fixtures. Labels are not claims of a relationship with actual organizations.
- Research references link to publicly accessible Oracle documentation. Source summaries do not imply Oracle sponsorship, affiliation or endorsement.
- No credentials, access tokens, personal contact details, employee names, internal company endpoints or actual customer records were identified in the allowlisted release files.
- There are no runtime dependencies, analytics, trackers, outbound API requests or database connections. Public-document links open only when clicked. Optional server listens on loopback and exposes an explicit asset allowlist.
- Input strings are escaped before HTML display; the app does not execute injected JSON as code. Recovery changes browser memory only.

## Claims and limitations

AI-assisted development is disclosed. Runtime explanations are deterministic. No live AI, Oracle/OIC integration, business savings, customer traction, production-grade recovery guarantee or hackathon score is claimed. The prototype and its tests do not establish production security or business correctness for every real workflow.

## Publication implications

Publishing makes the source and synthetic examples visible to anyone. The MIT license permits reuse and modification. The review addresses identifiable content and code behavior; it cannot determine employer ownership, employment-contract obligations or permission under policies not provided for review. No company endorsement is claimed.

Run `node audit-public.cjs` before publication. Its SHA-256 manifest records the scanned files. This pattern-based and source review is useful evidence, not a guarantee of zero risk or a legal opinion.
