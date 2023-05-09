import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./component/loginpage";
import Registerpage from "./component/register";
import Landingpage from "./component/landing";
import Slider from "./component/slider";
import Slider1 from "./component/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fourthbody from "./component/fourthbody";
import FifthBody from "./component/fifthbody";
import footer from "./component/footer";
import Footer from "./component/footer";
import Blog from "./component/blog";

function App() {
  return (
    <div>
      {/* <Loginpage /> */}
      {/* <Registerpage /> */}
      <Landingpage />
      {/* <Slider1 /> */}
      {/* <Fourthbody />
      <FifthBody />
      <Footer /> */}
      {/* <Blog/> */}
    </div>
  );
}

export default App;
