import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';

function ChoiceListItem({ item }) {
  return (
    <div className="list-group-item">
      <input type="checkbox" checked={item.isSelected} onChange={() => item.toggle()} />
      {item.value.task}
    </div>
  );
}

ChoiceListItem.propTypes = {
  item: P.object,
};

export default observer(ChoiceListItem);
