import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
  width: 100%;
  max-width: 395px;
`;

const Title = styled.h1`
  font-family: 'Bungee', sans-serif;
  font-size: 3.5rem;
  color: #444c66;

  @media screen and (max-width: 769px) {
    font-size: 2rem;
  }
`;

const Body = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopBlock = styled.div`
  display: flex;
  gap: 7rem;
  justify-content: center;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

const IntroductionBlock = styled.div`
  border-top: 2px solid rgb(194, 194, 194);
  border-bottom: 2px solid rgb(194, 194, 194);
  width: 100%;
`

const Introduction = styled.div`
  color: rgb(146, 146, 146);
  padding: 1.6rem 2rem;
  text-align: center;
`

const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftBlock = styled.div``;

const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  border: 0.5px;
  overflow: hidden;

  @media screen and (max-width: 769px) {
    width: 12rem;
    height: 12rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;

const Comment = styled.h2`
  font-family: 'Bungee', sans-serif;
  margin-top: 7rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #444c66;

  @media screen and (max-width: 769px) {
    margin-top: 4rem;
  }
`;

const IconBlock = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 769px) {
    gap: 1rem;
  }
`;

const DevIcon = styled.i`
  font-size: 4rem;

  @media screen and (max-width: 769px) {
    font-size: 3rem;
  }
`;

const AboutMe = () => (
  <Container>
    <Title>I&apos;m HAESUNG</Title>
    <Body>
      <TopBlock>
        <LeftBlock>
          <ImageContainer>
            <ProfileImage src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/kkiri.jpeg' />
          </ImageContainer>
        </LeftBlock>
      </TopBlock>
      <IntroductionBlock>
        <Introduction>
          반갑습니다
          <br />
          소프트웨어 개발자 강해성입니다!
        </Introduction>
      </IntroductionBlock>
      <BottomBlock>
        <Comment>Skill</Comment>
        <IconBlock>
          <DevIcon className="devicon-typescript-plain colored" />
          <DevIcon className='devicon-nestjs-plain colored' />
          <DevIcon className='devicon-react-original colored' />
          <DevIcon className='devicon-docker-plain colored' />
        </IconBlock>
      </BottomBlock>
    </Body>
  </Container>
);

export default AboutMe;
