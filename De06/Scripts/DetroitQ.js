
const url = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/QLine_Stops/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
let todos = [];

function getItems() {
    console.log("in js");
  fetch(url)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}
