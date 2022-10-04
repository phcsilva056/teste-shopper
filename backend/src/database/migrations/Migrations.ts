import { BaseDatabase } from "../BaseDatabase";
import { OrderDatabase } from "../OrderDatabase";
import { ProductDatabase } from "../ProductDatabase";
import { dataProducts } from "./Data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };
  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCT};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_PRODUCT_ORDER};
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCT}(
          id VARCHAR(255) PRIMARY KEY UNIQUE,
          name VARCHAR(255) NOT NULL,
          price INT NOT NULL,
          qty_stock INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER}(
          id VARCHAR(255) PRIMARY KEY UNIQUE,
          customer_name VARCHAR(255) NOT NULL,
          delivery_date DATE NOT NULL
        ); 

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_PRODUCT_ORDER}(
          id VARCHAR(255) PRIMARY KEY UNIQUE,
          amount INT NOT NULL,
          id_order VARCHAR(255) NOT NULL,
          id_product VARCHAR(255) NOT NULL,
          FOREIGN KEY (id_order) REFERENCES ${OrderDatabase.TABLE_ORDER}(id),
          FOREIGN KEY (id_product) REFERENCES ${OrderDatabase.TABLE_PRODUCT_ORDER}(id)
        );              
    `);
  };

  insertData = async () => {
    console.log(dataProducts);

    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT).insert(
      dataProducts
    );
  };
}

const migrations = new Migrations();
migrations.execute();
