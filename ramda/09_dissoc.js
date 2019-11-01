const R = require('ramda');

const myObj = {
  name: 'Elliot Anderson',
  ocupation: 'Security Consultant',
  company: 'Allsafe',
  lastSessions: [
    '2019-10-21T15:32:41Z',
    '2019-10-24T11:23:56Z',
    '2019-11-09T02:46:17Z',
  ],
};

console.log(R.dissoc('name', myObj));
console.log(R.dissocPath(['lastSessions', 2], myObj));
