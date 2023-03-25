import '@styles/app.css'
import Navbar from '@components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Coins from './pages/coins'
import News from './pages/news'
import Coin from './pages/coin'
import Four04 from './pages/404'
import MobileNavbar from './components/mobileNavbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <MobileNavbar />
      <Home />
      <Footer />
    </>,
    errorElement: 
    <>
      <Navbar />
      <MobileNavbar />
      <Four04 />
      <Footer />
    </>,
  },
  {
    path: "/coins",
    element:
      <>
        <Navbar />
        <MobileNavbar />
        <Coins />
        <Footer />
      </>
    ,
  },
  {
    path: "/news",
    element:
      <>
        <Navbar />
        <MobileNavbar />
        <News />
        <Footer />
      </>
    ,
  },
  {
    path: "/coin/:coinId",
    element:
      <>
        <Navbar />
        <MobileNavbar />
        <Coin />
        <Footer />
      </>
    ,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;