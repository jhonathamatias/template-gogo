import ApiRequest from "tools/ApiRequest";

export function doLogin(user) {
  const params = new URLSearchParams();

  params.append('email', user.email);
  params.append('password', user.password);

  return ApiRequest.post("/login", params);
};

export function doFogot(email, swall) {

  const params = new URLSearchParams();

  params.append('email', user.email);

  ApiRequest.post("/forgot/password", params);
};
