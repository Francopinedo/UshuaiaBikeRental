import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminForm from "@/components/AdminForm";

export default async function AdminPage() {
  const session = await getServerSession();

  // 1. PROTECCIÓN: Si no hay sesión, rebota al login
  if (!session) {
    redirect("/api/auth/signin");
  }

  // 2. PROTECCIÓN EXTRA: Solo tu email (opcional pero recomendado)
  // if (session.user?.email !== "tu-correo@gmail.com") redirect("/");

  return (
    <main>
      <AdminForm userName={session.user?.name || "Admin"} />
    </main>
  );
}