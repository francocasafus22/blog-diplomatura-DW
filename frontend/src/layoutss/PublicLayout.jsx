import useAuth from "@/hooks/useAuth";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import ToastNotifications from "../components/ui/ToastNotifications";
import Footer from "@/components/Footer";

export default function PublicLayout() {
  const { user, logout } = useAuth();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} logout={logout} />
        <main className="flex-1 flex flex-col justify-center items-center">
          <Outlet context={user} />
        </main>
        <Footer />
        <ToastNotifications />
      </div>
    </>
  );
}
