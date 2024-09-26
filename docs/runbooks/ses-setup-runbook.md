# SES Setup Runbook

This runbook outlines the steps to set up Amazon Simple Email Service (SES) for the WispWire project.

## Prerequisites

- AWS account with appropriate permissions
- Access to AWS Management Console
- Domain name you want to use for sending/receiving emails
- CloudFormation stack for the project already deployed

## Steps

### 1. Register a Domain in SES

1. Sign in to the AWS Management Console and open the Amazon SES console.
2. In the navigation pane, choose "Verified identities".
3. Choose "Create identity".
4. Select "Domain" as the identity type.
5. Enter your domain name (e.g., wispwire.com).
6. Choose "Create identity".
7. Follow the instructions to add the provided DNS records to your domain:
   - Add the TXT record for domain verification
   - Add the CNAME records for DKIM
8. Wait for the domain to be verified (this can take up to 72 hours, but often completes within an hour).

### 2. Add MX Record in Route 53

1. Open the Amazon Route 53 console.
2. In the left navigation pane, choose "Hosted zones".
3. Select the hosted zone for your domain (e.g., wispwire.com).
4. Choose "Create record".
5. Set the following values:
   - Record name: Leave blank (or use @ to represent the root domain)
   - Record type: MX
   - Value: 10 inbound-smtp.ap-southeast-1.amazonaws.com
   - TTL: 300 (or your preferred value)
6. Choose "Create records".

### 3. Activate the Receipt Rule in SES

1. In the SES console, navigate to "Email receiving" in the left sidebar.
2. Under "Rule sets", you should see a rule set named "WispWireRuleSet-[Env]" (where [Env] is your deployment environment, e.g., dev, staging, or prod).
3. Select this rule set.
4. If the rule set is not active, choose "Set as active".
5. You should see a rule named "CatchAllRule-[Env]" in this rule set. This rule was created by the CloudFormation stack.
6. Ensure that this rule is enabled. If not, select the rule and choose "Enable".

### Post-Setup Verification

1. Send a test email to an address at your verified domain (e.g., test@wispwire.com).
2. Check the S3 bucket (named "wispwire-emails-[Env]") to verify that the email was received and stored.

## Troubleshooting

- If domain verification is taking too long, double-check that all DNS records are correctly added.
- If emails aren't being received, ensure that your domain's MX records are correctly pointing to SES.
- Check SES console for any error messages or bounces.
- Verify that the CloudFormation stack deployed successfully and created all necessary resources.

## Additional Resources

- [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/Welcome.html)
- [SES Domain Verification Guide](https://docs.aws.amazon.com/ses/latest/dg/verify-domain-procedure.html)
- [SES Email Receiving Setup](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-setting-up.html)

Remember to keep this runbook updated as processes change or new steps are added to the setup procedure.