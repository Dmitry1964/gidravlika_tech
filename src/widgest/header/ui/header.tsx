import { LogoBlock } from 'src/features/logo-block';
import cls from './header.module.scss';
import { Navbar } from 'src/features/navbar';
import { useScreenWidth } from 'src/shared/lib/hoos';
import { MOBILE_VIEWPORT } from 'src/shared/lib/constans';

const Header = () => {
  const screenWidth = useScreenWidth();

  return (
    <header className={cls.header}>
      <div className={cls.header_navigation}>
        <LogoBlock />
        {screenWidth >= MOBILE_VIEWPORT && <Navbar />}
      </div>
      <div className={cls.header_title}>
        <h2 className={cls.header_title_slogan}>
          ЭФФЕКТИВНЫЙ РЕМОНТ - НАШ ПРИОРИТЕТ
        </h2>
        <h2 className={cls.header_title_text}>
          РЕМОНТ ГИДРАВЛИЧЕСКОГО ОБОРУДОВАНИЯ СПЕЦТЕХНИКИ
        </h2>
      </div>
      <div className={cls.header_banner}>
        <picture>
          <source
            srcSet="/images/banner/banner-desktop.webp"
            type="image/webp"
          />
          <img
            src="/images/banner/banner-desktop.jpg"
            width="100%"
            height="100%"
            alt="Header Banner"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;
