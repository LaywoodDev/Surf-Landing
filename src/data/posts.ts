export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  cover: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'voice-mode',
    title: 'Voice mode is here: talk to Surf hands-free',
    excerpt:
      'Dictate messages, reply on the go and control chats with your voice — now available for all Surf Pro users.',
    date: '14 Jul 2026',
    tag: 'Product',
    cover: '/blog/voice-mode.jpg',
    content: [
      'Today we are rolling out Voice mode — a new way to talk to Surf when your hands are busy. Cooking, driving or just walking down the street: hold the mic button and speak. Surf transcribes your words instantly and sends them as a message, or keeps them as a voice note — your choice.',
      'Voice mode is built on our on-device speech engine, so transcription works even with a weak connection and your audio never leaves the phone unencrypted. English and Russian are supported at launch, with six more languages coming this fall.',
      'We also added voice commands for the most common actions: "reply to Alex", "read my unread chats", "mute this group for an hour". No menus, no taps — just say it.',
      'Voice mode is available to all Surf Pro subscribers starting today. Free users can try it for 14 days — the trial activates automatically the first time you hold the mic button.',
      'This is just the beginning. Later this year Voice mode will learn to summarize long voice messages you receive, so you can read a ten-minute rant from a friend in fifteen seconds.',
    ],
  },
  {
    slug: 'privacy-guide',
    title: 'Five privacy settings worth enabling today',
    excerpt:
      'A short guide to keeping your conversations yours: from read receipts to disappearing messages.',
    date: '7 Jul 2026',
    tag: 'Guides',
    cover: '/blog/privacy-guide.jpg',
    content: [
      'Privacy is not a switch you flip once — it is a set of small habits. Surf gives you granular control over what others see, and most of it takes less than a minute to set up. Here are five settings we recommend enabling right now.',
      'First, review your "Last seen" visibility. You can show it to everyone, contacts only, or nobody — and add exceptions for specific people. Your mom can still see you are online; your boss cannot.',
      'Second, turn on two-step verification. A PIN code on top of the SMS code means that even with access to your SIM card, nobody can log into your account.',
      'Third, use disappearing messages for sensitive conversations. Set a timer from one day to one month, and messages will vanish from both devices automatically.',
      'Fourth, lock individual chats with Face ID or a fingerprint. Hand your phone to a friend to show a photo without worrying they will swipe into the wrong conversation.',
      'And finally, check "Active sessions" once in a while. One tap shows every device logged into your account — and one more tap terminates anything you do not recognize.',
    ],
  },
  {
    slug: 'surf-pro',
    title: 'Inside Surf Pro: what you actually get',
    excerpt:
      'Opus AI in every chat, doubled limits, profile badge and more — an honest breakdown of the Pro subscription.',
    date: '30 Jun 2026',
    tag: 'Product',
    cover: '/blog/surf-pro.jpg',
    content: [
      'We get this question a lot: what exactly does Surf Pro include, and is it worth 150 rubles a month? Here is an honest breakdown — no marketing fluff.',
      'The headline feature is Opus AI inside any chat. Summarize a long thread you have not read, draft a reply in your tone, translate a message inline. It works on top of your conversations, privately — chats are processed on encrypted servers and never used for training.',
      'Then there are doubled limits: 4 GB file uploads instead of 2 GB, 40 pinned chats instead of 20, longer voice messages and twice as many folders. If you hit the free limits even once, Pro pays for itself in saved time.',
      'You also get a profile badge, advanced appearance customization (themes, chat backgrounds, app icon) and Voice mode — our newest hands-free way to message.',
      'What Pro does not do: it does not hide ads (Surf has none), it does not sell your data (we never have), and it does not lock core features. Everything essential in Surf stays free, forever.',
      'Try it for a month — cancel anytime in two taps, no questions asked.',
    ],
  },
  {
    slug: 'sync-update',
    title: 'Faster sync across all your devices',
    excerpt:
      'Our latest infrastructure update makes switching between phone and desktop feel instant.',
    date: '22 Jun 2026',
    tag: 'News',
    cover: '/blog/sync-update.jpg',
    content: [
      'You should not notice sync. It should just work: start typing on your phone, finish on your laptop, pick up a call on your tablet. This week we shipped an infrastructure update that makes this noticeably faster.',
      'Message sync between devices is now up to 3x quicker, thanks to a new delta-sync protocol that transfers only what changed instead of re-checking entire chat histories. On a slow connection the difference is dramatic.',
      'Drafts sync in real time too. Type half a sentence on desktop, and it is already waiting on your phone — with the cursor in the right place.',
      'We also rebuilt how media previews load: thumbnails now arrive before the chat list finishes rendering, so you stop seeing gray boxes when you open Surf on a new device.',
      'The update is already live for everyone — no app update required. If something feels off, let us know through Settings → Support.',
    ],
  },
  {
    slug: 'group-chats',
    title: "Group chats that don't get messy",
    excerpt:
      'Topics, slow mode and smart mentions — tools that keep even a 200-person group readable.',
    date: '15 Jun 2026',
    tag: 'Guides',
    cover: '/blog/group-chats.jpg',
    content: [
      'Every group chat starts organized and ends in chaos. Work chat, family chat, that one hobby group — three hundred unread messages by lunch. Here is how Surf helps you keep groups readable.',
      'Topics split a big group into focused threads: "Announcements", "Random", "Photos". Members see only the topics they follow, and the rest stays quietly out of the way.',
      'Slow mode saves heated discussions from turning into walls of text. Limit members to one message per minute — or per hour — and watch the quality of conversation go up instantly.',
      'Smart mentions cut through the noise: @mention someone and they get a priority notification even in a muted group. No more "sorry, missed your message among 400 others".',
      'Admins get granular permissions — who can post, who can pin, who can invite — plus join requests with a quick screening question for public groups.',
      'All of these are free and live in Group Settings. Your future self, catching up on a calm and organized chat, says thanks.',
    ],
  },
  {
    slug: 'opus-ai',
    title: 'Opus AI digest: smarter replies, summaries and more',
    excerpt:
      'A roundup of everything Opus learned this quarter — and a preview of what is coming next.',
    date: '8 Jun 2026',
    tag: 'News',
    cover: '/blog/opus-ai.jpg',
    content: [
      'It has been a busy quarter for Opus, the AI inside Surf. Here is a quick digest of what shipped recently and what is around the corner.',
      'Smart replies got noticeably better at matching your tone. Opus now learns from how you write — short and dry or full of emoji — and suggests replies that actually sound like you.',
      'Thread summaries arrived for group chats: ask Opus to recap what happened while you were away, and get three bullet points instead of scrolling through two hundred messages.',
      'Inline translation now covers 24 languages and works on voice messages too — Opus transcribes first, then translates.',
      'Coming next: scheduled messages suggested by Opus ("want to send this tomorrow at 9am when Anna is usually online?") and semantic search that finds "that link about the apartment" without exact keywords.',
      'Everything Opus does runs with privacy by design: your chats are processed encrypted and are never used to train models. Pro users get the full toolkit; basic replies remain free for everyone.',
    ],
  },
]
