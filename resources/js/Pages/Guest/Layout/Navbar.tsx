import { Link, usePage } from "@inertiajs/react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import { MenuIcon } from "lucide-react";
import "../../../../css/style.css";
import { PageProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navbar = [
    {
        url: "#",
        label: "Home",
    },
    {
        url: "#about",
        label: "About",
    },
    {
        url: "#whyus",
        label: "WhyUs",
    },
    {
        url: "#",
        label: "About",
    },
];

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    const [scrollY, setScrollY] = useState<number>(0);
    const navbarRef = useRef<HTMLElement | null>(null);
    const navbarItemRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollY = window.scrollY;
            setScrollY(scrollY);
            const navbar = navbarRef.current;
            const navbarItem = navbarItemRef.current;
            if (navbar) {
                if (scrollY > 0) {
                    navbarItem?.classList.add("max-w-7xl");
                    navbarItem?.classList.remove("max-w-for-monitor");
                    navbar.classList.add("bg-[#083247]", "shadow-md");
                    navbar.classList.remove("mt-3");
                } else {
                    navbarItem?.classList.remove("max-w-7xl");
                    navbarItem?.classList.add("max-w-for-monitor");
                    navbar.classList.add("mt-3");
                    navbar.classList.remove("bg-[#083247]", "shadow-md");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={cn(
                "fixed w-full z-[121] top-0 lg:px-12 px-6 duration-300 transition-all mt-3"
            )}
        >
            <div
                ref={navbarItemRef}
                className="max-w-for-monitor flex flex-wrap items-center justify-between mx-auto py-3 duration-300 transition-all"
            >
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/logo-kg.png"
                        className="w-9 h-auto"
                        alt="Flowbite Logo"
                    />
                    <div ref={logoRef} className="-space-y-1 text-gray-50">
                        <p className="self-center text-xl font-bold whitespace-nowrap">
                            DISPERKIM
                        </p>
                        <p className="self-center text-md font-bold whitespace-nowrap">
                            KOTA GORONTALO
                        </p>
                    </div>
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="md:hidden bg-transparent"
                        >
                            <MenuIcon className="h-6 w-6 text-gray-800" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove all
                                data.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul
                        className={cn(
                            "font-medium -ml-[7rem] flex flex-col p-4 md:py-1 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg text-gray-50"
                        )}
                    >
                        {navbar.map((nav, index) => (
                            <li key={index}>
                                <a
                                    href={nav.url}
                                    className="block rounded md:bg-transparent md:p-0 hover:text-blue-400 transition duration-300"
                                    aria-current="page"
                                >
                                    {nav.label}
                                </a>
                            </li>
                        ))}
                        <li className="active:scale-90 duration-300">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className={cn(
                                        "border font-medium rounded-xl text-md px-4 pt-1 pb-1.5 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-gray-50 outline-none"
                                    )}
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route("login")}
                                    className={cn(
                                        "border font-medium rounded-xl text-md px-4 pt-1 pb-1.5 active:scale-90 hover:duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 outline-none border-gray-50"
                                    )}
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
