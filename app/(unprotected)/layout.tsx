export default function UnprotectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
