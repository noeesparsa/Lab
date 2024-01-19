import classNames from 'classnames/bind';
import styles from './navbar.module.scss';

export function Navbar(): React.JSX.Element {
  const cx = classNames.bind(styles);
  return <nav className={cx('navbar__container')}>tto</nav>;
}
