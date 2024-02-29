import Form from "@/app/ui/invoicess/create-form";
import Breadcrumbs from "@/app/ui/invoicess/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return <>page</>;
}
