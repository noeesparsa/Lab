import classNames from 'classnames/bind';
import styles from './progress-bar-cell.module.scss';

interface IProps {
  readonly currentValue: number;
  readonly maxValue: number;
}

export function UiProgressBarCell({ currentValue, maxValue }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('progressbar__container')}>
      <span className="typo_text-3">
        {currentValue} / {maxValue}
      </span>
      <progress max={maxValue} value={currentValue} aria-labelledby="progress-bar-text" />
    </div>
  );
}
