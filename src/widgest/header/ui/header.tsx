import { LogoBlock } from 'src/features/logo-block';
import cls from './header.module.scss';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.header_banner}>
        <picture>
            <source srcSet="/images/banner/banner-desktop.webp" type="image/webp" />
            <img src="/images/banner/banner-desktop.jpg" width="100%" height="100%" alt="Header Banner" />
        </picture>
      </div>
      <LogoBlock />
    </header>
  );
};

export default Header;
