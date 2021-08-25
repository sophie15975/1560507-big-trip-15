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
import {template as mainTemplate} from './view/app';
import {template as headerTemplate} from './view/header';
import {template as formTemplate} from './view/form';
import {template as pointsTemplate} from './view/points';
import {template as titleTemplate} from './view/hidden-title';
import {template as pointTemplate} from './view/point';
import {template as travelInfoTemplate} from './view/travelInfo';
import {template as tripControlsTemplate} from './view/tripControls';
import {template as buttonTemplate} from './view/button';
import {point15} from './mock/point15';
import {typeToIcon} from './lib/type-to-icon';

const root =  document.querySelector('.root');
const header = parseHtml(headerTemplate);
const tripMain = header.querySelector('.trip-main');
const main =  parseHtml(mainTemplate);
const trip = main.querySelector('.trip-events');
const points = parseHtml(pointsTemplate);
const originalPOintData = point15();
originalPOintData.forEach((element) => render(points, parseHtml(pointTemplate(
  {
    ...element,
    icon:typeToIcon(element.type),
  },
  ))));


render(trip, parseHtml(titleTemplate));
render(trip, parseHtml(formTemplate));
render(trip, points);
render(tripMain, parseHtml(travelInfoTemplate));
render(tripMain, parseHtml(tripControlsTemplate));
render(tripMain, parseHtml(buttonTemplate));


render(
  root,
  header,
);

render(
  root,
  main,
);
