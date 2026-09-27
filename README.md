<img width="50" style="vertical-align:middle " alt="logo" src="./src/assets/pictures/logo_white.png" />

# Tracksense

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge\&logo=react\&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![OAuth](https://img.shields.io/badge/OAuth-4285F4?style=for-the-badge&logo=auth0&logoColor=white)
![Apple Music](https://img.shields.io/badge/iTunes_API-FA243C?style=for-the-badge\&logo=apple-music\&logoColor=white)

Tracksense is a real-time multiplayer music guessing game built with **Next.js 15 App Router**. Test your musical knowledge against friends by identifying songs from short audio previews powered by the iTunes API.

> **Note:** This project is currently in **active development**. Core game room setups and song integrations are functional, with real-time gameplay mechanics actively being built.

<table>
  <tr>
    <td align="center">
      <img width="500" alt="Lobby Screen" src="./demos/1.png" />
    </td>
    <td align="center">
      <img width="500" alt="Room Creation" src="./demos/2.png" />
    </td>
    <td align="center">
      <img width="500" alt="Room Creation" src="./demos/3.png" />
    </td>
  </tr>
</table>

## Features (In Development)

* [x] **Authentication:** Secure user authentication with OAuth, including login and registration.
* [x] **Session Management:** Create dynamic game sessions and join via unique session codes.
* [x] **iTunes API Integration:** Fetch track previews, artwork, and metadata dynamically across various genres.
* [x] **Server-Side Enforcement:** Route protection and session verification powered by Server Actions and Next.js App Router.
* [x] **Type-Safe Validation:** Full input and payload validation using Zod and React Hook Form.
* [x] **Modern UI/UX:** interactive interface designed for fast-paced gameplay.

## Roadmap (Upcoming Features)

* [ ] **Real-Time Multiplayer:** Instant sync for guesses using WebSockets/Server-Sent Events.
* [ ] **Live Scoreboard & Leaderboards:** Real-time point tracking based on guess speed and accuracy.
* [ ] **Custom Game Settings:** Options to tweak round timers, track counts, and genre filters.
* [ ] **Audio Player Sync:** Synchronized audio playback for all players in a room.

## Installation (Run Locally)

### 1. Prerequisites

Ensure you have **Node.js 18+** and a running database instance (e.g., PostgreSQL or SQLite for local development).

### 2. Setup

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/tracksense.git
cd tracksense
```

**2. Install dependencies:**

```bash
npm install
```

**3. Configure Environment Variables:**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then configure your `.env` file:

```env
BETTER_AUTH_SECRET=SECRET
BETTER_AUTH_URL=AppURL
DATABASE_URL="postgresql://YourUsername:YourPassword@localhost:5432/YourDatabaseName"
```

**4. Run Prisma Migrations:**

```bash
npx prisma migrate dev
```

**5. Start the Development Server:**

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Tech Stack

* **Framework:** Next.js 15 (App Router, Server Actions)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Database & ORM:** Prisma ORM
* **Integrations:** iTunes Search API
* **Form & Validation:** React Hook Form, Zod

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project.
2. Create your Feature Branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes:

   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the Branch:

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
