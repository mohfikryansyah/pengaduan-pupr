"use client";

import * as React from "react";
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/Components/sidebar/nav-main";
import { NavProjects } from "@/Components/sidebar/nav-projects";
import { NavSecondary } from "@/Components/sidebar/nav-secondary";
import { NavUser } from "@/Components/sidebar/nav-user";
import { Link, usePage } from "@inertiajs/react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Data APJ",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Konvensional",
                    url: "/user/index",
                },
                {
                    title: "LED",
                    url: "/profile",
                },
                {
                    title: "PJUTS",
                    url: "#",
                },
                {
                    title: "Jumlah APJ Kota Gorontalo",
                    url: "#",
                },
                {
                    title: "Rekening APJ Kota Gorontalo",
                    url: "#",
                },
            ],
        },
        {
            title: "Data Panel",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Paska Bayar",
                    url: "#",
                },
                {
                    title: "Prabayar",
                    url: "#",
                },
                {
                    title: "Panel Kota Gorontalo",
                    url: "#",
                },
            ],
        },
        // {
        //     title: "Documentation",
        //     url: "#",
        //     icon: BookOpen,
        //     items: [
        //         {
        //             title: "Introduction",
        //             url: "#",
        //         },
        //         {
        //             title: "Get Started",
        //             url: "#",
        //         },
        //         {
        //             title: "Tutorials",
        //             url: "#",
        //         },
        //         {
        //             title: "Changelog",
        //             url: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: Settings2,
        //     items: [
        //         {
        //             title: "General",
        //             url: "#",
        //         },
        //         {
        //             title: "Team",
        //             url: "#",
        //         },
        //         {
        //             title: "Billing",
        //             url: "#",
        //         },
        //         {
        //             title: "Limits",
        //             url: "#",
        //         },
        //     ],
        // },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Lokasi APJ Kota Gorontalo",
            url: "#",
            icon: Frame,
        },
        {
            name: "Lokasi Panel Kota Gorontalo",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Lokasi MAKAM Kota Gorontalo",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { url } = usePage();

    // Letakkan kode fungsi isActive di sini
    const isActive = (item: any) => {
        if (item.url === url || item.url === route("dashboard")) {
            return true;
        }

        return item.items?.some(
            (subItem: any) =>
                subItem.url === url || subItem.url === route("dashboard")
        );
    };

    return (
        <Sidebar
            variant="inset"
            {...props}
            className="bg-emerald-800 text-white"
        >
            <SidebarHeader className="bg-emerald-800 text-white">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="#">
                                <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-transparent text-sidebar-primary-foreground">
                                    <img
                                        src="/logo-kg.png"
                                        className="h-9"
                                        alt="Flowbite Logo"
                                    />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate uppercase font-semibold">
                                        Disperkim
                                    </span>
                                    <span className="truncate text-xs">
                                        Kota Gorontalo
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-emerald-800 text-white">
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter className="bg-emerald-800 text-white">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
