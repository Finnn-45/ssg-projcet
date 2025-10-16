// Import "Link" dari Next.js buat bikin navigasi antar halaman tanpa reload
import Link from "next/link";

// Import data proyek dari folder data (isinya daftar proyek kamu)
import projects from "../data/projects.js";

// Ini komponen utama buat halaman utama website kamu ("/")
export default function Home() {
  return (
    // Bagian utama halaman
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      {/* Judul di bagian atas halaman */}
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        🚀 My Project Gallery (SSG)
      </h1>

      {/* Tempat buat nampilin semua proyek dalam bentuk grid (kotak-kotak) */}
      <div
        style={{
          display: "grid", // ngatur biar tampilannya jadi grid
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // bikin responsif, kolomnya menyesuaikan lebar layar
          gap: "20px", // jarak antar kotak proyek
        }}
      >
        {/* Ngeloop semua data proyek yang ada di projects.js */}
        {projects.map((project) => (
          // Setiap proyek bakal jadi satu "kartu" yang bisa diklik
          <Link
            key={project.slug} // biar React gak bingung pas render
            href={`/projects/${project.slug}`} // klik kartu ini bakal buka halaman detail proyek
            style={{
              border: "1px solid #ddd", // kasih border tipis
              borderRadius: "12px", // biar sudutnya agak bulat
              padding: "20px", // jarak antara isi kartu dan tepi
              textDecoration: "none", // hapus garis bawah di link
              color: "inherit", // biar warnanya ikut warna teks utama
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // kasih bayangan halus di belakang kartu
              transition: "transform 0.2s", // animasi halus kalau nanti dikasih efek hover
            }}
          >
            {/* Judul proyek */}
            <h2>{project.title}</h2>

            {/* Deskripsi singkat proyek */}
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
