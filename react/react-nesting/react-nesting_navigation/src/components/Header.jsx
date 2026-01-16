import Image from "./Image";

export default function Header({ logo, avatar, children }) {
  return (
    <>
      <header className="header">{children}</header>
    </>
  );
}
