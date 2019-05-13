import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from 'components/app/app.jsx';

Enzyme.configure({adapter: new Adapter()});

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
      {
        id: `b`,
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
  let app;

  beforeEach(() => {
    app = mount(<App
      {...gameSettings}
      questions={questions}
    />);

    app.setState({unAnsweredQuestionsCount: questions.length});
  });

  const initGame = () => {
    const welcomeButton = app.find(`.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(app.state(`gameType`)).toBe(`genre`);
  };

  it(`should update state on welcome button click`, () => {
    initGame();
  });

  it(`should update state on game answer`, () => {
    initGame();

    const genreGameCheckbox = app.find(`input[id="answer-a"]`);
    genreGameCheckbox.simulate(`change`, {target: {checked: true}});

    const genreGameForm = app.find(`.game__tracks`);
    genreGameForm.simulate(`submit`);

    expect(app.state(`a`)).toStrictEqual({
      'a': true,
      'b': false,
    });
  });
});
