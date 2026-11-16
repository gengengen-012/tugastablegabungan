window.addEventListener('load', () => {
    const loader = document.getElementById('load-screen');

    // 1. Mulai efek fade out (memudar)
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';

    // 2. Sembunyikan total setelah transisi 0.5 detik selesai
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); 
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 1. Data Karakter & Masalah Digabung
const modalData = {
    // Data Karakter
    spongebob: {
        title: "Brutal Downhill Hike",
        text: "Reaching the actual beach requires descending a steep, makeshift bamboo-and-rope staircase along a sheer ridge. The trek takes around 45–60 minutes down and over an hour back up in intense heat."
    },
    patrick: {
        title: "World-Class Recognition",
        text: "In 2019, TripAdvisor ranked Kelingking Beach as the #2 best beach in Asia and #19 in the world in its Travelers' Choice Awards."
    },
    squidward: {
        title: "Unique T-Rex Formation",
        text: "The iconic cliff formation looks remarkably like a Tyrannosaurus Rex. While locals named it Kelingking (pinky finger), it became world-famous as T-Rex Bay."
    },
    mrkrabs: {
        title: "Deceptively Dangerous Waters",
        text: "Despite the alluring turquoise ocean, swimming is strictly discouraged or banned due to powerful, unpredictable shore-break waves and strong undertows."
    },

    // Data Masalah
    Masalah1: {
        title: "Trek Turun Curam & Berbahaya",
        text: "Akses jalan menuju pantai di bawah hanya berupa jalur tanah yang terjal dengan pegangan dari bambu atau tali seadanya. Medan yang licin dan curam sering menyebabkan wisatawan tergelincir, kelelahan parah, hingga cedera."
    },
    Masalah2: {
        title: "Gelombang Laut & Arus Kuat",
        text: "Pantai ini terkenal memiliki shorebreak dan arus bawah (rip current) yang sangat kuat. Kasus wisatawan terseret ombak atau tenggelam cukup sering terjadi, sehingga aktivitas berenang sangat dilarang."
    },
    Masalah3: {
        title: "Overcrowding",
        text: "Popularitasnya di media sosial membuat tempat ini sangat padat, terutama pada jam-jam sibuk. Antrean panjang sering terjadi hanya untuk berfoto di titik pandang utama atau saat naik-turun jalur tebing."
    },
    Masalah4: {
        title: "Fasilitas Darurat Terbatas",
        text: "Lokasi yang terisolasi di bawah tebing tinggi membuat evakuasi medis sangat sulit dan memakan waktu lama jika terjadi kecelakaan. Fasilitas medis dan tim penyelamat di sekitar area masih terbatas."
    },
    Masalah5: {
        title: "Pengelolaan Sampah",
        text: "Jumlah wisatawan yang melonjak kerap membawa masalah sampah plastik di area tebing maupun pantai. Kurangnya kesadaran pengunjung dan sistem pengelolaan sampah yang belum optimal mengancam kelestarian alam."
    }
};

// 2. Fungsi Buka Modal
function openModal(key) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    if (modalData[key]) {
        title.innerText = modalData[key].title;
        text.innerText = modalData[key].text;
        modal.style.display = "flex";
    }
}

// 3. Fungsi Tutup Modal
function closeModal() {
    const modal = document.getElementById("infoModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// 4. Tutup Modal Saat Klik Luar Kotak
window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};