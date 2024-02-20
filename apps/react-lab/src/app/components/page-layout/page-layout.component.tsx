import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './page-layout.module.scss';

interface IProps {
  title: string;
}

export function PageLayout({ title, children }: PropsWithChildren<IProps>): React.JSX.Element {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('layout')}>
      <p className={cx('layout__title', 'typo_display-2')}>{title}</p>

      <div className={cx('layout__content')}> {children}</div>
    </div>
  );
}
