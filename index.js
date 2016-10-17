module.exports = function wxlog (resp) {
  const [msg, status] = resp.errMsg.split(':');
  const method = status === 'ok' ? 'info' : 'error';

  console[method](msg);

  return resp;
}
