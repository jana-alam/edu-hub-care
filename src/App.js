import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AllCourses from "./components/AllCourses/AllCourses";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Confirmed from "./components/Confirmed/Confirmed";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* About Route */}
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          {/* All Courses Route */}
          <Route path="/courses">
            <AllCourses></AllCourses>
          </Route>
          {/* Contact Route */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* Order Confirmation Route */}
          <Route path="/confirmed">
            <Confirmed></Confirmed>
          </Route>
          {/* Not Found Route */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
