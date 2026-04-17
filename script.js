// تفعيل رؤية كلمة المرور
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// معالجة تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // مثال بسيط للتحقق (يمكنك ربطه بقاعدة بيانات لاحقاً)
    if(email === "admin@sanad.com" && pass === "123456") {
        msg.style.color = "green";
        msg.innerText = "تم تسجيل الدخول بنجاح! جاري التحويل...";
        // window.location.href = "dashboard.html"; 
    } else {
        msg.style.color = "red";
        msg.innerText = "خطأ في البريد الإلكتروني أو كلمة المرور.";
    }
});
