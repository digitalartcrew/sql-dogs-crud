//bring in sequelize
const Sequelize = require('sequelize');

//get the path
const path = "mysql://root:password@localhost:3306/dogsdb";

//make a connection
const sequelize = new Sequelize(path, {
  logging: false
});

//create a model
const Dog = sequelize.define('dog',{
  name: Sequelize.STRING,
  type: Sequelize.STRING
});

//create a table
// Dog.sync().then(() => console.log('Table  created'));

// Create a record
// async function createRecord(){
//   let dog = await Dog.create({name: 'Fido', type: 'Pitbull'});
//   console.log(dog);

//   sequelize.close();
// }

// createRecord();

//Find a record

// async function findDog() {
//   let dog = await Dog.findOne();
//   console.log(dog.dataValues.name);

//   sequelize.close();
// }

// findDog();

//Find all records
// async function findAllDogs() {
//   let dogs = await Dog.findAll();
//   console.log(dogs);

//   sequelize.close();
// }

// findAllDogs();

//Update a record
// async function updateADog() {
//   let dog = await Dog.update({ name: 'Roscoe'}, { where: { id: 2}});

//   console.log(dog);
//   sequelize.close();
// }

// updateADog();

//Delete a record

// async function deleteDog() {
//   await Dog.destroy({where: {id: 1}});

//   sequelize.close();
// };

// deleteDog();