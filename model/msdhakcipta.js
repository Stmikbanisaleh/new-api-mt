const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msdhakcipta = sequelize.define("dhakcipta", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_hakcipta: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nik: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}  ,
{
    freezeTableName: true,
});

// force: true will drop the table if it already exists
msdhakcipta.sync({ force: false }).then(() => {
    // Table created
    // return mspaten.create({
    //     name: 'admin',
    //     password: 'admin',
    //     email : 'imamsatrianta@gmail.com'
    // });
});
module.exports = msdhakcipta;

