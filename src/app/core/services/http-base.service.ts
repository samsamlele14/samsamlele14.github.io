import { Injectable } from '@angular/core';

const API_URI: string = "https://api.themoviedb.org/3";
const REQ_AUTH: string = "?api_key=2bc5c3fe56239fcb0a4bd569da6534c2&language=it&append_to_response=images&include_image_language=it,en,null";


@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor() { }
/**
 * funzione per la costruzione dell'endpoint delle chiamate api di tmdb
 * @param endpoint  risorsa a cui accedere 
 * @param queryParams 
 * @returns 
 */
  buildApiRequest(endpoint: string, queryParams?: string){
    return `${API_URI}/${endpoint}${REQ_AUTH}${queryParams ?? ''}`
  }
}
