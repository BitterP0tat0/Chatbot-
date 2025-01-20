import Nav from "@/Components/Nav";
import { Hero } from "@/Components/Hero";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div className="bg-slate-300">
      <Nav></Nav>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
