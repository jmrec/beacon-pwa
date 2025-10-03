// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";

import DynamicMap from '@/components/DynamicMap';

// Create some mock data for previewing
const mockReports = [
    { id: 1, lat: 16.416, lng: 120.592, message: 'Power out near Burnham Park' },
    { id: 2, lat: 16.415, lng: 120.593, message: 'Another report from Burnham' },
    { id: 3, lat: 16.426, lng: 120.602, message: 'Outage near Camp John Hay' },
];

export default function Home() {
    return (
        <main className="h-screen w-sreen">
            <DynamicMap reports={mockReports} />
        </main>
    );
}

// export default function Home() {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
//             <Card className="w-full max-w-md">
//                 <CardHeader>
//                     <CardTitle className="text-2xl">Project Beacon</CardTitle>
//                     <CardDescription>
//                         Real-time outage reporting for Baguio City.
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-sm text-muted-foreground">
//                         Help your community by reporting an outage. Your report provides
//                         valuable information to BENECO and your neighbors.
//                     </p>
//                 </CardContent>
//                 <CardFooter>
//                     <Button className="w-full">Report an Outage</Button>
//                 </CardFooter>
//             </Card>
//         </main>
//     );
// }
