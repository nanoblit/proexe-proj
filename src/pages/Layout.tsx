import { Outlet, useLocation } from "react-router";
import { Container } from "@mui/material";

export default function Layout() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <Outlet/>
      </Container>
    </>);
}