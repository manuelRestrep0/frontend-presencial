import axios from "axios";
import { Flight } from "./types";

// Tienen que averiguar cómo poner la variable de entorno (no śe como es en next.js)
const api_url = process.env.API_URL || "http://localhost:8099/v1"

// Api connection
const service = axios.create({ baseURL: api_url })

// Resquests
/*
 * ¿Cómo funciona esto?
 *
 * Básicamente es una función que retorna otra función. 
 *
 * La primera, la que tiene entity como parámetro, crea a la función que hará la petición
 * al endpoint del la entidad pasada como entity.
 * 
 * La segunda función es básicamente utilizar el servicio creado con axios,
 * algunas de las segundas funciones tienen parametros, 
 * estos serían los requeridos por el endpoint para poder hacer la petición.
 * por ejemplo, el update recibe un id y el body, y el searchBy recibe el string del query.
 * 
 * const allFlights = all("flight")<Flight>
 * 
 * Estas funciones cambiarán cuando se tenga que usar elJWToken
 *
 */
export const all = (entity: string) => async <T>() => service.get<Array<T>>(entity)
export const searchBy = (entity: string) => async <T>(query: string) => service.get<Array<T>>(`${entity}?${query}`)
export const find = (entity: string) => async <T>(id: number | string) => service.get<T>(`${entity}/${id}`)
export const save = (entity: string) => async <T>(body: T) => service.post<T>(`${entity}`, body)
export const update = (entity: string) => async <T>(id: number | string, body: T) => service.put<T>(`${entity}/${id}`, body)
export const remove = (entity: string) => async <T>(id: number | string) => service.delete<T>(`${entity}/${id}`)