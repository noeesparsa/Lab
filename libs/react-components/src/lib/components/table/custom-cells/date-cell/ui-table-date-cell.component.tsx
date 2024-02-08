import { DateTime } from 'luxon';

interface IProps {
  readonly date: string;
}

export function UiTableDateCellComponent({ date }: IProps): React.JSX.Element {
  const formattedDate: string = DateTime.fromISO(date, { setZone: true }).toFormat('dd/MM/yyyy');

  return <p>{formattedDate}</p>;
}
