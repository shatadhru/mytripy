"use client";

import { usePathname } from "next/navigation";

import config from "@/ecom.config";
import ecomconfig from "@/ecom.config";
import { adminPages } from "./pages";


function AdminPanelRouter() {
  const pathname = usePathname();

  const route = ecomconfig.adminurl.routes.find(
    (route) => route.href === pathname
  );

  if (!route) {
    return <div>404 - Page not found</div>;
  }

  const Component =
    adminPages[route.page as keyof typeof adminPages];

  if (!Component) {
    return <div>Page component not found</div>;
  }

  return <Component />;
}

export default AdminPanelRouter;