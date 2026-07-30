// Tape scroll: duplicate content so the loop is seamless
document.querySelectorAll('.tape-inner').forEach(function(el) {
  el.innerHTML = el.innerHTML + el.innerHTML;
});
