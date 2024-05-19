"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  //CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname(); // pathname returne the pathname only even if we add something in the URL
  const query = useSearchParams(); // allow to search a params in the query. For exemple URL/navigation?q=champignon.

  const q = seachParams.get("q"); // here q will return champignon.
  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.push("/"); //move to the page in question. Client side navigation
  };

  return (
    <div>
      <Link href="/" prefect={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
