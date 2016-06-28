import { SingleChoice, MultipleChoice, List } from 'mobx-microstates';

class Store {
  constructor(itemsArray) {
    this.singleChoice = new SingleChoice(itemsArray);
    this.multipleChoice = new MultipleChoice(itemsArray);
    this.list = new List(itemsArray);
  }
}

export default Store;
