import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { SearchIcon } from "lucide-react";

export function SearchComplaint() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 text-gray-100 rounded-full text-base shadow-md">
                    <SearchIcon className="w-5 h-5 mr-2 shrink-0" />
                    <span>Cari Pengaduan Anda</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] top-[25%] p-0 flex items-center overflow-hidden">
                <Label>

                <SearchIcon className="w-6 h-6 ms-3 mx-auto" />
                </Label>
                <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="border-none focus:ring-0 py-3 focus:outline-none focus:border-none focus-visible:ring-0 focus-visible:ring-white"
                />
                
            </DialogContent>
        </Dialog>
    );
}
