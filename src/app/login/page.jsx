import LoginPage from '@/components/homepages/LoginPage';
import React, { Suspense } from 'react';

export const metadata = {
  title: "Sun Cart | Login",
};

const LoginFormPage = () => {
  return (
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <LoginPage></LoginPage>
    </Suspense>
  );
};

export default LoginFormPage;