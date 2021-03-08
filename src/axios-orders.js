import axios from "axios"

const instance = axios.create({
  baseURL: "https://my-project-1578472308928-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance