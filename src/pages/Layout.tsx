import { Outlet } from "react-router";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, fetchUser } from "../store.ts";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { FetchStatus } from "../helpers/types.ts";
import AppSkeleton from "../components/AppSkeleton.tsx";

export default function Layout() {
  const status = useTypedSelector(({ status }) => status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const content = {
    [FetchStatus.IN_PROGRESS]: <AppSkeleton/>,
    [FetchStatus.ERROR]: <>There was an error while fetching users</>,
    [FetchStatus.SUCCESS]: <Outlet/>,
  };

  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        {content[status]}
      </Container>
    </>);
}