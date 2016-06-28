import React, { PropTypes as P } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import TodoListItem from './TodoListItem';

@observer
class TodoList extends React.Component {
  static propTypes = {
    list: P.object,
  }

  constructor(props) {
    super(props);
    this.list = props.list;
  }

  @observable inputText = '';

  handleInput = (e) => {
    this.inputText = e.target.value;
  }

  addTodo = () => {
    this.list.add({ task: this.inputText });

    this.inputText = '';
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.inputText}
            onChange={this.handleInput}
          />
          <div className="input-group-btn">
            <button type="button" className="btn btn-primary" onClick={this.addTodo}>+</button>
          </div>
        </div>

        <div className="list-group">
          {
            this.list.values.map(
              (todo, idx) => (
                <TodoListItem key={idx} item={todo} onRemove={() => this.list.remove(todo)} />
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default TodoList;
