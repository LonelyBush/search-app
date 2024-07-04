import hpIcon from '../../../assets/icon/heart-icon.svg';
import defIcon from '../../../assets/icon/shield-icon.svg';
import atackIcon from '../../../assets/icon/sword-icon.svg';
import speedIcon from '../../../assets/icon/wing-icon.svg';

interface IconCollectionInterface {
  [key: string]: string;
  hp: string;
  defense: string;
  attack: string;
  speed: string;
}

export const iconCollection: IconCollectionInterface = {
  hp: hpIcon,
  defense: defIcon,
  attack: atackIcon,
  speed: speedIcon,
};

export default iconCollection;
