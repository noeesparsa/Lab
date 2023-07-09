import './app.module.scss';

import { Navbar } from '@laboratory/react-components';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

export function App() {
  return (
    <div>
      <Navbar logo={logo} redirection={'/'} />
      <Outlet />
    </div>
  );
}

export default App;
