const apiUrl = process.env.EXPO_PUBLIC_SERVER_URL;

const fetchData = async ({ url, method = "GET", headers = {}, body = {} }) => {
  try {
    const response = await fetch(apiUrl + url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Hubo un problema con la solicitud.");
    }

    return response.json();
  } catch (error) {

    throw new Error(error);

  }
};

export { fetchData };
