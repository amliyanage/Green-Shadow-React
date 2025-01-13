import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import {ToastContainer} from "react-toastify";
import RootLayout from "./components/RootLayout.tsx";
import Home from "./components/Home.tsx";

function App() {

  return (
      <>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/dashbaord" element={ <RootLayout /> } >
                    <Route path="home" element={ <Home /> } />
                </Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
