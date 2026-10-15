import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';


// Define standard response interface
export interface StandardResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T | null;
}


@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {

    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode;
    
    return next.handle().pipe(
      map((data: T)=> ({
        success: true ,
        message: 'Data berhasil dibuat',
        statusCode: statusCode,
        data: data ??null
      }))
    );
  }
}