import { BASE_URL } from '../config';

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  create(params) {
    // params is going to look like:
    // { email: <some-email>, password: <some-password>, first_name: '' }
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params }),
    }).then((res) => res.json());
  },
};
