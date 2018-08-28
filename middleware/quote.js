import axios from 'axios';

export default function ({
  params,
  store
}) {
  return axios.get(`http://quotes.rest/qod.json`)
    .then((response) => {
      store.commit('add', response.data.contents.quotes[0]);
    })
}
