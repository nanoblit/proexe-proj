import Panel from "../components/Panel.tsx";
import { Button } from "@mui/material";
import UserTable from "../components/UserTable.tsx";

export default function Home() {
  const addNewButton = (
    <Button variant="contained">
      Add new
    </Button>
  );

  return (
    <Panel header="User List" buttons={addNewButton}>
      <UserTable/>
    </Panel>
  );
}