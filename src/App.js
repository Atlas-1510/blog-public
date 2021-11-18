import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Div inside BrowserRouter has min height of 90vh to account for the footer, which has a height of 10vh
// This structure enables footer to remain the same across all article pages.

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[90vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":articleID" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
