import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/app/app.jsx';

const gameSettings = {
  gameTime: 9,
  errorCount: 3,
};

const questions = [
  {
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
  },
  {
    id: `b`,
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        id: `b`,
        picture: `https://static.tvtropes.org/pmwiki/pub/images/jon_snow_s7.png`,
        artist: `John Snow`,
      },
    ],
  },
];

describe(`App component`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App {...gameSettings} questions={questions}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
