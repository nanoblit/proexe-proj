import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container>
      <p>Page not found, go back to <Link to="/">homepage</Link></p>
    </Container>
  );
}