import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface MarkdownEditorProps {
  title: string;
  text: string;
  setTitle(title: string): void;
  setText(text: string): void;
  onClickPost(): void
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TextareaBlock = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleInput = styled.textarea`
  width: 100%;
  font-size: 2.8rem;
  padding: 0.4rem;
  margin-bottom: 2rem;
  border: none;
  height: fit-content;
`;

const MarkdownTextarea = styled.textarea`
  width: 100%;
  flex: 1;
  padding: 0.4rem;
  font-size: 1.125rem;
  border: none;
`;

const ButtonBlock = styled.div`
  height: 5rem;
  padding: 0 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 7px;
  font-weight: 600;
  font-size: 1.1rem;
  outline: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #84aaff;
  }
`;

const MarkdownEditor = ({
  title,
  text,
  setTitle,
  setText,
  onClickPost,
}: MarkdownEditorProps) => {
  const navigate = useNavigate();

  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setText(`${text}\t`);
    }
  };

  return (
    <Container>
      <TextareaBlock>
        <TitleInput
          placeholder='제목을 입력하세요.'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <MarkdownTextarea
          placeholder='내용을 입력하세요.'
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleTab}
          value={text}
        />
      </TextareaBlock>
      <ButtonBlock>
        <Button onClick={() => navigate(-1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            height={20}
            width={20}
          >
            <path
              d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'
              fill='currentColor'
            />
          </svg>
          <p>뒤로가기</p>
        </Button>
        <Button onClick={onClickPost}>등록하기</Button>
      </ButtonBlock>
    </Container>
  );
};

export default MarkdownEditor;
