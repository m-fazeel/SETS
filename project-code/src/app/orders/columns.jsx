"use client"


import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const columns = [
    {
        accessorKey: "orderId",
        header: "Order ID",
    },
    {
        accessorKey: "items",
        header: "Items",
    },
    {
        accessorKey: "origin",
        header: "Origin",
    },
    {
        accessorKey: "destination",
        header: "Destination",
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

        enableSorting: true,
        enableFiltering: true,
    },
    {
        accessorKey: "rfidTag",
        header: "RFID Tag",
    }
];

module.exports = {
    columns,
};