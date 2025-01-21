import { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvent,
    useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Icon, Map as LeafletMap } from "leaflet";
import { Coordinates } from "@/lib/FormPengaduan/type";

type MyMapComponentProps = {
    onCoordinatesChange: (coords: Coordinates) => void;
    currentLocation: { lat: number; lng: number } | null;
};

const MapClickHandler = ({ onCoordinatesChange, currentLocation }: MyMapComponentProps) => {
    const map = useMap();

    useEffect(() => {
        if (currentLocation) {
            map.setView([currentLocation.lat, currentLocation.lng]);
        }
    }, [currentLocation, map]);

    useMapEvent("click", (event) => {
        const { lat, lng } = event.latlng;
        onCoordinatesChange({ lat, lng });
    });

    return null;
};

const defaultMarkerIcon = new Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowAnchor: [10, 41],
    shadowSize: [41, 41],
});

const MapWithInvalidateSize = () => {
    const map = useMap();

    useEffect(() => {
        if (map) {
            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        }
    }, [map]);

    return null;
};

export default function MyMapComponent({
    onCoordinatesChange,
    currentLocation,
}: MyMapComponentProps) {
    const [markerPosition, setMarkerPosition] = useState<Coordinates | null>(
        null
    );

    useEffect(() => {
        if (currentLocation) {
            setMarkerPosition(currentLocation);
        }
    }, [currentLocation]);

    // console.log(currentLocation);

    const handleCoordinatesChange = (coords: Coordinates) => {
        setMarkerPosition({
            lat: Number(coords.lat),
            lng: Number(coords.lng),
        });
        onCoordinatesChange(coords);
    };

    return (
        <div className="map-container w-full h-[400px]">
            <MapContainer
                center={[0.556174, 123.058548]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapWithInvalidateSize />
                <MapClickHandler
                    onCoordinatesChange={handleCoordinatesChange} currentLocation={currentLocation}
                />
                {markerPosition && (
                    <Marker position={markerPosition} icon={defaultMarkerIcon}>
                        <Popup>
                            Latitude: {markerPosition.lat}, Longitude:{" "}
                            {markerPosition.lng}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}
