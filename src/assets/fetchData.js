import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_SERVER_URL;

const fetchData = async ({ url, method = "GET", headers = {}, body = {} }) => {
  const URL = apiUrl + url;
  const options = {
    method,
    url,
    baseURL:apiUrl,
    data: body,
    headers: {
      ...headers
    },
  }
  try {
    console.log(options)
    const response = await axios(URL, options);
    console.log(response)
    if (response.data.error) throw new Error("Response.error Hubo un problema con la solicitud.",response.data.msj);
    return response.data;
  } catch (error) {
    console.log(error);
    // Si deseas propagar el error al lugar donde se llama a fetchData, puedes lanzarlo nuevamente
  }
};

export { fetchData };