import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

class POKEMON {
  async listPokemons({ params, data }) {
    try {
      const response = await axios.get(
        API_URL + "pokemon",
        { params },
        { ...data }
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async get({ name }) {
    try {
      const response = await axios.get(API_URL + "pokemon/" + name);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getType({ type }) {
    try {
      const response = await axios.get(API_URL + "type/" + type);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new POKEMON();
