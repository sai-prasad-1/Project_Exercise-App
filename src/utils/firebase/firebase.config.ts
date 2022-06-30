import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCmHFOQgfWXjpuRtCjwafXA88E1JmGWxuA",
  authDomain: "workout-app-1cf4c.firebaseapp.com",
  projectId: "workout-app-1cf4c",
  storageBucket: "workout-app-1cf4c.appspot.com",
  messagingSenderId: "323033253371",
  appId: "1:323033253371:web:5e43a2e0d827e4c21d775e",
  measurementId: "G-4BPBGZ2YXB"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);