import classNames from 'classnames/bind';
import { pokemonTypeColor } from '../../functions';
import styles from './pokemon-type-tag.module.scss';

interface IProps {
  readonly type: string;
}

export function PokemonTypeTag({ type }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('container', pokemonTypeColor[type])}>
      <p>{type.toUpperCase()}</p>
    </div>
  );
}
