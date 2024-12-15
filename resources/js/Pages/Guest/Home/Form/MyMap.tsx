import { useState } from "react";
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Icon } from "leaflet";

type Coordinates = {
    lat: number;
    lng: number;
};

type MyMapComponentProps = {
    onCoordinatesChange: (coords: Coordinates) => void;
};

const MapWithClick = ({ onCoordinatesChange }: MyMapComponentProps) => {
    useMapEvent("click", (event) => {
        const { lat, lng } = event.latlng;
        onCoordinatesChange({ lat, lng });
    });

    return null;
};

export default function MyMapComponent ({ onCoordinatesChange }: MyMapComponentProps) {
    const [markerPosition, setMarkerPosition] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    const handleCoordinatesChange = (coords: Coordinates) => {
        setMarkerPosition(coords);
        onCoordinatesChange(coords);
    };

    return (
        <div
            className="map-container"
            style={{ height: "400px", width: "100%" }}
        >
            <MapContainer
                center={[0.556174, 123.058548]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapWithClick onCoordinatesChange={handleCoordinatesChange} />
                {markerPosition && (
                    <Marker
                        position={markerPosition}
                        icon={
                            new Icon({
                                iconUrl:
                                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowAnchor: [10, 41],
                                shadowSize: [41, 41],
                            })
                        }
                    >
                        <Popup>
                            Latitude: {markerPosition.lat}, Longitude:{" "}
                            {markerPosition.lng}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};
