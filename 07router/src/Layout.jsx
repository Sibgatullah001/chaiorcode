import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout