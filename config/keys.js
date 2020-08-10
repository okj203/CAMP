// module.exports = {
//   mongoURI:
//     "mongodb+srv://camp04:go_camp_go@camp-cluster.tzscg.mongodb.net/campdb?retryWrites=true&w=majority",
//   secretOrKey: "8nfrmx5NEa",
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://camp04:<password>@camp-cluster.tzscg.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
