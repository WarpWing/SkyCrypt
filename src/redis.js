import Redis from "ioredis";
import credentials from "./credentials.js";

export const redisClient = new Redis.Cluster([
  {
    port: 6379,
    host: "10.42.0.4",
  },
  {
    port: 6379,
    host: "10.42.0.5",
  },
  {
    port: 6379,
    host: "10.42.0.6",
  },
  {
    port: 6379,
    host: "10.42.0.7",
  }, 
  {
    port: 6379,
    host: "10.42.0.9",
  },
  {
    port: 6379,
    host: "10.42.0.12",
  }, 
]);
