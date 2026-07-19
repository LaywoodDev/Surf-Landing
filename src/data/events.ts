export interface EventItem {
  id: string
  title: string
  day: string
  month: string
  time: string
  format: string
  location: string
  description: string
  upcoming: boolean
}

export const events: EventItem[] = [
  {
    id: 'meetup-novosibirsk',
    title: 'Surf Community Meetup: Novosibirsk',
    day: '15',
    month: 'Aug',
    time: '18:00',
    format: 'Offline',
    location: 'Novosibirsk, Technopark',
    description:
      'The first offline meetup of the Surf community. Talk with the team behind the app, share your feedback, see live demos of upcoming features and meet other users over coffee.',
    upcoming: true,
  },
  {
    id: 'qa-pro-roadmap',
    title: 'Live Q&A: Surf Pro roadmap',
    day: '28',
    month: 'Aug',
    time: '19:00',
    format: 'Online',
    location: 'Stream on YouTube',
    description:
      'An open Q&A session with the Surf team about the Pro subscription roadmap: what is coming next, how we choose features and what we decided to drop. Ask your questions live.',
    upcoming: true,
  },
  {
    id: 'webinar-privacy',
    title: 'Webinar: Privacy-first messaging',
    day: '10',
    month: 'Sep',
    time: '17:00',
    format: 'Online',
    location: 'Stream on YouTube',
    description:
      'A practical webinar on how Surf protects your conversations: encryption, on-device processing and the privacy settings every user should know. With a live walkthrough.',
    upcoming: true,
  },
  {
    id: 'voice-mode-stream',
    title: 'Voice mode launch stream',
    day: '14',
    month: 'Jul',
    time: '18:00',
    format: 'Online',
    location: 'Stream on YouTube',
    description:
      'The launch stream of Voice mode — our hands-free way to message. The team showed how it works, answered questions and gave away a year of Surf Pro to viewers.',
    upcoming: false,
  },
  {
    id: 'opus-presentation',
    title: 'Opus AI: online presentation',
    day: '2',
    month: 'Jun',
    time: '19:00',
    format: 'Online',
    location: 'Stream on YouTube',
    description:
      'The official presentation of Opus — the AI assistant built into Surf. Live demos of summaries, smart replies and inline translation, plus a Q&A with the developers.',
    upcoming: false,
  },
]
