import React from "react";
import ReactDOM from "react-dom";
import App from 'components/app/app.jsx';

import settings from 'mocks/settings';

ReactDOM.render(
    <App
      {...settings}
    />,
    document.querySelector(`.main`)
);
