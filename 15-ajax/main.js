var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    const { responseText } = this;
    const jsonResponse = JSON.parse(responseText);
    renderApi(jsonResponse);
  }
});

xhr.open("GET", "https://api.covid19api.com/");

xhr.send();

function renderApi(jsonResponse) {
    const content = document.getElementById("content");
    for (const apiName in jsonResponse) {
        const {Name: name, Description: description, Path: path} =
            jsonResponse[apiName];
        const sp = document.createElement("div");
        const a = document.createElement("a");
        a.innerText = name;
        a.href = "https://api.covid19api.com" + path;
        a.title = description;
        sp.appendChild(a);
        content.appendChild(sp);
    }
}
