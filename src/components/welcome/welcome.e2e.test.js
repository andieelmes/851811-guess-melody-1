import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from 'components/welcome/welcome.jsx';

Enzyme.configure({adapter: new Adapter()});

const gameSettings = {
  time: 9,
  errorCount: 3,
};

describe(`Welcome component`, () => {
  it(`should call onClick on play button click`, () => {
    const clickHandler = jest.fn();
    const welcome = shallow(<Welcome
      {...gameSettings}
      onClick={clickHandler}
    />);

    const playButton = welcome.find(`.welcome__button`);

    playButton.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
