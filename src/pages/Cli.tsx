import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { useT } from '../context/LangContext'
import { IconCheck, IconCopy } from '../components/icons'

export function Cli() {
  const t = useT()
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | null>(null)
  const featuresRef = useRef<HTMLElement>(null)

  const installCmd = 'npm install -g cli-surf'

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const equalize = () => {
      if (!featuresRef.current) return
      const cards = featuresRef.current.querySelectorAll<HTMLElement>('.cli-card')
      if (!cards.length) return

      cards.forEach((c) => {
        c.style.minHeight = ''
      })

      let max = 0
      cards.forEach((c) => {
        if (c.offsetHeight > max) max = c.offsetHeight
      })

      if (max > 0) {
        cards.forEach((c) => {
          c.style.minHeight = `${max}px`
        })
      }
    }

    equalize()
    window.addEventListener('resize', equalize)
    if ('fonts' in document) {
      document.fonts.ready.then(equalize)
    }

    return () => {
      window.removeEventListener('resize', equalize)
    }
  }, [t])

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(installCmd)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = installCmd
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopied(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  const quickStart = [
    { cmd: 'npm install -g cli-surf', desc: t('Needs Node.js 22+. Adds surf and opus commands.', 'Нужен Node.js 22+. Появятся команды surf и opus.') },
    { cmd: 'surf', desc: t('Press Enter, allow login in the browser. Done.', 'Нажмите Enter и разрешите вход в браузере. Всё.') },
    { cmd: 'surf ask "вопрос"', desc: t('Quick one-shot question.', 'Быстрый вопрос без открытия чата.') },
    { cmd: 'surf usage', desc: t('Remaining quota, shared with the messenger.', 'Остаток лимита, общий с мессенджером.') },
  ]

  const features = [
    {
      title: t('Chat', 'Чат'),
      text: t(
        'Streaming answers, /model to pick from 17 models, /usage, /skills, /clear. The ! prefix forces a task with files.',
        'Ответы стримятся. /model — выбор из 17 моделей, есть /usage, /skills, /clear. Префикс ! — задача с файлами.'
      ),
    },
    {
      title: t('Coding agent', 'Coding-агент'),
      text: t(
        'Questions about code go to the agent: it reads and edits files in the current folder, shows a diff, asks before changing (y/a/n). Drag files into the terminal to attach them.',
        'Вопросы про код уходят агенту: читает и правит файлы в текущей папке, показывает дифф, спрашивает перед правкой (y/a/n). Файлы можно перетащить в терминал.'
      ),
    },
    {
      title: t('Shared limits', 'Общие лимиты'),
      text: t(
        'Same account and quota as the messenger. What you spend here is visible there.',
        'Тот же аккаунт и квота, что в мессенджере. Потратил тут — видно там.'
      ),
    },
    {
      title: t('17 models', '17 моделей'),
      text: t(
        'Pick with arrow keys: GPT-5 Mini, o3, Gemini 3.7 Flash and more. The choice is saved.',
        'Выбор стрелками: GPT-5 Mini, o3, Gemini 3.7 Flash и другие. Выбор запоминается.'
      ),
    },
    {
      title: t('Skills', 'Скиллы'),
      text: t(
        'Folders with SKILL.md. The model uses them on its own, or call via /name. Built in: review and commit.',
        'Папки с SKILL.md. Модель использует их сама, вручную — через /имя. Встроены: review и commit.'
      ),
    },
    {
      title: t('Custom Opus agents', 'Custom Opus agents'),
      text: t(
        'Create your own agents for routine tasks. They work in chat and reuse your skills.',
        'Создавайте своих агентов под рутинные задачи. Работают прямо в чате и используют ваши скиллы.'
      ),
    },
    {
      title: t('Login & files', 'Вход и файлы'),
      text: t(
        'Login in one click via browser, plus whoami and logout. surf get <url> downloads attachments.',
        'Вход в один клик через браузер, есть whoami и logout. surf get <url> скачивает вложения.'
      ),
    },
  ]

  return (
    <main className="cli-page">
      <section className="cli-hero">
        <p className="cli-eyebrow" data-reveal>
          Surf CLI
        </p>
        <h1
          className="cli-title"
          data-reveal
          style={{ '--reveal-delay': '0.1s' } as CSSProperties}
        >
          {t('Surf in your terminal.', 'Surf — в вашем терминале.')}
        </h1>
        <p
          className="cli-text"
          data-reveal
          style={{ '--reveal-delay': '0.2s' } as CSSProperties}
        >
          {t(
            'Chat, coding agent and skills. Limits are shared with the messenger.',
            'Чат, coding-агент и скиллы. Лимиты общие с мессенджером.'
          )}
        </p>

        <div
          className="cli-terminal"
          data-reveal
          style={{ '--reveal-delay': '0.3s' } as CSSProperties}
        >
          <div className="cli-terminal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="cli-terminal-body">
            <pre>
              <code>{installCmd}</code>
            </pre>
            <button
              type="button"
              className={`cli-copy-btn ${copied ? 'is-copied' : ''}`}
              onClick={handleCopy}
              aria-label={copied ? t('Copied', 'Скопировано') : t('Copy command', 'Скопировать команду')}
              title={copied ? t('Copied!', 'Скопировано!') : t('Copy command', 'Скопировать команду')}
            >
              {copied ? (
                <IconCheck width="16" height="16" />
              ) : (
                <IconCopy width="16" height="16" />
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="cli-section" aria-label={t('Quick start', 'Быстрый старт')}>
        <h2 className="cli-section-title" data-reveal>
          {t('Quick start', 'Быстрый старт')}
        </h2>
        <div className="cli-commands">
          {quickStart.map((item, index) => (
            <div
              key={item.cmd}
              className="cli-command"
              data-reveal
              style={{ '--reveal-delay': `${index * 0.1}s` } as CSSProperties}
            >
              <code>{item.cmd}</code>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={featuresRef}
        className="cli-features"
        aria-label={t('What CLI can do', 'Что умеет CLI')}
      >
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="cli-card"
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 0.12}s` } as CSSProperties}
          >
            <h2 className="cli-card-title">{feature.title}</h2>
            <p className="cli-card-text">{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
