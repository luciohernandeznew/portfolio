import classNames from "classnames";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function SiteTitle({ isHome }: { isHome: boolean }) {
  return (
    <Link
      href="/"
      className={classNames("flex", {
        "group relative before:content-[''] before:absolute before:block before:w-[120px] before:h-7 before:bottom-0 before:-left-3 before:bg-pink before:rounded-2xl before:hover:scale-x-100 before:scale-x-0 before:origin-left before:transition before:ease-in-out before:duration-300 before:-z-10 hover:text-pink":
          !isHome,
      })}
    >
      <div className="group-hover:hidden w-[120px]">
        <span className="">marieflor.dev</span>
      </div>

      <div className="hidden group-hover:block w-[120px]">
        <span className="text-white">back home</span>
      </div>
      {!isHome && <AiOutlineHome className="mt-1" />}
    </Link>
  );
}
