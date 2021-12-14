import axios from "axios";

const BASE_URL = "http/localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE0ZmM5MWM3ZWMzNTYxZjRjYjNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQzNjEzMH0.mAWnGaeeppSJOliicW3g4w_LCKjqIL2jfu4xjEe20p8";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseUR: BASE_URL,
  header: { token: `"Bearer ${TOKEN}` },
});
