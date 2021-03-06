/* Core */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Third-Party */
import { Ng2DeviceDetector } from 'ng2-device-detector';
import {
    AccordionModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    InputTextModule,
    // MenuItem,
    // Message,
    PanelModule,
    SharedModule,
    StepsModule,
    TabViewModule
}
from 'primeng/primeng';

/* Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AssociationsComponent } from './components/associations.component';
import { OwnersComponent } from './components/owners.component';
import { ParametersComponent } from './components/parameters.component';
import { ResourceComponent } from './components/resource.component';
import { SettingsComponent } from './components/settings.component';
import { SidebarComponent } from './components/sidebar.component';

/* Services */

import {
    SpacesBaseService,
    SpacesLoggingService,
    SpacesMessagesService,
    SpacesRequestService,
    SpacesStorageService,
    SpacesUtilityService
}
from 'angular2-spaces/main';
import {
    // Address,
    // EmailAddress,
    // Host,
    TcExchangeDbService,
    TcGroupService,
    TcIndicatorService,
    TcOwnerService
    // Url
} from 'angular2-threatconnect/main';
import { SettingsService } from './services/settings.service';

@NgModule({
    imports: [
        /* Core */
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        /* Device Detector */
        Ng2DeviceDetector,
        /* PrimeNG */
        AccordionModule,
        ButtonModule,
        DataTableModule,
        DialogModule,
        DropdownModule,
        GrowlModule,
        InputTextModule,
        PanelModule,
        SharedModule,
        StepsModule,
        TabViewModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        SidebarComponent,
        AssociationsComponent,
        OwnersComponent,
        ParametersComponent,
        ResourceComponent,
        SettingsComponent
    ],
    providers: [
        SettingsService,
        SpacesBaseService,
        SpacesLoggingService,
        SpacesMessagesService,
        SpacesRequestService,
        SpacesStorageService,
        SpacesUtilityService,
        TcExchangeDbService,
        TcGroupService,
        TcIndicatorService,
        TcOwnerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}