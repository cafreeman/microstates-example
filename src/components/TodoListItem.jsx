import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';

function TodoListItem({ item, onRemove }) {
  return (
    <div className="list-group-item">
      {item.task}
      <button
        type="button"
        className="btn btn-danger btn-xs pull-right"
        onClick={onRemove}
      >
      x
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  item: P.object,
};

export default observer(TodoListItem);
