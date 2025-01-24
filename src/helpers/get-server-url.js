const getServerUrl = () =>
  `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}`;

export default getServerUrl;
