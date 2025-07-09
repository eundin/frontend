import { Suspense } from "react";

import CheckOrderPhoneClientPage from "./CheckOrderPhoneClient";

export default function CheckOrderPhonePage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CheckOrderPhoneClientPage />
    </Suspense>
  );
}
