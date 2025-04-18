import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/" element={<h1> Alumni Reviews </h1>} />
          <Route path="/" element={<h1> Project Lab </h1>} />
          <Route path="/apply" element={<h1> Apply Now Page </h1>} />
          <Route path="/course1" element={<h1> Course 1 </h1>} />
          <Route path="/course2" element={<h1> Course 2 </h1>} />
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}
