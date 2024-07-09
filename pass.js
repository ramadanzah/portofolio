
function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginResult = document.getElementById('loginResult');

    if (username === 'Rama' && password === '000') {
        // Jika login berhasil
        loginResult.innerHTML = '<div class="alert alert-success" role="alert">Login berhasil! Memuat halaman...</div>';
        setTimeout(function() {
            window.location.href = 'biodata.html';
        }, 2000); // Arahkan ke halaman biodata.html setelah 2 detik
    } else {
        // Jika login gagal
        loginResult.innerHTML = '<div class="alert alert-danger" role="alert">Username dan Password Admin salah.Silahkan coba kembali</div>';
    }
}