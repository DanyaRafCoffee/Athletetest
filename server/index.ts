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

    console.log("Geocoding request received:", { longitude, latitude });

    if (!longitude || !latitude) {
      return res.status(400).json({ error: "Missing longitude or latitude" });
    }

    try {
      const apiKey = "fc9d5a45-9eb0-4980-a2c8-21b53a4ddbd4";
      const apiUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${longitude},${latitude}&format=json`;

      console.log("Calling Yandex API:", apiUrl);

      const response = await fetch(apiUrl);
      console.log("Yandex API response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Yandex API error response:", errorText);
        throw new Error(`Yandex API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Yandex API response data:", data);

      if (
        data.response &&
        data.response.GeoObjectCollection &&
        data.response.GeoObjectCollection.featureMember &&
        data.response.GeoObjectCollection.featureMember.length > 0
      ) {
        const firstResult = data.response.GeoObjectCollection.featureMember[0];
        const address = firstResult.GeoObject.metaDataProperty.GeocoderMetaData.text;
        console.log("Found address:", address);
        return res.json({ address });
      }

      console.log("No geocoding results found");
      return res.json({ address: null });
    } catch (error) {
      console.error("Geocoding error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  });

  return app;
}
