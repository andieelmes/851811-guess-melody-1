import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from 'components/welcome/welcome.jsx';

const gameSettings = {
  time: 9,
  errorCount: 3,
};

describe(`Welcome component`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<Welcome {...gameSettings}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
