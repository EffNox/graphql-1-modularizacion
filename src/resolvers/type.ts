import { IResolvers } from "graphql-tools";
import { db } from "../data/data";
import _ from "lodash";

const type: IResolvers = {
    Estudiante: {
        courses: parent => {
            const cursosLista: Array<any> = [];
            parent.courses.map((curso: string) => {
                cursosLista.push(_.filter(db.cursos, ['id', curso])[0])
            });
            return cursosLista;
        }
    },
    Curso: {
        students: parent => {
            const listaEstudiantes: Array<any> = []
            const idCurso = parent.id
            db.estudiantes.map((est: any) => {
                est.courses.filter((id: any) => id === idCurso) > 0 && listaEstudiantes.push(est)
            })
            return listaEstudiantes
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
}
export default type
