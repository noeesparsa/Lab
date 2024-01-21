import { Outlet } from 'react-router-dom';

export default function App(): React.JSX.Element {
  return (
    <div className={`vtmn-flex vtmn-flex-col vtmn-w-full vtmn-h-full vtmn-bg-background-secondary`}>
      <Outlet />
    </div>
  );
}
