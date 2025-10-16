// Import komponen Link dari Next.js buat navigasi antar halaman tanpa reload
import Link from "next/link";

// Import data proyek dari folder data (isinya semua daftar proyek)
import projects from "../../../data/projects";

// Fungsi bawaan Next.js buat "Static Site Generation" (SSG)
// Ini bikin semua halaman proyek (berdasarkan slug) digenerate pas build
export async function generateStaticParams() {
  // Loop semua proyek dan ambil slug-nya satu per satu
  // Hasilnya kayak: [{ slug: "smart-plant" }, { slug: "dino-game" }, ...]
  return projects.map((p) => ({ id: p.id }));
}

// Komponen utama buat nampilin detail tiap proyek
// "params" diambil otomatis dari URL (misal: /projects/dino-game)
export default function ProjectDetail({ params }: { params: { id: string } }) {
  // Nyari proyek yang slug-nya sama kayak yang ada di URL
  const project = projects.find((p) => p.id === params.id);

  // Kalau slug-nya gak ketemu di data, tampilkan pesan error
  if (!project) {
    return <p>Project tidak ditemukan.</p>;
  }

  // Kalau proyek ketemu, tampilkan detailnya di halaman
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      {/* Judul proyek */}
      <h1 style={{ fontSize: "1.8rem" }}>{project.title}</h1>

      {/* Deskripsi singkat proyek */}
      <p style={{ marginTop: "10px", marginBottom: "10px" }}>{project.description}</p>

      {/* Daftar teknologi yang digunakan */}
      <h3>🛠️ Teknologi yang digunakan:</h3>
      <ul>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {/* Tombol buat balik ke halaman utama */}
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "blue",
        }}
      >
        ⬅ Kembali ke daftar
      </Link>
    </main>
  );
}
