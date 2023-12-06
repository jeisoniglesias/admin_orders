import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../../interfaces/user';
import { AuthStatus } from '../../interfaces/auth-status.enum';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { ILogin } from '../../interfaces/login.interface';
import { BaseResponse } from 'src/app/utils/reponses.type';
import { managerError } from 'src/app/utils/manager-error';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly baseUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<IUser | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  //! Al mundo exterior
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: IUser, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }
  private saveSesion(
    resp: BaseResponse<ILogin | undefined>
  ): BaseResponse<ILogin | undefined> {
    const { data, response } = resp;

    const { code, message, status, success } = response;

    if (!success) {
      return managerError(resp);
    }

    const { token, user } = data as ILogin;
    this.setAuthentication(user, token);
    return {
      data: {
        id: user.id,
        email: user.email,
        isActive: user.isActive,
        isBlocked: user.isBlocked,
        roles: user.roles,
        token: token,
      },
      response: {
        status,
        success,
        code,
        message,
      },
    };
  }
  login(
    email: string,
    password: string
  ): Observable<BaseResponse<ILogin | undefined>> {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<BaseResponse<ILogin | undefined>>(url, body).pipe(
      switchMap((resp) => of(this.saveSesion(resp))),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  checkAuthStatus(): Observable<boolean | any> {
    const url = `${this.baseUrl}/auth/revalidate`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(url, headers);

    return this.http
      .get<BaseResponse<ILogin | undefined>>(url, { headers })
      .pipe(
        map((resp) => {
          console.log('checkAuthStatus');
          console.log(resp);

          return this.saveSesion(resp);
        }),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
