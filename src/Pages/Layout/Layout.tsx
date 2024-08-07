import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightBar from "@/Components/RightBar/RightBar";

const Layout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 h-screen">
      <Sidebar />
      <main className="h-full sm:pl-20 sm:pr-96">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      <RightBar />
    </div>
  );
};

export default Layout;
