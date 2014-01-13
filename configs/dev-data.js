var config = require(__libdir + '/bedrock').config;
var baseUri = config.server.baseUri;

// profiles
config.profile.profiles.push({
  id: baseUri + '/profiles/dev',
  type: 'Profile',
  psaSlug: 'dev',
  email: 'dev@bedrock.dev',
  label: 'Dev',
  psaPassword: 'password',
  psaRole: [baseUri + '/roles/profile_registered']
});

// identities
config.identity.identities.push({
  id: baseUri + '/i/dev',
  type: 'PersonalIdentity',
  owner: baseUri + '/profiles/dev',
  psaSlug: 'dev',
  label: 'Dev'
});
