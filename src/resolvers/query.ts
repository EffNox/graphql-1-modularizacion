import { IResolvers } from "graphql-tools";
import { db } from "../data/data";

const query: IResolvers = {
    Query: {
        estudiantes: () => db.estudiantes,
        estudiante: (__, { id }) => db.estudiantes.find(v => v.id === id),
        courses: () => db.cursos,
        curso: (_, { id }) => db.cursos.find(v => v.id === id),
    }
}
export default query
