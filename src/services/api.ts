import axios from "axios";

// configure the base url like: "http://localhost:5174/api"

const productionURL = "https://santiagomonteiro.github.io/dt-money/api"
const developmentURL = "http://localhost:5174/api"

export const api = axios.create({
  baseURL: developmentURL
});