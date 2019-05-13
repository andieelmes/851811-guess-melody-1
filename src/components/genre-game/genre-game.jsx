import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ),
  onClick: PropTypes.func.isRequired,
};

class GenreGame extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = this.props.answers.reduce((values, answer) => {
      values[answer.id] = false;
      return values;
    }, {});

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(index) {
    this.setState({[index]: !this.state[index]});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onClick({
      id: this.props.id,
      answer: this.state,
    });
  }

  render() {
    const {
      genre,
      answers,
    } = this.props;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this.onSubmit}>
            {
              answers.map((answer) => (
                <div
                  key={answer.id}
                  className="track"
                >
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio src={answer.src}></audio>
                  </div>
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${answer.id}`}
                      id={`answer-${answer.id}`}
                      checked={this.state[answer.id]}
                      onChange={() => this.onChange(answer.id)}
                    />
                    <label className="game__check" htmlFor={`answer-${answer.id}`}>Отметить</label>
                  </div>
                </div>
              ))
            }

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreGame.propTypes = propTypes;

export default GenreGame;
