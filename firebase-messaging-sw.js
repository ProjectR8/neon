// firebase-messaging-sw.js
// Этот файл должен находиться в корневой директории вашего веб-приложения (рядом с index.html)

// Импортируем Firebase SDK для Service Worker (используем "compat" версии)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Инициализация Firebase в Service Worker
// firebaseConfig ДОЛЖЕН БЫТЬ ТАКИМ ЖЕ, КАК В ВАШЕМ index.html
const firebaseConfig = {
  apiKey: "AIzaSyA9gA_Nvei89csa7_YrmbnbnxFngb0UKoM",
  authDomain: "neon-messenger-83ed4.firebaseapp.com",
  projectId: "neon-messenger-83ed4",
  storageBucket: "neon-messenger-83ed4.firebasestorage.app",
  messagingSenderId: "954172505610",
  appId: "1:954172505610:web:03f56a8a5b89f2d402a9f3"
};

firebase.initializeApp(firebaseConfig);

// Получаем Messaging Service Worker
const messaging = firebase.messaging();

// Обработка сообщений, когда приложение находится в фоновом режиме
// или полностью закрыто браузером.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Настройка уведомления
  const notificationTitle = payload.notification.title || 'Новое сообщение';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/firebase-logo.png' // Укажите путь к вашей иконке
                                                          // (должна быть в корне приложения или относительный путь)
  };

  // Показываем системное уведомление
  self.registration.showNotification(notificationTitle, notificationOptions);
});
