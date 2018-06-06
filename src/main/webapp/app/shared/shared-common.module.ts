import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { WindowRef } from './tracker/window.service';
import {
    WorkoutSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        WorkoutSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        WorkoutSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class WorkoutSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
