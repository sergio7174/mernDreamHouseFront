import FeaturedProperties from "./components/FeaturedProperties/FearturedProperties.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FindList from "./components/FindList/FindList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Newsletter from "./components/NewsLetter/NewsLetter.jsx";
import PopularProperties from "./components/popularProperties/popularProperties.jsx";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/Signup.jsx";
import Properties from "./components/Properties/Properties.jsx";
import PropertyDetail from "./components/propertyDetail/PropertyDetail.jsx";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { user } = useSelector((state) => state.auth);
  const url = useLocation().pathname;

  useEffect(() => {
    url && window.scrollTo(0, 0);
  }, [url]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Navbar />
                <FindList />
                <FeaturedProperties />
                <PopularProperties />
                <Newsletter />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/Signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/Signin"
          element={!user ? <Signin /> : <Navigate to="/" />}
        />
        <Route
          path="/Properties"
          element={
            user ? (
              <>
                <Navbar />
                <Properties />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/propertyDetail/:id"
          element={
            user ? (
              <>
                <Navbar />
                <PropertyDetail />
                <Footer />
              </>
            ) : (
              <Navigate to="/Signin" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
