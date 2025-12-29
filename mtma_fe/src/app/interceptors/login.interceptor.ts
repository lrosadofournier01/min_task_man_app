import { HttpInterceptorFn } from '@angular/common/http';

// Store Token in browser temp storage so it doesn't need to be added to request each time
export const loginInterceptor: HttpInterceptorFn = (rsp, next) => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    const authReq = rsp.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  } 

  return next(rsp);
};