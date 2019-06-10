const development = {
    API_URL: "http://sat2-oauth.local",
    APP_URL: "http://localhost:9000",
    HOST_LOCAL: "localhost"
};

const production = {
    API_URL: "multiversemkt.com.br/login",
    APP_URL: "multiversemkt.com.br/login",
};

const config = process.env.NODE_ENV === "production" ? production : development;

export default config;