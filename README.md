# QA Engineer Technical Task

## Requirements

Before getting started, ensure you have the following installed:

- **Node.js**


## Getting Started
Follow these steps to get the project up and run automated login test on your local machine:

**1**. __Clone the repository:__
```
git clone https://github.com/irynakozak1/engenious-university-test.git && 
cd engenious-university-test
```
**2**. __Install dependencies:__
```
npm install
```
**3**. __Install chromium browser:__ 
```
npx playwright install chromium
```
**4**. __Run the test:__ <br><br>
4.1 To run test in __headless mode__ use the following command:
```
npm test
```
4.2 To run test in __headed mode__ use the following command:
```
npm run test:headfull
```

## Code Quality
This project uses **Prettier** for code formatting to ensure consistent code quality.

__To format your code, run:__
```
npx prettier --write .
```

__To check formatting without applying changes:__
```
npx prettier --check .
```
Prettier configuration is defined in the **.prettierrc** file. Ensure that your editor is configured to automatically format on save for seamless integration.

## Test Cases
This project includes manual test cases, written in Markdown format. These test cases provide detailed scenarios for validating the login flow functionality of the application.

- **Location:** <br>
```TestDocumentation/test-cases-manual/auth/login```<br><br>
- **Format:** Markdown (.md) 