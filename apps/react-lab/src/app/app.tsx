import { Outlet } from 'react-router-dom';
import logo from '../assets/logo_without_background.png';

import { Navbar } from '@lab/react-components';

import './app.module.scss';

export default function App(): JSX.Element {
  return (
    <div>
      <Navbar logo={logo} redirection={'/'} />
      <Outlet />
    </div>
  );
}
