import React from 'react';
import renderer from 'react-test-renderer';
import ArtistGame from 'components/artist-game/artist-game.jsx';

const gameInfo = {
  id: `a`,
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
};

describe(`Artist game component`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<ArtistGame {...gameInfo} onClick={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
