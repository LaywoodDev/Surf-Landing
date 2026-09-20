import type { DocChapter } from './docs'

export const docsChaptersEn: DocChapter[] = [
  {
    id: 'about',
    group: 'start',
    title: 'Meet Surf',
    summary: 'What Surf is, where it works, and what you can do with it.',
    details: [
      {
        title: 'What is Surf?',
        paragraphs: [
          'Surf is a web messenger for private and group conversations with a built-in AI assistant called Opus. It works in a browser on desktop and mobile devices.',
          'Surf brings messages, audio calls, voice and video messages, files, chat organization, and AI tools together in one interface.',
        ],
      },
      {
        title: 'Core features',
        bullets: [
          'Private and group chats with real-time message delivery.',
          'Public and private channels with subscribers, comments, and analytics.',
          'Voice and video messages, photos, documents, and other attachments.',
          'One-to-one and group audio calls.',
          'Folders, pinned chats, search, polls, and scheduled messages.',
          'Opus for text, files, reminders, and actions you explicitly allow.',
          'Native bots through Studio (@BotStudio) and the Surf Bot API.',
          'A responsive mobile interface and installable PWA.',
        ],
      },
    ],
  },
  {
    id: 'getting-started',
    group: 'start',
    title: 'Getting started',
    summary: 'Create an account, sign in, restore access, and install Surf as an app.',
    purpose: 'Set up your account, sign in securely, and optionally install Surf on your device.',
    desktop: [
      'Open Surf in a supported browser and select “Sign up”.',
      'Enter your account details and complete the short onboarding.',
      'To return later, select “Log in” and enter your account details.',
      'If you forgot your password, start account recovery, enter your email or username, submit the six-digit code, and create a new password.',
      'To install the PWA, use the install control in the address bar or browser menu and confirm.',
    ],
    mobile: [
      'Open Surf in your mobile browser and choose sign-up or login.',
      'Complete onboarding to learn about chats, groups, voice messages, gestures, Opus, and appearance settings.',
      'Open the browser menu and choose “Add to Home Screen” or the available install option.',
      'Launch Surf from the new icon like a standalone app.',
    ],
    details: [
      {
        title: 'Account recovery',
        paragraphs: ['Surf sends a six-digit recovery code after you enter your email or username. Once the code is verified, you can set a new password.'],
      },
    ],
    problems: [
      { issue: 'The recovery code did not arrive', solution: 'Check the email address, look in spam, and request another code. Contact support if the message still does not arrive.' },
      { issue: 'The browser does not offer installation', solution: 'Update the browser, make sure Surf is opened over HTTPS, and check the browser menu for an install option.' },
    ],
  },
  {
    id: 'profile',
    group: 'start',
    title: 'Profile and account',
    summary: 'Manage your personal details, photo, username, and active session.',
    purpose: 'Control how other Surf users recognize and find you.',
    desktop: [
      'Open your profile from the main Surf interface.',
      'Open profile editing and update the fields you need.',
      'Upload a profile photo and save your changes.',
      'To end the session, select “Log out” in account settings.',
    ],
    mobile: [
      'Open the profile tab in the bottom navigation.',
      'Open the full-screen profile editor.',
      'Update your details or photo and save.',
    ],
    details: [
      { title: 'Profile fields', bullets: ['First and last name.', 'A unique @username.', 'Email and phone number.', 'An “About” description.', 'Profile photo.'] },
      { title: 'Profile badges', paragraphs: ['A Surf Pro badge, a gold mark, or a service or custom role badge may appear next to a name. A gold mark is managed by Surf and does not automatically confirm a person’s identity.'] },
    ],
    problems: [{ issue: 'Changes are not saved', solution: 'Check required fields, username availability, and your connection, then try saving again.' }],
  },
  {
    id: 'personal-chats',
    group: 'communication',
    title: 'Private chats',
    summary: 'Find another person, start a conversation, and manage chat history.',
    purpose: 'Talk one-to-one and keep related messages and shared content together.',
    desktop: [
      'Search by name, surname, username, or email.',
      'Open the user profile and start a chat.',
      'Write a message or attach content, then send it.',
      'Open a message context menu to see available actions.',
      'Open chat details to search messages, view shared media and pinned messages, or clear history.',
    ],
    mobile: [
      'Open the chats tab and search for a user.',
      'Tap a result to open a private chat.',
      'Long-press a message for actions or swipe it to reply.',
      'Open the other person’s profile to view shared media and chat settings.',
    ],
    details: [
      { title: 'Conversation status', bullets: ['Sent, delivered, and read states.', 'Typing indicator.', 'Unread message count.', 'Jumping to a replied-to or pinned message.'] },
      { title: 'Chat history', paragraphs: ['You can clear history only for yourself or, when the action is available, for everyone. Removing history for yourself does not change the other participant’s copy.'] },
    ],
    problems: [
      { issue: 'A message is not delivered', solution: 'Check your connection and message status, and make sure the contact is not blocked. Try again when the connection returns.' },
      { issue: 'A user cannot be found', solution: 'Check the name or @username. Some profile details may be hidden by privacy settings.' },
    ],
  },
  {
    id: 'messages',
    group: 'communication',
    title: 'Messages and attachments',
    summary: 'Text formatting, replies, forwarding, media, and documents.',
    purpose: 'Share text and files in a useful format and manage messages you have already sent.',
    desktop: [
      'Write in the message field. Use supported Markdown when you need formatted text.',
      'Attach a file with the attachment control or drag it into the chat window.',
      'Review the preview and send the message.',
      'Use the message context menu to reply, forward, copy, translate, pin, edit, or delete.',
    ],
    mobile: [
      'Write a message or open the attachment panel.',
      'Choose a photo, video, audio file, or document and add a caption if needed.',
      'Swipe to reply and long-press for other actions.',
      'Tap a photo or video for full-screen viewing and swipe between items.',
    ],
    details: [
      { title: 'Formatting', bullets: ['Headings, lists, and quotes.', 'Bold, italic, and strikethrough text.', 'Inline code and code blocks.', 'Regular links and Markdown links.', 'Clickable @username mentions.'] },
      { title: 'Supported content', bullets: ['Photos and multi-item galleries.', 'Videos and video messages.', 'Audio and voice messages.', 'PDF, DOC, DOCX, TXT, and Markdown files.', 'Other documents.'] },
    ],
    problems: [
      { issue: 'A file cannot be attached', solution: 'Check browser file permissions, the file format, and your connection. Try selecting it from the attachment panel.' },
      { issue: 'A link preview does not appear', solution: 'Make sure the URL is complete and publicly reachable. You can still send the message without a preview.' },
    ],
  },
  {
    id: 'voice-messages',
    group: 'communication',
    title: 'Voice messages',
    summary: 'Record, preview, caption, play, seek, and transcribe voice messages.',
    purpose: 'Send speech quickly when typing is inconvenient, with an optional text caption.',
    desktop: [
      'Allow Surf to use your microphone.',
      'Start recording from the message field and speak.',
      'Stop and preview the recording, then add a caption if needed.',
      'Send the recording or cancel and record it again.',
    ],
    mobile: [
      'Open a chat and start a voice recording.',
      'Allow microphone access when the browser asks.',
      'Preview the recording, add a caption, and send.',
      'Use the playback timeline to seek through a received message.',
    ],
    details: [{ title: 'Playback and transcription', paragraphs: ['Voice messages include a waveform and playback controls. Surf Pro users can also transcribe speech into text.'] }],
    problems: [
      { issue: 'Recording does not start', solution: 'Allow microphone access in site settings and make sure another app is not using the selected input device.' },
      { issue: 'A transcription does not appear', solution: 'Check that Surf Pro is active and that the recording is clear enough to process.' },
    ],
  },
  {
    id: 'groups',
    group: 'communication',
    title: 'Groups, roles, and permissions',
    summary: 'Create groups, invite members, assign roles, and control permissions.',
    purpose: 'Organize a shared conversation and decide what each participant can do.',
    desktop: [
      'Start creating a group, choose members, enter a name, and add an avatar.',
      'Open group details to add or remove members and update its appearance.',
      'Assign administrators and enable only the permissions they need.',
      'Configure the default permissions for regular members.',
      'Create an invitation link when someone needs to join from outside the group.',
    ],
    mobile: [
      'Open chat creation and choose a group.',
      'Add members, a name, and an avatar on the setup screens.',
      'Tap the group header to manage participants, invitation links, and permissions.',
      'Use the mobile action panel to change a participant’s role.',
    ],
    details: [
      { title: 'Roles', bullets: ['The owner manages the group, administrators, and ownership transfer.', 'Administrators receive selected permissions and may have a custom role title.', 'Members act within the group’s default permissions.'] },
      { title: 'Member permissions', bullets: ['Messages, media, voice messages, files, and links.', 'Creating polls.', 'Adding participants.', 'Changing group information.'] },
      { title: 'Administrator permissions', bullets: ['Changing information and group-wide permissions.', 'Deleting messages.', 'Removing and blocking members.', 'Inviting users and managing calls.', 'Assigning other administrators.'] },
    ],
    problems: [{ issue: 'An action is unavailable', solution: 'Check your role and permissions. Ask the owner or an administrator with the required access to make the change.' }],
  },
  {
    id: 'channels',
    group: 'communication',
    title: 'Channels and posts',
    summary: 'Public and private channels for publishing, subscriptions, comments, and analytics.',
    access: 'Free + Pro',
    purpose: 'Run a one-way feed for an audience or create a private space that is available through an invite link.',
    desktop: [
      'Open chat creation and choose “Channel”.',
      'Enter a name, description, and optionally upload an avatar.',
      'Choose a public channel with a username or a private channel that requires an invite link.',
      'Publish text, images, video, audio, documents, and polls as the channel.',
      'Open channel settings to manage comments, post signatures, and the invite link.',
    ],
    mobile: [
      'Choose “Channel” on the chat creation screen.',
      'Enter a name and description, then choose public or private access.',
      'Publish content from the channel composer.',
      'Open the channel header to manage subscribers, comments, and settings.',
    ],
    details: [
      { title: 'Public and private channels', paragraphs: ['A public channel appears in username search, and anyone can open its profile and subscribe. A private channel is not listed publicly; people join through a valid invite link.'] },
      { title: 'Comments', bullets: ['Allow comments for every subscriber.', 'Limit comments to administrators.', 'Turn comments off completely.', 'Comments support replies and attachments.'] },
      { title: 'Channel management', bullets: ['The owner and administrators publish and moderate messages.', 'Post signatures can show the author’s name.', 'Analytics cover subscribers, posts, media, and comments.', 'Content copying and downloading can be disabled.'] },
    ],
    limits: ['A public channel needs a unique username.', 'Subscribers cannot see the full subscriber list.', 'Detailed analytics are available with Surf Pro.', 'Invite links expire after a limited period.'],
    problems: [{ issue: 'A channel does not appear in search', solution: 'Check that it is public and that its username was saved correctly. Private channels are not listed in public search.' }],
  },
  {
    id: 'polls',
    group: 'communication',
    title: 'Polls',
    summary: 'Create and vote in polls in private and group chats.',
    purpose: 'Collect a decision from conversation participants without leaving the chat.',
    desktop: ['Open the additional actions panel and choose poll creation.', 'Enter a question and add 2–10 options.', 'Publish the poll. Vote counts and percentages appear after voting.', 'Choose another option to change your vote. Poll creators can delete their polls.'],
    mobile: ['Open the attachments or actions panel and choose a poll.', 'Enter the question and answer options.', 'Publish it and tap an option to vote.'],
    problems: [{ issue: 'A poll cannot be created in a group', solution: 'Check whether members are allowed to create polls or ask an administrator to enable the permission.' }],
  },
  {
    id: 'calls',
    group: 'communication',
    title: 'Audio calls',
    summary: 'One-to-one and group calls, microphone controls, volume, and call events.',
    purpose: 'Talk by voice with one person or a group without leaving Surf.',
    desktop: ['Open a private or group chat and start an audio call.', 'Allow the browser to use your microphone.', 'Mute or unmute yourself and adjust volume during the call.', 'Select an output device if your browser supports it.', 'End the call from the floating call panel.'],
    mobile: ['Open a chat and start an audio call.', 'Accept or decline an incoming call from the call screen.', 'Use the mobile controls for your microphone and ending the call.', 'View participants during a group call.'],
    details: [{ title: 'Call data', paragraphs: ['By default, Surf does not save call audio. A Surf Pro user can manually start recording during a call; only the part of the conversation after Record is selected is captured.'] }],
    problems: [
      { issue: 'Other people cannot hear you', solution: 'Make sure the microphone is not muted, the correct input is selected, and the browser has permission to use it.' },
      { issue: 'You cannot hear the call', solution: 'Check system and call volume, the output device, and browser settings.' },
    ],
  },
  {
    id: 'call-recording',
    group: 'communication',
    title: 'Call recording and AI reports',
    summary: 'Record audio calls and automatically receive a transcript and structured report from Opus.',
    access: 'Pro',
    purpose: 'Save an important part of a conversation, review the outcome quickly, and ask Opus follow-up questions about it.',
    desktop: ['During an active call, open the ••• menu.', 'Select Record. A REC indicator and recording duration appear on screen.', 'Select Stop recording to finish. Recording also stops when you leave the call or reach the limit.', 'Wait for the recording and report card to appear in your private chat with Opus.'],
    mobile: ['During an active call, open the ••• menu.', 'Select Record and make sure the REC indicator and duration appear.', 'Select Stop recording or leave the call to finish.', 'Open your private Opus chat. The completed recording and report appear there automatically.'],
    details: [
      { title: 'Processing during the call', paragraphs: ['Audio is uploaded and transcribed in chunks as the conversation continues instead of being processed only after recording ends. Once recording stops, Opus assembles the final audio file and produces the report.', 'If the connection is temporarily lost, audio chunks are kept on the device and uploaded after the network is restored.'] },
      { title: 'What the report contains', bullets: ['Call title and date.', 'Recording duration.', 'An audio player with seeking and playback speed controls.', 'A short summary and the main topics.', 'Decisions made.', 'Tasks, owners, and deadlines when mentioned.', 'Open questions.', 'An expandable transcript.', 'An option to download the audio recording.'] },
      { title: 'Card language', paragraphs: ['The recording card interface uses the language selected by the user.'] },
      { title: 'Questions about the conversation', paragraphs: ['After the report appears, send Opus a regular message such as “What did we agree on?”, “Which tasks were assigned to me?”, “What was said about deadlines?”, or “Which questions remain open?”. Opus uses the transcript and report as context; no separate discussion mode or extra button is required.'] },
      { title: 'Speaker identification', paragraphs: ['Opus analyzes the participants’ activity timeline and tries to associate statements with their names. A name is shown only when confidence is high enough. Otherwise, neutral labels such as “Speaker 1” and “Speaker 2” are used.'] },
      { title: 'Privacy', paragraphs: ['The recording, audio file, report, and recording API are available only to the user who started the recording. Audio is kept in private storage. Other participants do not receive a system notification when recording starts.', 'Recordings are not deleted automatically, but they are deleted with the user’s account.'] },
      { title: 'Consent and local law', paragraphs: ['You are responsible for complying with local call-recording laws and obtaining participant consent when required.'] },
    ],
    limits: ['This feature is available only to Surf Pro users.', 'Only the part of the conversation after Record is selected is captured.', 'A single recording can be up to 60 minutes long.', 'Recording stops when you select Stop recording, leave the call, or reach the limit.'],
    problems: [
      { issue: 'The report does not appear immediately', solution: 'Allow Opus time to assemble the final audio file and generate the report. If the connection was interrupted during the call, processing continues after the locally saved chunks are uploaded.' },
      { issue: 'Participant names are missing from the transcript', solution: 'Opus shows a name only when it can match speech with sufficient confidence. Neutral speaker labels are expected in other cases.' },
    ],
  },
  {
    id: 'ai-recorder',
    group: 'features',
    title: 'AI Recorder',
    summary: 'Record a conversation outside a call and receive a transcript, summary, and Opus follow-up chat.',
    access: 'Pro',
    purpose: 'Capture a meeting or conversation outside Surf and get a structured result in your Opus chat.',
    desktop: [
      'Open AI Recorder from the Opus interface.',
      'Allow microphone access and select Record.',
      'Stop recording when the conversation ends.',
      'Wait for the audio upload, transcript, and report.',
      'Ask Opus questions about the recording in regular messages.',
    ],
    mobile: [
      'Open the Opus tab and choose AI Recorder.',
      'Allow microphone access, start recording, and stop when finished.',
      'Open the completed recording card in your Opus chat.',
      'Ask questions about the transcript and report.',
    ],
    details: [
      { title: 'What the recording produces', bullets: ['An audio file with playback and seeking.', 'A speech transcript.', 'A summary and the main topics.', 'Decisions, tasks, owners, and deadlines when mentioned.', 'Open questions.', 'A conversation with Opus about the recording.'] },
      { title: 'Storage and privacy', paragraphs: ['The recording, audio, transcript, and report are available only to the user who started the recording. Make sure you have the required participant consent and legal permission before recording.'] },
    ],
    limits: ['This feature is available with Surf Pro.', 'Recording requires browser microphone permission.', 'Transcript accuracy depends on audio quality and background noise.'],
    problems: [{ issue: 'Recording does not start', solution: 'Check microphone permission, the selected input device, and that Surf Pro is active.' }],
  },
  {
    id: 'folders',
    group: 'features',
    title: 'Folders and chat organization',
    summary: 'Folder filters, pinned chats, Saved Messages, and per-chat notifications.',
    purpose: 'Group conversations by topic and keep important chats easy to reach.',
    desktop: ['Open folder settings and create a folder.', 'Give it a name and add chats.', 'Switch between folders as filters.', 'Use a chat menu to add it to more folders, pin it, or mute notifications.'],
    mobile: ['Open chat organization settings.', 'Create or rename a folder and choose its chats.', 'Switch folders from the mobile interface.', 'Long-press a chat to pin it or manage notifications.'],
    details: [{ title: 'Saved Messages', paragraphs: ['Saved Messages is your private space for notes, files, links, and forwarded messages. You can show or hide it in interface settings.'] }],
    problems: [{ issue: 'A folder or pinned chat cannot be added', solution: 'Check your current limit. Remove an unused folder or pin, or review your Surf Pro status.' }],
  },
  {
    id: 'scheduled',
    group: 'features',
    title: 'Scheduled messages',
    summary: 'Send a prepared message automatically at a chosen date and time.',
    purpose: 'Prepare a message in advance and have Surf send it at the right moment.',
    desktop: ['Write a message.', 'Right-click the send button.', 'Choose a date and time and confirm.', 'Open scheduled messages to edit the text or time, or delete the message.'],
    mobile: ['Write a message.', 'Press and hold the send button.', 'Choose the date and time and confirm.', 'Open scheduled messages to edit or remove it before delivery.'],
    problems: [{ issue: 'Scheduling does not open', solution: 'Use a right-click on desktop or a long press on mobile instead of a regular click.' }],
  },
  {
    id: 'search-translation',
    group: 'features',
    title: 'Search and translation',
    summary: 'Find users and messages, jump to results, and translate text.',
    purpose: 'Find a person or part of a conversation quickly and read messages in your preferred language.',
    desktop: ['Use global search for users and contacts.', 'Open search from chat details and enter a message query.', 'Select a result to jump to the original message.', 'Open a text message context menu and choose translation.'],
    mobile: ['Open search from the relevant screen or chat profile.', 'Enter a query and tap a result.', 'Long-press a message and start translation.', 'Repeat the action to hide the translation.'],
    details: [{ title: 'Translation language', paragraphs: ['Choose your main translation language separately from the interface language. Available choices include Russian, English, Spanish, French, German, Chinese, Japanese, Korean, Italian, Portuguese, Turkish, Arabic, and Hindi.'] }],
    problems: [{ issue: 'Search returns no results', solution: 'Shorten the query, check the spelling, and make sure the content is in the chat you are searching.' }],
  },
  {
    id: 'contacts',
    group: 'features',
    title: 'Contacts and blocking',
    summary: 'Maintain a contact list and limit unwanted communication.',
    purpose: 'Find people you know quickly and control who can contact you.',
    desktop: ['Open a user profile and add the person to contacts.', 'Search contacts when creating a group or chat.', 'Use profile actions to block the user.', 'Open the profile again to unblock them.'],
    mobile: ['Open a profile from a chat or search.', 'Use the mobile action panel to add or remove the contact.', 'Use the same panel to block or unblock the user.'],
    problems: [{ issue: 'A chat does not update after unblocking', solution: 'Return to the chat list and open the conversation again. Refresh the page if needed.' }],
  },
  {
    id: 'opus',
    group: 'features',
    title: 'Opus AI assistant',
    summary: 'Answers, files, memory, instructions, reminders, and actions under your control.',
    purpose: 'Get help with text, information, and Surf actions while keeping control of every permission.',
    desktop: ['Open the dedicated Opus chat and describe your request in natural language.', 'Attach an image or document, or use voice input when needed.', 'If Opus requests access, review the permission category and allow only what is required.', 'Review important answers and actions before relying on them.', 'Surf Pro users can mention @opus inside regular chats.'],
    mobile: ['Open the Opus tab in the bottom navigation.', 'Type or dictate a request, or attach a file.', 'Manage individual Opus permissions from its settings.', 'Use @opus in a conversation with Surf Pro.'],
    details: [
      { title: 'What Opus can do', bullets: ['Answer questions and help with writing, ideas, notes, and plans.', 'Analyze conversation context you have allowed it to read.', 'Work with images and files or search the web when permitted.', 'Create and cancel reminders.', 'Send and schedule messages or change selected settings.', 'Manage contacts and blocks, create groups, and add members when explicitly allowed.', 'Surf Pro users can ask Opus to call one or more people and deliver a spoken message.'] },
      { title: 'Permissions', bullets: ['Read chats.', 'Search the web.', 'Send and schedule messages.', 'Manage reminders.', 'Change settings.', 'Manage contacts and groups.'] },
      { title: 'Instructions and memory', paragraphs: ['Use custom instructions to describe how you want Opus to work. Memory stores selected useful facts and preferences. Avoid saving unnecessary confidential information.'] },
      { title: 'Reminders', paragraphs: ['Ask Opus to remind you “in 20 minutes” or provide an exact date and time. You can view and cancel active reminders.'] },
    ],
    problems: [
      { issue: 'Opus does not perform an action', solution: 'Check the relevant permission and make the request more specific.' },
      { issue: 'The answer does not use chat context', solution: 'Make sure chat reading is allowed and that the correct conversation is selected.' },
    ],
  },
  {
    id: 'bots',
    group: 'features',
    title: 'Bots and the Surf Bot API',
    summary: 'Create, configure, and programmatically control bots inside Surf.',
    access: 'Free',
    purpose: 'Connect your own service to Surf and automate replies, commands, notifications, and workflows.',
    desktop: [
      'Search for official Studio (@BotStudio) and open a private chat.',
      'Send /newbot, enter a display name, then a unique username ending in bot.',
      'Store the returned token securely: Studio shows it only once.',
      'Open /mybots and select a bot to change its name, username, description, commands, avatar, webhook, or token.',
      'Add your bot to a group from its profile or the member menu. Only the group owner or an administrator can do this, and only when the bot owner has allowed invitations in Studio. Studio itself cannot be added to groups.',
    ],
    mobile: [
      'Find Studio (@BotStudio) in Surf search and open the private chat.',
      'Use /newbot and send the name and username step by step.',
      'Open /mybots and choose a bot with a button for the remaining settings.',
      'Tap “Start” on your bot profile to open its private chat.',
    ],
    details: [
      { title: 'How bots appear to users', bullets: ['In an empty private chat, a large Start button replaces the composer and creates the first contact with the bot.', 'Bots have no email, “last seen recently” label, online indicator, calling, contact adding, or gifts.', 'Commands are available in the chat menu and are suggested in the composer after typing /.', 'Studio is a dedicated private service chat and cannot be added to a group.'] },
      { title: 'What developers can do', bullets: ['Manage a bot profile with a name, username, description, commands, and avatar.', 'Use private chats and groups where the bot is installed.', 'Send text, media up to 20 MB, replies, inline buttons, reply keyboards, Force Reply, and Mini Apps.', 'Read, edit, delete, forward, pin messages, and add emoji reactions.', 'Show typing, upload_photo, record_video, and upload_document activity states.', 'Receive events through Telegram-style long polling without a public server or through a webhook.', 'Configure command hints in Studio or programmatically through the API.'] },
       { title: 'Surf Bot API', paragraphs: ['Base URL: https://surf-app.xyz/api/bot/v1. Every request uses Authorization: Bearer <bot-token>. Successful responses contain ok: true; errors are returned as JSON with an error field and an HTTP status. The API includes /me, /get-chat, /get-message, /get-updates, /ack-update, /commands, /set-commands, /send-message, /send-media, /edit-message, /delete-message, /create-poll, /forward-message, /pin-message, /unpin-message, /set-reaction, /send-chat-action, /webhook-info, /answer-callback, and /verify-web-app.'] },
       { title: 'Official Node.js and TypeScript SDK', paragraphs: ['The surf-bot-sdk package is available for JavaScript and TypeScript. It has no runtime dependencies and works with Node.js 18+. The SDK handles long polling, command and callback handlers, API types, keyboards, and file uploads. Install it with npm install surf-bot-sdk.'], code: `import { SurfBot, button, buttons } from 'surf-bot-sdk'

const bot = new SurfBot({ token: process.env.SURF_BOT_TOKEN! })

bot.command('start', ctx => ctx.reply('Hello!'))

bot.command('help', ctx => ctx.reply('Choose an action:', {
  replyMarkup: buttons([
    button.callback('My profile', 'profile'),
    button.url('Documentation', 'https://surf-app.xyz/docs'),
  ]),
}))

bot.on('callback_query', async ctx => {
  await ctx.answerCallback()
  if (ctx.callbackQuery?.data === 'profile') await ctx.edit('Profile opened')
})

await bot.start()` },
      { title: 'Official Python, Go, and Rust SDKs', paragraphs: ['Official SDKs for Python, Go, and Rust are now available alongside the Node.js and TypeScript package. They use the same Bot API, support long polling, and provide ready-made command, message, and callback handlers. Source and guides: https://github.com/LaywoodDev/Surf/tree/main/sdk.'], bullets: ['Python — the surf-bot-sdk package has no external runtime dependencies and supports Python 3.10+.', 'Go — github.com/LaywoodDev/Surf/sdk/go provides Client, Bot, handlers, and long polling.', 'Rust — the async surf-bot-sdk package uses reqwest and Tokio with typed update events.', 'If an SDK is not a fit, use direct HTTPS requests against the Surf Bot API.'] },
      { title: 'Bot storage', paragraphs: ['Every bot has private JSON key-value storage. Data is isolated by bot and by the scope, scopeId, key address. SDK convenience methods use the user scope by default; chat and bot scopes are also available. Values are limited to 64 KiB, and keys accept 1–128 letters, digits, _, ., : and -.'], bullets: ['TypeScript/JavaScript: await bot.storage.set(userId, "cart", { items: 2 }).', 'Python: bot.storage.set(user_id, "cart", { "items": 2 }).', 'Go: bot.Storage.Set(ctx, userID, "cart", map[string]any{"items": 2}).', 'Rust: bot.storage.set(user_id, "cart", serde_json::json!({"items": 2})).', 'Use get, set, and delete for carts, forms, preferences, and conversation state.'] },
      { title: 'Media, albums, and fileId', paragraphs: ['Bots can send photos, videos, audio, voice messages, and documents through sendMedia or typed SDK helpers. Files up to 20 MB receive a reusable fileId after the first upload, so the bot can send them again without uploading the bytes. Use sendMediaGroup for 2–10 photos or videos.'], bullets: ['TypeScript: sendPhoto, sendVideo, sendVoice, sendDocument, sendMediaGroup.', 'Python, Go, and Rust expose the same typed helpers and send_media_by_id.', 'Voice files are rendered as Surf voice messages with the audio player.', 'A fileId can only be reused by the bot that uploaded it.'] },
      { title: 'Poll events and webhooks', paragraphs: ['A bot can close its own poll with closePoll and receive poll_vote when someone votes and poll_closed after closing. For production, enable push delivery with POST /set-webhook; Surf signs every JSON request with HMAC-SHA256. Long polling and webhooks are mutually exclusive.'], bullets: ['TypeScript: bot.on("poll_vote", handler), bot.on("poll_closed", handler).', 'Verify X-Surf-Signature against the exact request body.', 'Deduplicate retries by updateId.'] },
      { title: 'Stories', paragraphs: ['Bots can publish one photo or video to their profile with an optional caption. Stories expire after 24 hours and are visible to the bot’s public audience. Photo uploads are limited to 25 MB and videos to 200 MB.'], bullets: ['TypeScript: sendStoryPhoto, sendStoryVideo, getStories, deleteStory.', 'Python: send_story_photo and send_story_video.', 'Go and Rust expose SendStory/send_story plus Story listing and deletion.', 'Users can view, react, and reply; bots receive story_view, story_reaction, and story_reply updates.'] },
      { title: 'Group actions', paragraphs: ['In a group, a bot receives only commands and explicit @mentions. POST /create-poll and deleting other people’s messages require the bot to be installed in that group and promoted to administrator. A regular bot can delete and pin only its own messages.'] },
      { title: 'Mini Apps', paragraphs: ['A Mini App is a regular HTTPS website opened in a built-in Surf window from a bot button. Send an inline button with { text: "Open", webAppUrl: "https://example.com/app" }. The address must be public HTTPS: localhost and private IP addresses are rejected.', 'On mobile, a Mini App opens full screen. On desktop, its window can be moved, resized, or expanded to full screen; the header remains available to close it.', 'Surf places short-lived signed data in the surfWebAppData URL fragment, so it never reaches your web server logs. The Mini App also receives a surf_web_app_init event with the Surf theme and initData. To finish an action, call window.parent.postMessage({ type: "surf_web_app_data", data: JSON.stringify(result) }, "*").'] },
      { title: 'Deep links', paragraphs: ['Use https://surf-app.xyz/bot/<username>?start=<payload> to open a bot with context. payload accepts 1–64 Latin letters, digits, underscores, and hyphens. After sign-in, Surf creates or opens the private chat and gives the bot a regular message update containing /start <payload>.', 'Use this for invitations, referral codes, website buttons, or a specific Mini App flow. Do not put secrets or personal data in payload: the user can see it in the sent message.'] },
      { title: 'Validating Mini App data', paragraphs: ['Never trust browser data on its own. Your Mini App server must send initData to POST /api/bot/v1/verify-web-app with Authorization: Bearer <bot-token>. Surf validates the signature, expiry, and bot binding, then returns the user and chat data.', 'After window.parent.postMessage, the bot receives a web_app_data update containing webAppData: { messageId, data }. Data is limited to 4096 characters.'] },
      { title: 'Commands through the API', paragraphs: ['Commands are shown in the bot profile and chat menu. Read the current list with GET /commands and update it with POST /set-commands. Do not include the leading slash in command; the description explains the action to users.'], code: `await fetch(base + '/set-commands', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    commands: [
      { command: 'start', description: 'Start the bot' },
      { command: 'help', description: 'Show help' },
      { command: 'tasks', description: 'Open my tasks' },
    ],
  }),
})` },
       { title: 'Which languages can I use?', paragraphs: ['Official SDKs are available for Node.js/TypeScript, Python, Go, and Rust. The API is not tied to a specific library: it uses ordinary HTTPS requests with JSON and multipart/form-data. Any language with an HTTP client and JSON parser works: PHP, Java/Kotlin, C#, Ruby, Swift, and more. Use curl for a quick manual API check.'], bullets: ['Node.js/TypeScript — use surf-bot-sdk or native fetch.', 'Python — use surf-bot-sdk with built-in long polling.', 'Go — use github.com/LaywoodDev/Surf/sdk/go with Client and Bot.', 'Rust — use async surf-bot-sdk with typed update events.', 'curl — test authentication, chat access, and message sending without creating a project.'] },
      {
        title: 'Quick start: Python',
        paragraphs: ['This example uses httpx: install it with pip install httpx. In production, persist offset in a file or database instead of keeping it only in process memory.'],
        code: `import os
import httpx

BASE = 'https://surf-app.xyz/api/bot/v1'
HEADERS = {'Authorization': 'Bearer ' + os.environ['SURF_BOT_TOKEN']}
offset = 0

with httpx.Client(timeout=35) as client:
    while True:
        response = client.get(
            BASE + '/get-updates',
            params={'offset': offset, 'timeout': 30},
            headers=HEADERS,
        )
        body = response.json()
        if not body['ok']:
            raise RuntimeError(body['error'])

        for update in body['result']:
            offset = update['updateId'] + 1
            if update['type'] != 'message':
                continue
            text = update['message']['text']
            client.post(
                BASE + '/send-message',
                headers=HEADERS,
                json={'chatId': update['chat']['id'], 'text': 'Received: ' + text},
            )`,
      },
      {
        title: 'Quick request: Go',
        paragraphs: ['Go only needs the standard net/http, encoding/json, and bytes packages. This example sends a message without an additional SDK.'],
        code: `package main

import (
  "bytes"
  "encoding/json"
  "net/http"
  "os"
)

func main() {
  payload, _ := json.Marshal(map[string]any{
    "chatId": 123,
    "text": "Hello from Go",
  })
  request, _ := http.NewRequest(
    "POST",
    "https://surf-app.xyz/api/bot/v1/send-message",
    bytes.NewReader(payload),
  )
  request.Header.Set("Authorization", "Bearer "+os.Getenv("SURF_BOT_TOKEN"))
  request.Header.Set("Content-Type", "application/json")
  response, err := http.DefaultClient.Do(request)
  if err != nil { panic(err) }
  defer response.Body.Close()
}`,
      },
      {
        title: 'Quick API check with curl',
        paragraphs: ['Replace the token and chatId with real values. This is useful for testing access before writing a complete bot.'],
        code: `curl https://surf-app.xyz/api/bot/v1/me \
  -H "Authorization: Bearer <bot-token>"

curl -X POST https://surf-app.xyz/api/bot/v1/send-message \
  -H "Authorization: Bearer <bot-token>" \
  -H "Content-Type: application/json" \
  -d '{"chatId":123,"text":"Hello from curl"}'`,
      },
      { title: 'Choosing a delivery method', bullets: ['For local development and most small services, use get-updates: no domain, TLS certificate, or public endpoint is needed.', 'For production with multiple service instances, use a webhook or one coordinated polling consumer.', 'Use either a webhook or get-updates for a bot, not both at the same time.', 'Do not run independent polling loops with one offset and no shared lock: they can compete for the same queue.', 'After processing an event, advance offset to updateId + 1 or explicitly acknowledge it with POST /ack-update. If processing fails, keep the offset and retry the event.'] },
      { title: 'Production checklist', bullets: ['Keep SURF_BOT_TOKEN only in environment variables or a secret manager.', 'Check both the HTTP status and the ok field in every response.', 'Use exponential backoff for network errors and respect rate limits.', 'Make update handling idempotent: an event can be delivered more than once.', 'Never put tokens or personal data in callbackData.', 'Limit bot actions to the permissions it needs and log only safe identifiers.'] },
      {
        title: 'Quick start: Node.js and long polling',
        paragraphs: ['Long polling is the primary development method: your bot server does not need a public address. GET /get-updates?offset=0&timeout=30 returns queued events and waits for new ones up to timeout seconds. Persist offset after processing each update so a restart does not process the same event again. For explicit acknowledgement, call POST /ack-update with updateId and start the next request at updateId + 1.'],
        code: `const base = 'https://surf-app.xyz/api/bot/v1'
const token = process.env.SURF_BOT_TOKEN
const headers = { Authorization: 'Bearer ' + token }
let offset = 0

while (true) {
  const response = await fetch(
    base + '/get-updates?offset=' + offset + '&timeout=30',
    { headers },
  )
  const body = await response.json()
  if (!body.ok) throw new Error(body.error)

  for (const update of body.result) {
    offset = update.updateId + 1
    if (update.type !== 'message') continue

    const command = update.command?.name
    const text = command === 'start'
      ? 'Bot started.'
      : 'Received: ' + update.message.text

    await fetch(base + '/send-message', {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: update.chat.id,
        text,
        replyToMessageId: update.message.id,
      }),
    })
  }
}`,
      },
      {
        title: 'Messages, replies, and inline buttons',
        paragraphs: ['Buttons do not open URLs: when a user presses one, Surf creates a callback_query update. Treat callbackData as your internal command and never put secrets in it.'],
        code: `await fetch(base + '/send-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: update.chat.id,
    text: 'Choose an action:',
    replyToMessageId: update.message.id,
    replyMarkup: {
      buttons: [[
        { text: 'Done', callbackData: 'task:done:123' },
        { text: 'Snooze', callbackData: 'task:snooze:123' },
      ]],
    },
  }),
})

if (update.type === 'callback_query') {
  const data = update.callbackQuery.data
  if (data === 'task:done:123') {
    await fetch(base + '/answer-callback', {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ callbackQueryId: update.callbackQuery.id }),
    })
  }
}`,
      },
      {
        title: 'Reply keyboards',
        paragraphs: ['A reply keyboard replaces the input field with ready-made actions. Pressing a button sends its text as a regular user message, so handle it in the same message event. Send removeKeyboard: true to remove the keyboard. URL buttons must use HTTPS.'],
        code: `await fetch(base + '/send-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: update.chat.id,
    text: 'What should we open?',
    replyMarkup: {
      keyboard: [[
        { text: 'My tasks' },
        { text: 'Settings' },
      ], [
        { text: 'Documentation', url: 'https://surf-app.xyz/docs' },
      ]],
      resizeKeyboard: true,
      persistentKeyboard: true,
    },
  }),
})

// Remove the keyboard
await fetch(base + '/send-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: update.chat.id,
    text: 'Keyboard removed',
    replyMarkup: { removeKeyboard: true },
  }),
})`,
      },
      {
        title: 'Force Reply',
        paragraphs: ['Force Reply does not show buttons. Instead, Surf automatically opens the composer in reply mode for the bot message — useful for forms, follow-up questions, and multi-step flows. The user response arrives as a normal message update with replyToMessageId.'],
        code: `await fetch(base + '/send-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: update.chat.id,
    text: 'What is your name?',
    replyMarkup: { forceReply: true },
  }),
})`,
      },
      {
        title: 'Media, editing, and deletion',
        paragraphs: ['Use multipart/form-data for a file. A bot can edit or delete only messages sent by that bot. Passing replyMarkup with buttons: [] removes the keyboard from a message.'],
        code: `const form = new FormData()
form.append('file', new Blob(['report'], { type: 'text/plain' }), 'report.txt')
form.append('chatId', String(update.chat.id))
form.append('caption', 'Report is ready')

await fetch(base + '/send-media', {
  method: 'POST',
  headers,
  body: form,
})

await fetch(base + '/edit-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: update.chat.id,
    messageId: sentMessageId,
    text: 'Updated text',
    replyMarkup: { buttons: [] },
  }),
})

await fetch(base + '/delete-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: update.chat.id, messageId: sentMessageId }),
})`,
      },
      {
        title: 'Reading, forwarding, and pinning messages',
        paragraphs: ['GET /get-message returns text, sender, media, reply, and forward metadata. POST /forward-message forwards a message to another chat the bot can access. A bot can pin its own message; pinning someone else’s message requires group administrator rights.'],
        code: `const message = await fetch(base + '/get-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, messageId: 456 }),
})

await fetch(base + '/forward-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fromChatId: 123,
    messageId: 456,
    chatId: 789,
    replyToMessageId: 900,
  }),
})

await fetch(base + '/pin-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, messageId: 456 }),
})

await fetch(base + '/unpin-message', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, messageId: 456 }),
})`,
      },
      {
        title: 'Reactions and activity states',
        paragraphs: ['POST /set-reaction adds or removes a bot reaction from a message. A bot can react only in chats it can access, and the reaction updates for chat participants immediately. POST /send-chat-action shows a short working state; supported values are typing, upload_photo, record_video, and upload_document.'],
        code: `// Add a reaction
await fetch(base + '/set-reaction', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, messageId: 456, emoji: '✅' }),
})

// Remove that reaction
await fetch(base + '/set-reaction', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, messageId: 456, emoji: '✅', action: 'remove' }),
})

// Show “typing…” before a longer operation
await fetch(base + '/send-chat-action', {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ chatId: 123, action: 'typing' }),
})`,
      },
      {
        title: 'Webhooks: when to use one',
        paragraphs: ['Webhooks are optional. Use one instead of long polling only when you have an HTTPS server. Surf sends X-Surf-Bot-Id, X-Surf-Update-Id, and an HMAC signature in X-Surf-Signature. Verify the signature against the untouched request bytes before JSON.parse.'],
        code: `import crypto from 'node:crypto'

function validSignature(rawBody, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature),
  )
}

// Return HTTP 2xx after successful processing.
// Store updateId: Surf may retry an event after an error.
`,
      },
      { title: 'Commands and Studio', paragraphs: ['Register command hints with /setcommands, one line at a time in the format command - description. Use /mybots and Studio buttons for management without typing usernames. Each bot card has a Groups switch: turn it off to block future group invitations without disabling the bot. Studio is a private service chat for creating and managing bots and cannot be added to groups. The /setname, /setusername, /setdescription, /setuserpic, /setwebhook, /getwebhookinfo, /revoke, and /deletebot commands also support a bot picker menu.'] },
      { title: 'Events and privacy mode', bullets: ['In a private chat, the bot receives messages after the conversation starts.', 'In a group, the bot receives commands and explicit @username mentions.', 'Messages from other bots are not delivered to the bot.', 'Inline button presses arrive as callback_query events with callbackData.', 'Webhooks are optional; they require HTTPS and sign events with HMAC-SHA256.'] },
      { title: 'Token safety', paragraphs: ['Never publish a token in a repository, logs, or client-side code. Surf stores only its hash. If a token is exposed, use /revoke: the old token stops working immediately and the replacement is shown once.'] },
    ],
    limits: ['Message text is limited to 4096 characters.', 'One file is limited to 20 MB.', 'Inline keyboards support up to 3 rows and 3 buttons per row.', 'Reply keyboards support up to 8 rows and 4 buttons per row.', 'callbackData is limited to 256 bytes; URL buttons must use HTTPS.', 'A bot cannot write to a chat where it is not installed.', 'Sending is rate-limited per bot and per chat.'],
    problems: [
      { issue: 'The bot does not receive a group message', solution: 'Check that the bot is installed in the group and that the message contains a command or an explicit @username mention.' },
      { issue: 'The token stopped working', solution: 'Check whether it was revoked with /revoke and use only the latest token issued by Studio.' },
      { issue: 'Should I use a webhook?', solution: 'For most projects, use /get-updates. A webhook is useful only when you prefer to receive HTTPS requests from Surf on your own server.' },
    ],
  },
  {
    id: 'opus-calls',
    group: 'features',
    title: 'Opus calls',
    summary: 'Surf Pro users can ask Opus to call people, deliver a spoken message, and report whether the call went through.',
    access: 'Pro',
    purpose: 'Have Opus reach someone by voice when you cannot call them yourself, then get a short status back in chat.',
    desktop: [
      'Open your private Opus chat or mention @opus in a regular conversation.',
      'Ask Opus to call one or more people and say what to tell them.',
      'If Opus asks for confirmation, check the recipients and the message, then confirm.',
      'Choose the assistant voice for calls in settings.',
      'Wait for a report on whether each call connected.',
      'If a recipient says something in reply, Opus sends that reply back to you in chat.',
    ],
    mobile: [
      'Open the Opus tab or mention @opus in a chat.',
      'Ask Opus to call a person or several people and say what to pass on.',
      'Confirm the request if Opus asks for permission to place the call.',
      'Choose the assistant voice in settings.',
      'Wait for a message about whether the call connected.',
      'If the other person replied on the call, Opus forwards that reply to you in chat.',
    ],
    details: [
      {
        title: 'What happens on the call',
        paragraphs: [
          'Opus calls the person you named, or several people at once, and speaks the message you asked it to deliver. It does not continue the conversation or answer the other person during the call.',
        ],
      },
      {
        title: 'What Opus reports to you',
        bullets: [
          'Whether it managed to reach each recipient.',
          'If the other person said something in reply, that reply is sent to you in the Opus chat.',
        ],
      },
      {
        title: 'Calling several people',
        paragraphs: [
          'You can ask Opus to call multiple people in one request. Connection status and any replies are handled separately for each call.',
        ],
      },
      {
        title: 'Assistant voice',
        paragraphs: [
          'Choose the voice Opus uses on calls in settings. Available voices:',
        ],
        bullets: [
          'Peter Griffin.',
          'Anton Chigurh.',
          'Moriarty.',
          'Jarvis.',
          'Vitaly.',
          'Askhab Tamaev.',
          'Litvin.',
          'Zelensky.',
          'Sweetie Fox.',
          'UglyFaceKid.',
          'Homelander.',
          '5opka.',
          'MrBeast.',
        ],
      },
    ],
    limits: [
      'This feature is available only to Surf Pro users.',
      'Opus delivers the message and does not hold a live conversation on the call.',
    ],
    problems: [
      { issue: 'Opus did not start the call', solution: 'Check that Surf Pro is active and that the request names someone Opus can identify: a contact or a user from a chat.' },
      { issue: 'Nobody answered', solution: 'This is expected if the call did not connect. Opus will tell you it could not get through. Try later or send a message instead.' },
      { issue: 'Opus does not reply to the other person on the call', solution: 'This is intentional. Opus only speaks your message. If the other person said something, that reply comes to you in chat, not during the call.' },
    ],
  },
  {
    id: 'opus-integrations',
    group: 'features',
    title: 'Opus integrations',
    summary: 'Connect external services and perform approved actions through Opus with separate permissions.',
    access: 'Free + Pro',
    purpose: 'Connect Opus to work tools so you can read data or perform approved actions from a Surf chat.',
    desktop: [
      'Open Opus settings and the integrations section.',
      'Choose a service and complete its authorization in a separate window.',
      'Review the permissions requested by the service and allow only what you need.',
      'After connecting, ask Opus to find data or perform an approved action.',
      'Disconnect the integration from settings when you no longer need it.',
    ],
    mobile: [
      'Open Opus settings from your profile tab.',
      'Choose an integration and complete authorization.',
      'Review permissions and manage the connection from the same screen.',
      'Use the connected service through a regular Opus request.',
    ],
    details: [
      { title: 'Supported services', bullets: ['Google Calendar — view and manage events.', 'Google Drive and Google Sheets — search, read, and perform approved file or spreadsheet operations.', 'GitHub and GitLab — repositories, issues, pull/merge requests, and workspace actions.', 'Notion — search, read, and work with pages.', 'Linear — teams, projects, issues, and states.', 'Todoist — projects and tasks.', 'Airtable and 101 — access data from the connected account.'] },
      { title: 'Access control', paragraphs: ['Connecting a service does not give Opus unrestricted permission to perform every action. Opus permissions and separate write controls must allow the requested operation. OAuth tokens are stored securely on the server and can be revoked by disconnecting the integration.'] },
    ],
    limits: ['Available operations depend on the external service API and your account permissions.', 'Some write operations require separate confirmation or an enabled permission.', 'Expired authorizations must be connected again.'],
    problems: [{ issue: 'Opus cannot see a connected service', solution: 'Check the integration status, authorization expiry, and the Opus permission for reading the requested data.' }],
  },
  {
    id: 'marketplace',
    group: 'features',
    title: 'Marketplace',
    summary: 'A storefront for digital products and subscriptions with payments, orders, reviews, and seller chats.',
    access: 'Free',
    purpose: 'Buy digital products inside Surf and receive the result through a protected order chat.',
    desktop: [
      'Open Marketplace in Surf and find a product by search or category.',
      'Review its description, price, availability, and reviews.',
      'Choose a payment method and complete checkout.',
      'Open “My orders” to see the order status and receive the seller’s link or text.',
      'Use the order chat to contact the seller and leave a review after purchase.',
    ],
    mobile: [
      'Open Marketplace from the Surf menu.',
      'Search products by name or category.',
      'Open a product card, review its terms, and pay for the order.',
      'Track the order and message the seller in its order chat.',
    ],
    details: [
      { title: 'What can be sold', bullets: ['Digital services and subscriptions.', 'A link or text result delivered to the buyer after payment.', 'Products with limited or unlimited stock.'] },
      { title: 'Orders and gifts', paragraphs: ['Paid orders appear in your purchases. A digital result is delivered once in the order card. You can send a product as a gift to another user when the recipient’s settings allow it.'] },
      { title: 'Payment safety', paragraphs: ['The payment provider processes checkout while Surf receives the order status. Never send a password, recovery code, or bank-card details to a seller in chat.'] },
    ],
    limits: ['The digital product content is defined by the seller.', 'Reviews are available after purchase.', 'Refunds and disputes are handled by Surf support and the payment provider according to the applicable terms.'],
    problems: [{ issue: 'Payment succeeded but the result is missing', solution: 'Open the order and refresh its status. If the result is still unavailable, message the seller in the order chat or contact support.' }],
  },
  {
    id: 'notifications',
    group: 'settings',
    title: 'Notifications',
    summary: 'Web Push, sounds, previews, and notification controls for individual chats.',
    purpose: 'Stay informed about new messages while silencing conversations you do not need to follow immediately.',
    desktop: ['Open notification settings.', 'Enable Web Push and allow browser notifications.', 'Configure sounds and message previews.', 'Open a chat menu to mute that conversation.'],
    mobile: ['Open notification settings from your profile.', 'Allow push notifications when supported by the browser or installed PWA.', 'Configure sound and previews.', 'Long-press a chat to mute it.'],
    problems: [{ issue: 'Push notifications do not arrive', solution: 'Check site permission, the system’s Do Not Disturb mode, HTTPS, and whether that chat is muted.' }],
  },
  {
    id: 'appearance',
    group: 'settings',
    title: 'Appearance and interface',
    summary: 'Language, themes, accent color, time format, fonts, interface rounding, wallpapers, and PWA icons.',
    purpose: 'Adjust Surf to your preferences and make the interface comfortable on each device.',
    desktop: ['Open Appearance settings.', 'Choose Russian or English, a theme, an accent color, and a time format.', 'Configure sounds, message previews, and Saved Messages visibility.', 'With Surf Pro, choose a font, chat wallpaper, alternate PWA icon, or the Interface rounding slider (0–100 %).'],
    mobile: ['Open your profile and Appearance settings.', 'Choose a theme, accent, language, and time format.', 'With Surf Pro, adjust Interface rounding with the 0–100 % slider.', 'Open a chat’s appearance settings to select its wallpaper.', 'After changing a PWA icon, you may need to refresh or reinstall the shortcut.'],
    details: [
      { title: 'Themes and fonts', paragraphs: ['Surf includes Dark, Extra Dark, and Light themes. Font choices include Plus Jakarta Sans, Google Sans Flex, Inter, Roboto, Montserrat, Nunito, Poppins, Lora, Playfair Display, and Merriweather.'] },
      { title: 'Interface rounding', paragraphs: ['Surf Pro users can change how rounded the interface looks with a slider from 0 to 100 % in Appearance settings. 0 % is more square; 100 % is fully rounded.'] },
      { title: 'Wallpapers', paragraphs: ['Use your own photo or one of the available dynamic designs as a chat wallpaper.'] },
    ],
    limits: ['Advanced themes, fonts, Interface rounding, wallpapers, and alternate PWA icons require Surf Pro.', 'Some changes may apply only on the current device or after the interface refreshes.'],
    problems: [{ issue: 'The new appearance is not visible', solution: 'Refresh the page. For the PWA, close and reopen the app; an icon change may require updating the shortcut.' }],
  },
  {
    id: 'privacy',
    group: 'settings',
    title: 'Privacy',
    summary: 'Control profile visibility, group invitations, and the typing indicator.',
    purpose: 'Choose who can see individual profile details and interact with you.',
    desktop: ['Open privacy settings.', 'Choose a field and select “Everyone”, “My contacts”, or “Nobody”.', 'Repeat for the other fields.', 'Disable the typing indicator if desired.'],
    mobile: ['Open your profile and privacy settings.', 'Tap a category and choose its visibility level.', 'Go back and configure the remaining categories.'],
    details: [{ title: 'Available controls', bullets: ['Last seen time.', 'Profile photo.', 'Who can add you to groups.', 'Phone number and email.', 'Your “About” description.', 'Typing indicator visibility.'] }],
    limits: ['Settings are configured separately for each category.', 'End-to-end encryption (E2EE) is not used in the app.'],
    problems: [{ issue: 'Another user still sees a field', solution: 'Check that field’s visibility and whether the person is in your contacts, then refresh the profile.' }],
  },
  {
    id: 'data-export',
    group: 'settings',
    title: 'Data export',
    summary: 'Download account data in JSON or HTML format.',
    purpose: 'Get a portable copy of your account information for viewing or processing.',
    desktop: ['Open account settings and the export section.', 'Choose JSON for machine processing or HTML for convenient viewing.', 'Start preparation and download the completed file.', 'Store the export in a secure place.'],
    mobile: ['Open account settings and data export.', 'Choose a format and start preparation.', 'Download the result in your browser and move it to secure storage if needed.'],
    details: [{ title: 'What the export contains', bullets: ['Account and privacy data.', 'Contacts, blocked users, and folders.', 'Chat information and your own messages.', 'Polls you created and votes.', 'Subscriptions, Pro gifts, and call metadata.'] }],
    problems: [{ issue: 'The export does not download', solution: 'Check browser download permission and available storage, then try again after preparation completes.' }],
  },
  {
    id: 'pro',
    group: 'settings',
    title: 'Surf Pro',
    summary: 'A paid subscription with additional AI, personalization, and organization features.',
    purpose: 'Expand Opus capabilities, appearance options, and chat organization limits.',
    desktop: ['Open Surf Pro.', 'Choose a monthly or annual plan using the current price shown in the product.', 'Complete payment through YooKassa.', 'Return to Surf and check your Pro badge and features.', 'To gift Pro, choose an available gift plan and recipient.'],
    mobile: ['Open Surf Pro from your profile.', 'Choose a plan and complete payment in the payment interface.', 'Return to Surf and check the subscription status.', 'Use available gift plans to purchase Pro for another user.'],
    details: [{ title: 'Pro features', bullets: ['@opus in regular chats, extended AI tools, voice, and file support.', 'Voice message transcription.', 'Audio call recording, automatic transcription, and AI reports from Opus.', 'AI Recorder — the same recording, transcription, and AI reports as Audio call recording, but without a call.', 'Opus Calls: ask Opus to call one or more people and deliver a spoken message. Opus reports whether it got through and any reply, but does not continue the conversation on the call.', 'Additional themes, fonts, wallpapers, PWA icons, and Interface rounding (0–100 %).', 'Up to 20 folders and 10 pinned chats.', 'Higher limits and a Pro badge.'] }],
    problems: [{ issue: 'Payment succeeded but Pro is not active', solution: 'Refresh Surf and check the account. If the status does not change, keep the payment confirmation and contact support.' }],
  },
  {
    id: 'faq',
    group: 'help',
    title: 'Frequently asked questions',
    summary: 'Short answers about platforms, calls, Opus, data, and subscriptions.',
    details: [
      { title: 'Do I need to install Surf?', paragraphs: ['No. Surf works in a browser. You can install it as a PWA on your computer or phone for convenience.'] },
      { title: 'Does Surf support video calls?', paragraphs: ['No. Surf supports one-to-one and group audio calls. You can send video as a message or file.'] },
      { title: 'Can Opus read all my chats?', paragraphs: ['Not automatically. Reading chats is a separate permission. When it is disabled, Opus must not analyze your conversations.'] },
      { title: 'Are calls recorded?', paragraphs: ['Not by default. A Surf Pro user can manually start recording from the ••• menu during an active call. The recording, transcript, and report are available only to the user who started it, and only audio after Record is selected is captured.'] },
      { title: 'Can Opus call people for me?', paragraphs: ['Yes, for Surf Pro users. Ask Opus to call one or more people and say what to tell them. Opus reports whether it got through and forwards any reply the other person said. It does not continue the conversation during the call. The assistant voice is chosen in settings.'] },
      { title: 'How do I create a bot?', paragraphs: ['Open Studio (@BotStudio), send /newbot, and provide a name followed by a username ending in bot. The token is shown once. For development, use /get-updates without a webhook and send replies through the Surf Bot API.'] },
      { title: 'Does Surf use end-to-end encryption?', paragraphs: ['No. End-to-end encryption (E2EE) is not used in the app.'] },
      { title: 'Where can I see the current Pro price?', paragraphs: ['Open Surf Pro inside the product to see current monthly and annual plans.'] },
    ],
  },
  {
    id: 'troubleshooting',
    group: 'help',
    title: 'Troubleshooting',
    summary: 'Basic checks for connection, browser, PWA, audio, and notification problems.',
    details: [
      { title: 'Check these first', bullets: ['Your internet connection is stable.', 'The browser is up to date.', 'Surf has microphone and notification permissions.', 'The operating system is not blocking the feature.', 'The problem remains after refreshing the page or restarting the PWA.'] },
      { title: 'Messages do not update', paragraphs: ['Check the network and refresh. Surf uses real-time connections that may be blocked by an extension, proxy, or corporate network.'] },
      { title: 'The microphone does not work', paragraphs: ['Check site permission, the selected input device, and whether another app is using the microphone.'] },
      { title: 'The PWA shows an old version', paragraphs: ['Close the app completely and reopen it. If needed, refresh Surf in the browser or reinstall the PWA.'] },
      { title: 'When to contact support', paragraphs: ['Include your device, browser, approximate error time, and the steps that caused it. Never send your password or recovery code.'] },
    ],
  },
]
