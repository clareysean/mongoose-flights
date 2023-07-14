# Flight Management App

This is a flight management app built with Express, Express Generator, and Mongoose. It allows users to add and display flights in a table.

## Features

- Add new flights with airline, airport, flight number, and departure date
- Display all flights in a table with sortable columns
- Highlight flights that have already departed

## Prerequisites

- Node.js and npm should be installed on your machine
- MongoDB should be installed and running

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/your-username/flight-management-app.git
cd flight-management-app
```

2. Install the dependencies:

```shell
npm install
```

3. Configure the database connection:

   - Open the `config/db.js` file.
   - Update the MongoDB connection URL if necessary.

4. Run the application:

```shell
npm start
```

5. Open your browser and visit `http://localhost:3000` to access the app.

## Usage

- To add a flight:
  - Click on the "Add Flight" link in the navigation menu.
  - Fill in the required details (airline, airport, flight number, departure date).
  - Click the "Add Flight" button to submit the form.

- To view all flights:
  - Click on the "All Flights" link in the navigation menu.
  - The flights will be displayed in a table.
  - Click on the table headers to sort the flights based on the respective column.

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- Express Generator: Express application generator
- Mongoose: MongoDB object modeling for Node.js
- HTML, CSS, JavaScript: Front-end development

## Contributions

Feel free to customize the content as per your app's requirements. 
If you have any improvements or fixes that you'd like to contribute, submit a pull request with your changes; include a clear description of the problem you're addressing and the proposed solution.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

