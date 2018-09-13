import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const axiosInstance = axios.create();

export const BATCH_PERSON_CREATE = 'batch_person_create';
export const FETCH_PEOPLE = 'fetch_people';

export function createPersonBatch(newPerson, fileType) {
  return dispatch => {
    const result = axiosInstance.post(
      `${baseUrl}/person/batch/${fileType}`,
      newPerson,
    );

    result.then(data => {
      dispatch({ type: BATCH_PERSON_CREATE, payload: data });
      dispatch(fetchPeople());
    });
  };
}

export function fetchPeople() {
  return dispatch => {
    const result = axiosInstance.get(`${baseUrl}/person`);

    result.then(data => {
      dispatch({ type: FETCH_PEOPLE, payload: data });
    });
  };
}
