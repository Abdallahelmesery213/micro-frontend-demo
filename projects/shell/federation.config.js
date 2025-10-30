
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  remotes: {
    mfe1: 'http://localhost:4201/remoteEntry.json',
    mfe2: 'http://localhost:4202/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ],
});

// Please read our FAQ about sharing libs:
// https://shorturl.at/jmzH0