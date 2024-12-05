document.getElementById("submitBtn").addEventListener("click", function () {
    const password = document.getElementById("password").value;
    const correctPassword = "Sexs0909"; // Doğru şifre
  
    if (password === correctPassword) {
      window.location.href = "key.html"; // Doğru şifreyle yönlendir
    } else {
      document.getElementById("error").textContent = "Hatalı şifre. Tekrar deneyin.";
    }
  });
  