import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService  {

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://theory-ng-http.firebaseio.com/data.json', 
        //     servers, 
        //     {headers: headers});
        return this.http.put('https://theory-ng-http.firebaseio.com/data.json', 
            servers, 
            {headers: headers});
    }

    getServers() {
       return  this.http.get('https://theory-ng-http.firebaseio.com/data.json')
        .map(
            (response: Response) => {
                const data = response.json();
                for ( const server of data ) {
                    server.name = 'FETCHED__' + server.name;
                }
                return data;
            }
        )
    }

}