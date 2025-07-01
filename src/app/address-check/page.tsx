import { Suspense } from "react";

import AddressPageClient from "./AddressPageClient";

function AddressPage() {
  return (
    <Suspense fallback={null}>
      <AddressPageClient />
    </Suspense>
  );
}

export default AddressPage;
