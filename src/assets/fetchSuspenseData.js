const apiUrl = process.env.EXPO_PUBLIC_SERVER_URL

const fetchUrl = (url,method='GET') => {
  return 
}

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};



const fetchSuspenseData = ({url,method='GET',body={}}) => {
    const promise = fetch(apiUrl+url, { method:'GET', body: JSON.stringify(body) })
    .then((response) => response.json())
    .then((json) => json);
    return getSuspender(promise);
};

export { fetchSuspenseData };
