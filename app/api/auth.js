import client from "./client";

const login = (body) => client.post("/auth/jwt/create/", body);

const check_user = (body) => client.post("/user-api/check-user/", body);

const verify_token = (body) => client.post("/auth/jwt/verify/", body);

const register = (body) => client.post("/auth/users/", body);

const get_user = () => client.get("/auth/users/");

export default {
  login,
  check_user,
  verify_token,
  register,
  get_user,
};
