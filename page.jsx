"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  {
    id: "728ed52f",
    avatar: "/placeholder.svg",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    createdOn: "2023-01-23",
  },
  {
    id: "489e1d42",
    avatar: "/placeholder.svg",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    role: "User",
    status: "inactive",
    createdOn: "2023-03-12",
  },
  {
    id: "489e1d43",
    avatar: "/placeholder.svg",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    role: "Manager",
    status: "active",
    createdOn: "2023-02-15",
  },
  {
    id: "489e1d44",
    avatar: "/placeholder.svg",
    firstName: "Alice",
    lastName: "Williams",
    email: "alice@example.com",
    role: "User",
    status: "inactive",
    createdOn: "2023-04-01",
  },
];

const columns = [
  {
    id: "select",
    accessorKey: "Select",
    header: "Select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage
          src={row.original.avatar}
          alt={`${row.original.firstName} ${row.original.lastName}`}
        />
        <AvatarFallback>
          {row.original.firstName[0]}
          {row.original.lastName[0]}
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
      );
    },
    cell: ({ row }) => (
      <div
        className={`capitalize ${
          row.getValue("status") === "active"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit user</DropdownMenuItem>
            <DropdownMenuItem>Disable user</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function UsersTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [dateRange, setDateRange] = React.useState({ from: null, to: null });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    filterFns: {
      dateRange: (row, columnId, filterValue) => {
        const rowDate = new Date(row.getValue(columnId));
        const { from, to } = filterValue;
        if (from && to) {
          return rowDate >= from && rowDate <= to;
        } else if (from) {
          return rowDate >= from;
        } else if (to) {
          return rowDate <= to;
        }
        return true;
      },
    },
  });

  React.useEffect(() => {
    if (dateRange.from || dateRange.to) {
      table.getColumn("createdOn")?.setFilterValue(dateRange);
    } else {
      table.getColumn("createdOn")?.setFilterValue(undefined);
    }
  }, [dateRange, table]);

  const roles = React.useMemo(
    () => [...new Set(data.map((user) => user.role))],
    []
  );
  const statuses = React.useMemo(
    () => [...new Set(data.map((user) => user.status))],
    []
  );

  const handleResetFilters = () => {
    setGlobalFilter("");
    setDateRange({ from: null, to: null });
    table.resetColumnFilters();
  };

  const exportToCSV = () => {
    const headers = columns
      .map((column) => column.accessorKey || column.id)
      .filter((header) => header !== "avatar" && header !== "actions");
    const csvContent = [
      headers.join(","),
      ...table
        .getFilteredRowModel()
        .rows.map((row) =>
          headers.map((header) => row.getValue(header)).join(",")
        ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "users_table.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // const db = require("../models");
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("=====================Database Synced =================");
  // });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter all columns..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter Role <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {roles.map((role) => (
              <DropdownMenuCheckboxItem
                key={role}
                className="capitalize"
                checked={table
                  .getColumn("role")
                  ?.getFilterValue()
                  ?.includes(role)}
                onCheckedChange={(value) => {
                  if (value) {
                    table
                      .getColumn("role")
                      ?.setFilterValue([
                        ...(table.getColumn("role")?.getFilterValue() || []),
                        role,
                      ]);
                  } else {
                    table.getColumn("role")?.setFilterValue(
                      table
                        .getColumn("role")
                        ?.getFilterValue()
                        ?.filter((item) => item !== role)
                    );
                  }
                }}
              >
                {role}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Filter Status <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {statuses.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                className="capitalize"
                checked={table
                  .getColumn("status")
                  ?.getFilterValue()
                  ?.includes(status)}
                onCheckedChange={(value) => {
                  if (value) {
                    table
                      .getColumn("status")
                      ?.setFilterValue([
                        ...(table.getColumn("status")?.getFilterValue() || []),
                        status,
                      ]);
                  } else {
                    table.getColumn("status")?.setFilterValue(
                      table
                        .getColumn("status")
                        ?.getFilterValue()
                        ?.filter((item) => item !== status)
                    );
                  }
                }}
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="ml-2">
              <Calendar className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {dateRange.from.toDateString()} -{" "}
                    {dateRange.to.toDateString()}
                  </>
                ) : (
                  dateRange.from.toDateString()
                )
              ) : (
                "Filter Date Range"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        <Button variant="outline" onClick={handleResetFilters} className="ml-2">
          Remove Filters
        </Button>
        <Button variant="outline" onClick={exportToCSV} className="ml-2">
          Export CSV
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
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
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-2">
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
    </div>
  );
}

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <UsersTable />
    </div>
  );
}
