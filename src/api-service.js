export default {
  getItems: () => {
    const options = {
      method: 'GET',
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
  createItem: ({ name, price, imageUrl }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, price, imageUrl }),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
};
