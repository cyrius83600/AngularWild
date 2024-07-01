import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  const start = new Date().getTime()
    console.log(req.url);
    return next(req).pipe(
      tap(response => {
          if (response instanceof HttpResponse) {
            console.log('La requete a mis : ' + (new Date().getTime() - start) + 'ms pour sexécuter');
            }
         }));
       
};
