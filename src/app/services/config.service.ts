import { Inject, Injectable, inject } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService Initialized!!!');
    console.log(this.configToken);
  }
}
