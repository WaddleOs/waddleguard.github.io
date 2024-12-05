// 20 adet rastgele 6 haneli şifre
const passwords = [
    "459683", "941964", "533694", "865993", "610241",
    "849907", "600118", "799667", "605536", "768871",
    "645601", "616745", "323988", "777398", "618442",
    "566193", "676398", "191162", "962714", "921487"
  ];
  
  // Elementleri seç
  const passwordDisplay = document.getElementById("currentPassword");
  const dateDisplay = document.getElementById("currentDate");
  const timeLeftDisplay = document.getElementById("timeLeft");
  
  // Bugünün tarihini göster
  function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateDisplay.textContent = now.toLocaleDateString('tr-TR', options);
  }
  
  // Zaman bazlı şifre hesaplama
  function getCurrentPassword() {
    const startTime = new Date("2024-01-01T00:00:00Z"); // Başlangıç zamanı
    const now = new Date();
    
    // Geçen toplam dakika
    const minutesSinceStart = Math.floor((now - startTime) / 60000);
    
    // Şifre listesinden bir şifre seç
    const passwordIndex = minutesSinceStart % passwords.length;
    return passwords[passwordIndex];
  }
  
  // Kalan süreyi hesapla
  function getTimeLeft() {
    const now = new Date();
    const seconds = now.getSeconds();
    return 60 - seconds; // Kalan saniyeyi hesapla
  }
  
  // Şifreyi güncelle
  function updatePassword() {
    const currentPassword = getCurrentPassword();
    passwordDisplay.textContent = currentPassword;
  }
  
  // Şifre değişim süresini güncelle
  function updateTimeLeft() {
    timeLeftDisplay.textContent = `${getTimeLeft()} saniye`;
  }
  
  // İlk güncellemeleri yap
  updateDate();
  updatePassword();
  updateTimeLeft();
  
  // Periyodik güncellemeler
  setInterval(updatePassword, 60000); // Her dakika şifreyi değiştir
  setInterval(updateTimeLeft, 1000);  // Her saniye kalan süreyi güncelle
  