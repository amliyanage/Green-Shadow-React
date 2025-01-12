import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import {ToastContainer} from "react-toastify";

function App() {

  return (
      <>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
