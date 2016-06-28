import React from 'react';
import { observer } from 'mobx-react';
import ChoiceList from './ChoiceList';
import TodoList from './TodoList';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">MobX MicroStates</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Single Choice</h2>
            <h4>Selection? {this.store.singleChoice.selection ? 'yes' : 'no'}</h4>
            <ChoiceList items={this.store.singleChoice} />
          </div>

          <div className="col-md-4">
            <h2>Multiple Choice</h2>
            <h4># Selected: {this.store.multipleChoice.selection.length}</h4>
            <ChoiceList items={this.store.multipleChoice} />
          </div>

          <div className="col-md-4">
            <h2>List <small>({this.store.list.length} items)</small></h2>
            <TodoList list={this.store.list} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
