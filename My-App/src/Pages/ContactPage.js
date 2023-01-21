import SocialMediaButtons from "../Components/SocialMediaButtons";

function ContactPage() {
  return (
    <div className="Contact">
      <p
        className="d-inline-block p-1"
        style={{ color: "white", fontSize: "45px" }}
      >
        LEAVE ME A MESSAGE
      </p>
      <form>
        <label style={{ color: "white", fontSize: "25px" }}>Name:</label>
        <input />
        <label style={{ color: "white", fontSize: "25px" }}>Email:</label>
        <input />
        <label style={{ color: "white", fontSize: "25px" }}>Message:</label>
        <input />
        <button type="submit">Submit</button>
      </form>
      <SocialMediaButtons />
    </div>
  );
}

export default ContactPage;
