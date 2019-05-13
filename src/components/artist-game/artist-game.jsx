import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.string.isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
      })
  ),
  onClick: PropTypes.func.isRequired,
};

const ArtistGame = (props) => {
  const {
    id,
    song,
    answers,
    onClick,
  } = props;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
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
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <button className="track__button track__button--play" type="button"></button>
          <audio src={song.src}></audio>
        </div>

        <form className="game__artist">
          {
            answers.map((answer) => (
              <div
                key={answer.id}
                className="artist"
              >
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`artist-${answer.id}`}
                  id={`answer-${answer.id}`}
                  onClick={() => onClick({id, answer: answer.id})}
                />
                <label className="artist__name" htmlFor={`answer-${answer.id}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>
            ))
          }
        </form>
      </section>
    </section>
  );
};

ArtistGame.propTypes = propTypes;

export default ArtistGame;
