import Header from "@/components/Organisms/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header username="Abdulaziz" />
      <div className="flex-grow p-16">{children}</div>
    </>
  );
}
