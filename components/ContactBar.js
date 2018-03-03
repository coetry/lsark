const ContactBar = () => (
  <div className="contact-bar-container">
    <div className="phone-number">
        <a href="tel:2813980800">(281) 398-0800</a>
    </div>
    <style jsx>{`
      .contact-bar-container {
        height: 70px;
        width: 100%;
        position: fixed;
        background-color: #00365d;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 6px -6px #333;
      }
      @media (min-width: 700px){
        .contact-bar-container {
          justify-content: flex-start;
        }
        .phone-number {
          margin-left: 30px;
        }
      }
      .phone-number {
        color: white;
      }
      .phone-number a {
        text-decoration: none;
        color: white;
      }
      .phone-number a:visited {
        color: white;
      }

    `}</style>
  </div>
)

export default ContactBar
