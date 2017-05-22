import format from 'date-fns/format';
import fr from 'date-fns/locale/fr';

export function getFormatDate(date) {
  return format(date, 'MMMM Do YYYY, h:mm:ss a', fr);
}
