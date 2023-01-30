import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventItem = ({
  event: {oldData, newData}
}) => {
  return (
    <tr>
      <td>{oldData}</td>
      <td>{"=>"}</td>
      <td>{newData}</td>
    </tr>
  )
}


EventItem.defaultProps = {
  showActions: true
};


EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  showActions: PropTypes.bool
}

export default EventItem;