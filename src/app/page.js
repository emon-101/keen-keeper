import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="divider my-10"></div>
      <Friends />
    </>
  );
}
