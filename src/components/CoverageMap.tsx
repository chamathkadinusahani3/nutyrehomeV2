import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet's default marker is a blue raster PNG; swap it for an on-brand
// yellow/black pin so the map matches the rest of the site's palette.
const pinIcon = L.divIcon({
  className: '',
  html: `<svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.7 23.3 0 15 0z" fill="#121212" />
    <circle cx="15" cy="15" r="8" fill="#F9C80E" />
  </svg>`,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -36]
});

const coverageTowns: { name: string; position: [number, number] }[] = [
{ name: 'Hatfield', position: [51.7636, -0.2295] },
{ name: 'Welwyn Garden City', position: [51.8009, -0.2088] },
{ name: 'St Albans', position: [51.7520, -0.3360] },
{ name: 'Stevenage', position: [51.9022, -0.2018] },
{ name: 'Hertford', position: [51.7961, -0.0784] },
{ name: 'Potters Bar', position: [51.6929, -0.1810] }];


const centre: [number, number] = [51.7850, -0.2210];

export function CoverageMap() {
  return (
    <MapContainer
      center={centre}
      zoom={11}
      scrollWheelZoom={false}
      className="h-full min-h-[340px] w-full"
      attributionControl={false}>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      <Circle
        center={centre}
        radius={16000}
        pathOptions={{ color: '#121212', fillColor: '#F9C80E', fillOpacity: 0.15, weight: 1.5 }} />

      {coverageTowns.map((town) =>
      <Marker key={town.name} position={town.position} icon={pinIcon}>
          <Popup>{town.name} &middot; Nutyre mobile fitting zone</Popup>
        </Marker>
      )}
    </MapContainer>);

}
