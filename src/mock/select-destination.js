import { selectFrom } from '../lib/select-from';
const destinations = ['Ulan Bator', 'Geneva', 'Genuja'];
export const selectDestination = (id)=> selectFrom(destinations, id);

