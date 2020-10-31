import { IResolvers } from "graphql-tools";
import { db } from "../data/data";
import _ from "lodash";

const mutation: IResolvers = {
    Mutation: {
        cursoNuevo(_, { curso }): any {
            const itemCurso = { ...curso, id: String(db.cursos.length + 1) }
            if (!db.cursos.find(v => v.title === itemCurso.title)) {
                db.cursos.push(itemCurso)
                return itemCurso
            }
            return { id: '-1', title: 'El curso ya existe' }
        },
        cursoModificar(__, { curso }): any {
            const item = _.findIndex(db.cursos, (o) => o.id === curso.id)

            if (item > -1) {
                const valoraciones = db.cursos[item].reviews
                curso.reviews = valoraciones;
                db.cursos[item] = curso;
                return curso
            }
            return { id: '-1 El curso no existe' }
        },
        cursoEliminar(__, { id }): any {
            const item = _.remove(db.cursos, (o) => o.id === id)
            if (!item[0]) return { id: '-1 El curso no existe' }
            return { id: 'Curso eliminado' }
        },
    }
}
export default mutation
