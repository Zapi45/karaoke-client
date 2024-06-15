export function fetchApi(method, action, id) {
  return fetch("http://localhost:8000" + `/${action}${id ? `/${id}` : ""}`, {
    method: method,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        return data.data;
      }
    })
    .catch((Error) => alert(Error));
}
