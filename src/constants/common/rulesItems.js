import IconCart from '../../../assets/images/icons/icon-cart.svg';
import IconNotebook from '../../../assets/images/icons/icon-notebook.svg';
import IconPrize from '../../../assets/images/icons/icon-prize.svg';

const RULES_ITEMS = [
  {
    id: 1,
    icon: IconCart,
    iconTitle: 'Иконка корзины',
    titleLine1: 'купи два',
    isTitleLine1Big: true,
    titleLine2: 'продукта wella',
    isTitleLine2Big: true,
    isLink: true,
  }, {
    id: 2,
    icon: IconNotebook,
    iconTitle: 'Иконка чека',
    titleLine1: 'зарегистрируй',
    isTitleLine1Big: true,
    titleLine2: 'чек',
    isTitleLine2Big: true,
    isLink: false,
  }, {
    id: 3,
    icon: IconPrize,
    iconTitle: 'Иконка подарка',
    titleLine1: 'выиграй',
    isTitleLine1Big: true,
    titleLine2: 'приз',
    isTitleLine2Big: true,
    isLink: false,
  }
];

export default {
  RULES_ITEMS,
};
