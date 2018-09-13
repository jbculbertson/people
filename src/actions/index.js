import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const axiosInstance = axios.create();

export const BATCH_PERSON_CREATE = 'batch_person_create';
export const FETCH_PEOPLE = 'fetch_people';
export const AUTHENTICATE = 'authenticate';
export const REGISTER = 'register';
export const LOGOUT = 'logout';

export function logout() {
  return { type: LOGOUT };
}

export function register(user) {
  return dispatch => {
    const result = axiosInstance.post(
      `${baseUrl}/register`,
      user,
    );

    result.then(data => {
      dispatch({ type: REGISTER, payload: data });
    });
  };
}
export function authenticate(user) {
  return dispatch => {
    const result = axiosInstance.post(
      `${baseUrl}/authenticate`,
      user,
    );

    result.then(data => {
      dispatch({ type: AUTHENTICATE, payload: data });
    });
  };
}

export function createPersonBatch(newPerson, fileType, userId) {
  return dispatch => {
    const result = axiosInstance.post(
      `${baseUrl}/person/batch/${fileType}`,
      { newPerson, userId },
    );

    result.then(data => {
      dispatch({ type: BATCH_PERSON_CREATE, payload: data });
      dispatch(fetchPeople(userId));
    });
  };
}

export function fetchPeople(userId) {
  return dispatch => {
    const result = axiosInstance.get(`${baseUrl}/person/${userId}`);

    result.then(data => {
      dispatch({ type: FETCH_PEOPLE, payload: data });
    });
  };
}
