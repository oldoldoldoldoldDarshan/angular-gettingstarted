import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iproduct, InitialIproduct } from './product';
import { Observable, BehaviorSubject, throwError, timer, from, empty, of } from 'rxjs';
import {tap,catchError, retry, retryWhen, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    
    private IproductSubject: BehaviorSubject<Iproduct[]> = new BehaviorSubject<Iproduct[]>(InitialIproduct);
    Iproduct: Observable<Iproduct[]> = this.IproductSubject.asObservable();

    private productsurl = 'http://localhost:8080/products/getEntityResponseProducts';

    
    constructor(private http : HttpClient) {

    }

    fetchProducts(): void {
        this.getProductsFromHttp().subscribe(res => this.IproductSubject.next(res));
    }


    getProductsFromHttp(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>(this.productsurl).pipe(
         tap(data => console.log('Testig Error Handling')), 
         //retry(2),  // total 5 times call will be retried before erroing out. // retry location doesnot matter 
         // Conditional retry 
         // retryWhen(() => timer(10000)), // retry after some time retry when will take some condition once it is satisfied It will be executed 
         // catchError(err => throwError('Darshan Yadav Error handling')) -> catching and throwing same error statused observable
        catchError(this.handleError) //-> calling meathod which handles error handling
         //catchError( )
        );
    }

    // examples of using error handling
    public abs: Observable<String> = from(['darshan', 'yadav', 'venkatesh']).pipe(
        tap(data => console.log(JSON.stringify(data))),
        map( (v:string) => {
            return v.toLocaleUpperCase;
        }),
        catchError(err => {
            if (err.status === 403) {
                 //throw 'invalid cradential';  
                 return throwError ('invalid cradentail');  
                 // both the statements are identical we can use both.
            }
            if (err.errNum === 500) {
                //return empty(); // -> returns an obsorvable
                //return of('return obsorvable'); // -> returns an obsorvable
                return of(null); // -> returns an obsorvable
           }
           return of('not a string problem'); // -> returns Obsorvable
        })
    );


    
    // error handling mehtod should return error statused observable or new obesrvable otherwise there will be an error.
    private handleError(err: HttpErrorResponse, obs: Observable<any>): Observable<any> {
        console.log('logging error' + err.message);
        //return throwError('error');
        return obs;
        
    }

}