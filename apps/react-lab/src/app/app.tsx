import './app.module.scss';

import { Outlet } from 'react-router-dom';
import { Navbar } from '@laboratory/react-components';
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
