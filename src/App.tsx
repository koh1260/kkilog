import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  const queryClient = new QueryClient(
    {
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0
      }
    }
  }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
