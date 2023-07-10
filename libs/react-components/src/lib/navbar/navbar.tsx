import { ReactNode } from 'react';

export interface NavbarComponentProps {
  logo: string;
  redirection: string;
  actions?: ReactNode[];
  isFixed?: boolean;
}

export function Navbar({
  logo,
  redirection,
  actions,
  isFixed,
}: NavbarComponentProps): JSX.Element {
  return (
    <header
      className={`vtmn-navbar vtmn-shadow-100 ${isFixed ? `vtmn-sticky` : ``}`}
      data-testid="header"
    >
      <div className="vtmn-navbar_logo">
        <a
          href={redirection}
          className="vtmn-flex vtmn-justify-center vtmn-items-center "
          title="Go back home"
        >
          <img className="vtmn-h-full" src={logo} alt="Laboratory" />
        </a>
      </div>
      <div className="vtmn-flex vtmn-flex-row vtmn-items-center vtmn-gap-2">
        {actions}
      </div>
    </header>
  );
}

export default Navbar;
