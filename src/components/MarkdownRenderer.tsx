import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = { content: string };

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        linkTarget="_blank"
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="break-words underline text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="px-1 py-0.5 rounded bg-gray-100" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          li: ({ node, ...props }) => <li className="my-0.5" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
