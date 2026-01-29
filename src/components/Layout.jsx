import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
