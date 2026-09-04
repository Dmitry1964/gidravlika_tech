import { ButtonMenu } from 'src/shared/button-menu';
import cls from './logo-block.module.scss';
import { ContactsData, MOBILE_VIEWPORT } from 'src/shared/lib/constans';
import { useScreenWidth } from 'src/shared/lib/hoos';
import { useState } from 'react';

const LogoBlock = () => {

  const screenWidth = useScreenWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={cls.logo_block}>
      <div className="container">
        <div className={cls.logo_block_wrapper}>
          <div className={cls.logo_block_img}>
            <img
              src="/images/svg/logo-desktop.svg"
              width={75}
              height={75}
              alt="Logo"
            />
          </div>
          <div className={cls.logo_block_text}>
            <img
              src="/images/svg/logo-name.svg"
              width={130}
              height={30}
              alt="Logo Name"
            />
            <span>Ремонт и сервис<br className={cls.logo_block_break}/> гидравлических систем</span>
          </div>
          <div className={cls.logo_block_contacts}>
            <div className={cls.logo_block_contacts_address}>
              <img
                src="/images/svg/point.svg"
                width={40}
                height={40}
                alt="Point Icon"
              />
              <span>г.Волгоград,<br className={cls.logo_block_break}/>ул.им.Лавренёва,19Д</span>
            </div>
            <a className={cls.logo_block_contacts_link} href="tel:+79608726622">
              <img
                src="/images/svg/icon-phone.svg"
                width={40}
                height={40}
                alt="Phone Icon"
              />
              <span>{ContactsData.RepairPhone}</span>
            </a>
          </div>
          {screenWidth < MOBILE_VIEWPORT &&
            <ButtonMenu isOpen={isMenuOpen} onClick={handleClick} />
          }
        </div>
      </div>
    </div>
  );
};

export default LogoBlock;
