import {selectDestination} from './select-destination';
import {selectType} from './select-type';
export const point1 = (index) => ( {
  'basePrice': 1100,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': selectDestination(index),
  'id': '0',
  'isFavorite': false,
  'offers': [
    {
      'title': 'Choose meal',
      'price': 180,
    }, {
      'title': 'Upgrade to comfort class',
      'price': 50,
    },
  ],
  'type': selectType(index),
}
);
