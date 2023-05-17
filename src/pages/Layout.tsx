import { Outlet } from "react-router";
import { Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <Outlet/>
      </Container>
    </>);
}