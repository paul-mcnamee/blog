import axios from 'axios';

export default function ({
  params,
  store
}) {
  return axios.get(`http://quotes.rest/qod.json`)
    .then((response) => {
      console.log("results: " + response.data.contents.quotes[0]);
      store.commit('add', response.data.contents.quotes[0]);
    });
  // () => {
  //   store.commit('quote', "TestQuote");
  //   store.commit('author', "Author");
  // }
}
