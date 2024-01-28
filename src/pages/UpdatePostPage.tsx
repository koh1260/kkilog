import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { FaEarthAmericas, FaLock } from 'react-icons/fa6';
import api from '../api/api';
import { UpdatePostData } from '../type/request';
import { SimpleCategory } from '../type';
import useUpdatePost from '../hooks/useUpdatePost';

interface UpdatePostPageProps {
  id: number;
  title: string;
  content: string;
  introduction: string;
  publicScope: 'PUBLIC' | 'PRIVATE';
  thumbnail: string;
  categoryList: SimpleCategory[]
  category: {id: number, categoryName: string}
  setModalVisible(visible: boolean): void;
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
  display: none;
`;

const UploadImageButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
`;

const ImageBlock = styled.div`
  overflow: hidden;
  margin-top: 1rem;
  width: 100%;
  aspect-ratio: 16/9;
`;

const EmptyImage = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  height: 100%;
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

interface PublicScopeButtonProps {
  $isActive: boolean;
}

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

interface CategoryButtonProp {
  $isActive: boolean;
}

const CategoryButton = styled.button<CategoryButtonProp>`
  background-color: ${(props) => (props.$isActive ? '#529edc' : 'white')};
  color: ${(props) => (props.$isActive ? 'white' : 'black')};
  width: calc(50% - 3px);
  height: 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
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

const UpdatePostPage = ({
  id,
  content,
  title,
  introduction,
  publicScope,
  thumbnail,
  categoryList,
  category,
  setModalVisible
}: UpdatePostPageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useUpdatePost();

  const [postIntroduction, setPostIntroduction] = useState(introduction);
  const [postTitle, setPostTitle] = useState(title);
  const [postPublicScope, setPostPublicScope] = useState<'PUBLIC' | 'PRIVATE'>(publicScope);
  const [postThumbnail, setPostThumbnail] = useState(thumbnail);
  const [currentCategoryId, setCurrentCategoyId] = useState(category.id);

  const handleOnClickPosting = async () => {
    const payload: UpdatePostData = {
      title: postTitle,
      content,
      introduction: postIntroduction,
      thumbnail: postThumbnail,
      categoryId: currentCategoryId,
      publicScope: postPublicScope
    };

    mutate({ postId: id, payload })
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const { filePath } = await api.uploadImage(formData);
    if (!filePath) throw new Error('이미지 경로가 없습니다.');

    return filePath;
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    try {
      if (!file) throw new Error('이미지가 없습니다.');

      setPostThumbnail(await uploadImage(file));
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <Container>
      <ContentBlock>
        <Content>
          <LeftBlock>
            <TitleInput
              placeholder='제목'
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <ThumbnailImageBlock>
              <SelectImageButton
                ref={fileInputRef}
                type='file'
                accept='image/*'
                onChange={handleUploadImage}
              />
              <UploadImageButton onClick={() => fileInputRef.current?.click()}>
                이미지 선택
              </UploadImageButton>
              <ImageBlock>
                {thumbnail ? (
                  <ThumbnailImage src={thumbnail} />
                ) : (
                  <EmptyImage>이미지를 등록하세요!</EmptyImage>
                )}
              </ImageBlock>
            </ThumbnailImageBlock>
            <IntroductionTextArea
              placeholder='소개글'
              value={postIntroduction}
              onChange={(e) => setPostIntroduction(e.target.value)}
            />
          </LeftBlock>
          <Divider />
          <RightBlock>
            <PublicScopeBlock>
              <PublicScopeButton
                $isActive={postPublicScope === 'PUBLIC'}
                onClick={() => setPostPublicScope('PUBLIC')}
              >
                <FaEarthAmericas />
                <p>전체 공개</p>
              </PublicScopeButton>
              <PublicScopeButton
                $isActive={postPublicScope === 'PRIVATE'}
                onClick={() => setPostPublicScope('PRIVATE')}
              >
                <FaLock />
                <p>비공개</p>
              </PublicScopeButton>
            </PublicScopeBlock>
            <CategoryBlock>
              <CategoryText>카테고리</CategoryText>
              <CategoryButtonBlock>
                {categoryList.map((c) => (
                  <CategoryButton
                    key={c.id}
                    $isActive={c.id === currentCategoryId}
                    onClick={() => setCurrentCategoyId(c.id)}
                  >
                    {c.categoryName}
                  </CategoryButton>
                ))}
              </CategoryButtonBlock>
            </CategoryBlock>
            <PostingButtonBlock>
              <CancelButton onClick={() => setModalVisible(false)}>
                취소
              </CancelButton>
              <PostingButton onClick={handleOnClickPosting}>
                포스팅
              </PostingButton>
            </PostingButtonBlock>
          </RightBlock>
        </Content>
      </ContentBlock>
    </Container>
  );
};

export default UpdatePostPage;
