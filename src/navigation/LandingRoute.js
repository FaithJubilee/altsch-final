import { Navigate, Route, Routes } from "react-router-dom";
import { LOGIN_ROUTE, ABOUT_ROUTE, FINDER_ROUTE, HOME_ROUTE } from "../content-mgt/Landing";
import Layout from "../layout/Layout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Finder from "../pages/Finder";
import Singin from "../pages/auth/Signin";

const LandingRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="auth" />} />
        <Route path={LOGIN_ROUTE} element={<Singin />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={FINDER_ROUTE} element={<Finder />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default LandingRoute;
