import moment from 'moment';

export function authHeader() {
  let user = JSON.parse(localStorage.getItem('user') as string);

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}

export function handleResponse(response: any, type?: string) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401 && type === 'login') {
        window.location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const isLoggedIn = () => {
  const user = localStorage.getItem('user');
  let expiredSession = true;
  if (user) {
    const expirationDate = JSON.parse(user)?.data.expirationDate;
    expiredSession = new Date().getTime() > new Date(expirationDate).getTime();
  }
  return !expiredSession;
};

export const getUserToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user)?.data?.token;
  }

  return null;
};

export const getHeaders = (userToken: string) => ({
  method: 'GET',
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-Type': 'application/json',
  },
});

export const range = (start: number, end: number): number[] => {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
};

export const convertTimeToMinutes = (h?: number, m?: number): number =>
  h !== undefined && m !== undefined
    ? h * 60 + m
    : moment().hours() * 60 + moment().minutes();

export const convertTimeToPercentage = (t: number): number => (t * 100) / 60;

export const getTimeDifference = (s: string, e: string): number => {
  const diff = moment(e).diff(moment(s));
  return moment.duration(diff).minutes();
};
