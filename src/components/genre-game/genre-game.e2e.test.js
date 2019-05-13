import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreGame from 'components/genre-game/genre-game.jsx';

Enzyme.configure({adapter: new Adapter()});

const gameInfo = {
  id: `a`,
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: `b`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
  ],
};

describe(`Genre game component`, () => {
  it(`should call onClick on form submit`, () => {
    const clickHandler = jest.fn();
    const genreGame = shallow(<GenreGame
      {...gameInfo}
      onClick={clickHandler}
    />);

    const formElement = genreGame.find(`form`);

    formElement.simulate(`submit`, {preventDefault() {}});

    expect(clickHandler).toHaveBeenCalledWith({
      answer: {
        'b': false,
      },
      id: `a`
    });
  });
});
