
document.addEventListener("DOMContentLoaded", function() {
  const appointmentForm = document.getElementById("appointmentForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  
  appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById("patientName").value;
    const patientAge = document.getElementById("patientAge").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    
    // تكوين رسالة التأكيد
    const message = `<p>تم حجز موعد للمريض <strong>${patientName}</strong> بعمر <strong>${patientAge}</strong>، مع <strong>${doctor === 'doctor1' ? 'الدكتور أحمد' : 'الدكتورة سارة'}</strong> في تاريخ <strong>${date}</strong>.</p>`;
    
    confirmationMessage.innerHTML = message;
    
    // إعادة تعيين النموذج بعد الحجز
    appointmentForm.reset();
  });
});