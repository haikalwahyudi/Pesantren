import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import DaftarPPDB from './pages/DaftarPPDB.jsx'

const DAFTAR_TITLE = 'PPDB Online 2025/2026 - Pesantren Modern Al-Hikmah'

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const isDaftar = hash.startsWith('#/daftar')

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (isDaftar) {
      document.title = DAFTAR_TITLE
      window.scrollTo(0, 0)
    }
  }, [isDaftar])

  if (isDaftar) {
    return <DaftarPPDB />
  }

  return <LandingPage key="landing" />
}

