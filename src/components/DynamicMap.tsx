'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

// We need to re-define the type here or import it
type Report = {
    id: number;
    lat: number;
    lng: number;
    message: string;
};

const DynamicMap = ({ reports }: { reports: Report[] }) => {
    // Use useMemo to prevent the component from being re-imported on every render
    const Map = useMemo(() => dynamic(
        () => import('@/components/MainMap'),
        {
            loading: () => <p>A map is loading...</p>,
            ssr: false
        }
    ), []);

    return <Map reports={reports} />;
};

export default DynamicMap;