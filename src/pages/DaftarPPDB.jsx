import PpdbHeader from './daftar/PpdbHeader.jsx'
import FormPendaftaran from './daftar/FormPendaftaran.jsx'
import SidebarDaftar from './daftar/SidebarDaftar.jsx'
import PpdbFooter from './daftar/PpdbFooter.jsx'

const STEPS = [
  { no: 1, title: 'Data Santri', sub: 'Identitas Siswa', active: true },
  { no: 2, title: 'Orang Tua/Wali', sub: 'Kontak Keluarga', active: true },
  { no: 3, title: 'Program Pilihan', sub: 'Konfirmasi Berkas', active: false },
]

export default function DaftarPPDB() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <PpdbHeader />

      {/* Main Content Canvas */}
      <main className="flex-1 py-10 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section with Calm Elegance */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-container border border-secondary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Tahun Ajaran 2025/2026 - Gelombang 1</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">Formulir Pendaftaran Calon Santri Baru</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Silakan isi data calon santri dan orang tua/wali dengan benar. Pendaftaran membutuhkan waktu sekitar 3–5 menit.
          </p>

          {/* 3-Step Clean Progress Indicator */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="grid grid-cols-3 gap-2 text-left relative">
              <div className="absolute top-4 left-6 right-6 h-0.5 bg-outline-variant -z-10"></div>
              {STEPS.map((step) => (
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left" key={step.no}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-sm mb-1.5 ring-4 ring-background ${
                      step.active ? 'bg-primary-container text-white' : 'bg-surface-container-high text-primary'
                    }`}
                  >
                    {step.no}
                  </div>
                  <span className={`font-label-sm text-label-sm ${step.active ? 'text-primary font-bold' : 'text-on-surface font-semibold'}`}>
                    {step.title}
                  </span>
                  <span className="hidden sm:inline font-body-sm text-body-sm text-outline">{step.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Layout Grid: Main Form (Left 8 cols) & Supportive Side Info (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <FormPendaftaran />
          </div>
          <SidebarDaftar />
        </div>
      </main>

      <PpdbFooter />
    </div>
  )
}
