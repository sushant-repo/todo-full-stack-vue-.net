import axios from "axios";

export async function getRequest(url, params = {}, config = null) {
  var options = {
    headers: {
      "Content-Type":
        params instanceof FormData ? "multipart/form-data" : "application/json",
    },
  };

  let response;
  try {
    response = await axios.get(url, params, options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function postRequest(url, data = {}, config = null) {
  try {
    response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
