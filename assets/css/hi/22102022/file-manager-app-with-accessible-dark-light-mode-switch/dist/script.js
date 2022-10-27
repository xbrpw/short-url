/* no library, this is all the JS needed for accessible interaction */
const _BODY = document.body;

addEventListener('change', e => {
  let _t = e.target;

  switch (_t.type) {
    case 'radio':
      _BODY.style.setProperty(`--${_t.name}`, +_t.value);
      break;}

}, false);

addEventListener('click', e => {
  let _t = e.target,
  _ae = document.querySelector('[aria-expanded=true]');

  if (_ae) _ae.setAttribute('aria-expanded', 'false');
  if (_t !== _ae) {
    if (_t.hasAttribute('aria-haspopup'))
    _t.setAttribute('aria-expanded', 'true');
  }
}, false);