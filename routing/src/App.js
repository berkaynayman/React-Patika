import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';

import Layout from './Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout/>} >
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="users" element={<Users/>} />
          <Route path="user/:id" element={<User/>} />
          <Route path="*" element={<Error404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App;
