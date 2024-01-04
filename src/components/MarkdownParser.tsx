import Markdown from 'react-markdown';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as theme from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HTMLProps, ReactNode } from 'react';
import rehypeRaw from 'rehype-raw';

interface MarkdownParserProps {
  markdownText: string;
}

const Container = styled.div`
  flex: 1;
  height: 100%;
`;

const StyledMarkdownComponenet = styled(Markdown)`
  height: 100%;
  font-size: 1.125rem;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  ul {
    list-style: inside;
  }

  a {
    color: #84aaff;
    font-weight: 600;
  }

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    margin: 0;
    padding: 20px;
    border-left: 3px solid #84aaff;
    background-color: #f8f8f8;
    font-style: italic;
    color: #666;
  }

  @media screen and (max-width: 769px) {
    font-size: 1rem;
  }
`;

interface CodeBlockProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
}

const renderCodeBlock = (props: CodeBlockProps) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter PreTag='div' language={match[1]} style={theme.atomDark}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <code {...props} className={className}>
      {children}
    </code>
  );
};

const MarkdownParser = ({ markdownText }: MarkdownParserProps) => (
  <Container>
    <StyledMarkdownComponenet
      rehypePlugins={[rehypeRaw]}
      components={{
        code: renderCodeBlock
      }}
    >
      {markdownText}
    </StyledMarkdownComponenet>
  </Container>
);

export default MarkdownParser;
