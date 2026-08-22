import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgest/header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
