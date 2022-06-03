import axios from "axios";

const PATHS_URI = "/allowed_paths";

axios.defaults.baseURL = "http://localhost:8081";

const api = {
	getPaths: () => {
		return axios.get(PATHS_URI);
	}
};

export default api;
