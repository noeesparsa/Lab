import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './icon-link.module.scss';

export interface IProps {
  readonly link: string;
  readonly iconSize: SizeProp;
  readonly icon: IconProp;
}
export function IconLink({ link, iconSize, icon }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cx('icon-link')}>
      <FontAwesomeIcon size={iconSize} icon={icon} />
    </a>
  );
}
