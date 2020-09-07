import React from 'react';
import PanoramaFishEyeTwoTone from '@material-ui/icons/PanoramaFishEyeTwoTone';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';

const ringsCount = count => {
  let rings = [];
  let i = 0;
  for (; i < count; i++) {
    rings.push(<PanoramaFishEyeTwoTone />);
  }
  for (; i < 5; i++) {
    rings.push(<PanoramaFishEye />);
  }
  return rings;
};

const RingRate = ({ value }) => {
  return ringsCount(value);
};

export default RingRate;
