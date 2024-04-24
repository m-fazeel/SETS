"use client";

import React from "react";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

function DataTable({ columns, data }) {
    const [sorting, setSorting] = React.useState([]);
    const [filters, setFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState([]);
    const [selectedRowData, setSelectedRowData] = React.useState(null);
    const [rfidTag, setRfidTag] = React.useState('');
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const closeDialog = () => {
        setDialogOpen(false);
        setSelectedRowData(null);  // Clear selection when closing dialog
    };

    const openDialog = (row) => {
        setSelectedRowData(row.original);
        setRfidTag('');
        setDialogOpen(true);
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onFiltersChange: setFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            filters,
            columnVisibility,
        },


    });

    const DetailField = ({ label, value }) => (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">{label}</Label>
            <span className="col-span-3">{value}</span>
        </div>
    );

    function handleSubmit() {
        // Log current changes for debugging
        console.log("Saving changes...");
        console.log({
            orderId: selectedRowData.orderId,
            rfidTag,
        });
    
        // Check if data is managed locally or needs to be updated externally
        if (Array.isArray(data)) {
            // Create a new array with the updated row
            const updatedData = data.map(item => {
                if (item.orderId === selectedRowData.orderId) {
                    return {
                        ...item,
                        rfidTag: rfidTag, // Update RFID tag
                        status: "Processing" // Update status to "Processing"
                    };
                }
                return item;
            });
    
            // Update the state with the new data array, if using local state
            // If `data` is a prop controlled by a parent component, you would instead call a function passed as a prop here, e.g., updateData(updatedData);
        }
    
        // Close the dialog
        closeDialog();
    }

    let ws;


// have to edit this to pull the data out of the RFID reader 
    const handleScanRfid =  () => {
        // Simulate scanning by generating a random RFID number
        if (!ws || ws.readyState === WebSocket.CLOSED) {
            // Create a new WebSocket connection if it's not open
            ws = new WebSocket('ws://localhost:3000');
            
            ws.onopen = () => {
                console.log('WebSocket connection established');
            };

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setRfidTag(data.rfidTag); // Update your state with the new RFID tag
            };
    
            ws.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
    
            ws.onclose = () => {
                console.log('WebSocket connection closed');
            };
        } else {
            console.log('WebSocket connection already established');
        }

};

// useEffect hook to clean up the WebSocket connection when the component unmounts
useEffect(() => {
    return () => {
        if (ws) {
            ws.close();
        }
    };
}, []);



    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter orders..."
                    value={table.getColumn("orderId")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                        table.getColumn("orderId")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />



                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" onClick={() => openDialog(row)}>View Details</Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Order Details</DialogTitle>
                                                </DialogHeader>
                                                <div className="space-y-4 py-4">
                                                    <DetailField label="Order ID" value={selectedRowData?.orderId} />
                                                    <DetailField label="Items" value={selectedRowData?.items.join(', ')} />
                                                    <DetailField label="Origin" value={selectedRowData?.origin} />
                                                    <DetailField label="Destination" value={selectedRowData?.destination} />
                                                    <DetailField label="Status" value={selectedRowData?.status} />
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label className="text-right">RFID Tag</Label>
                                                        <Input className="col-span-2" value={rfidTag} readOnly />
                                                        <Button className="col-span-1" onClick={handleScanRfid} >Scan RFID</Button>
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button onClick={handleSubmit}>Save Changes</Button>
                                                    <Button onClick={closeDialog}>Close</Button>

                                                </DialogFooter>

                                            </DialogContent>
                                        </Dialog>


                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export { DataTable };

