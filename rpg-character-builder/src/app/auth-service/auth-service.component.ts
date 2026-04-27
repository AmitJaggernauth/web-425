import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface User {
  empId: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { empId: '1', email: 'alice@example.com', password: 'Password1' },
    { empId: '2', email: 'bob@example.com', password: 'Secret2' }
  ];

  private authState = new BehaviorSubject<boolean>(this.hasSessionCookie());

  constructor(private cookieService: CookieService, private router: Router) {}

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      // store minimal session info in cookie
      this.cookieService.set('session_user', JSON.stringify({ empId: user.empId, email: user.email }));
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']);
  }

  private hasSessionCookie(): boolean {
    return this.cookieService.check('session_user');
  }
}
