"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const departamento_1 = __importDefault(require("../../../model/departamento"));
class DepartamentoDao {
    static crearDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            let departamentoRepository = conexionBD_1.default.getRepository(departamento_1.default);
            departamentoRepository
                .insert(objDepartamento).then((respuesta) => {
                res.status(200).json({ mensaje: "Save project", objeto: respuesta.raw });
            })
                .catch((err) => {
                res.status(400).json({ mensaje: "Error Save Department " });
            });
        });
    }
    static unDepartamentos(res, codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            let departamentoRepository = conexionBD_1.default.getRepository(departamento_1.default);
            departamentoRepository.findOneBy({ codDepartamento: codigo })
                .then((respuesta) => {
                res.status(200).json(respuesta);
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error find Department " });
            });
        });
    }
    static listarDepartamentos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let departamentoRepository = conexionBD_1.default.getRepository(departamento_1.default);
            yield departamentoRepository.find() /* createQueryBuilder('d')
                .select("d.cod_departamento, d.nombre_departamento").
                addSelect((subQuery)="COUNT(departamentos_rutas.cod_departamento) as cant_departamentos").
                innerJoin("departamentos_rutas.cod_departamento", "departamentos_rutas").
                orderBy("d.cod_departamento").
                execute()
                 */
                .then((respuesta) => {
                const arregloDepartamentos = respuesta;
                console.log(arregloDepartamentos);
                res.status(200).json(arregloDepartamentos);
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error find Department " });
            });
        });
    }
    static modificarDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            let departamentoRepository = conexionBD_1.default.getRepository(departamento_1.default);
            departamentoRepository.update({ codDepartamento: objDepartamento.codDepartamento }, objDepartamento)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento actualizado", nuevo: objDepartamento });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error Update Department " });
            });
        });
    }
    static borrarDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            let departamentoRepository = conexionBD_1.default.getRepository(departamento_1.default);
            departamentoRepository.delete({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento eliminado", respuesta: respuesta.affected });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error Delete Department " });
            });
        });
    }
}
exports.default = DepartamentoDao;
