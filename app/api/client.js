import  {create} from "apisauce";
import authStorage from '../auth/storage';


const apiClient = create({
    baseURL: 'http://dar-best-route1.herokuapp.com/'
})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    request.headers['Content-Type'] = 'application/json';
    if (!authToken) return;
    request.headers['Authorization'] = `JWT ${authToken.access}`;
})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    return await get(url, params, axiosConfig);
};

export default apiClient;

