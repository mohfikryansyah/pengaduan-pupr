import * as React from "react";
import { Column } from "@tanstack/react-table";
import { Check, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Separator } from "@/Components/ui/separator";

interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>;
    title?: string;
    options: {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
        color: string;
    }[];
    resetFilter: boolean;
    onResetComplete: () => void;
}

export function DataTableFacetedFilter<TData, TValue>({
    column,
    title,
    options,
    resetFilter,
    onResetComplete,
}: DataTableFacetedFilterProps<TData, TValue>) {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(() => {
        const currentFilter = column?.getFilterValue();
        return Array.isArray(currentFilter) ? currentFilter : [];
    });
    
    const facets = column?.getFacetedUniqueValues();

    React.useEffect(() => {
        if (resetFilter) {
            setSelectedValues([]);
            // column?.setFilterValue(undefined);
            onResetComplete();
        }
    }, [resetFilter, column, onResetComplete]);

    React.useEffect(() => {
        column?.setFilterValue(
            selectedValues.length > 0 ? selectedValues : undefined
        );
    }, [selectedValues, column]);

    const toggleSelection = (value: string) => {
        setSelectedValues((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 border-dashed"
                >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {title}
                    {selectedValues.length > 0 && (
                        <>
                            <Separator
                                orientation="vertical"
                                className="mx-2 h-4"
                            />
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal lg:hidden"
                            >
                                {selectedValues.length}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {selectedValues.length > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {selectedValues.length} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) =>
                                            selectedValues.includes(
                                                option.value
                                            )
                                        )
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={`Filter ${title}`} className="focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 w-full"/>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = selectedValues.includes(
                                    option.value
                                );

                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() =>
                                            toggleSelection(option.value)
                                        }
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <Check />
                                        </div>
                                        {option.icon && (
                                            <option.icon className={cn('mr-2 h-4 w-4', option.color)} />
                                        )}
                                        <span>{option.label}</span>
                                        {facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        {selectedValues.length > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => setSelectedValues([])}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
