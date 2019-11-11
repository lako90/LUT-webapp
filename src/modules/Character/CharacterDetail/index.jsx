import React from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const CharacterDetail = () => {
  const { id } = useParams();
  console.log("TCL: CharacterDetail -> props", id)
  return (
    <div>{'eccolo'}</div>
  );
}

CharacterDetail.propTypes = {

};

export default CharacterDetail;
