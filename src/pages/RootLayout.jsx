import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className=" bg-slate-900 text-slate-100">
      <Navbar />
      <main className=" bg-brand-dark">
        {/* The content of the current route will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
}
