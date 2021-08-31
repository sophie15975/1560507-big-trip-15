import {MESSAGE_ERROR_NO_ABSTRACT} from '../lib/consts';
import {MESSAGE_ERROR_NOTIMPLEMENTED} from '../lib/consts';
import { parseHtml } from '../lib/parse-html';

export class Abstract{
  constructor(){
    if(new.target === Abstract){
      throw new Error(MESSAGE_ERROR_NO_ABSTRACT);
    }
    this._element = null;
  }

  getTemplate(){
    throw new Error(MESSAGE_ERROR_NOTIMPLEMENTED);
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
