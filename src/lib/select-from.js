export const selectFrom = (array, index) =>{

  const ridx = index%array.length;
  return array[ridx];
};
