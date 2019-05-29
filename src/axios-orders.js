import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-279a1.firebaseio.com/"
});

export default instance;
