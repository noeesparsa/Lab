import { RenderResult, render } from '@testing-library/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconLink } from './icon-link.component';

describe('iconLink', (): void => {
  describe('snapshot testing', (): void => {
    it('it should render correctly and match the snapshot', (): void => {
      expect.assertions(1);
      const result: RenderResult = render(
        <IconLink link="https://github.com/Rangoow/Lab" iconSize="lg" icon={faGithub} />,
      );

      expect(result).toMatchSnapshot();
    });
  });
});
