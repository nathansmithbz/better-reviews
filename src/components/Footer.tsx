import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <footer style={{ color: "gray", margin: "1rem" }}>
      <center>
        Copyright ...
        <Link href="www.github.com" target="_blank">
          <GitHubIcon />
        </Link>
      </center>
    </footer>
  );
}
