import {render} from './lib/render.js';
import {parseHtml} from './lib/parse-html.js';
import {template as mainTemplate} from './view/app';
import {template as headerTemplate} from './view/header';
import {template as formTemplate} from './view/form';
import {template as pointsTemplate} from './view/points';
import {template as titleTemplate} from './view/hidden-title';
import {template as pointTemplate} from './view/point';
import {template as travelInfoTemplate} from './view/travel-info';
import {template as tripControlsTemplate} from './view/trip-controls';
import {template as buttonTemplate} from './view/button';
import {template as menuTemplate, Routs} from './view/menu';
import {template as filtersTemplate, FilterBy} from './view/filters';
import {template as formEditingTemplate} from './view/application-form-editing';
import {template as summaryTemplate} from './view/summary';
import {template as totalSumTemplate} from './view/total-sum';

import {point15} from './mock/point15';
import {typeToIcon} from './lib/type-to-icon';



const root =  document.querySelector('.root');
const header = parseHtml(headerTemplate);
const tripMain = header.querySelector('.trip-main');
const main =  parseHtml(mainTemplate);
const trip = main.querySelector('.trip-events');
const points = parseHtml(pointsTemplate);
const tripControls = parseHtml(tripControlsTemplate);
const travelInfo= parseHtml(travelInfoTemplate);

const originalPOintData = point15();
render(points, parseHtml(formEditingTemplate));
originalPOintData.forEach((element) => render(points, parseHtml(pointTemplate(
  {
    ...element,
    icon:typeToIcon(element.type),
  },
  ))));


render(trip, parseHtml(titleTemplate));
render(trip, parseHtml(formTemplate));
render(trip, points);
render(travelInfo, parseHtml(summaryTemplate));
render(travelInfo, parseHtml(totalSumTemplate));
render(tripMain, travelInfo );
render(tripControls, parseHtml(menuTemplate(Routs.TABLE)));
render(tripControls, parseHtml(filtersTemplate(FilterBy.FUTURE)));
render(tripMain,tripControls);
render(tripMain, parseHtml(buttonTemplate));

render(
  root,
  header,
);

render(
  root,
  main,
);
