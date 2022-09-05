"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'delivery-management',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map