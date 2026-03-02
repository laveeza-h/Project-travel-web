import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="Form-Container">
      <h1>Send message to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="message" rows={4}></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
export default ContactForm;
