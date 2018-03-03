import Hero from '../components/Hero'
import ContactBar from '../components/ContactBar'
import Services from '../components/Services'
import {Provider,
        Flex,
        Box,
        Banner,
        Heading} from 'rebass'
import styled from 'styled-components'


const BorderedBox = styled(Box)`
  border: 1px solid black;
`

const services = ["Brakes & Alignment ($49.95)",
                  "Oil Change",
                  "Tires & Tire Repair",
                  "Mufflers and Exhaust",
                  "Checking Engine Light",
                  "Belts and Hoses",
                  "Car Heating and A/C"]


export default () => (
  <Provider theme={{
    fonts: {
      sans: '"Avenir Next", Helvetica, sans-serif',
      cursive: '"Alfa Slab One"'
    }
  }}>
    <ContactBar />
    <Hero bgImg='/static/images/lonestarshop.jpeg' header="Lonestar Auto Repair Katy">
        Texas is called the Lonestar state because its rough, tough, and full of southern hospitality. It can stand on its own
        and served as the inspiration for naming our Auto Repair shop. We're located in Katy and are a full service repair shop that puts
        customers first.
    </Hero>
    <Hero bgImg='/static/images/car-hood-open.jpeg' header="All Vehicles">
      Whether your vehicle is foreign or domestic, we service all vehicles. Our ASE
      certified mechanics have years of experience doing everything from simple brake
      alignments to complicated engine transmission repairs. Bring your car in for a diagnostic!
    </Hero>
    <Hero bgImg='/static/images/children-play-area.jpeg' header="Bring The Kids!">
        We take family seriously, which is why we've designated
        an area for child's play while you wait on your vehicle.
        It's ok to bring the kids!
    </Hero>
    <div className="sections">
      <div className="section">
        <Heading color="#00365d" fontSize={[18, 24]}>Our Services Include:</Heading>
        <Services services={services} />
      </div>
      <div className="section">
        <Heading color="#00365d" fontFamily='cursive' fontSize={[18, 24]}>Store Hours</Heading>
        <img width={256} src="/static/images/store-hours.jpeg" />
      </div>
    </div>
    <style jsx>{`
      .sections {
        display: grid;
        grid-template-columns: 1fr;
      }
      @media (min-width: 900px) {
        .sections {
          grid-template-columns: 1fr 1fr;
        }
      }
      .section {
        margin: 20px ;
      }
    `}</style>
  </Provider>
)
