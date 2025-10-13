import Link from "next/link";

const MenuNavbar = () => {
  return (
    <>
      <li>
        <Link href={"#about-me"}>درباره من</Link>
      </li>
      <li>
        <Link href={"#my-skills"}>مهارت ها</Link>
      </li>
      <li>
        <Link href={"#my-projects"}>نمونه کار ها</Link>
      </li>
      <li>
        <Link href={"#contact-me"}>تماس با من</Link>
      </li>
    </>
  );
};

export default MenuNavbar;
