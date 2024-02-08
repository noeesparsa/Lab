import { RenderResult, render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { getSortIcon } from './get-sort-icon';

describe('getSortIcon', (): void => {
  it('should renders the correct icon for ascendant sorting', (): void => {
    expect.assertions(1);

    const ascIcon: RenderResult = render(getSortIcon('asc'));
    expect(ascIcon.container.querySelector('.vtmx-arrow-up-fill')).toBeVisible();
  });

  it('should renders the correct icon for descendant sorting', (): void => {
    expect.assertions(1);

    const ascIcon: RenderResult = render(getSortIcon('desc'));
    expect(ascIcon.container.querySelector('.vtmx-arrow-down-fill')).toBeVisible();
  });

  it('should renders the correct icon for default sorting', (): void => {
    expect.assertions(1);

    const ascIcon: RenderResult = render(getSortIcon(''));
    expect(ascIcon.container.querySelector('.vtmx-arrow-up-down-fill')).toBeVisible();
  });
});
