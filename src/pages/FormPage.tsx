import Panel from "../components/Panel.tsx";
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import PageNotFound from "./PageNotFound.tsx";
import UserForm from "../components/UserForm.tsx";

export default function FormPage() {
  const { id } = useParams();

  const user = useTypedSelector(({ users }) => users.find((user) => user.id === Number(id)));

  const isError = id !== undefined && user == undefined;

  if (isError) {
    return <PageNotFound/>;
  }

  return (
    <Panel header="FormPage">
      <Box className="flex flex-col gap-y-5">
        <UserForm defaultData={user}/>
      </Box>
    </Panel>
  );
}