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
import { ArrowRight, MenuIcon } from "lucide-react";
import "../../../../css/style.css";
import { PageProps } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = useCallback((): void => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav
            className={cn(
                "fixed w-full z-[51] top-0 border-gray-200 dark:bg-gray-900 lg:px-12 px-6 duration-500",
                scrollY > 0
                    ? "bg-white/80 shadow-md backdrop-filter"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/logo-kg.png"
                        className="w-9 h-auto"
                        alt="Flowbite Logo"
                    />
                    <div className="-space-y-2">
                        <p className="self-center text-xl font-bold whitespace-nowrap text-gray-800">
                            DISPERKIM
                        </p>
                        <p className="self-center text-md font-bold whitespace-nowrap text-gray-800">
                            KOTA GORONTALO
                        </p>
                    </div>
                </Link>
                {/* <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> */}
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
                                permanently // delete your account and remove
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                {/* </div> */}

                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium -ml-[7rem] flex flex-col p-4 md:py-1 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
                        {/* <li>
                            <DropdownMenuDemo />
                        </li> */}
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-gray-800 bg-blue-700 rounded md:bg-transparent md:text-gray-800 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 underline-grow transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 underline-grow transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 underline-grow transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 underline-grow transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="active:scale-90 duration-300">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-white bg-slate-800 font-medium rounded-xl text-md px-4 pt-1.5 pb-2 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-white bg-slate-800  font-medium rounded-xl text-md px-4 pt-1.5 pb-2 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Log in
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
