export const metadata = {
  title: "Smart Outage Manager",
  description: "Efficient outage reporting and dispatch system with GIS maps and real-time analytics for utilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}