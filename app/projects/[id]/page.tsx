// Import komponen Link dari Next.js buat navigasi antar halaman tanpa reload
import Link from "next/link";

// Import data proyek dari folder data (isinya semua daftar proyek)
import projects from "../../../data/projects";

// Fungsi bawaan Next.js buat "Static Site Generation" (SSG)
// Ini bikin semua halaman proyek (berdasarkan id) digenerate pas build
export async function generateStaticParams() {
  // Loop semua proyek dan ambil id-nya satu per satu
  // Hasilnya kayak: [{ id: "urban-garden" }, { id: "art-exhibit" }, ...]
  return projects.map((p) => ({ id: p.id }));
}

// Komponen utama buat nampilin detail tiap proyek
// "params" diambil otomatis dari URL (misal: /projects/art-exhibit)
export default function ProjectDetail({ params }: { params: { id: string } }) {
  // Nyari proyek yang id-nya sama kayak yang ada di URL
  const project = projects.find((p) => p.id === params.id);

  // Kalau id-nya gak ketemu di data, tampilkan pesan error
  if (!project) {
    return <p>Pengalaman tidak ditemukan.</p>;
  }

  // Kalau proyek ketemu, tampilkan detailnya di halaman
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        color: "black",
      }}
    >
      {/* Card utama untuk menampilkan detail pengalaman */}
      <div
        style={{
          backgroundColor: "#fff", // warna putih biar terlihat card
          borderRadius: "15px", // sudut card melengkung
          padding: "30px", // jarak antara isi card dan tepi
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)", // bayangan halus
          maxWidth: "600px",
          width: "100%",
        }}
      >
        {/* Judul proyek / pengalaman */}
        <h1 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{project.title}</h1>

        {/* Deskripsi singkat pengalaman */}
        <p style={{ marginTop: "10px", marginBottom: "20px", lineHeight: "1.5", color: "#555" }}>
          {project.description}
        </p>

        {/* Daftar skill atau kemampuan yang didapat */}
        <h3 style={{ marginBottom: "10px" }}>💡 Kemampuan yang didapat:</h3>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          {project.skills.map((t) => (
            <li key={t} style={{ marginBottom: "5px" }}>
              {t}
            </li>
          ))}
        </ul>

        {/* Tombol buat balik ke halaman utama */}
        <Link href="/" className="back-button">
          ⬅ Kembali ke daftar
        </Link>
      </div>
    </main>
  );
}
