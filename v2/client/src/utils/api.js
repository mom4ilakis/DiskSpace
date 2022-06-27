import axios from "axios";

const PATHS_URI = "/allowed_paths";
export const baseURL = "http://localhost:8081";

axios.defaults.baseURL = baseURL;

const api = {
	getPaths: () => {
		return axios.get(PATHS_URI);
	}
};

export default api;
