import { ClientComponent } from "./client-component";

export const revalidate = 5;

export default function Page() {
  const count = Math.floor(Math.random() * 999);
  console.log("page count", count);

  return <ClientComponent count={count} />;
}
