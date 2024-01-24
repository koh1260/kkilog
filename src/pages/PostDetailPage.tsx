import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Detail from '../components/Detail';
// import { Post } from '../type';
// import api from '../api/api';
// import Loading from '../components/Loading';
// import ClientExcepction from '../common/exceptions/client-exception';
import usePostDetail from '../hooks/usePostDetail';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const PostDetailPage = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [post, setPost] = useState<Post>();
  const { postId } = useParams();
  const { data } = usePostDetail(Number(postId));

  // useEffect(() => {


  //   (async () => {
  //     try {
  //       const response = await api.getPost(+postId);

  //       if (response.statusCode !== 200) throw new Error('없엉');
  //       setPost(response.result!);
  //     } catch (e) {
  //       if (e instanceof ClientExcepction) {
  //         console.error(`${e.stack}`);
  //       }
  //       else if (e instanceof Error) {
  //         throw new Error('에러 페이지 테스트 ');
  //       }
  //       setError(true);
  //     }
  //     setLoading(false);
  //     document.querySelector('body')?.scrollTo(0,0);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [postId]);

  // if (error) return <div>Error...</div>;

  return (
    <Container>
      <Detail post={data} />
    </Container>
  );
}

export default PostDetailPage;
