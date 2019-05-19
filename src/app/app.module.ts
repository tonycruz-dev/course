import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { ChallengeTabComponent } from "./challenges/challenge-tab/challenge-tab.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { TodayComponent } from "./challenges/today/today.component";
import { ActionBarComponent } from "./shared/ui/action-bar/action-bar.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        ChallengeTabComponent,
        ChallengeEditComponent,
        CurrentChallengeComponent,
        TodayComponent,
        ActionBarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
