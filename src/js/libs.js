import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";

const client = createClient(
  "563492ad6f917000010000014e6da4e9f45449889ee8c265d7064ed2",
);
console.log(client);
const img = document.createElement("img");

refs.gallery.append(img);

// Random=========
// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.small;
// });
//Search ==========
let query = "dog";
// client.photos.search({ query, per_page: 5 }).then((result) => {
//   console.log(result.photos);
//   const imags = result.photos.map((el) => {
//     const img = document.createElement("img");
//     img.src = el.src.small;
//     return img;
//   });
//   refs.gallery.append(...imags);
// });

// serch with template============
client.photos.search({ query, per_page: 5 }).then((result) => {
  console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});
