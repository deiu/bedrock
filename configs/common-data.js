var config = require(__libdir + '/bedrock').config;

// profile config
config.profile.defaults = {
  profile: {
    psaStatus: 'active',
    psaRole: [config.server.baseUri + '/roles/profile_registered']
  }
};
