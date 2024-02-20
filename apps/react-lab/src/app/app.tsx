import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './app.module.scss';
import { SIDEBAR_MENU } from './constants/sidebar-menu.constants';
import { IconLink, Navbar, SidebarMenu } from '@lab/react-components';

export default function App(): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('skeleton')}>
      <header className={cx('skeleton__header')}>
        <Navbar
          logoUrl="/logo.png"
          buttons={[
            <IconLink
              key="1"
              link="https://www.linkedin.com/in/no%C3%A9-esparsa-22557213a/"
              iconSize="lg"
              icon={faLinkedin}
            />,
            <IconLink key="2" link="https://github.com/Rangoow/Lab" iconSize="lg" icon={faGithub} />,
          ]}
        />
      </header>

      <div className={cx('skeleton__container')}>
        <nav className={cx('skeleton__menu')}>
          <SidebarMenu menuButtonsProperties={SIDEBAR_MENU} menuButtonTitle="toogle menu" />
        </nav>
        <main className={cx('skeleton__content', 'typo_text-3')}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
