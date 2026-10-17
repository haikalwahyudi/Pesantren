import { useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Profil from './components/Profil.jsx'
import Kurikulum from './components/Kurikulum.jsx'
import Fasilitas from './components/Fasilitas.jsx'
import PPDB from './components/PPDB.jsx'
import Prestasi from './components/Prestasi.jsx'
import Wakaf from './components/Wakaf.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import VideoModal from './components/VideoModal.jsx'

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero onOpenVideo={() => setVideoModalOpen(true)} />
        <Profil />
        <Kurikulum />
        <Fasilitas />
        <PPDB />
        <Prestasi />
        <Wakaf />
      </main>
      <Footer />
      <WhatsAppWidget />
      <VideoModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </>
  )
}
