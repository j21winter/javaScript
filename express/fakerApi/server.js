const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;


const createUser = () => {
  console.log("working")

  const fakeUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.number.int()
  }
  return fakeUser
}
const createCompany = () => {
  const fakeObject = {
    _id: faker.number.int(),
    name: faker.commerce.productName(),
    address:{
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    }
  }
  return fakeObject
}


// req is short for request
// res is short for response
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// ! GET ROUTE
app.get("/api/users/new", (req, res) => {
  res.json( createUser() );
});

// ! GET ROUTE
app.get("/api/companies/new", (req, res) => {
  res.json( createCompany() );
});

// ! GET ROUTE
app.get("/api/users/company", (req, res) => {
  res.json([createUser(), createCompany()]);
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );