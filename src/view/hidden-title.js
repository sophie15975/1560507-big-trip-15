import { parseHtml } from '../lib/parse-html';

const template = () => `<h2 class="visually-hidden">Trip events</h2>
`;
export class Title{
  constructor(data){
    this._data = data;
    this._element = null;
  }

  getTemplate(){
    return template();
  }

  getElement(){
    if (this._element === null){
      this._element = parseHtml(this.getTemplate());
    }

    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}

