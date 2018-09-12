import axios from 'axios';

const axiosInstance = axios.create();

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;
export default {
  async authenticate(user) {
    const data = await axios
      .post(`${baseUrl}/authenticate`, user)
      .then(response => response.data)
      .catch(() => {
        alert('Incorrect login credentials');
      });
    return data;
  },
  async register(user) {
    const data = await axios
      .post(`${baseUrl}/register`, user)
      .then(response => response.data)
      .catch(() => {
        alert('Incorrect credentials');
      });
    return data;
  },
};
