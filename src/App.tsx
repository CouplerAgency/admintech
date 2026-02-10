import './framer/styles.css'

import HeaderFramerComponent from './framer/header'
import FooterSectionFramerComponent from './framer/footer-section'
import SlideDownFramerComponent from './framer/slide-down'
import CtaFormBlockFramerComponent from './framer/cta-form-block'
import BrandLogoFramerComponent from './framer/brand-logo'
import ImageCardFramerComponent from './framer/image-card'
import ProductCardFramerComponent from './framer/product-card'
import ServiceCardFramerComponent from './framer/service-card'
import ContactWidgetFramerComponent from './framer/contact-widget'
import ButtonFramerComponent from './framer/button'
import ButtonLinkFramerComponent from './framer/button-link'
import StarFramerComponent from './framer/star'

export default function App() {
  const quickFacts = [
    {
      title: "Strategisk beliggenhet",
      text: "Kun syv minutters kjøretur unna Beitostølen, med skiheiser, langrennsløyper, svømmehaller, spa, restauranter og barer.",
    },
    {
      title: "Kulturelt",
      text: "En pittoresk kirke, et ridesenter (som arrangerer rideturer på fjellet) og et kunstgalleri ligger i gangavstand.",
    },
    {
      title: "Full-service",
      text: "Ønsker du privat kokk, serveringspersonale eller rengjøring midt i oppholdet - bare spør oss, vi har gode, lokale kontakter.",
    },
    {
      title: "Eksklusiv tilgang",
      text: "Du kan få 550 kvm privat tumleplass helt alene, og eksklusiv tilgang til hele hovedhuset.",
    },
    {
      title: "Stor festsal",
      text: "Her er spisestue med plass til opptil 50-60 gjester.",
    },
    {
      title: "Koselige peisstuer",
      text: "6 elegante stuer - tre peiser.",
    },
    {
      title: "Lounge & Bar",
      text: "Det finnes et lounge- og barområde ved inngangen - inkludert vinkjøleskap og sitteplasser.",
    },
    {
      title: "Kjøkken & Oppvask",
      text: "Fullt utstyrt kjøkken - gasskomfyr, peis, to oppvaskmaskiner.",
    },
    {
      title: "Herskapelige bad",
      text: "Seks vakre nybygde bad - ett med frittstående badekar, marmor og messing.",
    },
  ];

  return (
    <div className='flex flex-col items-center gap-3 bg-[white]'>
      <HeaderFramerComponent.Responsive
        lSFZjaZ4m={"rgba(240, 245, 244, 0)"}
      />
      <FooterSectionFramerComponent.Responsive/>
      <SlideDownFramerComponent.Responsive
        FAy061_yg={"SKROLL NED"}
      />
      <CtaFormBlockFramerComponent.Responsive/>
      <BrandLogoFramerComponent.Responsive/>
      <ImageCardFramerComponent.Responsive
        NeSY72sOE={""}
        dBZe7S4Tt={"Koselige peisstuer"}
      />
      <ProductCardFramerComponent.Responsive
        hWqC6IpdA={""}
        stFWEiFIM={""}
      />
      <section className='w-full max-w-[1200px] px-6 py-10'>
        <h2 className='mb-6 font-[Playfair_Display] text-3xl text-[#1b1b1b]'>
          9 kjappe om Fjellheimen
        </h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {quickFacts.map((fact) => (
            <ServiceCardFramerComponent.Responsive
              key={fact.title}
              f7V_pTQYv={fact.text}
              mBSkyvezY={fact.title}
            />
          ))}
        </div>
      </section>
      <ContactWidgetFramerComponent.Responsive
        IR6cC5vt3={"+47 988 07 242"}
        JgHsAGQBj={"Reservasjon"}
      />
      <ButtonFramerComponent.Responsive
        UiJ2Q4Ywb={"BOOK HOTELLET"}
        g5YsNUODq={false}
        tkMQUXVwO={"/booking"}
      />
      <ButtonLinkFramerComponent.Responsive
        J_npqCzpg={"SE HOTELLET"}
        awpzToRaD={"/rommene"}
        f4pCYIS9S={false}
      />
      <StarFramerComponent.Responsive/>
    </div>
  );
};