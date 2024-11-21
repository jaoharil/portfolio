// script.js
document.querySelectorAll('.portfolio-item').forEach((item) => {
  item.addEventListener('click', () => {
    alert('Project details coming soon!');
  });
});

// skill and cetificat
document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill img');
  const certificates = document.querySelectorAll('.certificat img');

  skills.forEach((skill, index) => {
    setTimeout(() => {
      skill.style.opacity = '1';
      skill.style.transform = 'scale(1)';
    }, index * 100); // Delay animasi antar ikon
  });

  certificates.forEach((cert, index) => {
    setTimeout(() => {
      cert.style.opacity = '1';
      cert.style.transform = 'translateY(0)';
    }, index * 150); // Delay animasi antar sertifikat
  });
});

// Membuat observer untuk mendeteksi elemen yang muncul saat di-scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Menambahkan kelas animasi saat elemen masuk viewport
        entry.target.classList.add('scroll-in');
        observer.unobserve(entry.target); // Menghentikan pengamatan setelah animasi
      }
    });
  },
  { threshold: 0.5 }
); // 50% elemen harus terlihat untuk memicu animasi

// Menambahkan observer ke elemen yang ingin dianimasikan saat scroll
document.querySelectorAll('.panel').forEach((panel) => {
  observer.observe(panel);
});

// Fungsi untuk memeriksa apakah elemen masuk ke dalam viewport
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Menambahkan kelas "visible" ketika elemen terlihat
function handleScroll() {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel) => {
    if (isElementInView(panel)) {
      panel.classList.add('visible');
    }
  });

  // Untuk gambar sertifikat
  const certificates = document.querySelectorAll('.certificat img');
  certificates.forEach((cert) => {
    if (isElementInView(cert)) {
      cert.classList.add('visible');
    }
  });
}

// Event listener untuk scroll
window.addEventListener('scroll', handleScroll);

// Panggil fungsi handleScroll sekali saat halaman dimuat untuk animasi elemen yang sudah terlihat
window.addEventListener('load', handleScroll);

// Fungsi untuk memeriksa apakah elemen berada dalam viewport
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Fungsi untuk menangani scroll event dan menambahkan kelas visible
function handleScroll() {
  const aboutPanel = document.querySelector('#about');

  // Memeriksa apakah elemen About Me sudah terlihat di layar
  if (isElementInView(aboutPanel)) {
    aboutPanel.classList.add('visible');
  }
}

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);

// Memanggil fungsi handleScroll ketika halaman pertama kali dimuat
window.addEventListener('load', handleScroll);
