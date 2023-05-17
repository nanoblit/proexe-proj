import Panel from "../components/Panel.tsx";
import { Button } from "@mui/material";

export default function Home() {

  const addNewButton = (
    <Button variant="contained">
      Add new
    </Button>
  );

  return (
    <Panel header="User List" buttons={addNewButton}>
      Test
    </Panel>
  );
}