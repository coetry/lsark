const Services = ({services}) => (
  <ul>
    {services.map((service, index) => (
      <li key={index.toString()}>{service}</li>
    ))}
  </ul>
)
export default Services;
