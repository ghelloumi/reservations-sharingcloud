export function authHeader() {
  let user = JSON.parse(localStorage.getItem('user') as string);

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
