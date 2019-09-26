const axios = require("axios");

const get = () => axios({ url: `https://catfact.ninja/fact`, method: "GET" });

const awaitRequests = async () => {
  const { id } = await get();
  const data = await get(id);
  console.log("data (await)", data);
};

const thenRequests = async () => {
  get().then(({ id }) => {
    get().then(data => console.log("data (then)", data));
  });
};

module.exports = {
  awaitRequests,
  thenRequests
};
