import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/app/app.jsx';

const gameSettings = {
  gameTime: 9,
  errorCount: 3,
};

describe(`App component`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App {...gameSettings}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
