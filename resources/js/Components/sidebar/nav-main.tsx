"use client";

import { CheckCircle, ChevronRight, Cross, LayoutGrid, type LucideIcon } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/Components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon: LucideIcon;
        isActive?: boolean;
        items?: {
            isActive?: boolean;
            title: string;
            url: string;
        }[];
    }[];
}) {
    const { url } = usePage();

    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel className="text-white">Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                <Link href="/dashboard">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            {...(url === "/dashboard"
                                ? { isActive: true }
                                : {})}
                        >
                            <LayoutGrid />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.items?.some((subItem) =>
                            subItem.url.endsWith(url)
                        )}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton
                                                asChild
                                                isActive={subItem.url.endsWith(
                                                    url
                                                )}
                                                className="text-white hover:text-slate-800"
                                            >
                                                <Link href={subItem.url}>
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
                <Link href="/dashboard">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            {...(url === "/makam"
                                ? { isActive: true }
                                : {})}
                        >
                            <Cross />
                            <span className="truncate">Data MAKAM Kota Gorontalo</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
                <Link href="/complaint">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            {...(url === "/complaint"
                                ? { isActive: true }
                                : {})}
                        >
                            <CheckCircle />
                            <span className="truncate">Data Pengaduan</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
                <Link href="/item">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            {...(url === "/item"
                                ? { isActive: true }
                                : {})}
                        >
                            <CheckCircle />
                            <span className="truncate">Data Barang</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
            </SidebarMenu>
        </SidebarGroup>
    );
}
