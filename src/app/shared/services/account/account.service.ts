import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../../interfaces/account/acount.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public isUserLogin$ = new Subject<boolean>();
  private url = environment.BACKEND_URL;
  private api = { auth: `${this.url}/auth` };
  public userData$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

}
