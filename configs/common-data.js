var config = require(__libdir + '/bedrock').config;

// identity config
config.identity.defaults.identity = {
  type: 'Identity',
  address: [],
  preferences: {
    type: 'IdentityPreferences'
  },
  sysPublic: [],
  sysResourceRole: [{
    sysRole: 'identity.registered',
    generateResource: 'id'
  }],
  sysStatus: 'active'
};
