import { Resolucion } from "../enum/resolucion.enum";


export class Televisor {
    constructor(
        public marca?: string | null,
        public tamano_pantalla?: number | null,
        public resolucion?: Resolucion | null,
        public descripcion?: string | null,
        public funciones_adicionales?: string | null,
        public precio?: number | null,
        public descripcion_garantia?: string | null, 
        public fechaCreacion?: Date | null
      ){}
}