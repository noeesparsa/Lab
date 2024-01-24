import { VtmnTabs, VtmnTabsItem } from '@vtmn/react';
import { VtmnTabsAlign, VtmnTabsSize } from '@vtmn/react/dist/src/components/navigation/VtmnTabs/types';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ITabs } from './interfaces';

interface IProps {
  readonly tabs: ITabs[];
  readonly tabSize?: VtmnTabsSize;
  readonly tabAlignment?: VtmnTabsAlign;
}

export function UiTabs({ tabs, tabSize = 'medium', tabAlignment = 'start' }: IProps): React.JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const isTabSelected = useCallback((tabPath: string): boolean => location.pathname.endsWith(tabPath), [location]);

  return (
    <VtmnTabs size={tabSize} align={tabAlignment}>
      {tabs.map(
        (tab: ITabs): React.JSX.Element => (
          <VtmnTabsItem
            key={tab.id}
            aria-selected={isTabSelected(tab.path)}
            title={t(tab.titleTranslationKey)}
            onClick={() => navigate(tab.path)}
            icon={tab.icon}
            badgeValue={tab.badgeValue}
          >
            {t(tab.titleTranslationKey)}
          </VtmnTabsItem>
        ),
      )}
    </VtmnTabs>
  );
}
