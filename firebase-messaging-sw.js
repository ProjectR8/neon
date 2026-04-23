// /neon/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA9gA_Nvei89csa7_YrmbnbnxFngb0UKoM",
  authDomain: "neon-messenger-83ed4.firebaseapp.com",
  projectId: "neon-messenger-83ed4",
  storageBucket: "neon-messenger-83ed4.firebasestorage.app",
  messagingSenderId: "954172505610",
  appId: "1:954172505610:web:03f56a8a5b89f2d402a9f3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[sw] Background message: ', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/neon/icon-192x192.png',
    badge: '/neon/icon-192x192.png',
    tag: payload.data?.tag || 'default'
  });
});
