# Case study

## Challenge

The business needed a lightweight CRM and invoicing workflow without purchasing and maintaining a separate database platform. Customer data, sales progress, billing, access, and follow-up activity had to remain understandable to non-technical operators.

## Solution

I designed a Google Workspace application backed by a structured Google Sheet and presented through a responsive Apps Script web interface. It combines customer records, a visual sales pipeline, invoice management, role-based access, and an audit history in one workflow.

## Key automation

When an opportunity reaches Won, the application creates one linked draft invoice automatically. Customer, recipient, deal value, currency, tax, issue date, payment terms, due date, and the initial line item are populated from existing records and business settings.

The operation is duplicate-safe. Reopening or saving the record does not produce additional invoices. Sending remains a separate confirmation step that displays the exact recipient before generating and emailing the PDF.

## Security and reliability

- Unassigned accounts receive no CRM data.
- Server-side permission checks protect every operation.
- Application roles correspond to appropriate document access.
- Financial arithmetic avoids binary floating-point accumulation.
- Shared write operations are guarded against conflicts.
- Activity history records important business changes.
- Mock data supports safe demonstrations without exposing real customers.

## Result

The finished proof of concept demonstrates a complete path from customer and opportunity management to invoice delivery and payment tracking using familiar Google Workspace tools. It includes responsive UI behavior, automated tests, deployment documentation, and a controlled release workflow.

## My role

Full-stack Google Apps Script development, product workflow design, data modeling, interface design, authorization, automation, testing, and technical documentation.

