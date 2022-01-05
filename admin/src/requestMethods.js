export const GET_URL = "http://malbecapi.sebasdev.com/api/";
export const PAGE_URL = "http://localhost:3001/";

const TOKEN = window.localStorage.getItem("TOKEN");

export const AdminToken = {
  headers: { token: `Bearer ${TOKEN}` },
};
