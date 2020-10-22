const { default: sequelize } = require("../../connections/sequelize");
export { default as Comment } from '../Core/Comments'
export { default as Account } from '../Core/Account'
export { default as Episode } from '../Core/Episodes'


for (let m in sequelize.models) {
    sequelize.models[m].sync();
}

// Init association
for (let m in sequelize.models) {
    sequelize.models[m].association();
}