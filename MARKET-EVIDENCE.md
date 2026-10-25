# Customer, demand and competitive evidence

Research checked 25 October 2026. These sources substantiate the workflow and existing alternatives; they do not establish customer willingness to buy OrderPromise.

## Target segment

First user: order-operations analyst at a distributor that reconciles an ERP order with an external warehouse and separate billing records. Buyer hypothesis: head of order operations. Technical evaluator: integration/platform lead. Start where systems have different owners and no existing consolidated evidence workflow adequately resolves the issue.

## Primary sources

1. [Oracle — Monitor Order Fulfillment](https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/26a/fauom/monitor-order-fulfillment.html). Describes monitoring orders, fulfillment lines, exceptions and orchestration processes. Supports that fulfillment investigation is an explicit operational activity.
2. [Oracle — Order Manager job role](https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/26b/farom/Order_Manager_job_roles.html). Defines orchestration order monitoring and exception-management responsibilities. Supports a concrete user role.
3. [Oracle — Order Exception Assistant enhancements](https://docs.oracle.com/en/cloud/saas/readiness/scm/26c/order26c/26C-order-mgmt-wn-f49710.htm). Documents guided investigation and recovery for selected order exceptions. This is a strong existing alternative, not evidence of OrderPromise uniqueness.
4. [Oracle — Track Integration Instances](https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/track-integration-instances.html). Documents correlation through business identifiers and instance status. Confirms tracking itself is established functionality and should not be claimed as our invention.

## Before and after hypothesis

Today: analyst locates an order, checks status and source records, identifies missing or contradictory steps, asks the relevant owner, and evaluates whether a retry is appropriate. Existing tools can already do parts of this, including Oracle's order-management workbench and assistant.

Proposed change: a small shared evidence workbench for mixed-system journeys, with explicit freshness gating and repeatable recovery verification. The prototype demonstrates the interaction using synthetic records. Real reductions in manual work require observation and measurement.

## Why use or pay?

Hypothesis: a team may pay if it spends enough time reconciling exceptions, existing tools leave a cross-system gap, and verified savings exceed deployment and operational costs. No quantified incident frequency, financial loss, customer count or willingness-to-pay evidence has been collected. No market-size figure is invented.

Estimate opportunity bottom-up after discovery: number of qualified organizations × affected teams per organization × validated annual willingness to pay. Analyst time benefit: eligible cases/month × observed minutes saved/case ÷ 60 × actual loaded hourly cost. These formulas are measurement plans, not results.

## Differentiation and defensibility

| Alternative | Existing strength | OrderPromise hypothesis to validate |
| --- | --- | --- |
| Oracle Order Management / Exception Assistant | Fulfillment monitoring and guided recovery | Lightweight investigation across mixed systems when not all evidence sits in Oracle |
| OIC instance tracking | Business identifiers, flow status and troubleshooting | Outcome rules combining source business records with freshness and recovery evidence |
| Manual reconciliation | Flexible human judgment | Less repetitive record collection and fewer unexamined retries |

Rules, dashboards and prompt wording are easy to copy. Potential future defensibility is reliable source adapters, versioned customer-specific rules and a permissioned corpus of validated recovery outcomes. These assets do not exist yet. Do not claim patents, proprietary data, autonomous agents or competitive superiority.

## Next proof and stop conditions

- Interview 5 analysts and 2 managers. Capture role, example, source systems, steps, duration, consequence, existing tool and remaining gap.
- Proceed to a read-only pilot only if multiple participants describe a recurring problem not adequately solved by current tools.
- Label normal and exceptional journeys independently. Measure alert precision, missed exceptions, source freshness and investigation time versus baseline.
- Proposed targets: >=30% lower median investigation time and >=90% alert precision on the defined pilot set. These are unachieved design targets.
- Controlled recovery should create no duplicate actions in replay/failure tests before any production execution is considered.
- Stop or change the idea if there is no recurring evidence gap, setup cost exceeds benefit, alerts overburden reviewers, or existing tools solve the problem sufficiently.
