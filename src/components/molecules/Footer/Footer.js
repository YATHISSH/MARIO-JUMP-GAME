import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://google.com" target="_blank" rel="noreferrer" className="copyright-link">YATHISSH & RISHI KUMAR </a>
    </div>
  )
}
export default Footer 