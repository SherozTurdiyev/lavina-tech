import { lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Index";
import useQueryApi from "./hooks/useQueryApi";
const Login = lazy(() => import('./pages/Login/Login'));
const Books = lazy(() => import('./pages/Books/Books'));
const SearchBooks = lazy(() => import('./pages/SearchBooks/SearchBooks'));


function App() {
  const { data } = useQueryApi('myself', "GET", "/myself");
  const user = data?.data?.data;



  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          user ?
            <>
              <Route index element={<Books />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/search" element={<SearchBooks />} />
            </>
            :
            <>
              <Route path="/" index element={<Login />} />
            </>
        }
      </Routes>
    </div>
  );
}

export default App;
