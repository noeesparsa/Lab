import { VtmnProgressbar } from '@vtmn/react';
import classNames from 'classnames/bind';
import styles from './loading.module.scss';

export function Loading(): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('loading__container')}>
      <VtmnProgressbar size="small" status="indeterminate" variant="circular" loadingText="" />
    </div>
  );
}
