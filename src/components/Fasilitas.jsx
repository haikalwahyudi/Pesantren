const FASILITAS = [
  {
    title: "Masjid Sentral Jami' Al-Hikmah",
    badge: "Kapasitas 2.500 Jama'ah",
    badgeClass: 'bg-primary text-on-primary',
    desc: 'Pusat peribadatan shalat berjama\u2019ah lima waktu, setoran tahfidz ba\u2019da Shubuh dan Maghrib, serta kajian tafsir tematik bersama para masyaikh.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMve03ipSfHQn_1BNRY4YbA0i0gZXOFD3OJvUcBc9CNvn-M0qPkf2CkArlvnQAyRcm5vzm-A9EJk8cCtdnEWGiZyl69y9xO2wm8Rkr2hVaLRJ2tDg8JRFzbBKQOuSCu4qSx3zxj7cOxMAcxZq_j598XXSr3FyiQyNrJhaFy-FLh34bunJW1XnBWoybxZtTv_WtS_JD-wCWtps3GQaUu8qTyLcIqHUOo4l4hMYH3V2sQK7V9D6VGc69wA',
    span: 'md:col-span-2',
    big: true,
  },
  {
    title: 'Asrama Ber-AC & Higienis',
    badge: 'Pengawasan 24 Jam',
    badgeClass: 'bg-secondary text-on-primary',
    desc: 'Gedung terpisah putra dan putri, sanitasi standar hotel bintang, dan bimbingan musyrif/musyrifah 24 jam.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxW_mdJlBvSr66Z_YA55ufLZsah0FvWjNeeOGIJdPLgNVh8q56TRejfTmh6SAqFgwyiZeqx9sSnD-nqjK_IorcsDBeduluQdnncB8q-HGiwx_UZ2dJKImUhDRQgE5cwTi2DJjO40yq7SoNc_t8nwbTDh-H6DEbG9ESh42xSge5T0G9rvKQNXagfYLdAP9GDqPTgyWTKIxML5Hnd-fW89t6qqbzt_ZsRjCfq5cd5jO4sbaxlQADCaGDXQ',
    span: '',
    big: false,
  },
  {
    title: 'Ruang Belajar Digital',
    badge: 'Interactive Smart Class',
    badgeClass: 'bg-primary text-on-primary',
    desc: 'Dilengkapi Interactive Smart Screen, AC, dan kapasitas maksimal 28 santri demi keefektifan transfer ilmu.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhGnefb6NOrrVXuu2lD-jLH13Aw4Uctg3PhJXztLUV8WLKDOkOugR4ugk9_tlywHB9UJ6LplF6NFZS_FQcQ_LfUxnThE-EHesIDIFTQXR-H1zEqXKiyyPOgP3K1npv-R_b2gEs9w1Xa_BR_rsNwZ0uGiv928zpDCLYNPaWyCs9xCJhDCH-NxDg1Ucez8-heJzIRH4T6_ArvRU_TcFpZYgzIG7WTnlzTusFMW0KI8vQXxNL4N5srGGyw',
    span: '',
    big: false,
  },
  {
    title: 'Laboratorium STEM & Robotika',
    badge: 'Laboratorium Terpadu',
    badgeClass: 'bg-primary text-on-primary',
    desc: 'Fasilitas eksperimen fisika, biologi, komputasi AI, serta pengembangan riset terapan santri.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZs_VTsGufTIfAU3NUBjGltHH28httqbyLO095ILZzHs2aTmS_fBBNs1iMdqEySrasy-E35Q3QJLusv3Iswb_c_XJD1Vv0OJD-ExFH3T10ea9kZ1KoY8hUeqNCx_EAQq-FXRXg0djkGgwf8oFoWsQmdUrvLjR_4-KoMxdGk0iMIWlivHdPRGT6Ji1ZFu22ntdZ2wHu4UkogqyFuq8JMXkndRwoub-rujc8jYFZGbPcPc_qBWNKT3FqA',
    span: '',
    big: false,
  },
  {
    title: 'Maktabah & Perpustakaan Digital',
    badge: 'Maktabah Turats & E-Library',
    badgeClass: 'bg-secondary text-on-primary',
    desc: 'Koleksi lebih dari 15.000 judul kitab kuning klasik, referensi jurnal internasional, dan akses repositori ilmiah digital dunia.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX2cP9cZPMzjyC6L80H7Axyr8TFCBMhQ0cMawmt0U4r2XNf74sitY5V7gaLpQs2cTH7psDWvLMCQSuTmn7POvFBvUaM8pn5yewcu4cgpVwYI_ODfalbmYWntyEuD6f-4TbYfg7XM4tKMCsNbE21jkSPmqmMpv2RlIM6FPAnTLRun8nU0V7YM_nCL_U4eUzL6e3qbaY-OF7Zu7DovbXdOF9POvwa_hBTQ8tHEWibM0uWrA3mOY63AmHNQ',
    span: 'md:col-span-2',
    big: true,
  },
  {
    title: 'Klinik Poskestren Al-Hikmah',
    badge: 'Siaga 24 Jam',
    badgeClass: 'bg-primary text-on-primary',
    desc: 'Layanan medis primer dengan dokter spesialis anak/umum dan perawat jaga 24 jam serta rujukan ambulans darurat.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3_-lEEUOxaO8JUFwoAARBJWvCS7rCcUM1Toqso15wpyssNRJFUf9zGax8IhbqIHGBmno4Y9lTFRep_7_QlnQcVQlKGEiRn3z5ksXUF5-yeEkmas1_6RrpTjA7ou3aQWR-k6g5xt44aFQPnwPzobJh_4dv0uADZHMZyoXOwGwZ2ZGC8n-IUTewGEk7IdaNT12J1tnVBuDZI20OiTyrzcCdIgWOPi3T5cYmrkJ0ZeSQuNPjjD2BxTq_Gw',
    span: '',
    big: false,
  },

]

export default function Fasilitas() {
  return (
    <section className="py-20 bg-surface" id="fasilitas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest font-bold">Infrastruktur Kampus</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mt-2">
            Fasilitas Modern Penunjang Adab &amp; Prestasi
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-4">
            Dirancang dengan tata ruang islami yang menjamin privasi, kenyamanan, serta keamanan santri dalam beribadah dan menuntut ilmu.
          </p>
        </div>

        {/* Bento Grid Fasilitas Representatif */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FASILITAS.map((fasilitas) => (
            <div
              key={fasilitas.title}
              className={`${fasilitas.span} rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-lowest shadow-sm flex flex-col`}
            >
              <div className={`relative w-full ${fasilitas.big ? 'h-64 sm:h-72' : 'h-56'}`}>
                <img className="w-full h-full object-cover" alt={fasilitas.title} src={fasilitas.img} />
                <span className={`absolute top-4 left-4 ${fasilitas.badgeClass} text-label-sm font-label-sm px-3 py-1 rounded-full`}>{fasilitas.badge}</span>
              </div>
              {fasilitas.big ? (
                <div className="p-6">
                  <h3 className="text-headline-sm font-headline-sm text-primary">{fasilitas.title}</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-2">{fasilitas.desc}</p>
                </div>
              ) : (
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-title-lg font-title-lg text-primary font-bold">{fasilitas.title}</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">{fasilitas.desc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
