import {selectFrom} from '../lib/select-from';
const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
export const selectType = (index) => selectFrom(types, index);
