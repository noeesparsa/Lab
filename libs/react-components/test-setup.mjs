import * as jestDomMatchers from '@testing-library/jest-dom/matchers';
import {cleanup} from '@testing-library/react';
import * as jestExtendedMatchers from 'jest-extended';
import {expect, vi} from 'vitest';

expect.extend(jestExtendedMatchers);
expect.extend(jestDomMatchers);

afterEach(() => {
  cleanup();
});
