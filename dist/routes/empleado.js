"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_1 = require("../controllers/empleado");
const routerEmpleado = (0, express_1.Router)();
routerEmpleado.get('/', empleado_1.getEmpleados);
routerEmpleado.get('/:id', empleado_1.getEmpleado);
routerEmpleado.delete('/:id', empleado_1.deleteEmpleado);
routerEmpleado.post('/', empleado_1.postEmpleado);
routerEmpleado.put('/:id', empleado_1.updateEmpleado);
routerEmpleado.put('/:id/estado', empleado_1.updateEstadoEmpleado);
exports.default = routerEmpleado;
