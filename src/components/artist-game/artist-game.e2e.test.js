import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistGame from 'components/artist-game/artist-game.jsx';

Enzyme.configure({adapter: new Adapter()});

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
  it(`should call onClick on radio button click`, () => {
    const clickHandler = jest.fn();
    const artistGame = shallow(<ArtistGame
      {...gameInfo}
      onClick={clickHandler}
    />);

    const checkboxElement = artistGame.find(`input[type="radio"]`);

    checkboxElement.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledWith({
      answer: `b`,
      id: `a`
    });
  });
});
