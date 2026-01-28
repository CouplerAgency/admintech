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
      <ServiceCardFramerComponent.Responsive
        f7V_pTQYv={"Kun syv minutters kjøretur unna Beitostølen, med skiheiser, langrennsløyper, svømmehaller, spa, restauranter og barer."}
        mBSkyvezY={"Strategisk beliggenhet"}
      />
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