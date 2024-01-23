import { randUuid, randWord } from '@ngneat/falso';
import { RenderResult, screen } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import * as router from 'react-router';
import { Mock, MockInstance } from 'vitest';
import { customRender } from '../../tests/custom-render';
import { UiTabs } from './ui-tabs.component';
import { ITabs } from './interfaces';

const user: UserEvent = userEvent.setup();
const mockedUseNavigate: Mock = vi.fn();

describe('uiTabs', (): void => {
  let tabs: ITabs[];
  let spyOnNavigate: MockInstance;

  describe('snapshot testing', (): void => {
    beforeEach((): void => {
      tabs = [
        { titleTranslationKey: 'tab1', path: 'tab_1', id: 'tab_1_id' },
        { titleTranslationKey: 'tab2', path: 'tab_2', id: 'tab_2_id', icon: 'user-line', badgeValue: 10 },
      ];
    });

    it(`should render correctly and match the snapshot`, async (): Promise<void> => {
      expect.assertions(1);

      const result: RenderResult = await customRender(<UiTabs tabs={tabs} />);

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    const tabTitle1: string = randWord();
    const tabTitle2: string = randWord();

    beforeEach((): void => {
      tabs = [
        { titleTranslationKey: tabTitle1, path: 'tab_1', id: randUuid() },
        {
          titleTranslationKey: tabTitle2,
          path: 'tab_2',
          id: randUuid(),
          icon: 'user-line',
        },
      ];
      spyOnNavigate = vi.spyOn(router, `useNavigate`).mockImplementation(() => mockedUseNavigate);
    });

    it(`should display a tab list with the correct number of tabs`, async (): Promise<void> => {
      expect.assertions(2);

      await customRender(<UiTabs tabs={tabs} />);
      const tabListElement: HTMLElement = screen.getByRole('tablist');
      const tabElements: HTMLElement[] = screen.getAllByRole('tab');

      expect(tabListElement).toBeVisible();
      expect(tabElements).toHaveLength(tabs.length);
    });

    it('should navigate when the user click on a tab', async (): Promise<void> => {
      expect.assertions(1);

      await customRender(<UiTabs tabs={tabs} />);
      const tab2Element: HTMLElement = screen.getByRole('button', { name: tabTitle2 });

      await user.click(tab2Element);

      expect(spyOnNavigate).toHaveBeenCalledOnce();
    });
  });
});
