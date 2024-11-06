//Setting up an environment variables

//Import
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "poohchayodom",
        mongodb_password: "7AFCWLVPnbmj5sLb",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "poohchayodom",
      mongodb_password: "7AFCWLVPnbmj5sLb",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
