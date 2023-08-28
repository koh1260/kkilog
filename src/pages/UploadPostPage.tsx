import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FaEarthAmericas, FaLock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { UpdatePostData } from '../type/request';

interface UploadPostPageProps {
  id?: number;
  title?: string;
  content: string;
  introduction?: string;
  thumbnail?: string;
  publicScope?: 'PUBLIC' | 'PRIVATE';
  setModalVisible(visible: boolean): void;
}

interface PublicScopeButtonProps {
  $isActive: boolean;
}

const Container = styled.div`
  z-index: 999999;
  position: absolute;
  background-color: #f8f9fa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBlock = styled.div`
  width: 100%;
  height: 425px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 768px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// -------------------------------------

const LeftBlock = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
`;

const TitleInput = styled.input`
  font-size: 2rem;
`;

const ThumbnailImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const SelectImageButton = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  width: fit-content;
  margin-bottom: 12px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
`;

const IntroductionTextArea = styled.textarea`
  font-size: 1rem;
`;

const Divider = styled.div`
  width: 1px;
  min-height: 425px;
  background-color: #e9ecef;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const RightBlock = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PublicScopeBlock = styled.div`
  display: flex;
  gap: 32px;
`;

const PublicScopeButton = styled.button<PublicScopeButtonProps>`
  width: 50%;
  height: 3rem;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
  color: ${(props) => props.$isActive && '#529EDC'};
`;

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryText = styled.h3`
  margin-bottom: 12px;
`;

const CategoryButtonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 4px;
`;

const CategoryButton = styled.button`
  background-color: white;
  width: calc(25% - 3px);
  height: 2.2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid lightgray;
`;

const PostingButtonBlock = styled.div`
  display: flex;
  justify-content: end;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PostingButton = styled.button`
  color: white;
  background-color: #529edc;
  padding: 0.6rem 1.4rem;
  margin-left: 18px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const UploadPostPage = ({
  id,
  content,
  setModalVisible,
  title,
  introduction,
  thumbnail,
  publicScope
}: UploadPostPageProps) => {
  const navigate = useNavigate();
  const [postIntroduction, setPostIntroduction] = useState(introduction);
  const [postThumbnail, setPostThumbnail] = useState(thumbnail);
  const [postTitle, setPostTitle] = useState(title);
  const [postPublicScope, setPostPublicScope] = useState<'PUBLIC' | 'PRIVATE'>('PUBLIC');
  // const [category, setCategory] = useState('');

  useEffect(() => {
    console.log(publicScope);
    console.log(postPublicScope);
    console.log(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = new FormData();
    if (!e.target.files) throw new Error('이미지가 없습니다.');
    form.append('file', e.target.files[0]);
    const response = await api.uploadImage(form);
    if (!response.result) throw new Error('이미지 url이 없습니다.');
    setPostThumbnail(response.result.filePath);
  }

  const handleOnClickPosting = async () => {
    const payload: UpdatePostData = {
      content,
      title: postTitle,
      introduction: postIntroduction,
      thumbnail: postThumbnail,
      publicScope: postPublicScope
    }
    const response = await api.updatePost(id!, payload);
    navigate(-1);
    console.log(response);
  }

  return (
    <Container>
      <ContentBlock>
        <Content>
          <LeftBlock>
            <TitleInput placeholder='제목' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
            <ThumbnailImageBlock>
              <SelectImageButton type='file' onChange={handleUploadImage} />
              <p>sda</p>
              <ThumbnailImage src={postThumbnail} />
            </ThumbnailImageBlock>
            <IntroductionTextArea placeholder='소개글' value={postIntroduction} onChange={(e) => setPostIntroduction(e.target.value)} />
          </LeftBlock>
          <Divider />
          <RightBlock>
            <PublicScopeBlock>
              <PublicScopeButton
                $isActive={publicScope === 'PUBLIC'}
                onClick={() => setPostPublicScope('PUBLIC')}
              >
                <FaEarthAmericas />
                <p>전체 공개</p>
              </PublicScopeButton>
              <PublicScopeButton
                $isActive={publicScope === 'PRIVATE'}
                onClick={() => setPostPublicScope('PRIVATE')}
              >
                <FaLock />
                <p>비공개</p>
              </PublicScopeButton>
            </PublicScopeBlock>
            <CategoryBlock>
              <CategoryText>카테고리</CategoryText>
              <CategoryButtonBlock>
                {/* 카테고리 수 만큼 */}
                <CategoryButton>생각 정리</CategoryButton>
                <CategoryButton>Front-end</CategoryButton>
                <CategoryButton>Back-end</CategoryButton>
                <CategoryButton>DevOps</CategoryButton>
                <CategoryButton>DevOps</CategoryButton>
              </CategoryButtonBlock>
            </CategoryBlock>
            <PostingButtonBlock>
              <CancelButton onClick={() => setModalVisible(false)}>
                취소
              </CancelButton>
              <PostingButton onClick={handleOnClickPosting}>포스팅</PostingButton>
            </PostingButtonBlock>
          </RightBlock>
        </Content>
      </ContentBlock>
    </Container>
  );
};

export default UploadPostPage;
