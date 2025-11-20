import { useEffect, useRef, useState } from "react";

interface YandexMapProps {
  onAddressSelect: (address: string) => void;
  height?: string;
}

export default function YandexMap({ onAddressSelect, height = "327px" }: YandexMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const loadYandexMaps = () => {
      if ((window as any).ymaps) {
        (window as any).ymaps.ready(initializeMap);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=5fc13c47-2b27-472d-ad58-b5695c1e0d67&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        (window as any).ymaps.ready(initializeMap);
      };
      script.onerror = () => {
        console.error("Failed to load Yandex Maps API");
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapContainer.current) return;

      const ymaps = (window as any).ymaps;

      const map = new ymaps.Map(mapContainer.current, {
        center: [55.75, 37.57],
        zoom: 12,
        controls: ["zoomControl", "fullscreenControl"],
      });

      mapInstance.current = map;
      setMapReady(true);

      map.events.add("click", (e: any) => {
        const coords = e.get("coords");
        if (!coords) return;

        const placemark = new ymaps.Placemark(coords, {}, {
          preset: "islands#redDotIcon",
        });

        map.geoObjects.removeAll();
        map.geoObjects.add(placemark);

        try {
          const geocodePromise = ymaps.geocode(coords);
          if (geocodePromise && typeof geocodePromise.then === 'function') {
            geocodePromise.then((res: any) => {
              try {
                if (res && res.geoObjects && res.geoObjects.length > 0) {
                  const firstGeoObject = res.geoObjects.get(0);
                  if (firstGeoObject) {
                    const address = firstGeoObject.getAddressLine();
                    if (address) {
                      onAddressSelect(address);
                    }
                  }
                }
              } catch (e) {
                console.error("Error processing geocode response:", e);
              }
            }).catch((error: any) => {
              console.error("Geocoding error:", error);
            });
          } else {
            console.error("ymaps.geocode is not available");
          }
        } catch (error) {
          console.error("Geocoding exception:", error);
        }
      });
    };

    loadYandexMaps();
  }, [onAddressSelect]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: height,
        borderRadius: "40px",
        overflow: "hidden",
      }}
    />
  );
}
