import TabBar from "../TabBar";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <TabBar />
    </div>
  );
}
