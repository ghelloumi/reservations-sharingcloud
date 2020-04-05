export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(<string>localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}

export const isLoggedIn = () => {
  const user = localStorage.getItem('user');
  let expiredSession = true;
  if (user) {
    const expirationDate = JSON.parse(user)?.data.expirationDate;
    expiredSession = new Date().getTime() > new Date(expirationDate).getTime();
  }
  return !expiredSession
}
