const monga = require("mongoose");
const person3 = require("./person");
monga.connect("mongodb://localhost:27017/hadi");

// const data = require("./data");
async function runServer() {
  try {
    // const user1 = await person3.create(data);
    // Use model.find() to Search Your Database
    console.log("THIS IS THE FULL DATA BASE****************");
    console.log(await person3.find({}));
    // Use model.findOne() to Return a Single Matching Document from Your Database
    console.log("Favourite Food DATA***********");
    console.log(
      await person3.findOne({ favouriteFood: "Veal - Brisket, Provimi,bnls" })
    );
    //   Use model.findById() to Search Your Database By _id
    console.log("FIND BY ID RETURN ************");
    console.log(await person3.findById("61e2dbff1bc14a24710ad22d"));

    // Perform Classic Updates by Running Find, Edit, then Save
    console.log("Perform NAME Search and carry EDIT And Save ************");
    person3.findOne({ name: "Nert" }, (err, person) => {
      person.favouriteFood = person.favouriteFood + " Hamburger";
      console.log(person.favouriteFood);
      person.save();
      //to save last step
    }); //applying too much call back and await may lead to errors
    // Find one And update Function
    console.log("Find One And Update Function ************");
    await person3.findOneAndUpdate(
      { _id: "61e2dc08ef7c0a7b7e16d5c8" },
      { name: "Zeko" }
    );
    console.log("NOW Geri Age Should HAVE Changed ******");
    person3.findOne({ name: "Zeko" }, (err, pers) => {
      console.log(pers.name, "The New Name");
    });

    // Delete One Document Using model.findByIdAndRemove
    person3.findByIdAndDelete(
      { _id: "61e2dc08ef7c0a7b7e16d5cb" },
      (err, value) => {
        console.log(err);
      }
    );
    // remmeber always to await before carrying the next step
    person3.deleteMany({ name: "Mimi" }, (err, data) => {
      console.log(err);
    });
    // Delete One Document Using model.findByIdAndRemove
  } catch (e) {
    console.log(e.message, "*******error in implementing function");
  }
}

runServer();
