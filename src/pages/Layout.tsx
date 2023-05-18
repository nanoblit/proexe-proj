import { Outlet } from "react-router";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, fetchUser } from "../store.ts";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <Outlet/>
      </Container>
    </>);
}