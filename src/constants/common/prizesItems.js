import IconPhone from '../../../assets/images/icons/icon-phone.svg';
import IconPhoneSimple from '../../../assets/images/icons/icon-phone-simple.svg';
import IconShopping from '../../../assets/images/icons/icon-shopping.svg';
import IconHairStyler from '../../../assets/images/icons/icon-hair-styler.svg';
import IconCertificate from '../../../assets/images/icons/icon-certificate.svg';
import Icon40BYN from '../../../assets/images/icons/icon-40byn.svg';
import Icon140BYN from '../../../assets/images/icons/icon-140byn.svg';

const PRIZES_ITEMS_RU = [
  {
    id: 1,
    icon: IconPhone,
    feature: 'Гарантированно*',
    titleLine1: '140\u00A0₽',
    isTitleLine1Big: true,
    titleLine2: 'на\u00A0телефон',
    isTitleLine2Big: true,
  }, {
    id: 2,
    icon: IconShopping,
    feature: 'Ежедневно',
    titleLine1: '1400\u00A0₽',
    isTitleLine1Big: true,
    titleLine2: 'на\u00A0шопинг',
    isTitleLine2Big: false,
  }, {
    id: 3,
    icon: IconHairStyler,
    feature: 'Еженедельно',
    titleLine1: 'стайлер',
    isTitleLine1Big: true,
    titleLine2: 'для\u00A0волос',
    isTitleLine2Big: false,
  }, {
    id: 4,
    icon: IconCertificate,
    feature: 'Главный приз',
    titleLine1: '140 000\u00A0₽',
    isTitleLine1Big: true,
    titleLine2: 'на\u00A0преображение',
    isTitleLine2Big: false,
  }
];

const PRIZES_ITEMS_BY = [
  {
    id: 1,
    icon: Icon40BYN,
    feature: 'Ежедневно',
    titleLine1: '40\u00A0BYN',
    isTitleLine1Big: true,
    titleLine2: 'подарочный сертификат*',
    isTitleLine2Big: false,
  }, {
    id: 2,
    icon: Icon140BYN,
    feature: 'Еженедельно',
    titleLine1: '140\u00A0BYN',
    isTitleLine1Big: true,
    titleLine2: 'подарочный сертификат**',
    isTitleLine2Big: false,
  }, {
    id: 3,
    icon: IconPhoneSimple,
    feature: 'Главный приз',
    titleLine1: 'iPhone\u00A0SE,\u00A064GB',
    isTitleLine1Big: true,
    titleLine2: '',
    isTitleLine2Big: false,
  }
];

export default {
  PRIZES_ITEMS_RU,
  PRIZES_ITEMS_BY,
};
