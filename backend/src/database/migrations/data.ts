import { IProductDB } from "../../models/Product";

const csv = require("csv-parser");
const fs = require("fs");
export const dataProducts: IProductDB[] = [];

fs.createReadStream("./src/database/migrations/products.csv")
  .pipe(csv({}))
  .on("data", (data: any) => {
    data.price = Number(data.price);
    data.qty_stock = Number(data.qty_stock);

    if (!data["_4"] && data.price > 0 && data.qty_stock > 0) {
      const { id, name, price, qty_stock } = data;
      dataProducts.push({ id, name, price, qty_stock });
    }
  });
