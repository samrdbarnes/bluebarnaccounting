import { DrawerProvider } from './context/DrawerContext.jsx'
import Overlays from './components/Overlays.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Proclamation from './components/Proclamation.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import Faq from './components/Faq.jsx'
import CtaSection from './components/CtaSection.jsx'
import Footer from './components/Footer.jsx'
import ContactDrawer from './components/ContactDrawer.jsx'

export default function App() {
  return (
    <DrawerProvider>
      <Overlays />
      <Header />
      <main>
        <Hero />
        <Proclamation />
        <Services />
        <Industries />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      {/* Wire up your form handler here, e.g. onSubmit={(data) => fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })} */}
      <ContactDrawer />
    </DrawerProvider>
  )
}
