/*import {prices} from './prices.js';
import {menu} from './menu.js';
import {filters} from 'filters.js';
import {sorting} from './sorting.js';
import {applicationFormEditing} from './applicationFormEditing.js';
import {applicationForm} from './applicationForm.js';
import  {travelPoint} from './travelPoint.js';
import {travelInfo} from './travelInfo.js';*/
import {render} from './lib/render.js';
import {parseHtml} from './lib/parse-html.js';
import {template as main} from './view/app';
import {template as header} from './view/header';
const root =  document.querySelector('.root');
render(
  root,
  parseHtml(header),
);

render(
  root,
  parseHtml(main),
);
