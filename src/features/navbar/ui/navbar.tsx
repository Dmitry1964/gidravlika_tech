import { NavLink } from 'react-router-dom';
import cls from './navbar.module.scss';
import { AppRoutes } from 'src/app/routes/routes';

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className="container">
        <ul className={cls.navbar_list}>
          <li className={cls.navbar_item}>
            <NavLink
              to={AppRoutes.Main}
              className={({ isActive }) =>
                [cls.navbar_link, isActive ? cls.active : ''].join(' ')
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={cls.navbar_item}>
            <NavLink
              to={AppRoutes.Repair}
              className={({ isActive }) =>
                [cls.navbar_link, isActive ? cls.active : ''].join(' ')
              }
            >
              Ремонт оборудования
            </NavLink>
          </li>
          <li className={cls.navbar_item}>
            <NavLink
              to={AppRoutes.Sevice}
              className={({ isActive }) =>
                [cls.navbar_link, isActive ? cls.active : ''].join(' ')
              }
            >
              Ремонт спецтехники
            </NavLink>
          </li>
          <li className={cls.navbar_item}>
            <NavLink
              to={AppRoutes.Rvd}
              className={({ isActive }) =>
                [cls.navbar_link, isActive ? cls.active : ''].join(' ')
              }
            >
              Производство РВД
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
