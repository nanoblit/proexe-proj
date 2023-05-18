import { Box, Skeleton } from "@mui/material";
import Panel from "./Panel.tsx";

export default function AppSkeleton() {
  return (
    <Panel header="Loading...">
      <Box className="flex flex-col gap-y-3">
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
        <Skeleton variant="rounded" height={45}/>
      </Box>
    </Panel>
  );
}