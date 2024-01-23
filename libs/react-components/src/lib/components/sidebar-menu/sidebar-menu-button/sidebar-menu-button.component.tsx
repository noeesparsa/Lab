import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnButton, VtmnIcon } from '@vtmn/react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { EReactComponentsDataTestId } from '../../../enums';
import styles from './sidebar-menu-button.module.scss';

interface IProps {
  readonly icon: VitamixId;
  readonly text: string;
  readonly title: string;
  readonly isCollapsed?: boolean;
  readonly redirectPath: string;
}

export function SidebarMenuButton({ icon, text, isCollapsed = false, redirectPath, title }: IProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cx = classNames.bind(styles);

  return (
    <VtmnButton
      className={cx({ 'button--collapsed': isCollapsed }, { 'button--uncollapsed': !isCollapsed })}
      title={t(title)}
      variant="ghost"
      size="stretched"
      onClick={() => navigate(redirectPath)}
    >
      <VtmnIcon data-testid={EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON_ICON} value={icon} />
      {isCollapsed ? null : <span className="typo_text-3 ml-4">{t(text)}</span>}
    </VtmnButton>
  );
}
