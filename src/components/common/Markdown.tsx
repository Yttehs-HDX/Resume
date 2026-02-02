import type { ReactNode } from 'react'
import { YStack, styled } from 'tamagui'

type MarkdownTone = 'default' | 'primary'

interface MarkdownProps {
  children?: string
  tone?: MarkdownTone
}

type MarkdownBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

const Paragraph = styled('p', {
  margin: 0,
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.15,
  color: 'inherit',
})

const List = styled('ul', {
  margin: 0,
  paddingLeft: '$4',
  listStyleType: 'disc',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  color: 'inherit',
})

const ListItem = styled('li', {
  color: 'inherit',
})

const InlineText = styled('span', {
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.15,
  color: 'inherit',
})

const StrongText = styled('strong', {
  fontWeight: '600',
  color: 'inherit',
})

const CodeText = styled('code', {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 14,
  lineHeight: 20,
  paddingHorizontal: '$1',
  paddingVertical: '$1',
  borderRadius: '$2',
  backgroundColor: '$surfaceContainerHigh',
  color: 'inherit',
})

const listItemPattern = /^[-*+]\s+/
const inlinePattern = /(\*\*[^*]+?\*\*|`[^`]+?`)/g

function parseBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.split(/\r?\n/)
  const blocks: MarkdownBlock[] = []
  let index = 0

  while (index < lines.length) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line.length === 0) {
      index += 1
      continue
    }

    if (listItemPattern.test(line)) {
      const items: string[] = []
      while (index < lines.length && listItemPattern.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(listItemPattern, ''))
        index += 1
      }
      if (items.length > 0) {
        blocks.push({ type: 'list', items })
      }
      continue
    }

    const paragraphLines: string[] = []
    while (
      index < lines.length &&
      lines[index].trim().length > 0 &&
      !listItemPattern.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim())
      index += 1
    }
    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') })
    }
  }

  return blocks
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  inlinePattern.lastIndex = 0
  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]
    if (token.startsWith('**')) {
      nodes.push(
        <StrongText key={`strong-${match.index}`}>
          {token.slice(2, -2)}
        </StrongText>
      )
    } else if (token.startsWith('`')) {
      nodes.push(
        <CodeText key={`code-${match.index}`}>
          {token.slice(1, -1)}
        </CodeText>
      )
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

/**
 * Lightweight Markdown renderer
 * Supports paragraphs, unordered lists, bold, and inline code without raw HTML.
 */
export function Markdown({ children, tone = 'default' }: MarkdownProps) {
  const content = typeof children === 'string' ? children.trim() : ''
  if (content.length === 0) {
    return null
  }

  const blocks = parseBlocks(content)
  if (blocks.length === 0) {
    return null
  }

  const textColor = tone === 'primary' ? '$onPrimaryContainer' : '$onSurface'

  return (
    <YStack gap="$2" width="100%" color={textColor}>
      {blocks.map((block, blockIndex) => {
        if (block.type === 'paragraph') {
          return (
            <Paragraph key={`paragraph-${blockIndex}`}>
              {renderInline(block.text)}
            </Paragraph>
          )
        }

        return (
          <List key={`list-${blockIndex}`}>
            {block.items.map((item, itemIndex) => (
              <ListItem key={`list-item-${blockIndex}-${itemIndex}`}>
                <InlineText>{renderInline(item)}</InlineText>
              </ListItem>
            ))}
          </List>
        )
      })}
    </YStack>
  )
}
