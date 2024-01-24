import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={`#section1`} className="text-white">goo</Link>
        <Link href={`#section2`} className="text-white">goo</Link>
      </div>
      <div id="section1" className="h-screen bg-black">Heeeysss</div>
      <div id="section2" className="h-screen bg-red-900">Heeeysss</div>
    </>
  );
}
