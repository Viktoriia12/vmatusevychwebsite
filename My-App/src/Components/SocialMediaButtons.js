import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

function SocialMediaButtons() {
  return (
    <footer>
      <ul class="wrapper">
        <a href="https://www.facebook.com/vika.matusevych">
          <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
            <span>
              <FacebookIcon fontSize="large" />
            </span>
          </li>
        </a>
        <a href="https://github.com/Viktoriia12">
          <li class="icon github">
            <span class="tooltip">Github</span>
            <span>
              <i class="fab fa-github"></i>
            </span>
            <span>
              <GitHubIcon fontSize="large" />
            </span>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/viktoriia-matusevych/">
          <li class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <span>
              <LinkedInIcon fontSize="large" />
            </span>
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default SocialMediaButtons;
