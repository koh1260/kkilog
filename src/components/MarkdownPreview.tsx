import React from 'react';
import styled from 'styled-components';
import MarkdownParser from './MarkdownParser';

interface MarkdownPreviewProps {
  markdownText: string;
  title: string
}

const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: 3rem;
  overflow: auto;
  background-color: #FBFDFC;
`;

const Title = styled.h1`
  margin-bottom: 4rem;
`;

const MarkdownPreview = ({ markdownText, title }: MarkdownPreviewProps) => (
  <Container>
    <Title>{title}</Title>
    <MarkdownParser markdownText={markdownText} />
  </Container>
);

export default MarkdownPreview;
