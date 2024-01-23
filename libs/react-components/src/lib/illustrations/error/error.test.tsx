import { RenderResult, render, screen } from '@testing-library/react';
import { EReactComponentsIllustrationsDataTestId } from '../../enums';
import { UiErrorIllustration } from './error';

describe(`uiErrorIllustration`, (): void => {
  it(`should render correctly and match the snapshot`, (): void => {
    const result: RenderResult = render(<UiErrorIllustration />);

    expect(screen.getByTestId(EReactComponentsIllustrationsDataTestId.ERROR)).toBeVisible();
    expect(result).toMatchSnapshot();
  });
});
