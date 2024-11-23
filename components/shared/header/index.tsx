import { ModeToggle } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.jpeg"
              width={38}
              height={38}
              alt={`${APP_NAME} logo`}
            />
            <div className="p-2 text-3xl">
              <span className="text-orange-500">Whiskey</span>
            </div>
          </Link>
        </div>
        <div>
          {" "}
          <ModeToggle />
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/cart">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
