import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';

const PIZZAS_KEY = makeStateKey('pizzas');

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient, private transferState: TransferState) {}

  getPizzas(): Observable<Pizza[]> {
    const found = this.transferState.hasKey(PIZZAS_KEY);
    if (found) {
      const res = of(this.transferState.get<Pizza[]>(PIZZAS_KEY, []));
      this.transferState.remove(PIZZAS_KEY);
      return res;
    } else {
      let resultToSerialize: Pizza[];
      this.transferState.onSerialize(PIZZAS_KEY, () => resultToSerialize);
      return this.http
        .get<Pizza[]>(`${environment.baseUrl}/pizzas`)
        .pipe(
          tap(result => resultToSerialize = result),
          catchError((error: any) => throwError(error.json()))
        );
    }
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${environment.baseUrl}/pizzas`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${environment.baseUrl}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${environment.baseUrl}/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
