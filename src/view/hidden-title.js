
import { Abstract } from './abstract';

const template = () => `<h2 class="visually-hidden">Trip events</h2>
`;
export class Title extends Abstract{
  getTemplate(){
    return template();
  }
}

