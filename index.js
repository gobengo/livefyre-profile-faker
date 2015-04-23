'use strict';

var log = require('debug')('indieweb');

if (require.main === module) {
  main();
}

function main() {
  var fakeProfile;
  try {
    fakeProfile = createFakeProfile();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  var fakeProfileStr = JSON.stringify(fakeProfile, null, 2) + '\n';
  process.stdout.write(fakeProfileStr, function (err) {
    process.exit();    
  })
}

function createFakeProfile() {
  return require('json-schema-faker')(require('./schema.json'));
}
