import {render} from './lib/render.js';
import {parseHtml} from './lib/parse-html.js';
import {App} from './view/app';
import { Header} from './view/header';
import {Form} from './view/form';
import {Points} from './view/points';
import {Title} from './view/hidden-title';
import {Point} from './view/point';
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
const header = new Header().getElement();
const tripMain = header.querySelector('.trip-main');
const main = new App().getElement();
const trip = main.querySelector('.trip-events');
const points = new Points().getElement();
const tripControls = parseHtml(tripControlsTemplate);
const travelInfo= parseHtml(travelInfoTemplate);

const originalPOintData = point15();
render(points, parseHtml(formEditingTemplate));


originalPOintData.forEach((element) => render(
  points,
  new Point({
    ...element,
    icon:typeToIcon(element.type),
  }).getElement()));


/*+*/render(trip, new Title().getElement());
/*+*/render(trip, new Form().getElement());
render(trip, points);
render(travelInfo, parseHtml(summaryTemplate));
render(travelInfo, parseHtml(totalSumTemplate));
render(tripMain, travelInfo);
/*+*/ render(tripControls, parseHtml(menuTemplate(Routs.TABLE)));
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
