import { Suspense } from "react";

import AddressUnavailableClientPage from "./AddressUnavailableClient";

export default function AddressUnavailablePage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <AddressUnavailableClientPage />
    </Suspense>
  );
}
