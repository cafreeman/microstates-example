import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
import ChoiceListItem from './ChoiceListItem';

function ChoiceList({ items }) {
  return (
    <div className="list-group">
      {
        items.options.map((item, idx) => (
          <ChoiceListItem key={idx} item={item} />)
        )
      }
    </div>
  );
}

ChoiceList.propTypes = {
  items: P.object,
};

export default observer(ChoiceList);
