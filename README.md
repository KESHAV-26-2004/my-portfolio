# 🧺 Laundry Management App (Flutter + Firebase)

A modern Flutter-based mobile app for managing laundry services efficiently for students and staff. Built completely from scratch by **Keshav Verma** using Flutter, Firebase, and Firestore — with responsive UI, secure authentication, and real-time updates.

[![License: Custom](https://img.shields.io/badge/License-Custom-blue.svg)]()
[![Made with Flutter](https://img.shields.io/badge/Made%20with-Flutter-25A4E3?logo=flutter&logoColor=white)]()
[![Firebase](https://img.shields.io/badge/Backend-Firebase-orange?logo=firebase)]()

---

## 📱 Features

- 🔐 **Secure Login** for Students & Staff (Email/Password)
- 🧾 **Place Laundry Orders** with service type & cloth count
- 📊 **Staff Dashboard** for order status, payment verification
- 🔔 **Push Notifications** for order updates
- 📅 **Booking History**, Profile Management
- ☁️ **Firebase Firestore** integration for real-time data
- 📦 **Built using Flutter** with clean UI and responsive layout

---

## 📸 Screenshots

> _(Add demo images here from `demo/` folder if available)_

<img src="demo/screenshot1.png" width="250"/> <img src="demo/screenshot2.png" width="250"/> <img src="demo/screenshot3.png" width="250"/>

---

## 🚀 Getting Started

### 🛠 Prerequisites

- Flutter SDK
- Firebase account
- Android Studio / VS Code
- Your own `google-services.json` (not included in repo)

---

### 📂 Folder Structure

```bash
lib/
├── main.dart
├── pages/
│   ├── login.dart
│   ├── dashboard.dart
│   ├── profile.dart
├── components/
│   └── custom_widgets.dart
assets/
firebase/
```

🧪 Run the App

```bash
flutter pub get
flutter run
```

🔐 Firebase Setup (Important)
To connect your app to Firebase:

1.Create a Firebase project at console.firebase.google.com

2.Add Android app → Download google-services.json and place it in:

```bash
android/app/google-services.json
```

3.Add iOS app (optional) → GoogleService-Info.plist goes in:

```bash
ios/Runner/
```

4.Enable Email/Password Auth and Firestore Database in Firebase console.

⚠️ These files are .gitignored for security.

👨‍💻 Developer
Keshav Verma
Bennett University | BTech CSE
📍 India

[LinkedIn](www.linkedin.com/in/keshav262004)

📜 License
This project is 100% made by me and is open for learning or collaboration.
You're welcome to fork or use parts, but please don't claim ownership. 😊
