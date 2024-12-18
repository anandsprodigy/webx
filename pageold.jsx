"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import { useState } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

export default function Users() {
  const UserData = [
    {
      id: "01JBRER5R754RT8NRKJGMT29D0",
      first_name: "Nealy",
      last_name: "McCulloch",
      email: "nmcculloch0@unesco.org",
      role: "CONTRIBUTOR",
      isDisabled: true,
      CreatedAt: "2022-06-25 18:41:43",
      ModifiedAt: "2024-09-24 23:59:11",
      Avatar: "https://avatar.iran.liara.run/public/51",
      employeeID: 1,
      country: "United States",
    },
    {
      id: "01JBRER5S1MP2ZJM748DZPFND5",
      first_name: "Arly",
      last_name: "Miguet",
      email: "amiguet1@sphinn.com",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2023-06-22 05:37:37",
      ModifiedAt: "2023-10-14 23:43:32",
      Avatar: "https://avatar.iran.liara.run/public/56",
      employeeID: 2,
      country: "United States",
    },
    {
      id: "01JBRER5S31X1AFE0D0KV35SZS",
      first_name: "Alfy",
      last_name: "Mabson",
      email: "amabson2@forbes.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2022-03-06 16:37:38",
      ModifiedAt: "2023-12-06 22:07:47",
      Avatar: "https://avatar.iran.liara.run/public/52",
      employeeID: 3,
      country: "United States",
    },
    {
      id: "01JBRER5S5GGWZ5QRM6GS3ZNY3",
      first_name: "Viviene",
      last_name: "Beaford",
      email: "vbeaford3@seesaa.net",
      role: "CONTRIBUTOR",
      isDisabled: true,
      CreatedAt: "2022-05-30 02:25:28",
      ModifiedAt: "2024-08-30 04:38:49",
      Avatar: "https://avatar.iran.liara.run/public/23",
      employeeID: 4,
      country: "United States",
    },
    {
      id: "01JBRER5S6Q9RGPW2H6Y51HCE7",
      first_name: "Karna",
      last_name: "Spencock",
      email: "kspencock4@businesswire.com",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2023-12-19 09:41:04",
      ModifiedAt: "2022-07-05 23:33:51",
      Avatar: "https://avatar.iran.liara.run/public/34",
      employeeID: 5,
      country: "United States",
    },
    {
      id: "01JBRER5S7FZX9DZPTKRDW0X5V",
      first_name: "Allistir",
      last_name: "Bonome",
      email: "abonome5@europa.eu",
      role: "ADMIN",
      isDisabled: false,
      CreatedAt: "2021-08-30 13:18:45",
      ModifiedAt: "2024-03-26 12:03:51",
      Avatar: "https://avatar.iran.liara.run/public/43",
      employeeID: 6,
      country: "United States",
    },
    {
      id: "01JBRER5S9RETZYG0PF4Y146Y0",
      first_name: "Olivette",
      last_name: "Orme",
      email: "oorme6@springer.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2021-11-16 17:45:47",
      ModifiedAt: "2023-02-04 17:01:45",
      Avatar: "https://robohash.org/ducimusautemoptio.png?size=50x50&set=set1",
      employeeID: 7,
      country: "United States",
    },
    {
      id: "01JBRER5SAFCDXFWNW21N0HMQT",
      first_name: "Chloette",
      last_name: "McGriffin",
      email: "cmcgriffin7@wired.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2022-08-26 16:54:55",
      ModifiedAt: "2024-08-18 04:41:16",
      Avatar: "https://robohash.org/nequenoncommodi.png?size=50x50&set=set1",
      employeeID: 8,
      country: "United States",
    },
    {
      id: "01JBRER5SB7W7GJPD1WYDY5WPJ",
      first_name: "Jedidiah",
      last_name: "Blare",
      email: "jblare8@discovery.com",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2021-11-30 10:26:30",
      ModifiedAt: "2023-08-20 04:54:43",
      Avatar:
        "https://robohash.org/reiciendisquiavoluptatem.png?size=50x50&set=set1",
      employeeID: 9,
      country: "United States",
    },
    {
      id: "01JBRER5SCPWJS984NNMP46QB5",
      first_name: "Roseann",
      last_name: "Ellen",
      email: "rellen9@dot.gov",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2022-03-09 23:35:47",
      ModifiedAt: "2023-05-06 10:10:09",
      Avatar: "https://robohash.org/remetofficiis.png?size=50x50&set=set1",
      employeeID: 10,
      country: "United States",
    },
    {
      id: "01JBRER5SD5Y989Y68JBZ1AZ48",
      first_name: "Maggi",
      last_name: "Albasini",
      email: "malbasinia@indiatimes.com",
      role: "ADMIN",
      isDisabled: false,
      CreatedAt: "2022-06-13 16:15:15",
      ModifiedAt: "2023-02-19 07:13:24",
      Avatar:
        "https://robohash.org/quisquamquibusdamcorrupti.png?size=50x50&set=set1",
      employeeID: 11,
      country: "United States",
    },
    {
      id: "01JBRER5SFKQM668T5XBTK0W0D",
      first_name: "Pieter",
      last_name: "McPhillimey",
      email: "pmcphillimeyb@lulu.com",
      role: "ADMIN",
      isDisabled: false,
      CreatedAt: "2024-08-23 15:16:22",
      ModifiedAt: "2023-12-11 05:48:44",
      Avatar: "https://robohash.org/odioquiprovident.png?size=50x50&set=set1",
      employeeID: 12,
      country: "United States",
    },
    {
      id: "01JBRER5SG9T2NSEFEM9NVF22X",
      first_name: "Elsey",
      last_name: "Eby",
      email: "eebyc@google.com.hk",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2023-06-07 23:14:42",
      ModifiedAt: "2023-09-25 19:18:46",
      Avatar: "https://robohash.org/doloripsammodi.png?size=50x50&set=set1",
      employeeID: 13,
      country: "United States",
    },
    {
      id: "01JBRER5SHPZ0MEF0GGJX26SYM",
      first_name: "Jeannine",
      last_name: "Kippen",
      email: "jkippend@yandex.ru",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2023-07-09 02:50:23",
      ModifiedAt: "2024-08-17 15:05:41",
      Avatar: "https://robohash.org/quibusdamundequis.png?size=50x50&set=set1",
      employeeID: 14,
      country: "United States",
    },
    {
      id: "01JBRER5SKPFPX6GTZ7VKCFJGE",
      first_name: "Madelaine",
      last_name: "Plaschke",
      email: "mplaschkee@twitpic.com",
      role: "ADMIN",
      isDisabled: false,
      CreatedAt: "2024-09-05 21:22:38",
      ModifiedAt: "2022-12-03 22:53:16",
      Avatar:
        "https://robohash.org/consecteturrepellendusconsequatur.png?size=50x50&set=set1",
      employeeID: 15,
      country: "United States",
    },
    {
      id: "01JBRER5SMX6HTBPKV8DW44Y9M",
      first_name: "Jervis",
      last_name: "Blakeborough",
      email: "jblakeboroughf@prlog.org",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2023-05-15 23:47:53",
      ModifiedAt: "2024-05-03 15:48:40",
      Avatar:
        "https://robohash.org/voluptatumdolorvelit.png?size=50x50&set=set1",
      employeeID: 16,
      country: "United States",
    },
    {
      id: "01JBRER5SNNS46VR10D9EFBPJC",
      first_name: "Winnie",
      last_name: "Inwood",
      email: "winwoodg@soup.io",
      role: "ADMIN",
      isDisabled: false,
      CreatedAt: "2022-09-21 23:36:15",
      ModifiedAt: "2022-11-02 18:04:37",
      Avatar:
        "https://robohash.org/assumendaquiadolorem.png?size=50x50&set=set1",
      employeeID: 17,
      country: "United States",
    },
    {
      id: "01JBRER5SPYC8BKWMMES9B7HCJ",
      first_name: "Patty",
      last_name: "Yokelman",
      email: "pyokelmanh@nifty.com",
      role: "CONTRIBUTOR",
      isDisabled: true,
      CreatedAt: "2024-10-15 15:50:49",
      ModifiedAt: "2024-05-17 09:20:16",
      Avatar:
        "https://robohash.org/perspiciatisquorepellat.png?size=50x50&set=set1",
      employeeID: 18,
      country: "United States",
    },
    {
      id: "01JBRER5SR9WCZ2WJRCC7YNJHF",
      first_name: "Raven",
      last_name: "Shippard",
      email: "rshippardi@networkadvertising.org",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2023-04-25 08:31:20",
      ModifiedAt: "2024-09-08 06:42:32",
      Avatar: "https://robohash.org/estvoluptatemeos.png?size=50x50&set=set1",
      employeeID: 19,
      country: "United States",
    },
    {
      id: "01JBRER5SSC7X37W3X6E5V6QN0",
      first_name: "Krissie",
      last_name: "Coneybeare",
      email: "kconeybearej@accuweather.com",
      role: "CONTRIBUTOR",
      isDisabled: false,
      CreatedAt: "2022-05-03 07:38:27",
      ModifiedAt: "2024-08-15 19:03:50",
      Avatar: "https://robohash.org/etnonfacilis.png?size=50x50&set=set1",
      employeeID: 20,
      country: "United States",
    },
    {
      id: "01JBRER5STR5EQ9AK8HBJJGNZ7",
      first_name: "Cinderella",
      last_name: "Oris",
      email: "corisk@arizona.edu",
      role: "CONTRIBUTOR",
      isDisabled: true,
      CreatedAt: "2023-05-16 09:56:35",
      ModifiedAt: "2023-07-15 17:02:27",
      Avatar:
        "https://robohash.org/voluptateveritatiscommodi.png?size=50x50&set=set1",
      employeeID: 21,
      country: "United States",
    },
    {
      id: "01JBRER5SVNC87R3Q2DZ1QBZBP",
      first_name: "Koo",
      last_name: "Catonne",
      email: "kcatonnel@freewebs.com",
      role: "CONTRIBUTOR",
      isDisabled: true,
      CreatedAt: "2023-10-11 20:58:42",
      ModifiedAt: "2023-05-06 21:02:54",
      Avatar: "https://robohash.org/fugiatvoluptatemid.png?size=50x50&set=set1",
      employeeID: 22,
      country: "United States",
    },
    {
      id: "01JBRER5SXZG7H125KD3CV76BV",
      first_name: "Borden",
      last_name: "Gothard",
      email: "bgothardm@bluehost.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2023-08-01 00:03:57",
      ModifiedAt: "2023-09-21 17:40:20",
      Avatar:
        "https://robohash.org/inventorequasifugiat.png?size=50x50&set=set1",
      employeeID: 23,
      country: "United States",
    },
    {
      id: "01JBRER5SYY0CDBJ0H86V2R7C4",
      first_name: "Eldredge",
      last_name: "Leuty",
      email: "eleutyn@wsj.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2021-10-11 03:17:49",
      ModifiedAt: "2023-11-08 18:47:18",
      Avatar:
        "https://robohash.org/voluptatemdoloribusnon.png?size=50x50&set=set1",
      employeeID: 24,
      country: "United States",
    },
    {
      id: "01JBRER5T0TT30J6JHBS46Z2QQ",
      first_name: "Caesar",
      last_name: "Austing",
      email: "caustingo@yolasite.com",
      role: "ADMIN",
      isDisabled: true,
      CreatedAt: "2021-11-24 19:19:32",
      ModifiedAt: "2022-11-07 03:17:32",
      Avatar: "https://robohash.org/suntetsed.png?size=50x50&set=set1",
      employeeID: 25,
      country: "United States",
    },
  ];

  const imageBodyTemplate = (rowData) => {
    return (
      <Avatar
        image={rowData.Avatar}
        imageAlt={rowData.first_name}
        shape="circle"
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </IconField>
      </div>
    );
  };

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    first_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    last_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    role: { value: null, matchMode: FilterMatchMode.IN },
  });

  const header = renderHeader();
  return (
    <>
      <Button>Click me</Button>
      <div className="min-h-screen flex flex-col items-center justify-center w-100">
        {/* <table className="border-3 border-black userTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Disabled</th>
              <th>Created At</th>
              <th>Modified At</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((user) => (
              <tr key={user.id}>
                <td class="border border-gray-300 px-4 py-2">{user.id}</td>
                <td class="border border-gray-300 px-4 py-2">
                  {user.first_name}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {user.last_name}
                </td>
                <td class="border border-gray-300 px-4 py-2">{user.email}</td>
                <td class="border border-gray-300 px-4 py-2">{user.role}</td>
                <td class="border border-gray-300 px-4 py-2">
                  {user.isDisabled ? "Yes" : "No"}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {user.CreatedAt}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {user.ModifiedAt}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  <img src={user.Avatar} alt={user.first_name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* <DataTable
          value={UserData}
          stripedRows
          showGridlines
          paginator
          rows={5}
          filters={filters}
          filterDisplay="row"
          globalFilterFields={[
            "first_name",
            "last_name",
            "email",
            "role",
            "created_at",
          ]}
          header={header}
          rowsPerPageOptions={[5, 10, 25, 50]}
          emptyMessage="No customers found."
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column header="ID" field="id" sortable filter></Column>
          <Column
            header="First Name"
            field="first_name"
            filter
            filterPlaceholder="Search by First Name"
            sortable
          ></Column>
          <Column
            header="Last Name"
            field="last_name"
            filter
            filterPlaceholder="Search by Last Name"
            sortable
          ></Column>
          <Column
            header="Email"
            field="email"
            filter
            filterPlaceholder="Search by Email"
            sortable
          ></Column>
          <Column
            header="Role"
            field="role"
            filter
            filterPlaceholder="Search by Role"
            sortable
          ></Column>
          <Column
            header="Disabled"
            field="isDisabled"
            filter
            filterPlaceholder="Search by Status"
            sortable
          ></Column>
          <Column
            header="Created At"
            field="CreatedAt"
            filter
            filterPlaceholder="Search by Creation Date"
            sortable
          ></Column>
          <Column
            header="Modified At"
            field="ModifiedAt"
            filter
            filterPlaceholder="Search by Modified Date"
            sortable
          ></Column>
          <Column
            header="Avatars"
            body={imageBodyTemplate}
            field="Avatar"
            sortable
          ></Column>
        </DataTable> */}
      </div>

      <Table>
        <TableCaption>List Of Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UserData.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.first_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">{user.CreatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
