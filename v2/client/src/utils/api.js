import axios from "axios";

const PATHS_URI = "/allowed_paths";
export const baseIPP =  "192.168.0.158:8081";
export const baseURL = "http://" + baseIPP;

axios.defaults.baseURL = baseURL;

const api = {
	getPaths: () => {
		return axios.get(PATHS_URI);
	}
};

export default api;
