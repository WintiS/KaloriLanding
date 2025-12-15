import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

// Firebase configuration provided for this project.
const firebaseConfig = {
  apiKey: 'AIzaSyDJxkFDiaddKlzdJPVpGU4hEJI8E4hSjUY',
  authDomain: 'kalorilandingpage.firebaseapp.com',
  projectId: 'kalorilandingpage',
  storageBucket: 'kalorilandingpage.firebasestorage.app',
  messagingSenderId: '924859895980',
  appId: '1:924859895980:web:ae1b8987815ae0a75b4f09',
  measurementId: 'G-82523RYSEY',
};

// Initialize Firebase app.
const app = initializeApp(firebaseConfig);

// Initialize Analytics in supported environments (browsers only).
const analyticsPromise =
  typeof window !== 'undefined'
    ? isSupported()
        .then((supported) => {
          if (!supported) return null;
          const analytics = getAnalytics(app);
          // Record the initial page view.
          logEvent(analytics, 'page_view');
          return analytics;
        })
        .catch((err) => {
          console.warn('Firebase analytics not available:', err);
          return null;
        })
    : Promise.resolve(null);

export { app, analyticsPromise };
export default app;


