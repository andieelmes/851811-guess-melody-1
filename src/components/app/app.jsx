import React from 'react';
import PropTypes from 'prop-types';
import Welcome from 'components/welcome/welcome.jsx';
import ArtistGame, {propTypes as ArtistGamePropTypes} from 'components/artist-game/artist-game.jsx';
import GenreGame, {propTypes as GenreGamePropTypes} from 'components/genre-game/genre-game.jsx';

const propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape(GenreGamePropTypes),
        PropTypes.shape(ArtistGamePropTypes)
      ])
  )
};

const Type = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      gameType: null,
      unAnsweredQuestionsCount: null,
      genre: null,
      artist: null,
    };

    this.onGameStart = this.onGameStart.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({
      unAnsweredQuestionsCount: this.props.questions.length,
    });
  }

  onGameStart() {
    this.setState({
      gameType: this.state.gameType === Type.GENRE ? Type.ARTIST : Type.GENRE,
    });
  }

  onAnswer({id, answer}) {
    this.setState({
      gameType: this.state.gameType === Type.GENRE ? Type.ARTIST : Type.GENRE,
      [id]: answer,
      unAnsweredQuestionsCount: this.state.unAnsweredQuestionsCount ? this.state.unAnsweredQuestionsCount - 1 : 0,
    });
  }

  render() {
    const {
      gameTime,
      errorCount,
      questions,
    } = this.props;

    const gameInfo = this.state.gameType && questions.find((game) => game.type === this.state.gameType);

    return (
      <>
      {
        (!this.state.unAnsweredQuestionsCount || !this.state.gameType) && (
          <Welcome
            time={gameTime}
            errorCount={errorCount}
            onClick={this.onGameStart}
          />
        )
      }
      {
        (this.state.gameType === `artist` && gameInfo && this.state.unAnsweredQuestionsCount) && (
          <ArtistGame
            {...gameInfo}
            onClick={this.onAnswer}
          />
        )
      }
      {
        (this.state.gameType === `genre` && gameInfo && this.state.unAnsweredQuestionsCount) && (
          <GenreGame
            {...gameInfo}
            onClick={this.onAnswer}
          />
        )
      }
      </>
    );
  }
}

App.propTypes = propTypes;

export default App;
