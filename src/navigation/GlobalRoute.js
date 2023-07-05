import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BrandLoader from "../components/BrandLoader";
import LandingRoute from "./LandingRoute";

const GlobalRoute = () => {
    return (
        <>
            <Suspense fallback={<BrandLoader />}>
                <Routes>
                    <Route path="/*" element={<LandingRoute />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default GlobalRoute;