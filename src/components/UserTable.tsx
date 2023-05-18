import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { User } from "../helpers/types.ts";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteUserDialog from "./DeleteUserDialog.tsx";

export default function UserTable() {
  const users = useTypedSelector(({ users }) => users);

  const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null);

  const handleOpenDeleteUserDialog = (id: number) => {
    setUserIdToDelete(id);
  };

  const handleCloseDeleteUserDialog = () => {
    setUserIdToDelete(null);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 20 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "username", headerName: "Username", sortable: true, flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    {
      field: "edit", headerName: "Edit", width: 100,
      renderCell: (params) => {
        const id = (params.row as User).id;
        return (
          <Link to={`/form/${id}`}>
            <Button variant="contained" color="warning">Edit</Button>
          </Link>
        );
      },
    },
    {
      field: "delete", headerName: "Delete", width: 100,
      renderCell: (params) => {
        const id = (params.row as User).id;
        return (
          <Button variant="contained" color="error" onClick={() => handleOpenDeleteUserDialog(id)}>Delete</Button>
        );
      },
    },
  ];

  if (users.length === 0) {
    return <p>No users to show</p>;
  }

  return (
    <>
      <DeleteUserDialog userId={userIdToDelete} onClose={handleCloseDeleteUserDialog}/>
      <DataGrid columns={columns} rows={users}/>
    </>
  );
}