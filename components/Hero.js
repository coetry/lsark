
const Hero = ({children, header, bgImg}) => (
  <div className="hero-container">
    <div className="statement-container">
      <h1 className="header">{header}</h1>
      <div className="statement">
        {children}
      </div>
    </div>
    <style jsx>{`
      .hero-container {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)),
                           url("${bgImg}");
        background-size: cover;
        display: flex;
        align-items: center;
      }
      .statement-container {
        margin: 0 0 0 10px;
      }
      .header {
        font-size: 30px;
        color: white;
        text-decoration: underline;
      }
      .statement {
        color: white;
        font-size: 20;
      }
    `}</style>
  </div>
)

export default Hero
