import { VtmnProgressbar } from '@vtmn/react';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import { UiLoadingIllustration } from '../../illustrations/loading';
import { EReactComponentsDataTestId } from '../../enums';
import styles from './loading.module.scss';

interface IProps {
  readonly title: string;
}

export function Loading({ title }: IProps): ReactElement {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('container')} data-testid={EReactComponentsDataTestId.LOADING_COMPONENT}>
      <div className="ml-auto mr-auto">
        <UiLoadingIllustration />
      </div>
      <p className={cx('loading-text', 'typo_title-4 mb-4')}>{title}</p>
      <VtmnProgressbar loadingText="" status="indeterminate" className="ml-auto mr-auto" />
    </div>
  );
}
