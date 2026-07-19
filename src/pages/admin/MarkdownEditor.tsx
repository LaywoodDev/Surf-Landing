import { useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { Markdown as TiptapMarkdown } from 'tiptap-markdown'
import { IconLink } from '../../components/icons'

interface MarkdownEditorProps {
  value: string
  onChange: (markdown: string) => void
  withHeading?: boolean
  minRows?: number
}

function getMarkdown(editor: { storage: unknown }): string {
  const storage = editor.storage as unknown as {
    markdown: { getMarkdown: () => string }
  }
  return storage.markdown.getMarkdown()
}

/**
 * Визуальный редактор: текст форматируется прямо внутри поля (WYSIWYG),
 * а в state/на сервер уходит markdown-строка — формат данных прежний.
 * При выделении текста над ним всплывают кнопки форматирования.
 */
export function MarkdownEditor({
  value,
  onChange,
  withHeading = false,
  minRows = 5,
}: MarkdownEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: withHeading ? { levels: [2] } : false,
      }),
      TiptapMarkdown,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      // tiptap-markdown хранит сериализатор в storage.markdown
      onChange(getMarkdown(editor))
    },
  })

  // Подхватываем значение, изменённое снаружи (например, AI-ассистентом)
  useEffect(() => {
    if (editor && value !== getMarkdown(editor)) {
      editor.commands.setContent(value)
    }
  }, [editor, value])

  const setLink = () => {
    if (!editor) return
    const previous = editor.getAttributes('link').href as string | undefined
    const url = window.prompt('Link URL (пусто — убрать ссылку):', previous ?? 'https://')
    if (url === null) return
    if (url === '') {
      editor.chain().focus().unsetLink().run()
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }
  }

  return (
    <div className="markdown-editor">
      {editor && (
        <BubbleMenu
          editor={editor}
          className="selection-popup"
          options={{ placement: 'top', offset: 10 }}
        >
          <button
            type="button"
            title="Bold"
            className={editor.isActive('bold') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            title="Italic"
            className={editor.isActive('italic') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <em>I</em>
          </button>
          <button
            type="button"
            title="Link"
            className={editor.isActive('link') ? 'is-active' : ''}
            onClick={setLink}
          >
            <IconLink width="15" height="15" />
          </button>
          <button
            type="button"
            title="Bullet list"
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            • List
          </button>
          {withHeading && (
            <button
              type="button"
              title="Heading"
              className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            >
              H2
            </button>
          )}
        </BubbleMenu>
      )}

      <EditorContent
        editor={editor}
        style={{ '--min-rows': minRows } as React.CSSProperties}
      />
    </div>
  )
}
