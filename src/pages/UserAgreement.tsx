import { Link } from 'react-router-dom'

export function UserAgreement() {
  return (
    <main className="legal-page">
      <article className="legal-article">
        <h1 className="legal-title">User Agreement</h1>
        <p>Novosibirsk — version dated August 17, 2026</p>

        <section>
          <h2>1. General Terms</h2>
          <p>
            1.1. This User Agreement (hereinafter the &quot;Agreement&quot; or
            the &quot;Offer&quot;) is a public offer within the meaning of
            Article 437 of the Civil Code of the Russian Federation and governs
            the relationship between the owner of the Surf application
            (hereinafter the &quot;Provider&quot;) and the user of the
            application (hereinafter the &quot;User&quot;) regarding access to
            the functionality of the Surf application, paid Pro subscription
            services, and the sale of digital goods and services in the
            Marketplace.
          </p>
          <p>
            1.2. The Provider is Pokochuro Kirill Evgenyevich, a self-employed
            person (professional income tax payer), TIN (INN): 540139406679,
            registered address: Novosibirsk, 13/2 Vitaliya Potylitsina St., apt.
            90, email: surf-messanger@mail.ru.
          </p>
          <p>
            1.3. The User is any legally capable individual who has registered
            in the Surf application in accordance with this Agreement. A person
            registering an account on behalf of an organization warrants that
            they have the appropriate authority.
          </p>
          <p>
            1.4. The current version of the Agreement and the Privacy Policy is
            always available in the Application via the{' '}
            <Link to="/agreement">&quot;User Agreement&quot;</Link> and{' '}
            <Link to="/privacy">&quot;Privacy Policy&quot;</Link> links. The
            Agreement applies to all Users regardless of how they access the
            application (web version, mobile version, PWA).
          </p>
        </section>

        <section>
          <h2>2. Terms and Definitions</h2>
          <p>2.1. The following terms are used in this Agreement:</p>
          <ul>
            <li>
              <strong>Application</strong> — the Surf software product
              (messenger), including client and server components, available
              through a web browser and/or as an installable application (PWA);
            </li>
            <li>
              <strong>Account</strong> — the User&apos;s registration data and
              related information that identify the User in the Application;
            </li>
            <li>
              <strong>Content</strong> — any materials posted (transmitted) by
              the User through the Application: message texts, images, audio and
              video files, documents, profile data, poll votes, and other
              materials;
            </li>
            <li>
              <strong>Pro Subscription</strong> — paid access to extended
              Application functionality for a paid period;
            </li>
            <li>
              <strong>Marketplace</strong> — a section of the Application where
              the Provider sells digital goods and services (access, digital
              content, subscriptions, and similar);
            </li>
            <li>
              <strong>AI Assistant (Opus)</strong> — an artificial intelligence
              software module built into the Application that generates
              responses automatically using third-party language models;
            </li>
            <li>
              <strong>Personal Data</strong> — any information relating to a
              directly or indirectly identified individual (Art. 3 of Federal
              Law No. 152-FZ of July 27, 2006 &quot;On Personal Data&quot;);
            </li>
            <li>
              <strong>Parties</strong> — the Provider and the User jointly.
            </li>
          </ul>
          <p>
            2.2. Other terms are interpreted in accordance with the laws of the
            Russian Federation and ordinary usage.
          </p>
        </section>

        <section>
          <h2>3. Acceptance of the Offer</h2>
          <p>
            3.1. Acceptance of this Offer and conclusion of the Agreement within
            the meaning of Article 438 of the Civil Code of the Russian
            Federation is deemed to occur when the User performs any of the
            following actions (whichever occurs first): registering an account
            in the Application; actually using the Application&apos;s
            functionality; paying for a Pro subscription; paying for a
            Marketplace item.
          </p>
          <p>
            3.2. From the moment of acceptance, the User is deemed to have read
            the terms of the Agreement and the Privacy Policy and to have fully
            and unconditionally agreed to them. Acceptance covers all
            appendices and integral parts of the Agreement, including the
            Privacy Policy and the personal data provisions (Section 13).
          </p>
          <p>
            3.3. If the User does not agree with the terms of the Agreement,
            they must refrain from registration, stop using the Application, and
            delete their account.
          </p>
        </section>

        <section>
          <h2>4. Age Restrictions</h2>
          <p>
            4.1. The User confirms that at the time of registration they are at
            least 18 years old, or that they use the Application with the
            consent and under the supervision of a legal representative (parent,
            adoptive parent, or guardian), who bears full responsibility for the
            minor&apos;s actions, including subscription payments.
          </p>
          <p>
            4.2. The Provider is not obliged to verify Users&apos; ages, but may
            request confirmation of age and/or legal representative consent and
            restrict access to the Application if such confirmation is not
            provided.
          </p>
          <p>
            4.3. The Provider is not liable for use of the Application by
            persons who concealed their age or failed to obtain legal
            representative consent.
          </p>
        </section>

        <section>
          <h2>5. Subject of the Agreement</h2>
          <p>
            5.1. The Provider grants the User access to Surf messenger
            functionality, including, without limitation: exchange of text,
            voice, and video messages; transfer of files and images; creation of
            personal and group chats; polls; organizing chats into folders and
            pinning chats; audio calls (individual and group) over the Internet;
            use of the Opus AI assistant, including message translation and web
            search; link previews; message search; push notifications; profile
            privacy settings; and purchase of digital goods and services in the
            Marketplace.
          </p>
          <p>
            5.2. The Pro subscription provides the User with extended features:
            use of Opus in any chat and access to an advanced AI model; Opus
            voice mode; setting a profile avatar and custom chat wallpapers;
            increased limits on folders and pinned chats; an exclusive profile
            badge; call recording with an AI transcript and report; and the AI
            recorder. The current list of Pro features is shown in the
            Application and may change; changes do not worsen the terms of an
            already paid period.
          </p>
          <p>
            5.3. The list and content of functionality may be changed by the
            Provider unilaterally (adding, changing, or discontinuing individual
            features). The Provider may perform maintenance and technical work,
            notifying Users in advance where reasonably possible.
          </p>
          <p>
            5.4. The Application is not a telecommunications operator and does
            not provide telephony services; calls are made exclusively over the
            Internet (VoIP) and depend on the quality of the User&apos;s
            internet connection.
          </p>
          <p>
            5.5. The Provider may set reasonable technical limits (on file size
            and quantity, request frequency, daily limits for certain features)
            to ensure stable service for all Users.
          </p>
        </section>

        <section>
          <h2>6. Rights and Obligations</h2>
          <p>6.1. The User undertakes to:</p>
          <ul>
            <li>
              comply with the laws of the Russian Federation and this Agreement;
            </li>
            <li>
              provide accurate registration data and keep it up to date;
            </li>
            <li>
              keep their password confidential and not share account credentials
              with third parties;
            </li>
            <li>
              comply with the acceptable use rules set out in Section 8 of the
              Agreement;
            </li>
            <li>
              promptly notify the Provider of any unauthorized access to their
              account;
            </li>
            <li>
              not mislead other users or impersonate another person.
            </li>
          </ul>
          <p>6.2. The User has the right to:</p>
          <ul>
            <li>
              use the Application&apos;s functionality in accordance with the
              Agreement;
            </li>
            <li>contact support regarding the Application&apos;s operation;</li>
            <li>
              delete their account and stop using the Application at any time;
            </li>
            <li>
              cancel a Pro subscription and request a refund under the terms of
              Section 12 of the Agreement.
            </li>
          </ul>
          <p>6.3. The Provider undertakes to:</p>
          <ul>
            <li>
              maintain the Application&apos;s operability within reasonable
              limits (except for technical work and force majeure);
            </li>
            <li>
              process the User&apos;s personal data in accordance with Section
              13 of this Agreement;
            </li>
            <li>
              provide access to Pro functionality for the entire paid period;
            </li>
            <li>
              consider User requests and claims within the timeframes set by the
              Agreement.
            </li>
          </ul>
          <p>6.4. The Provider has the right to:</p>
          <ul>
            <li>
              change the Application&apos;s functionality and tariffs (for
              future payments);
            </li>
            <li>
              restrict, suspend, or terminate the User&apos;s access to the
              Application if they violate the Agreement or the laws of the
              Russian Federation;
            </li>
            <li>
              remove Content that violates the Agreement, the laws of the
              Russian Federation, or third-party rights;
            </li>
            <li>
              send the User service notifications related to the
              Application&apos;s operation, account security, and subscription
              status.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Registration and Account</h2>
          <p>
            7.1. To register an account, the User provides a name, email
            address, and password. The User may also optionally provide a phone
            number, about information, and set an avatar. The User warrants the
            accuracy of the data provided and is responsible for its
            inaccuracy.
          </p>
          <p>
            7.2. The User bears full responsibility for all actions performed
            using their account as if they were their own. All actions performed
            after successful authentication are deemed performed by the User
            until proven otherwise.
          </p>
          <p>
            7.3. Transferring, selling, or otherwise alienating an account to
            third parties, as well as using someone else&apos;s accounts, is
            prohibited.
          </p>
          <p>
            7.4. The Provider is not liable for losses arising from the User
            losing control of their account for reasons beyond the
            Provider&apos;s control (lost password, phishing, malware on the
            User&apos;s device, etc.).
          </p>
          <p>
            7.5. Deleting an account results in termination of access to the
            Application and deletion of the User&apos;s data as provided in
            Section 13 of the Agreement.
          </p>
        </section>

        <section>
          <h2>8. Acceptable Use Policy</h2>
          <p>
            8.1. When using the Application, it is prohibited to create,
            transmit, store, or distribute Content that:
          </p>
          <ul>
            <li>
              violates the laws of the Russian Federation, including content
              that calls for, justifies, or promotes terrorist or extremist
              activity, promotes narcotics or suicide, as well as pornographic
              materials involving minors and other sexual materials exploiting
              children;
            </li>
            <li>
              violates third-party intellectual property rights (copyright,
              related rights, patent rights, trademark rights);
            </li>
            <li>
              contains spam, mass mailings, fraudulent schemes, phishing links,
              or malware;
            </li>
            <li>
              contains threats, insults, defamation, incitement of hatred or
              enmity, or discrimination on any ground;
            </li>
            <li>
              discloses third parties&apos; personal data without their consent,
              or information constituting the secrecy of communications or other
              legally protected secrets;
            </li>
            <li>
              is otherwise unlawful or violates third parties&apos; rights and
              legitimate interests.
            </li>
          </ul>
          <p>8.2. When using the Application, it is prohibited to:</p>
          <ul>
            <li>
              attempt to hack, scan for vulnerabilities, deanonymize other
              users, or gain unauthorized access to the Provider&apos;s systems
              or other Users&apos; systems;
            </li>
            <li>
              perform automated data collection (parsing, scraping) or bypass
              technical restrictions and limits;
            </li>
            <li>
              create multiple accounts for abuse, spam, or to circumvent a ban;
            </li>
            <li>
              interfere with the normal operation of the Application, including
              creating excessive load on infrastructure;
            </li>
            <li>
              reverse-engineer, decompile, or modify the Application, except as
              expressly permitted by law;
            </li>
            <li>
              resell access to the Application or Pro subscription to third
              parties.
            </li>
          </ul>
          <p>
            8.3. The User independently and fully bears responsibility for
            Content they create, transmit, and store through the Application,
            including liability to third parties and public authorities. The
            Provider acts as an information intermediary within the meaning of
            Article 1253.1 of the Civil Code of the Russian Federation and does
            not initiate transmission of Users&apos; Content.
          </p>
          <p>
            8.4. The Provider may (but is not obliged to) moderate: remove
            Content without prior notice, restrict account functionality, or
            temporarily or permanently block the User&apos;s access to the
            Application if there are signs of a violation of this Section. In
            cases of serious or repeated violations, blocking applies without
            refund of amounts paid.
          </p>
          <p>
            8.5. Upon a reasoned request from authorized public authorities, the
            Provider may provide information in its possession to the extent and
            in the manner required by the laws of the Russian Federation.
          </p>
          <p>
            8.6. Complaints about other Users&apos; Content and reports of
            violations should be sent to: surf-messanger@mail.ru. The Provider
            reviews complaints within a reasonable time.
          </p>
        </section>

        <section>
          <h2>9. AI Assistant Opus</h2>
          <p>
            9.1. The Opus AI assistant is a software module whose responses are
            generated automatically using third-party language models. Opus is
            not a human, and its responses are not pre-reviewed by the Provider.
          </p>
          <p>
            9.2. AI assistant responses may contain factual errors, inaccuracies,
            and outdated information. Opus responses are not professional
            (medical, legal, financial, tax, or other) advice or
            recommendations. Any decisions made by the User based on AI
            assistant responses are made independently and at the User&apos;s
            own risk; the Provider is not liable for the consequences of such
            decisions.
          </p>
          <p>
            9.3. For the AI assistant to function, the User&apos;s query text,
            conversation context, profile data, and images, documents, and voice
            recordings attached by the User may be transmitted for processing to
            third-party artificial intelligence providers, including foreign
            ones (ProxyAPI service, OpenAI models), which constitutes
            cross-border data transfer. By using the AI assistant (including
            mentioning @opus in chats, message translation, voice mode, web
            search), the User consents to such transfer and processing. Users
            are advised not to enter secrets, special categories of personal
            data, or third parties&apos; personal data without their consent
            into AI assistant queries.
          </p>
          <p>
            9.4. At the User&apos;s command, the AI assistant may perform
            actions on their behalf: send messages in chats, create reminders
            and scheduled messages, and save notes about the User. Such actions
            are deemed the User&apos;s own actions; the User is advised to
            verify the result before significant actions.
          </p>
          <p>
            9.5. When using the web search feature, the User&apos;s search
            queries may be transmitted to third-party search services.
          </p>
          <p>
            9.6. Content generated by the AI assistant may be non-unique;
            exclusive rights in such Content arise neither for the User nor for
            the Provider. The User may freely use generated Content at their own
            risk, independently verifying that it does not infringe third-party
            rights.
          </p>
          <p>
            9.7. The Provider may set and change AI assistant usage limits
            (number of requests, daily limits, availability of specific models
            and features) for different categories of Users.
          </p>
        </section>

        <section>
          <h2>10. Content and Intellectual Property</h2>
          <p>
            10.1. All rights to Content posted by the User remain with the User.
            By posting Content in the Application, the User free of charge
            grants the Provider a simple (non-exclusive) license to store,
            reproduce, transmit, and technically process such Content (including
            compression, format conversion, thumbnail creation, and backups)
            solely to the extent necessary for the operation and improvement of
            the Application, worldwide, for the term of the account and a
            reasonable period of backup retention after its deletion.
          </p>
          <p>
            10.2. The User warrants that they hold all rights to the Content
            posted and that such Content does not violate third parties&apos;
            rights and legitimate interests or legal requirements. The User
            undertakes to independently and at their own expense settle
            third-party claims related to their Content and to reimburse the
            Provider for resulting losses.
          </p>
          <p>
            10.3. Exclusive rights to the Application (software code, design,
            interfaces, logos, trademarks, texts) belong to the Provider.
            Nothing in this Agreement shall be construed as a transfer
            (assignment) to the User of any exclusive rights to the Application.
          </p>
          <p>
            10.4. The User understands and accepts that files uploaded to chats
            are available to participants of the relevant chats, including via
            direct links, and that other users may save, forward Content, and
            take screenshots. The Provider cannot technically prevent such
            actions and is not liable for them.
          </p>
        </section>

        <section>
          <h2>11. Payment and Subscriptions</h2>
          <p>
            11.1. The price of the Pro subscription is set by the Provider and
            is indicated in the Application in Russian rubles, inclusive of
            applicable taxes (the Provider is a professional income tax payer).
            As of the publication of this version, the following tariffs apply:
          </p>
          <ul>
            <li>Month by month (30 calendar days) — ₽349</li>
            <li>Annual subscription (365 calendar days) — ₽1,999</li>
          </ul>
          <p>
            11.2. Payment is processed through the YooKassa payment service (NCO
            YooMoney LLC / ООО «НКО «ЮМани»). Bank card data is entered by the
            User on the payment service&apos;s side and is not transmitted to or
            stored by the Provider.
          </p>
          <p>
            11.3. The Pro subscription does NOT renew automatically: there are
            no automatic (recurring) charges. Subscription renewal is made
            solely by a new payment initiated by the User.
          </p>
          <p>
            11.4. The subscription is considered activated from the moment funds
            are received by the Provider and remains in effect for the paid
            period (30 or 365 calendar days depending on the selected tariff).
            After the paid period ends, access to Pro features ends
            automatically, without any additional charges.
          </p>
          <p>
            11.5. Tariff changes by the Provider apply only to new payments and
            do not affect an already paid subscription period.
          </p>
          <p>
            11.6. Payment confirmation is a fiscal receipt generated by the
            payment service in accordance with Federal Law No. 54-FZ of May 22,
            2003 and sent using the contact details provided by the User at
            payment.
          </p>
          <p>
            11.7. The Pro subscription is tied to the account from which payment
            was made and cannot be transferred to another account.
          </p>
          <p>
            11.8. The Marketplace sells digital goods and services of the
            Provider. The name, description, price, and availability of each
            item are shown on the product page before payment. A contract of
            sale for the relevant digital good is concluded when payment is
            received by the Provider.
          </p>
          <p>
            11.9. Marketplace purchases are paid through the YooKassa payment
            service under clauses 11.2 and 11.6 of this Agreement and do not
            renew automatically. After payment, the User receives the digital
            good through the Application (a one-time page, link or text, and/or
            a chat with the seller). The digital good is deemed provided when
            the User is given access to such content.
          </p>
        </section>

        <section>
          <h2>12. Refund Policy</h2>
          <p>
            12.1. The User may cancel a Pro subscription and request a refund of
            amounts paid within 14 (fourteen) calendar days of payment if Pro
            features were not actually used (according to the Provider&apos;s
            accounting system).
          </p>
          <p>
            12.2. For a refund, the User sends a request to
            surf-messanger@mail.ru from the email address linked to the account.
            The Provider reviews the request within 10 (ten) business days.
            Refunds are made by the same method used for payment, within
            timeframes determined by payment systems and banks.
          </p>
          <p>
            12.3. If the User violates the terms of this Agreement, the Provider
            may cancel the subscription without refund of amounts paid.
          </p>
          <p>
            12.4. The provisions of this Section do not limit the User&apos;s
            rights as a consumer under mandatory consumer protection laws of the
            Russian Federation.
          </p>
          <p>
            12.5. For Marketplace digital goods, a refund is available before
            the good is provided. After the User has been given access to the
            digital content, a refund is not made, except where required by
            mandatory consumer protection law, including if the good is not
            provided or does not match the description. Refund requests are sent
            under clause 12.2.
          </p>
        </section>

        <section>
          <h2>13. Personal Data and Privacy</h2>
          <p>
            13.1. The personal data operator is the Provider (details in Section
            20). Personal data is processed in accordance with Federal Law No.
            152-FZ of July 27, 2006 &quot;On Personal Data&quot; and the Privacy
            Policy, which is an integral part of this Agreement.
          </p>
          <p>13.2. Categories of data processed:</p>
          <ul>
            <li>
              registration data: name, email address, password (stored as a
              one-way hash);
            </li>
            <li>
              profile data: last name, username, phone number, about
              information, avatar (at the User&apos;s option);
            </li>
            <li>
              Content: messages, files, voice and video messages, poll data,
              notes, reminders, and scheduled messages;
            </li>
            <li>
              technical data: IP address, device and browser type, access date
              and time, push subscription identifiers;
            </li>
            <li>
              calls: last visit time; fact, participants, and duration of
              calls; if the User starts a recording — the audio recording,
              transcript, and AI report;
            </li>
            <li>
              AI assistant data: queries, context, attachments, and generated
              responses when using Opus and related features;
            </li>
            <li>
              marketplace data: orders, reviews, marketplace chats, and one-time
              delivery pages;
            </li>
            <li>account recovery data, reports, and complaints;</li>
            <li>
              payment data: payment identifier, amount, and payment status (bank
              card data is processed only by the YooKassa payment service).
            </li>
          </ul>
          <p>
            13.3. Processing purposes: providing access to Application
            functionality and syncing data across devices; authentication and
            account security, including recovery; accepting payments, managing
            subscriptions, and fulfilling Marketplace orders; operating the AI
            assistant, call recordings, and AI reports at the User&apos;s
            request; feedback and technical support; complying with the laws of
            the Russian Federation; improving service quality.
          </p>
          <p>
            13.4. The legal bases for processing are the User&apos;s consent
            (expressed by accepting this Agreement) and performance of a
            contract to which the User is a party (clauses 1 and 5 of Part 1 of
            Article 6 of Federal Law No. 152-FZ).
          </p>
          <p>
            13.5. To operate the Application, data may be transferred to third
            parties strictly to the extent necessary for the relevant function:
            the YooKassa payment service (for payments); artificial intelligence
            providers, including foreign ones — ProxyAPI service, OpenAI models
            (when using AI features, call recording reports, or the AI recorder,
            which constitutes cross-border personal data transfer); browser push
            notification delivery services; search services (when using web
            search); the hosting provider (server hosting). The User&apos;s
            consent covers the listed transfers.
          </p>
          <p>
            13.6. Messages are stored on the Provider&apos;s servers to ensure
            delivery and synchronization across the User&apos;s devices. The
            Provider applies reasonable legal, organizational, and technical
            data protection measures, but does not guarantee absolute security
            of information transmitted over the Internet. The User is aware that
            end-to-end encryption of conversations is not used in the
            Application.
          </p>
          <p>
            13.7. Personal data is stored for the term of the account. After
            account deletion, data is deleted or anonymized within a reasonable
            time, except for information that must be retained by law (payment
            and accounting records) and data in backups until their scheduled
            rotation.
          </p>
          <p>
            13.8. The User may at any time obtain a copy of their processed
            personal data using the &quot;Download my data&quot; feature in the
            Account section of Application settings: the export is generated in
            a format chosen by the User (machine-readable JSON or HTML for
            viewing) and includes account data, messages sent by the User,
            subscription and payment information, Marketplace orders, and other
            data relating to the User. The User may also request access to,
            rectification, blocking, or deletion of their personal data, and
            withdraw consent to processing, by writing to
            surf-messanger@mail.ru. Withdrawal of consent makes further use of
            the Application impossible and results in account deletion. The User
            may also complain about the Provider&apos;s actions to Roskomnadzor
            or to a court. The full Privacy Policy is available in the
            Application via the{' '}
            <Link to="/privacy">&quot;Privacy Policy&quot;</Link> link.
          </p>
          <p>
            13.9. The Application uses cookies and local device storage for
            authentication, saving settings, and correct interface operation.
            Disabling these features in the browser may make certain Application
            functions unavailable.
          </p>
          <p>
            13.10. Consent to personal data processing is effective from
            acceptance of the Agreement until withdrawn by the User.
          </p>
        </section>

        <section>
          <h2>14. Disclaimer</h2>
          <p>
            14.1. The Application is provided &quot;as is.&quot; The Provider
            does not guarantee uninterrupted or error-free operation of the
            Application, that it will meet the User&apos;s expectations, or the
            safety of data in circumstances beyond the Provider&apos;s control.
          </p>
          <p>
            14.2. The Provider is an information intermediary (Art. 1253.1 of
            the Civil Code of the Russian Federation): it does not initiate
            transmission of Users&apos; Content, does not select its recipients,
            and does not alter Content. The Provider is not liable for the
            content of messages and materials transmitted by Users, or for other
            Users&apos; actions.
          </p>
          <p>
            14.3. The Provider is not liable for indirect damages, lost
            profits, loss of data, or damage to business reputation arising from
            use or inability to use the Application.
          </p>
          <p>
            14.4. The Provider&apos;s aggregate liability for any claims related
            to the Agreement is limited to the amount paid by the User to the
            Provider for the 3 (three) months preceding the event giving rise to
            the claim, or, if the Application is used without payment, to 1,000
            (one thousand) rubles. This limitation does not apply where such
            limitation is prohibited by mandatory norms of the laws of the
            Russian Federation.
          </p>
          <p>
            14.5. The Provider is not liable for third-party services (YooKassa
            payment service, AI and search providers, browsers, telecom
            operators), or for the quality of the User&apos;s internet
            connection.
          </p>
          <p>
            14.6. Nothing in this Agreement excludes or limits the
            Provider&apos;s liability that cannot be excluded or limited under
            mandatory norms of the laws of the Russian Federation, including
            consumer protection law.
          </p>
        </section>

        <section>
          <h2>15. Force Majeure</h2>
          <p>
            15.1. The Parties are released from liability for partial or full
            non-performance of obligations under the Agreement if it results
            from force majeure: natural disasters, military actions, acts of
            public authorities, mass network outages, DDoS attacks, prolonged
            third-party service outages, and other circumstances that the
            Parties could not foresee or prevent.
          </p>
          <p>
            15.2. The time for performance is extended proportionally for the
            duration of such circumstances. If force majeure lasts more than 90
            (ninety) calendar days, either Party may terminate the Agreement
            unilaterally out of court.
          </p>
        </section>

        <section>
          <h2>16. Term and Termination</h2>
          <p>
            16.1. The Agreement is concluded for an indefinite term and takes
            effect upon acceptance of the Offer.
          </p>
          <p>
            16.2. The User may terminate the Agreement at any time by deleting
            their account. Any paid but unexpired subscription period is not
            refunded in that case, except as provided in Section 12 of the
            Agreement.
          </p>
          <p>
            16.3. The Provider may terminate the Agreement and block the
            User&apos;s account if the User violates the Agreement or the laws
            of the Russian Federation — without refund of amounts paid.
          </p>
          <p>
            16.4. Termination of the Agreement does not release the Parties from
            obligations that arose before termination, including obligations to
            compensate losses and liability provisions.
          </p>
        </section>

        <section>
          <h2>17. Amendments</h2>
          <p>
            17.1. The Provider may amend this Agreement unilaterally. The new
            version is published in the Application; the Provider may also
            notify Users of changes through the Application interface.
          </p>
          <p>
            17.2. Amendments take effect upon publication of the new version,
            unless another effective date is stated therein.
          </p>
          <p>
            17.3. Continued use of the Application after amendments take effect
            constitutes the User&apos;s agreement to the new version. If the
            User disagrees with the changes, they must stop using the
            Application, delete their account, and may request a refund under
            Section 12 of the Agreement.
          </p>
        </section>

        <section>
          <h2>18. Governing Law and Disputes</h2>
          <p>
            18.1. This Agreement and the relations of the Parties arising from
            it are governed by the laws of the Russian Federation.
          </p>
          <p>
            18.2. Disputes are resolved under a pre-trial claim procedure: the
            User sends a written claim to surf-messanger@mail.ru; the Provider
            reviews it and responds within 30 (thirty) calendar days of receipt.
          </p>
          <p>
            18.3. If a dispute is not resolved under the claim procedure, it
            shall be considered in court at the Provider&apos;s place of
            registration, subject to mandatory consumer protection rules of the
            Russian Federation that grant a consumer User the right to sue under
            alternative venue rules.
          </p>
        </section>

        <section>
          <h2>19. Final Provisions</h2>
          <p>
            19.1. If any provision of the Agreement is held invalid or
            unenforceable, this does not invalidate the remaining provisions or
            the Agreement as a whole.
          </p>
          <p>
            19.2. Section headings are for convenience only and do not affect
            interpretation of the Agreement&apos;s terms.
          </p>
          <p>
            19.3. The Agreement is drawn up in Russian. In the event of
            discrepancies between the Russian version and any translations (if
            any), the Russian version shall prevail.
          </p>
          <p>
            19.4. This Agreement and the documents it references constitute the
            entire agreement between the Parties regarding use of the
            Application.
          </p>
          <p>
            19.5. Matters not regulated by this Agreement are resolved in
            accordance with the laws of the Russian Federation.
          </p>
        </section>

        <section>
          <h2>20. Contact Information</h2>
          <p>
            For all questions related to the Application&apos;s operation, Pro
            subscription payment, Marketplace orders, refunds, or personal data
            processing, contact:
          </p>
          <p>
            Email:{' '}
            <a href="mailto:surf-messanger@mail.ru">surf-messanger@mail.ru</a>
          </p>
          <p>
            Pokochuro Kirill Evgenyevich
            <br />
            Status: self-employed (professional income tax payer)
            <br />
            TIN (INN): 540139406679
            <br />
            Registered address: Novosibirsk, 13/2 Vitaliya Potylitsina St., apt.
            90
          </p>
          <p>Version dated August 17, 2026</p>
        </section>
      </article>
    </main>
  )
}
