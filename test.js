const test = require('tape');
const assert = require('assert');
const { stdout, stderr } = require('test-console');

const wxlog = require('./');

test('should use console.info when errMsg is end with ok', function (t) {
  t.plan(2);

  var success = stdout.inspectSync(function () {
    wxlog({errMsg: 'ok:ok'});
  });

  t.deepEqual(success, ['ok\n']);

  var fail = stderr.inspectSync(function () {
    wxlog({errMsg: 'fail:fail'});
  });

  t.deepEqual(fail, ['fail\n']);

});
