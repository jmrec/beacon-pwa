'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

type Report = {
    id: number;
    lat: number;
    lng: number;
    message: string;
};

const MainMap = ({ reports }: { reports: Report[] }) => {
    return (
        <MapContainer
            center={[16.4023, 120.5960]}
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
        >
            {/*<TileLayer*/}
            {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
            {/*/>*/}
            {/*<TileLayer*/}
            {/*    url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"*/}
            {/*    attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'*/}
            {/*/>*/}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            <MarkerClusterGroup>
                {reports.map((report) => (
                    <Marker key={report.id} position={[report.lat, report.lng]}>
                        <Popup>{report.message}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>

        </MapContainer>
    );
};

// You need to dynamically import this component in your Next.js page
// to avoid SSR issues with Leaflet.
export default MainMap;