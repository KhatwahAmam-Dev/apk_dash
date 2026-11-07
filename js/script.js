// Database portofolio lokal berbasis JSON data objek
const databaseKarya = {
    kasir: {
        title: "Sistem Aplikasi Kasir Offline",
        desc: "Aplikasi penanganan data transaksi di sisi kasir berbasis HTML/JS untuk file database berukuran di bawah 10 MB. Mampu membaca file SQL lokal dari mesin kasir dengan optimal tanpa membebani server.",
        link: "https://github.com"
    },
    ptw: {
        title: "Permit to Work (PTW) System",
        desc: "Aplikasi lapangan terintegrasi khusus untuk mengelola izin kerja tim lapangan secara aman. Dilengkapi dengan manajemen K3, penanggung jawab, dan modul eksport data langsung ke format dokumen PDF.",
        link: "#"
    },
    returned: {
        title: "Logistik QR & Barcode Scanner",
        desc: "Aplikasi data entry untuk pemrosesan barang yang dikembalikan. Membaca manifes kontainer secara instan lewat pemindaian kode QR untuk mencocokkan nomor resi/waybill secara akurat.",
        link: "#"
    }
};

function bukaDetail(key) {
    const data = databaseKarya[key];
    if(!data) return;

    // Suntik data ke dalam DOM Modal
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalLink').href = data.link;

    // Munculkan Modal dengan kelas CSS aktif
    document.getElementById('detailModal').classList.add('active');
}

function tutupDetail() {
    document.getElementById('detailModal').classList.remove('active');
}
