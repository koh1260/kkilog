import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import UploadPostPage from './UploadPostPage';
import api from '../api/api';
import { SimpleCategory } from '../type';

type MDEditorOnChange = (
  value?: string,
  event?: React.ChangeEvent<HTMLTextAreaElement>,
  state?: ContextStore
) => void;

const Container = styled.div`
  position: relative;
  z-index: 1;
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

const WritePostPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('**Hello world!!!**');
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [categoryList, setCategoryList] = useState<SimpleCategory[]>([]);

  useEffect(() => {
    (async () => {
      const categories = (await api.getCategoryList()).result!;
      const tmpList: SimpleCategory[] = [];
      // depth가 있는 카테고리 평탄화
      categories.forEach((c) => {
        tmpList.push({ id: c.id, categoryName: c.categoryName });

        if (c.childCategories.length >= 1) {
          c.childCategories.forEach((cc) =>
            tmpList.push({ id: cc.id, categoryName: cc.categoryName })
          );
        }
      });
      setCategoryList(tmpList);
    })();
  }, []);

  const onClick: MDEditorOnChange = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(text);
    setText(event!.target.value);
  };

  return (
    <Container>
      {uploadModalVisible && (
        <UploadPostPage
          content={text}
          categoryList={categoryList}
          setModalVisible={setUploadModalVisible}
        />
      )}
      <EdittorBlock>
        <MDEditor
          className='editor'
          value={text}
          onChange={onClick}
          preview='live'
          fullscreen
          height={500}
        />
        <ButtonBlock>
          <BackButton
            onClick={() => {
              navigate(-1);
              document.body.style.overflow = 'auto';
            }}
          >
            뒤로 가기
          </BackButton>
          <PostingButton onClick={() => setUploadModalVisible(true)}>
            포스팅
          </PostingButton>
        </ButtonBlock>
      </EdittorBlock>
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

export default WritePostPage;
