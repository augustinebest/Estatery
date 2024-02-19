import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Loader from "./components/loader/loader";

// Pages
const Home = React.lazy(() => import("./pages/home/home"));
const Layout = React.lazy(() => import("./components/layout/layout"));

const Loading = () => <Loader />;

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="home" element={<React.Fragment />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Router;
