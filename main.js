main();
function main() {
  const data_op = require("./sql_script/data_op");
  const db = data_op.init_db();
  //     data_op.create_table(db)
  data_op.insert_data(db);
}
