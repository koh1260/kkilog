import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

type MDEditorOnChange = (
  value?: string,
  event?: React.ChangeEvent<HTMLTextAreaElement>,
  state?: ContextStore
) => void;

const Container = styled.div`
  height: 100vh;
  .editor {
    position: relative;
  }
`;

const EdittorBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem;
  justify-content: space-between;
`;

const BackButton = styled.button`
  padding: 1rem;
  border: 0.5px solid lightgray;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  background-color: powderblue;
  border-radius: 12px;
`;

const PostingButton = styled.button`
  padding: 1rem 2rem;
  border: 0.5px solid lightgray;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  background-color: powderblue;
  border-radius: 12px;
`;

const EditPostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {content} = location.state;
  const [text, setText] = useState(content);

  const onClick: MDEditorOnChange = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>  ) => {
    console.log(text);
    setText(event!.target.value);
  };

  return (
    <Container>
      <EdittorBlock>
        <MDEditor
          className="editor"
          value={text}
          onChange={onClick}
          preview="live"
          fullscreen
          height={90}
        />
        <ButtonBlock>
          <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
          <PostingButton>수정하기</PostingButton>
        </ButtonBlock>
      </EdittorBlock>
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
}

export default EditPostPage;
