import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";
import { toDefaultValue } from "sequelize/lib/utils";

const Contact = sequelize.define("contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  favorite: { type: DataTypes.BOOLEAN, defaultValue: false },
});
Contact.sync({ force: true });

export default Contact;
