import { auth } from "@/auth";
import Header from "@/components/Organisms/Header";
import { getUser } from "@/services/users";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = await getUser(session?.user?.email!);

  return (
    <>
      <Header username={user ? user.name : undefined} />
      <div className="flex-grow p-16">{children}</div>
    </>
  );
}
