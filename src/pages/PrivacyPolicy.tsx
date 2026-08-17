import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <article className="legal-article">
        <h1 className="legal-title">Privacy Policy</h1>
        <p>Novosibirsk — version dated August 17, 2026</p>

        <section>
          <h2>1. General</h2>
          <p>
            1.1. This Privacy Policy (the &quot;Policy&quot;) describes how the
            Surf application (the &quot;Application&quot;) processes personal
            data of its users. The Policy is an integral part of the{' '}
            <Link to="/agreement">User Agreement</Link>.
          </p>
          <p>
            1.2. Personal data is processed in accordance with Federal Law No.
            152-FZ of July 27, 2006 &quot;On Personal Data&quot; and other
            applicable laws of the Russian Federation.
          </p>
          <p>
            1.3. By registering an account, using the Application, paying for a
            Pro subscription, or making a purchase in the Marketplace, the User
            confirms that they have read this Policy and consent to the
            processing of personal data as described herein.
          </p>
        </section>

        <section>
          <h2>2. Operator</h2>
          <p>
            2.1. The personal data operator is Pokochuro Kirill Evgenyevich, a
            self-employed person (professional income tax payer), TIN (INN):
            540139406679, registered address: Novosibirsk, 13/2 Vitaliya
            Potylitsina St., apt. 90, email: surf-messanger@mail.ru (the
            &quot;Operator&quot;).
          </p>
          <p>
            2.2. Questions about personal data should be sent to
            surf-messanger@mail.ru.
          </p>
        </section>

        <section>
          <h2>3. Data processed</h2>
          <p>3.1. The Operator may process the following categories of data:</p>
          <ul>
            <li>
              registration data: name, email address, password (stored only as
              a one-way hash);
            </li>
            <li>
              profile data: last name, username, phone number, about
              information, avatar (provided by the User);
            </li>
            <li>
              content: messages, files, images, voice and video messages, poll
              data, notes, reminders, and scheduled messages;
            </li>
            <li>
              calls: fact, participants, and duration of calls; if the User
              starts a recording — the audio recording, transcript, speaker map,
              and AI report (summary, topics, decisions, action items);
            </li>
            <li>
              AI assistant data: query text, conversation context, attached
              files, and generated responses when using Opus, translation, voice
              mode, or web search;
            </li>
            <li>
              marketplace data: orders, product reviews, marketplace chats, and
              one-time delivery pages issued after purchase;
            </li>
            <li>
              account recovery data: recovery codes and related service
              messages;
            </li>
            <li>
              reports and complaints sent by the User, including attachments;
            </li>
            <li>
              technical data: IP address, device and browser type, access date
              and time, push subscription identifiers, cookies, and local device
              storage;
            </li>
            <li>
              payment data: payment identifier, amount, and status (bank card
              data is processed only by the YooKassa payment service and is not
              received or stored by the Operator).
            </li>
          </ul>
          <p>
            3.2. The Operator does not request special categories of personal
            data (health, biometrics, political opinions, and the like). The
            User should not send such data through the Application without a
            lawful basis.
          </p>
        </section>

        <section>
          <h2>4. Purposes</h2>
          <p>4.1. Data is processed in order to:</p>
          <ul>
            <li>
              provide access to Application functionality and sync data across
              the User&apos;s devices;
            </li>
            <li>
              authenticate the User and keep the account secure, including
              password recovery;
            </li>
            <li>
              accept payments, manage Pro subscriptions, and fulfill Marketplace
              orders;
            </li>
            <li>
              provide the Opus AI assistant, translation, voice mode, web
              search, call recordings, and AI reports at the User&apos;s
              request;
            </li>
            <li>deliver push notifications and service messages;</li>
            <li>handle support requests, reports, and claims;</li>
            <li>comply with the laws of the Russian Federation;</li>
            <li>improve the quality and security of the service.</li>
          </ul>
        </section>

        <section>
          <h2>5. Legal bases</h2>
          <p>
            5.1. Processing is based on the User&apos;s consent (expressed by
            accepting the User Agreement and this Policy) and on performance of
            a contract to which the User is a party (clauses 1 and 5 of Part 1
            of Article 6 of Federal Law No. 152-FZ).
          </p>
          <p>
            5.2. Separate processing (for example, a call recording or an Opus
            query) is performed when the User initiates the relevant feature.
          </p>
        </section>

        <section>
          <h2>6. Recipients and cross-border transfer</h2>
          <p>
            6.1. Data may be transferred to third parties only to the extent
            needed for the relevant function:
          </p>
          <ul>
            <li>
              YooKassa payment service (NCO YooMoney LLC) — to accept payments
              and issue receipts;
            </li>
            <li>
              artificial intelligence providers, including foreign ones
              (ProxyAPI service, OpenAI models) — when the User uses Opus,
              translation, voice mode, web search, call recording reports, or
              the AI recorder;
            </li>
            <li>browser push notification delivery services;</li>
            <li>
              search services — when the User uses web search;
            </li>
            <li>
              the hosting provider — to host the Application&apos;s servers;
            </li>
            <li>
              authorized public authorities — upon a reasoned request required
              by the laws of the Russian Federation.
            </li>
          </ul>
          <p>
            6.2. Transfer to foreign AI providers constitutes cross-border
            personal data transfer. By using the features listed above, the User
            consents to such transfer. Users are advised not to enter secrets,
            special categories of personal data, or third parties&apos; personal
            data without their consent into AI queries or recordings.
          </p>
          <p>
            6.3. Content posted in chats is available to the participants of
            those chats. The Operator cannot prevent other users from saving,
            forwarding, or screenshotting Content.
          </p>
        </section>

        <section>
          <h2>7. Cookies and local storage</h2>
          <p>
            7.1. The Application uses cookies and local device storage for
            authentication, saving settings, and correct interface operation.
            Disabling these features in the browser may make certain functions
            unavailable.
          </p>
        </section>

        <section>
          <h2>8. Storage and security</h2>
          <p>
            8.1. Personal data is stored for the term of the account. After
            account deletion, data is deleted or anonymized within a reasonable
            time, except for information that must be retained by law (payment
            and accounting records) and data in backups until their scheduled
            rotation.
          </p>
          <p>
            8.2. Messages and files are stored on the Operator&apos;s servers so
            they can be delivered and synced across devices. End-to-end
            encryption of conversations is not used.
          </p>
          <p>
            8.3. The Operator applies reasonable legal, organizational, and
            technical protection measures, but does not guarantee absolute
            security of information transmitted over the Internet.
          </p>
          <p>
            8.4. Call recordings, transcripts, and AI reports are stored in the
            account of the User who started the recording and may be visible to
            participants of the relevant chat if a recording card is posted
            there.
          </p>
        </section>

        <section>
          <h2>9. User rights</h2>
          <p>
            9.1. The User may at any time obtain a copy of their processed
            personal data using the &quot;Download my data&quot; feature in the
            Account section of Application settings. The export is generated in
            a format chosen by the User (machine-readable JSON or HTML) and
            includes account data, messages sent by the User, subscription and
            payment information, Marketplace orders, and other data relating to
            the User. Messages written by other people are not included.
          </p>
          <p>
            9.2. The User may request access to, rectification, blocking, or
            deletion of their personal data, and withdraw consent to processing,
            by writing to surf-messanger@mail.ru from the email address linked
            to the account. Withdrawal of consent makes further use of the
            Application impossible and results in account deletion.
          </p>
          <p>
            9.3. The User may complain about the Operator&apos;s actions to
            Roskomnadzor or to a court.
          </p>
        </section>

        <section>
          <h2>10. Changes</h2>
          <p>
            10.1. The Operator may amend this Policy. The new version is
            published in the Application. Continued use of the Application after
            publication constitutes agreement to the new version. If the User
            disagrees, they must stop using the Application and may delete their
            account.
          </p>
        </section>

        <section>
          <h2>11. Contacts</h2>
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
