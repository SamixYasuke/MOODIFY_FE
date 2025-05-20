import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>My App Header</header>
      <main>
        <Outlet />
      </main>
      <footer>My App Footer</footer>
    </div>
  );
};

export default Layout;
