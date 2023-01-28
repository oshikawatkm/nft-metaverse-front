import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import timestampToTime from '../../utils/timeFormater'

const UserItem = ({
  user: { id, firstName, lastName, email, isActive, createdAt, updatedAt },
  index
}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{firstName} {lastName}</td>
      <td>{email}</td>
      <td>{isActive? "Active": "Deactive"}</td>
      <td>{timestampToTime(createdAt)}</td>
      <td>{timestampToTime(updatedAt)}</td>
      <td><Link to={`/users/${id}`} className="btn btn-primary"> 詳細</Link>
      </td>
    </tr>
  );
};

UserItem.defaultProps = {
  showActions: true
};


UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  showActions: PropTypes.bool
}


export default UserItem;