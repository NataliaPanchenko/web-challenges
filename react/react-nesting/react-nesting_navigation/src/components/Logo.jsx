import Image from "./Image";
import logo from "../img/logo.jpg";
import Link from "./Link";

export default function Logo() {
  return (
    <Link>
      <Image src={logo} alt={"Logo"} />
    </Link>
  );
}
