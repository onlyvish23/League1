import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
        const currentuser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentuser != null && currentuser.token != null) {
            request = request.clone({
                setHeaders : {
                    Authorization : `Bearer ${currentuser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
