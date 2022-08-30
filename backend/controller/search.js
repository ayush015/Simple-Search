const xlsx = require("xlsx");

exports.search = (req, res) => {
  let searched = req.body;
  const workbook = xlsx.readFile("./utils/URL_LIST.xlsx");
  const workSheet = workbook.Sheets["Sheet1"];
  console.log(searched);
  const data = xlsx.utils.sheet_to_json(workSheet);
  return res.json(data);
};
