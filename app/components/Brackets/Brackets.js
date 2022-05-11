/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Bracket } from 'react-brackets';

function Brackets(props) {
  const { rounds } = props;

  return (
    <Bracket
      rounds={rounds}
      mobileBreakpoint={767}
    />
  );
}

Brackets.propTypes = {
  rounds: PropTypes.object.isRequired,
};

export default Brackets;
