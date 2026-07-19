import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

// Ссылки из пользовательского контента открываем в новой вкладке
const components: Components = {
  a: ({ node: _node, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
}

interface MarkdownProps {
  text: string
}

/**
 * Рендерит markdown-разметку из админки: **bold**, *italic*, [link](url),
 * - списки, ## заголовки. Сырой HTML не рендерится (безопасно).
 */
export function Markdown({ text }: MarkdownProps) {
  return <ReactMarkdown components={components}>{text}</ReactMarkdown>
}
