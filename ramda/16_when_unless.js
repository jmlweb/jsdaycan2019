const R = require('ramda');

const ROLES = ['admin', 'editor', 'guest'];
const PERMISSIONS = ['add', 'edit', 'delete', 'view', 'users'];

const roleIs = R.propEq('role');

const transformPermissions = fn =>
  R.evolve({
    permissions: fn,
  });

const data = R.map(
  R.pipe(
    R.applySpec({
      role: R.identity,
      permissions: R.always(PERMISSIONS),
    }),
    R.unless(
      roleIs('admin'),
      transformPermissions(R.reject(R.equals('users'))),
    ),
    R.when(roleIs('guest'), transformPermissions(R.filter(R.equals('view')))),
  ),
)(ROLES);

console.log(data);
