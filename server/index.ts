import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Geocoding endpoint
  app.get("/api/geocode", async (req, res) => {
    const { longitude, latitude } = req.query;

    if (!longitude || !latitude) {
      return res.status(400).json({ error: "Missing longitude or latitude" });
    }

    try {
      const apiKey = "5fc13c47-2b27-472d-ad58-b5695c1e0d67";
      const apiUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${longitude},${latitude}&format=json`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Yandex API error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.response &&
        data.response.GeoObjectCollection &&
        data.response.GeoObjectCollection.featureMember &&
        data.response.GeoObjectCollection.featureMember.length > 0
      ) {
        const firstResult = data.response.GeoObjectCollection.featureMember[0];
        const address = firstResult.GeoObject.metaDataProperty.GeocoderMetaData.text;
        return res.json({ address });
      }

      return res.json({ address: null });
    } catch (error) {
      console.error("Geocoding error:", error);
      res.status(500).json({ error: "Failed to geocode coordinates" });
    }
  });

  return app;
}
