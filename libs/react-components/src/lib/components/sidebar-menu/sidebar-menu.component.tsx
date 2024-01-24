import { VtmnButton, VtmnIcon } from '@vtmn/react';
import classNames from 'classnames/bind';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { EReactComponentsDataTestId } from '../../enums/';
import { ISidebarMenuElement } from './interfaces';
import { SidebarMenuButton } from './sidebar-menu-button';
import styles from './sidebar-menu.module.scss';

interface IProps {
  readonly menuButtonsProperties: ISidebarMenuElement[];
  readonly menuButtonTitle: string;
}

export function SidebarMenu({ menuButtonsProperties, menuButtonTitle }: IProps) {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(true);
  const toggleMenu = useCallback((): void => {
    setIsMenuCollapsed(!isMenuCollapsed);
  }, [isMenuCollapsed]);
  const cx = classNames.bind(styles);

  return useMemo(
    () => (
      <div role="menubar" className={cx('menu', 'flex')}>
        <div className={cx('hiddenMobile')}>
          <VtmnButton
            variant="ghost"
            onClick={toggleMenu}
            aria-label="sidebar_menu_button"
            title={menuButtonTitle}
            size="stretched"
            className={cx('toggle-button')}
          >
            <VtmnIcon
              data-testid={EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON}
              value={isMenuCollapsed ? `menu-line` : `chevron-left-line`}
            />
          </VtmnButton>
        </div>
        <ul className={cx('menu__list', 'flex')}>
          {menuButtonsProperties.map(
            (element: ISidebarMenuElement): ReactElement => (
              <li key={element.key}>
                <SidebarMenuButton
                  title={element.title}
                  icon={element.icon}
                  text={element.text}
                  redirectPath={element.redirectPath}
                  isCollapsed={isMenuCollapsed}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    ),
    [cx, isMenuCollapsed, menuButtonTitle, menuButtonsProperties, toggleMenu],
  );
}
