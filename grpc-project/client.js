const PROTO_AUTH_PATH = "./auth.proto";
const PROTO_WEATHER_PATH = "./weather.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const AuthService = grpc.loadPackageDefinition(protoLoader.loadSync(PROTO_AUTH_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})).AuthService;

const WeatherService = grpc.loadPackageDefinition(protoLoader.loadSync(PROTO_WEATHER_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})).WeatherService;

const authClient = new AuthService(
    "localhost:30043",
    grpc.credentials.createInsecure()
);

const weatherClient = new WeatherService(
    "localhost:30043",
    grpc.credentials.createInsecure()
);

module.exports = {
    authClient,
    weatherClient
}