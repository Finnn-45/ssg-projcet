"use client";
// Import "Link" dari Next.js buat bikin navigasi antar halaman tanpa reload
import Link from "next/link";

// Import data proyek dari folder data (isinya daftar proyek kamu)
import projects from "../data/projects.js";

// Ini komponen utama buat halaman utama website kamu ("/")
export default function Home() {
  return (
    // Bagian utama halaman
    <main style={{ padding: "40px", fontFamily: "sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Judul di bagian atas halaman */}
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center", color: "black" }}>
        🚀 My Experience Gallery
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
            key={project.id} // biar React gak bingung pas render
            href={`/projects/${project.id}`} // klik kartu ini bakal buka halaman detail proyek
            style={{
              backgroundColor: "#fff", 
              borderRadius: "12px", 
              padding: "20px", 
              textDecoration: "none",
              color: "inherit", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s", 
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Judul proyek */}
            <h2 style={{ marginBottom: "10px" , color : "black"}}>{project.title}</h2>

            {/* Deskripsi singkat proyek */}
            <p style={{ color: "#555", lineHeight: "1.4" }}>{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
