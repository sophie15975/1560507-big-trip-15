import { Abstract } from "./abstract";

const template = `<header class="page-header">
<div class="page-body__container  page-header__container">
  <img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">

  <div class="trip-main">
  <!--ЗДЕСЬ  travelInfo.js  -->




  </div>
</div>
</header>`;

export class Header extends Abstract{

  getTemplate(){
    return template;
  }
}

