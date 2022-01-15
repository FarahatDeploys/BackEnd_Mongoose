const mong = require("mongoose");
const PersonSchema2 = new mong.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  favouriteFood: String,
});
module.exports = mong.model("person2", PersonSchema2);
