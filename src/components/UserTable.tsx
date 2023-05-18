import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { FetchStatus } from "../types.ts";

export default function UserTable() {
  const users = useTypedSelector((state) => state.users);
  const status = useTypedSelector((state) => state.status);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 20 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    {
      field: "edit", headerName: "Edit", width: 100,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <Button variant="contained" color="warning">Edit</Button>
        );
      },
    },
    {
      field: "delete", headerName: "Delete", width: 100,
      renderCell: () => {
        return (
          <Button variant="contained" color="error">Delete</Button>
        );
      },
    },
  ];

  const content = {
    [FetchStatus.NONE]: <></>,
    [FetchStatus.IN_PROGRESS]: <>Loading</>,
    [FetchStatus.ERROR]: <>Error</>,
    [FetchStatus.SUCCESS]: <DataGrid columns={columns} rows={users}/>,
  };

  return content[status];
}