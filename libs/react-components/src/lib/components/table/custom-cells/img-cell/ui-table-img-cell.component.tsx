import classNames from 'classnames/bind';
import styles from './ui-table-img-cell.module.scss';

interface IProps {
  readonly source: string;
  readonly alt: string;
}

export function UiTableImgCellComponent({ source, alt }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);

  return (
    <p>
      <img className={cx('image_cell')} src={source} alt={alt} />
    </p>
  );
}
