import classNames from "classnames";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

export default function SiteTitle({ isHome }: { isHome: boolean }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Link
      href="/"
      className={classNames("flex", {
        "group relative md:before:content-[''] before:absolute before:block before:w-[170px] before:h-7 before:bottom-0 before:-left-4 md:before:bg-red md:before:rounded-2xl before:hover:scale-x-100 before:scale-x-0 before:origin-left before:transition before:ease-in-out before:duration-300 before:-z-10 hover:text-white":
          !isHome,
      })}
    >
      <span className="md:group-hover:hidden w-[105px] md:w-[120px]">
        marieflor.dev
      </span>

      {!isMobile && (
        <span className="hidden group-hover:block w-[120px] text-white">
          go to home
        </span>
      )}

      {!isHome && <AiOutlineHome className="mt-0.5 md:mt-1" />}
    </Link>
  );
}
