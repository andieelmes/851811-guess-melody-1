import nanoid from 'nanoid';

const questions = [
  {
    id: nanoid(),
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
      {
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`,
      },
      {
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`,
      },
      {
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    id: nanoid(),
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        id: nanoid(),
        picture: `https://static.tvtropes.org/pmwiki/pub/images/jon_snow_s7.png`,
        artist: `John Snow`,
      },
      {
        id: nanoid(),
        picture: `https://static.tvtropes.org/pmwiki/pub/images/daenerys_targaryen_s7.png`,
        artist: `Kelly C`,
      },
      {
        id: nanoid(),
        picture: `https://static.tvtropes.org/pmwiki/pub/images/missandei_s5.png`,
        artist: `Miss Sunday`,
      },
    ],
  },
];


export default questions;
