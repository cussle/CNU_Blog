import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={'/CNU_Blog/'}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
