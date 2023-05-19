import Panel from "../components/Panel.tsx";
import { Button } from "@mui/material";
import UserTable from "../components/UserTable.tsx";
import { Link } from "react-router-dom";

export default function HomePage() {
  const addNewUserButton = (
    <Link to="/form">
      <Button variant="contained">
        Add new
      </Button>
    </Link>
  );

  return (
    <Panel header="User List" buttons={addNewUserButton}>
      <UserTable/>
    </Panel>
  );
}