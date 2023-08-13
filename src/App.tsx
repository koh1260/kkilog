import { RouterProvider } from 'react-router-dom';
import router from './router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )

export default App;
