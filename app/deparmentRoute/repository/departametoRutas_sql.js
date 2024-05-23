"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPARTAMENTO_RUTA = void 0;
exports.SQL_DEPARTAMENTO_RUTA = {
    DATOS_CANTIDAD: "SELECT d.cod_departamento, d.cod_ruta, d.cod_departamento_ruta, d.fecha_creacion_departamento_rut as fechaCreacionDepartamentoRut, \
        (SELECT nombre_departamento FROM departamentos WHERE d.cod_departamento=cod_departamento) AS nombre_departamento, \
        (SELECT nombre_ruta FROM rutas WHERE d.cod_ruta=cod_ruta) AS nombre_ruta \
        FROM departamentos_rutas d ORDER BY d.cod_departamento_ruta ",
};
