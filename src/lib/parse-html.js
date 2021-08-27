export const parseHtml = (stringHtml) =>{
  const parser = document.createElement('div');
  parser.innerHTML = stringHtml;
  return parser.firstChild;
};
