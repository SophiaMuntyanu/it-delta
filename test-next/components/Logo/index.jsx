import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        onClick={() => {
          router.push("/");
        }}
        src="/favicon.ico"
        alt="Picture of the author"
        height={40}
        width={40}
      ></Image>
    </>
  );
};

export default Logo;
