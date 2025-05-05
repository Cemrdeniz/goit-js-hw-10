import iziToast from "izitoast";
// Ek stillerin ek olarak içe aktarılması
import "izitoast/dist/css/iziToast.min.css";
const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault(); // Formun varsayılan gönderimini engelle
    const formData = new FormData(form); // Form verilerini al
    const delay=Number(formData.get('delay')); // Gecikme süresini al
    const state=formData.get('state'); // Durum bilgisini al

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
   
    promise
    .then((delay) => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
