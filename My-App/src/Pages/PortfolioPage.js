import SocialMediaButtons from "../Components/SocialMediaButtons";

function PortfolioPage() {
  return (
    <div className="Portfolio">
      <p style={{ textAlign: "center", color: "white", fontSize: "25px" }}>
        PORTFOLIO
      </p>
      <p style={{ textAlign: "center", color: "white", fontSize: "20px" }}>
        This overview displays some of my most prized commissions from the 3D
        design and app development fields.
      </p>
      <SocialMediaButtons />
    </div>
  );
}

export default PortfolioPage;
