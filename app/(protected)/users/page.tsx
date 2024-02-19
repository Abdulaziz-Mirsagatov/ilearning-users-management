import FormContainer from "@/components/Organisms/Container/Form";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const UsersPage = () => {
  return (
    <div className="grid h-full">
      <Suspense
        fallback={
          <p className="text-xl text-medium-gray text-center">Loading...</p>
        }
      >
        <FormContainer />
      </Suspense>
    </div>
  );
};

export default UsersPage;
