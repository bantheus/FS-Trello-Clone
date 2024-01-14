import { textFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex ">
        <Image
          src="/logo.svg"
          height={30}
          width={30}
          priority
          alt="Logo Taskify"
        />
        <p className={cn("pb-1 text-lg text-neutral-700 ", textFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};

export { Logo };
