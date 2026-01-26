import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
    </>
  );
}

export default Layout;
