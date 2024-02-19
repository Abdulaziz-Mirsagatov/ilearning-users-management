import { getUsers } from "@/services/users";
import UsersForm from "../../Form/Users";
import { TableHeader } from "../../Table";
import { auth } from "@/auth";

const FormContainer = async () => {
  const users = await getUsers();
  const session = await auth();

  const headers: TableHeader[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "position", label: "Position" },
    { key: "status", label: "Status" },
    { key: "lastLogin", label: "Last Logged In At" },
    { key: "registrationTime", label: "Registered At" },
  ];

  return (
    <UsersForm data={users} headers={headers} email={session?.user?.email!} />
  );
};

export default FormContainer;
