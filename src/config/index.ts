import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  postgres_url: process.env.POSTGRESS_URL,
  port: process.env.PORT || 8000,
};

export default config;
