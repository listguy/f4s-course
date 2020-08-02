const BASE_URL = "https://crudcrud.com/api/2657c3d4a450422eb5126fc267ad3384";

async function getResources() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return await response.json();
}

async function getResource(resource) {
  try {
    const response = await fetch(BASE_URL + "/" + resource);
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
}

async function postResource(resource, resourceData) {
  try {
    const response = await fetch(BASE_URL + "/" + resource, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(resourceData),
    });
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
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
