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

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="fixed w-full backdrop-filter bg-white/80 z-[51] top-0 border-gray-200 dark:bg-gray-900 lg:px-12 px-6">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/logo-kg.png"
                        className="h-12"
                        alt="Flowbite Logo"
                    />
                    <div className="-space-y-1">
                        <p className="self-center text-2xl font-bold whitespace-nowrap text-gray-800">
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
                                href="/"
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
                                Services
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
                                    className="text-white bg-slate-800 border font-medium rounded-xl text-md px-4 pt-1.5 pb-2 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-white bg-slate-800 border font-medium rounded-xl text-md px-4 pt-1.5 pb-2 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Log in
                                    </Link>
                                    {/* <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link> */}
                                </>
                            )}
                            {/* <Link
                                href={route("login")}
                                className="text-white bg-slate-800 border font-medium rounded-xl text-md px-4 pt-1.5 pb-2 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav className="fixed z-[999] w-full bg-white border-gray-200 dark:bg-gray-900">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link
        //             href="https://flowbite.com/"
        //             className="flex items-center space-x-3 rtl:space-x-reverse"
        //         >
        //             <img
        //                 src="https://flowbite.com/docs/images/logo.svg"
        //                 className="h-8"
        //                 alt="Flowbite Logo"
        //             />
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        //                 Flowbite
        //             </span>
        //         </Link>
        //         <button
        //             data-collapse-toggle="navbar-default"
        //             type="button"
        //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-8000 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //             aria-controls="navbar-default"
        //             aria-expanded="false"
        //         >
        //             <span className="sr-only">Open main menu</span>
        //             <svg
        //                 className="w-5 h-5"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 17 14"
        //             >
        //                 <path
        //                     stroke="currentColor"
        //                     stroke-linecap="round"
        //                     stroke-linejoin="round"
        //                     stroke-width="2"
        //                     d="M1 1h15M1 7h15M1 13h15"
        //                 />
        //             </svg>
        //         </button>
        //         <div
        //             className="hidden w-full md:block md:w-auto"
        //             id="navbar-default"
        //         >
        //             <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 <li>
        //                     <Link
        //                         href="#"
        //                         className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        //                         aria-current="page"
        //                     >
        //                         Home
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         About
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Services
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Pricing
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Contact
        //                     </Link>
        //                 </li>
        //                 <li className="">
        //                     <Link
        //                         href={route("login")}
        //                         className="text-white hover:scale-90 bg-[#27272a] font-semibold rounded-lg text-md px-4 py-1.5 active:scale-90 duration-300 transform text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //                     >
        //                         Login
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}
