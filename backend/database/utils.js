const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./database/data.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
