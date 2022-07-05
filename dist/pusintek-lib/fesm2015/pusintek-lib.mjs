import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class PusintekLibService {
    constructor() { }
}
PusintekLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PusintekLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PusintekLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
PusintekLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PusintekLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.4", type: PusintekLibComponent, selector: "lib-pusintek-lib", ngImport: i0, template: `
    <p>
      pusintek-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pusintek-lib', template: `
    <p>
      pusintek-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class PusintekLibModule {
}
PusintekLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PusintekLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibModule, declarations: [PusintekLibComponent], exports: [PusintekLibComponent] });
PusintekLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: PusintekLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PusintekLibComponent
                    ],
                    imports: [],
                    exports: [
                        PusintekLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of pusintek-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PusintekLibComponent, PusintekLibModule, PusintekLibService };
//# sourceMappingURL=pusintek-lib.mjs.map
