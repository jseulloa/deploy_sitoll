"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPARTAMENTO = void 0;
exports.SQL_DEPARTAMENTO = {
    DATOS_CANTIDAD: "SELECT d.cod_departamento, d.nombre_departamento, \
        (SELECT COUNT(cod_departamento) FROM departamentos_rutas WHERE cod_departamento=d.cod_departamento) as cantDepartameto \
        FROM departamentos d ORDER BY d.cod_departamento ASC",
};
