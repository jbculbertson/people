export function isLoggedIn() {
  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn && loggedIn === 'true') {
    return true;
  }
}
