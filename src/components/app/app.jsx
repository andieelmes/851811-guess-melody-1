import React from 'react';
import PropTypes from 'prop-types';
import Welcome from 'components/welcome/welcome.jsx';

const propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

const App = (props) => {
  const {
    gameTime,
    errorCount
  } = props;

  return <Welcome
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = propTypes;

export default App;
