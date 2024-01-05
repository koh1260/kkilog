import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { styled } from 'styled-components';
import UploadPostPage from './UploadPostPage';
import api from '../api/api';
import { SimpleCategory } from '../type';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
`;

const WritePostPage = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
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

  const handleOpenUploadPage = () => {
    if (title.length < 1) {
      toast.error('🐘 제목이 비어있어요!');
      return;
    }
    if (text.length < 1) {
      toast.error('🐘 내용이 비어있어요!');
      return;
    }
    setUploadModalVisible(true);
  };

  return (
    <Container>
      {uploadModalVisible && (
        <UploadPostPage
          content={text}
          title={title}
          categoryList={categoryList}
          setModalVisible={setUploadModalVisible}
        />
      )}
      <MarkdownEditor
        title={title}
        text={text}
        setTitle={setTitle}
        setText={setText}
        onClickPost={handleOpenUploadPage}
      />
      <MarkdownPreview markdownText={text} title={title} />
      <ToastContainer
        position='top-center'
        autoClose={3000}
      />
    </Container>
  );
};

export default WritePostPage;
