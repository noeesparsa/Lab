import { RenderResult, render, screen } from '@testing-library/react';
import { EReactComponentsIllustrationsDataTestId } from '../../enums';
import { UiLoadingIllustration } from './loading';

describe(`uiLoadingIllustration`, (): void => {
  it(`should render correctly and match the snapshot`, (): void => {
    const result: RenderResult = render(<UiLoadingIllustration />);

    expect(screen.getByTestId(EReactComponentsIllustrationsDataTestId.LOADING)).toBeVisible();
    expect(result).toMatchSnapshot();
  });
});
