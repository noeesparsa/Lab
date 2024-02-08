import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './app.module.scss';
import { Navbar, SidebarMenu } from '@lab/react-components';

export default function App(): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('skeleton')}>
      <header className={cx('skeleton__header')}>
        <Navbar
          logoUrl="/logo.png"
          buttons={[
            <a
              key={1}
              href="https://github.com/Rangoow/Lab"
              target="_blank"
              rel="noopener noreferrer"
              className={cx('skeleton__header__link')}
            >
              <FontAwesomeIcon key={1} size="lg" icon={faGithub} />
            </a>,
            <a
              key={2}
              href="https://www.linkedin.com/in/no%C3%A9-esparsa-22557213a/"
              target="_blank"
              rel="noopener noreferrer"
              className={cx('skeleton__header__link')}
            >
              <FontAwesomeIcon key={1} size="lg" icon={faLinkedin} />
            </a>,
          ]}
        />
      </header>

      <div className={cx('skeleton__container')}>
        <nav className={cx('skeleton__menu')}>
          <SidebarMenu menuButtonsProperties={[]} menuButtonTitle="toogle menu" />
        </nav>
        <main className={cx('skeleton__content')}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
