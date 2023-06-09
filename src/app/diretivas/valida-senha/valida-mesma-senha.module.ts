import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ValidaMesmaSenhaDirective } from "./valida-mesma-senha.directive";

@NgModule({
    declarations: [ValidaMesmaSenhaDirective],
    imports: [CommonModule],
    exports: [ValidaMesmaSenhaDirective]
})
export class ValidaMesmaSenhaModule {}
