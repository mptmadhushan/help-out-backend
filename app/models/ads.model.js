const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Ads = sequelize.define("Ads", {
    message: {
      type: DataTypes.STRING,
    },
    listId: {
      type: DataTypes.STRING,
    },
    listName: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    isBlur: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
  });

  return Ads;
};
