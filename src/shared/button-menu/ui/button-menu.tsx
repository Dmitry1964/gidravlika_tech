import cls from './button-menu.module.scss';
import {classNames} from 'src/shared/lib/class-names'

type ButtonMenuProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const ButtonMenu = ({ isOpen, onClick }: ButtonMenuProps) => {
  return (<button className={classNames(cls.button_menu, [], { [cls.button_menu_open]: isOpen })} onClick={onClick} ></button>);
};

export default ButtonMenu;
