import { Suspense } from "react";

import CheckOrderAddressClientPage from "./CheckOrderAddressClient";

export default function AddressPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CheckOrderAddressClientPage />
    </Suspense>
  );
}
