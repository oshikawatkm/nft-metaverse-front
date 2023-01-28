import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timestampToTime from '../../utils/timeFormater'

const OrderItem = ({
  order: { tokenId, reward_wei, format, createdAt, updatedAt },
  index
}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{reward_wei}</td>
      <td>Mike Doe</td>
      <td>{format}</td>
      <td>{timestampToTime(createdAt)}</td>
      <td>{timestampToTime(updatedAt)}</td>
      <td><button type="button" className="btn btn-primary float-right"><i className="fas fa-plus"></i> Detail</button></td>
    </tr>
  );
};

OrderItem.defaultProps = {
  showActions: true
};


OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  showActions: PropTypes.bool
}


export default OrderItem;