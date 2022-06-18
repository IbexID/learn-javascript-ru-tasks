/* Будет ли эта функция работать как-то иначе, если убрать else?
 */
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
// будет работать одинаково