import { find, all, remove, save, update, searchBy } from "./apiService";
import { Airplane, Airport, Flight, Scale } from "./types";


/* Service Assembler
 *
 * Esto es hacer uso del patron factory,
 * esta función es una "fabrica" de servicios, por eso es un template también.A
 * 
 * Crea servicios que hacen peticiones de la entidad esepecificada.
 * Por ejemplo, si especificas "flight", hara peticiones a los endpoints de flight,
 * es útil para no tener que repetir lo mismo en todos los endpoint, 
 * puesto que todos tienen básicamente las mismas peticiones y eso es código que se repetiría.
 * 
 * Para usarla solo hay que especificar el objeto que maneja y la entidad del endpoint
 * y esta retornará un objeto con todas las funciones que se necesitan en las peticiones
 *
 * ### Ejemplo de uso
 *
 * const [vuelos, setVuelos] = React.useState<Array<Flight>>([])
 * React.useEffect(() => {
 * 		flightService.all().then(response => 
 *			setVuelos(response.data)
 *		)
 * }, [])
 *
 */
const serviceAssembler = <T>(entity: string) => {
	const service = {
		all: all(entity)<T>,
		find: find(entity)<T>,
		save: save(entity)<T>,
		update: update(entity)<T>,
		delete: remove(entity)<T>,
		searchBy: searchBy(entity)<T>
	}
	return service
}

export const flightService = serviceAssembler<Flight>("flights")
export const airportService = serviceAssembler<Airport>("airports")
export const scaleService = serviceAssembler<Scale>("scales")
export const airplaneService = serviceAssembler<Airplane>("scales")