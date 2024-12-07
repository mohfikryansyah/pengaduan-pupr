import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Main({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
};
