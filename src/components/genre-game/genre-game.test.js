import React from 'react';
import renderer from 'react-test-renderer';
import GenreGame from 'components/genre-game/genre-game.jsx';

const gameInfo = {
  id: `a`,
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: `a`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
  ],
};

describe(`Genre game component`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<GenreGame {...gameInfo} onClick={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
