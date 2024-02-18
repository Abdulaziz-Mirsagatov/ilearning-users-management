import UsersForm from "@/components/Organisms/Form/Users";
import { TableHeader } from "@/components/Organisms/Table";
import { getUsers } from "@/services/users";

export const dynamic = "force-dynamic";

const UsersPage = async () => {
  const users = await getUsers();

  const headers: TableHeader[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "position", label: "Position" },
    { key: "status", label: "Status" },
    { key: "lastLogin", label: "Last Logged In At" },
    { key: "registrationTime", label: "Registered At" },
  ];

  return (
    <div className="grid h-full">
      <UsersForm data={users} headers={headers} />
    </div>
  );
};

export default UsersPage;
