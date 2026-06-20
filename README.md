# Social Feed App

A simple social media mobile application built with React Native, Expo, and TypeScript.

The application fetches posts from the GoRest API and allows users to view post details along with their associated comments.

---

## Features

### Home Screen
- Fetches and displays a list of posts from the GoRest API.
- Each post card displays:
  - User Avatar
  - User Name
  - Post Title
  - Post Content
- Tapping a post navigates to the Post Details screen.

### Post Details Screen
- Displays the selected post.
- Shows:
  - User Avatar
  - User Name
  - Post Title
  - Post Content
- Fetches and displays comments related to the selected post.

### Additional Improvements
- Reusable UI components.
- Consistent styling and card-based layout.

---

## Project Structure

The project is organized using separation of concerns, where each folder has a specific responsibility.

src/
├── screens/
│   ├── HomeScreen.tsx
│   └── PostDetailsScreen.tsx
│
├── components/
│   ├── PostCard.tsx
│   └── CommentCard.tsx
│
├── services/
│   └── gorestService.ts
│
├── navigation/
│   └── AppNavigator.tsx
│
└── types/
    ├── Post.ts
    └── Comment.ts


### Folder Responsibilities

#### screens/
Contains the application's screens and handles screen-level logic.

#### components/
Contains reusable UI components used throughout the application.

#### services/
Handles communication with external APIs and keeps network logic separate from the UI.

#### navigation/
Defines the application's navigation structure.

#### types/
Contains TypeScript interfaces used to model API responses.

---

## Structure Decisions

Since the application is relatively small, I chose a simple and maintainable structure instead of introducing a more complex architecture.

Key decisions:
- Separate API logic from UI logic.
- Reuse UI elements through dedicated components.
- Use TypeScript interfaces for better type safety.
- Organize files by responsibility to improve readability and maintainability.

---

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- GoRest API

---

## API

Posts Endpoint:

```text
https://gorest.co.in/public/v2/posts
```

Comments Endpoint:

```text
https://gorest.co.in/public/v2/posts/{postId}/comments
```

---

## Installation & Running

Clone the repository:

```bash
git clone https://github.com/Ahmed-Ramy/social-app.git
```

Navigate to the project folder:

```bash
cd social-app
```

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

Then scan the QR code using Expo Go.

---
## screenshots

<img width="645" height="1323" alt="Screenshot 2026-06-20 at 4 28 14 PM" src="https://github.com/user-attachments/assets/ec0cae5a-52a3-4148-b5b5-42e38972f71e" />

<--------------------------------------------------------------------------------------------------------------------------->

<img width="645" height="1310" alt="Screenshot 2026-06-20 at 4 27 52 PM" src="https://github.com/user-attachments/assets/d0ab25a1-2a91-4e14-963f-6d4bbcc7cb78" />

## Time Taken

Approximately: 2-3 hours

---

## Author

Ahmed Ramy
