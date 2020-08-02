// defaults
axios.defaults.baseURL = "https://crudcrud.com/api/2657c3d4a450422eb5126fc267ad3384";
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.validateStatus = status => status >= 200 && status < 300;

function getResources() {
    return axios.get("/").then(r => r.data);
}

function getResource(resource) {
    return axios.get("/" + resource).then(r => r.data);
}

function postResource(resource, resourceData) {
    return axios.post("/" + resource, resourceData).then(r => r.data);
}

(async function main() {
  const resources = await getResources();
  console.log(resources);
  
  if (resources.length > 0) {
    const resource = await getResource(resources[0]);
    console.log(resource);
  }

  const testResource = { x: 5, y: 7 };
  const response = await postResource("test", testResource);
  console.log(response);
})();
