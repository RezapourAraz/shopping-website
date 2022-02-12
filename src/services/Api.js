import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";

const getData = async () => {
     const response = await axios.get(`${BASE_URL}products`);
     return response.data;
}

const getDetailes = async (id) => {
     const response = await axios.get(`${BASE_URL}products/${id}`);
     return response.data;
}

export { getData, getDetailes };