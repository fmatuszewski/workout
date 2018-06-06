import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    WorkoutSharedLibsModule,
    WorkoutSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        WorkoutSharedLibsModule,
        WorkoutSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        WorkoutSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class WorkoutSharedModule {}
