import template from "../templates/item.hbs";
export default {
  query: "moon",
  page: 1,
  perPage: 4,
  baseUrl: `https://api.pexels.com/v1`,

  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },

  getFetch(val, place) {
    let key = "563492ad6f917000010000014e6da4e9f45449889ee8c265d7064ed2";
    this.queryValue = val;
    let params = `/search?query=${this.query}`;
    let url = this.baseUrl + params;
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        return data.photos;
      })
      .then((result) => {
        // console.log(result);
        const items = template(result);
        place.insertAdjacentHTML("afterbegin", items);
      });
  },
};
