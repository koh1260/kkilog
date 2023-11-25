import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #444c66;
`;

const Body = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
`;

const TopBlock = styled.div`
  display: flex;
  gap: 7rem;
  justify-content: space-between;
`;

const BottomBlock = styled.div``;

const LeftBlock = styled.div``;

const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  border: 0.5px;
  overflow: hidden;
  border: 2px solid #84aaff;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;

const RightBlock = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubTitle = styled.h3`
  color: #6ea3ff;
  margin-bottom: 0.2rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
`;

const ContentBlock = styled.div``;

const Comment = styled.h3`
  margin-top: 5rem;
  margin-bottom: 1.5rem;
`;

const IconBlock = styled.div`
  display: flex;
  gap: 2rem;
`;

const DevIcon = styled.i`
  font-size: 4rem;
`;

const AboutMe = () => (
  <Container>
    <Title>ABOUT ME</Title>
    <Body>
      <TopBlock>
        <LeftBlock>
          <ImageContainer>
            <ProfileImage src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/kkiri.jpeg' />
          </ImageContainer>
        </LeftBlock>
        <RightBlock>
          <ContentBlock>
            <SubTitle>NAME</SubTitle>
            <Content>강 해 성</Content>
          </ContentBlock>
          <ContentBlock>
            <SubTitle>E-MAIL</SubTitle>
            <Content>koh1260@naver.com</Content>
          </ContentBlock>
          <ContentBlock>
            <SubTitle>I HOPE</SubTitle>
            <Content>Back-End Engineer</Content>
          </ContentBlock>
        </RightBlock>
      </TopBlock>
      <BottomBlock>
        <Comment>Tools I enjoy using for development</Comment>
        <IconBlock>
          <DevIcon className='devicon-react-original colored' />
          <DevIcon className='devicon-nestjs-plain colored' />
          <DevIcon className='devicon-docker-plain colored' />
          <DevIcon className='devicon-amazonwebservices-original colored' />
        </IconBlock>
      </BottomBlock>
    </Body>
  </Container>
);

export default AboutMe;
