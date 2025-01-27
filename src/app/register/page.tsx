import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import Registration from "@/Components/Regis/Registration";
import { useForm } from "react-hook-form";
export default function Page() {
  return (
    <div>
      <Nav></Nav>
      <Registration></Registration>
      <Footer></Footer>
    </div>
  );
}
