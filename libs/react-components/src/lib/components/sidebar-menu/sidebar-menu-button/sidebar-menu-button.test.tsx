import { RenderResult, screen } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as router from 'react-router';
import { MockInstance } from 'vitest';
import { EReactComponentsDataTestId } from '../../../enums';
import { customRender } from '../../../tests/custom-render';
import { SidebarMenuButton } from './sidebar-menu-button.component';

const user: UserEvent = userEvent.setup();
const mockedUseNavigate = vi.fn();

describe(`uiSidebarMenuButton`, (): void => {
  let icon: VitamixId;
  let buttonText: string;
  let buttonTitle: string;
  let isButtonCollapsed: boolean;
  let buttonRedirectPath: string;
  let spyOnNavigate: MockInstance;

  describe('snapshot testing', (): void => {
    beforeEach((): void => {
      icon = `user-line`;
      buttonText = `user button`;
      buttonTitle = `navigate to user section`;
      buttonRedirectPath = `/test`;
    });

    describe(`when the menu is collapsed`, (): void => {
      beforeEach((): void => {
        isButtonCollapsed = true;
      });

      it(`should match the collapsed button snapshot`, async (): Promise<void> => {
        expect.assertions(1);

        const result: RenderResult = await customRender(
          <SidebarMenuButton
            icon={icon}
            text={buttonText}
            title={buttonTitle}
            isCollapsed={isButtonCollapsed}
            redirectPath={buttonRedirectPath}
          />,
        );

        expect(result).toMatchSnapshot();
      });
    });

    describe(`when the menu is not collapsed`, (): void => {
      beforeEach((): void => {
        isButtonCollapsed = false;
      });

      it(`should match the not collapsed button snapshot`, async (): Promise<void> => {
        expect.assertions(1);

        const result: RenderResult = await customRender(
          <SidebarMenuButton
            icon={icon}
            text={buttonText}
            title={buttonTitle}
            isCollapsed={isButtonCollapsed}
            redirectPath={buttonRedirectPath}
          />,
        );

        expect(result).toMatchSnapshot();
      });
    });
  });

  describe('component testing', (): void => {
    beforeEach((): void => {
      icon = `user-line`;
      buttonText = `user button`;
      buttonTitle = `navigate to user section`;
      buttonRedirectPath = `/test`;
      spyOnNavigate = vi.spyOn(router, `useNavigate`).mockImplementation(() => mockedUseNavigate);
    });

    describe(`when the menu is collapsed`, (): void => {
      beforeEach((): void => {
        isButtonCollapsed = true;
      });

      it(`should only display the button with an icon and the title`, async (): Promise<void> => {
        expect.assertions(3);

        await customRender(
          <SidebarMenuButton
            icon={icon}
            text={buttonText}
            title={buttonTitle}
            isCollapsed={isButtonCollapsed}
            redirectPath={buttonRedirectPath}
          />,
        );
        const button: HTMLElement = screen.getByRole(`button`, { name: /navigate to user section/i });
        const buttonIcon: HTMLElement = screen.getByTestId(EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON_ICON);

        expect(button).toBeVisible();
        expect(button).toHaveTextContent(``);
        expect(buttonIcon).toHaveClass(`vtmx-user-line`);
      });
    });

    describe(`when the menu is not collapsed`, (): void => {
      beforeEach((): void => {
        isButtonCollapsed = false;
      });

      it(`should display the button with an icon a text and the title`, async (): Promise<void> => {
        expect.assertions(3);

        await customRender(
          <SidebarMenuButton
            icon={icon}
            text={buttonText}
            title={buttonTitle}
            isCollapsed={isButtonCollapsed}
            redirectPath={buttonRedirectPath}
          />,
        );
        const button: HTMLElement = screen.getByRole(`button`, { name: /user button/i });
        const buttonIcon: HTMLElement = screen.getByTestId(EReactComponentsDataTestId.SIDEBAR_MENU_BUTTON_ICON);

        expect(button).toBeVisible();
        expect(button).toHaveAttribute(`title`, `navigate to user section`);
        expect(buttonIcon).toHaveClass(`vtmx-user-line`);
      });
    });

    describe(`when the user click on the button`, (): void => {
      it(`should called the button action function`, async (): Promise<void> => {
        expect.assertions(1);

        await customRender(
          <SidebarMenuButton
            icon={icon}
            text={buttonText}
            title={buttonTitle}
            isCollapsed={isButtonCollapsed}
            redirectPath={buttonRedirectPath}
          />,
        );

        const button: HTMLElement = screen.getByRole(`button`);

        await user.click(button);

        expect(spyOnNavigate).toHaveBeenCalledOnce();
      });
    });
  });
});
