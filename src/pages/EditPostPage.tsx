import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import UpdatePostPage from './UpdatePostPage';
import { PostForUpdate, SimpleCategory } from '../type';
import api from '../api/api';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const EditPostPage = () => {
  const location = useLocation();
  const {
    id,
    content,
    title,
    introduction,
    publicScope,
    thumbnail,
    categorie,
  } = location.state.post as PostForUpdate;
  const [newText, setNewText] = useState(content);
  const [newTitle, setNewTitle] = useState(title);
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

  const handleOpenUpdatePage = () => {
    setUploadModalVisible(true);
  }

  return (
    <Container>
      {uploadModalVisible && (
        <UpdatePostPage
          id={id}
          title={newTitle}
          content={newText}
          introduction={introduction}
          publicScope={publicScope}
          thumbnail={thumbnail}
          categoryList={categoryList}
          category={categorie}
          setModalVisible={setUploadModalVisible}
        />
      )}
      <MarkdownEditor
        title={newTitle}
        text={newText}
        setTitle={setNewTitle}
        setText={setNewText}
        onClickPost={handleOpenUpdatePage}
      />
      <MarkdownPreview markdownText={newText} title={newTitle} />
    </Container>
  );
};

export default EditPostPage;
