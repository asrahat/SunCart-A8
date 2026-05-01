import { Suspense } from "react";
import LoginPage from "./LoginForm";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
};

export default Page;