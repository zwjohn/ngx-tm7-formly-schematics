import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { <%= classify(name) %>FormlyService} from './<%=  dasherize(name) %>.formly.service';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Resolver {

  constructor(private <%=camelize(name)%>FormlyService: <%= classify(name) %>FormlyService) {
  }

  /**
   * Resolver
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.<%=camelize(name)%>FormlyService.getTemplate();
  }
}
