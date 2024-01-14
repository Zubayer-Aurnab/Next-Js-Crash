import Image from "next/image";
import titne from "@/public/EREN_TITNE_.jpg"
const page = () => {
  return (
    <div>
      <h1>Vision Page</h1>
      <Image placeholder="blur" src={titne} alt="titne" quality={100}/>
      <Image placeholder="blur" src={titne} alt="titne" quality={100}/>
      
    </div>
  );
};

export default page;
