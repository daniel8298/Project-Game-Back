import { createClient } from "redis";
import { config } from "dotenv";
config();
const {
  REDIS_PASSWORD: PASSWORD,
  REDIS_HOST: HOST,
  REDIS_PORT: PORT,
} = process.env;
export const redisClient = createClient({
  password: PASSWORD,
  socket: {
    host: HOST,
    port: Number(PORT),
  },
});
redisClient.on("error", function (error: Error) {
  console.error(error);
});
