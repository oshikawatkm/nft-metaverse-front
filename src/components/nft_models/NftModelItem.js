import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import timestampToTime from '../../utils/timeFormater'

const NftModelItem = ({
  nftModel: { id, tokenId, filename, format, createdAt, updatedAt },
  index
}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{tokenId}</td>
      <td>{filename}</td>
      <td>{format}</td>
      <td>{timestampToTime(createdAt)}</td>
      <td>{timestampToTime(updatedAt)}</td>
      <td><Link to={"/nft_model/"+id} className="btn btn-primary"> 詳細</Link></td>
    </tr>
  );
};

NftModelItem.defaultProps = {
  showActions: true
};


NftModelItem.propTypes = {
  nftModel: PropTypes.object.isRequired,
  showActions: PropTypes.bool
}


export default NftModelItem;