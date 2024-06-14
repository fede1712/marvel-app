# MARVEL APP

The Marvel App is a web application for searching and exploring information about characters from the Marvel Universe. It uses the Marvel API to obtain detailed data about each character, including name, description, images and comics.

Production URL: [Marvel App](https://marvel-app-puce-two.vercel.app/)

## Getting Started

1. Clone the repository ⚡️:

```bash
git clone https://github.com/fede1712/marvel-app.git
```

2. Install the dependencies 💻:

```bash
npm install
```

3. Configure the Marvel API 🦸:

   Register on the Marvel developer site to get your API keys.

   Create an .env.local file in the root of your project and add your Marvel API key:

```bash
PUBLIC_API_KEY=PUBLIC_API_KEY
PRIVATE_API_KEY=PRIVATE_API_KEY
```

## Running the app

To run the development server 🚀:

```bash
npm run dev
```

To run production server, first build the project 🧱🔨:

```bash
npm run build
```

Them, you can run the production server 🚀:

```bash
npm run start
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Running test

### Unit and Integration Tests with Jest

1. Run jest test ✅:

```bash
npm run test
```

2. Run the tests in watch mode 👀:

```bash
npm run test:watch
```

### Playwright E2E tests

1. Run playwright test ✅:

```bash
npm run test:playwright
```

2. Open the Playwright report 📋:

```bash
 npx playwright show-report
```
