import { VtmnButton } from '@vtmn/react';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import { Navbar } from '@lab/react-components';

export default function App(): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('skeleton')}>
      <header className={cx('skeleton__header')}>
        <Navbar
          logoUrl="../../public/logo.png"
          buttons={[
            <VtmnButton key={1} size={'medium'} iconAlone="home-fill" />,
            <VtmnButton key={1} size={'medium'} iconAlone="user-fill" />,
          ]}
        />
      </header>

      <div className={cx('skeleton__container')}>
        <nav className={cx('skeleton__menu')}>
          <div>test1</div>
          <div>test2</div>
        </nav>
        <main className={cx('skeleton__content')}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
