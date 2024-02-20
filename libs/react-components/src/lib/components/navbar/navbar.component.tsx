import classNames from 'classnames/bind';
import styles from './navbar.module.scss';

interface IProps {
  readonly logoUrl: string;
  readonly buttons?: React.JSX.Element[];
}

export function Navbar({ logoUrl, buttons }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('navbar')}>
      <div className={cx('navbar__logo__container')}>
        <a href="/">
          <img src={logoUrl} alt="applicaiton logo" className={cx('navbar__logo__image')} />
        </a>
        <p className={cx('navbar__logo__title', 'typo_text-2')}>Laboratory</p>
      </div>
      <div className={cx('navbar__buttons__container')}>
        {buttons ? buttons.map((element: React.JSX.Element): React.JSX.Element => element) : null}
      </div>
    </div>
  );
}
