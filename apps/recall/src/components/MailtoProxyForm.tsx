/**
 * Static alternative to email-based proxy form - uses mailto: links
 * for manual proxy collection when server-side email is not available.
 * 
 * Use this when deploying as a static site without Resend API.
 */

// TODO: Update for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const RECALL_EMAIL = "recall@{{DOMAIN}}";
const STATE = "{{STATE}}";

export default function MailtoProxyForm() {
  const subject = encodeURIComponent(`Proxy Authorization - ${COMMUNITY_NAME} Recall`);
  
  const body = encodeURIComponent(`PROXY AUTHORIZATION FORM
${COMMUNITY_NAME} Board Recall Election

I, the undersigned homeowner, hereby authorize the recall organizers to vote on my behalf at the ${COMMUNITY_NAME} Board recall election.

HOMEOWNER INFORMATION:
Full Name: [YOUR NAME]
Property Address: [YOUR PROPERTY ADDRESS]
Email: [YOUR EMAIL]
Date: ${new Date().toLocaleDateString()}

SCOPE OF AUTHORIZATION:
This proxy authorization is limited to voting on board recall matters only.

LEGAL NOTICE:
This proxy authorization remains valid for up to eleven (11) months from the date of submission, unless revoked earlier. You may revoke this proxy at any time by sending an email to ${RECALL_EMAIL}.

By sending this email, I confirm that:
1. I am the owner of the property listed above
2. I authorize the recall organizers to vote on my behalf
3. I understand I may revoke this authorization at any time

---
Please fill in your information above and send this email to complete your proxy authorization.
`);

  const mailtoLink = `mailto:${RECALL_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
      <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
        Submit Your Proxy Authorization
      </h3>
      
      <p className="text-stone-600 dark:text-stone-400 mb-6">
        Click the button below to open your email client with a pre-filled proxy authorization form. 
        Fill in your information and send the email to authorize your proxy vote.
      </p>

      <div className="space-y-4">
        <a
          href={mailtoLink}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          Open Email with Proxy Form
        </a>

        <div className="text-center text-sm text-stone-500 dark:text-stone-400">
          or email directly to: <a href={`mailto:${RECALL_EMAIL}`} className="text-primary-600 dark:text-primary-400 hover:underline">{RECALL_EMAIL}</a>
        </div>
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
          Legal Notice ({STATE} Law)
        </h4>
        <p className="text-sm text-amber-700 dark:text-amber-300">
          Your proxy authorization remains valid for up to eleven (11) months from the date of submission, 
          unless revoked earlier. You may revoke your proxy at any time by emailing {RECALL_EMAIL}.
        </p>
      </div>
    </div>
  );
}

