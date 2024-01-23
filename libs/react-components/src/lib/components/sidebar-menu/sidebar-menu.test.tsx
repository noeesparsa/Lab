import { randDirectoryPath, randSentence, randText, randUuid, randWord } from '@ngneat/falso';
import { RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EReactComponentsDataTestId } from '../../enums';
import { customRender } from '../../tests/custom-render';
import { SidebarMenu } from './sidebar-menu.component';
import { ISidebarMenuElement } from './interfaces';

const user = userEvent.setup();

describe(`uiSidebarMenu`, (): void => {
  let menuButtons: ISidebarMenuElement[];
  let menuButtonTitle: string;

  describe('snapshot testing', (): void => {
    beforeEach((): void => {
      menuButtons = [
        {
          key: `sidebar-menu_dashboard`,
          icon: `home-line`,
          text: `Dashboard`,
          title: `Go to dashboard`,
          redirectPath: `/`,
        },
        {
          key: `sidebar-menu_settings`,
          icon: `settings-line`,
          text: `Settings`,
          title: `Go to settings`,
          redirectPath: `/settings`,
        },
      ];
      menuButtonTitle = 'menu button';
    });

    it(`should render correctly and match the snapshot`, async (): Promise<void> => {
      expect.assertions(1);

      const result: RenderResult = await customRender(
        <SidebarMenu menuButtonTitle={menuButtonTitle} menuButtonsProperties={menuButtons} />,
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    const menuButton1Text: string = randWord();
    const menuButton2Text: string = randWord();
    const menuButton1Title: string = randSentence();
    const menuButton2Title: string = randSentence();

    beforeEach((): void => {
      menuButtons = [
        {
          key: randUuid(),
          icon: `home-line`,
          text: menuButton1Text,
          title: menuButton1Title,
          redirectPath: randDirectoryPath(),
        },
        {
          key: randUuid(),
          icon: `settings-line`,
          text: menuButton2Text,
          title: menuButton2Title,
          redirectPath: randDirectoryPath(),
        },
      ];
      menuButtonTitle = randText();
    });

    it(`should render all the given menu buttons`, async (): Promise<void> => {
      expect.assertions(4);

      await customRender(<SidebarMenu menuButtonTitle={menuButtonTitle} menuButtonsProperties={menuButtons} />);

      const menuButton: HTMLElement = screen.getByRole(`button`, { name: 'sidebar_menu_button' });
      const menuButtonIcon: HTMLElement = screen.getByTestId(EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON);
      const button1: HTMLElement = screen.getByRole(`button`, { name: menuButton1Title });
      const button2: HTMLElement = screen.getByRole(`button`, { name: menuButton2Title });

      expect(menuButton).toBeVisible();
      expect(button1).toBeVisible();
      expect(button2).toBeVisible();
      expect(menuButtonIcon).toHaveClass(`vtmx-menu-line`);
    });

    describe(`when the user click on the menu button`, (): void => {
      it(`should toggle the display and change the menu button icon`, async (): Promise<void> => {
        expect.assertions(3);

        await customRender(<SidebarMenu menuButtonTitle={menuButtonTitle} menuButtonsProperties={menuButtons} />);
        const menuButton: HTMLElement = screen.getByRole(`button`, { name: 'sidebar_menu_button' });
        const menuButtonIcon: HTMLElement = screen.getByTestId(EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON);

        await user.click(menuButton);

        const button1: HTMLElement = screen.getByText(menuButton1Text);
        const button2: HTMLElement = screen.getByText(menuButton2Text);

        expect(menuButtonIcon).toHaveClass(`vtmx-chevron-left-line`);
        expect(button1).toBeVisible();
        expect(button2).toBeVisible();
      });
    });

    describe(`when the user click on the menu button two times`, (): void => {
      it(`should toggle the display and change the menu button icon`, async (): Promise<void> => {
        expect.assertions(1);

        await customRender(<SidebarMenu menuButtonTitle={menuButtonTitle} menuButtonsProperties={menuButtons} />);
        const menuButton: HTMLElement = screen.getByRole(`button`, { name: 'sidebar_menu_button' });
        const menuButtonIcon: HTMLElement = screen.getByTestId(EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON);

        await user.click(menuButton);
        await user.click(menuButton);

        expect(menuButtonIcon).toHaveClass(`vtmx-menu-line`);
      });
    });
  });
});
