// teste.js
const axios = require("axios");

const url = "http://localhost:3000";

async function teste() {
  for (let i = 0; i < 20; i++) {
    try {
      const res = await axios.get(url);

      console.log(`Tentativa ${i}: ${res.status}`);
    } catch (err) {
      console.log(
        `Tentativa ${i}: ${err.response.status} - ${err.response.data}`
      );
    }
  }
}

teste();