import { CanActivateFn } from '@angular/router';
import { LoginComponent } from '../components/pages/login/login.component';

export const loginGuard: CanActivateFn = (route, state) => {
    const resp: boolean = LoginComponent.prototype.getAutenticado();
    return resp
};
