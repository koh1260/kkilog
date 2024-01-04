import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import UpdatePostPage from './UpdatePostPage';
import { PostForUpdate, SimpleCategory } from '../type';
import api from '../api/api';

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
  const {
    id,
    content,
    title,
    introduction,
    publicScope,
    thumbnail,
    categoryName
  } = location.state.post as PostForUpdate;
  console.log(location);
  const [text, setText] = useState(content);
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
      {/* TODO 새로운 uploadModal로 변경 */}
      {uploadModalVisible && (
        <UpdatePostPage
          id={id}
          title={title}
          content={text}
          introduction={introduction}
          publicScope={publicScope}
          thumbnail={thumbnail}
          categoryList={categoryList}
          categoryName={categoryName}
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
          height={90}
        />
        <ButtonBlock>
          <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
          <PostingButton onClick={() => setUploadModalVisible(true)}>
            수정하기
          </PostingButton>
        </ButtonBlock>
      </EdittorBlock>
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

export default EditPostPage;
