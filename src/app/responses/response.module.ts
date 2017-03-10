import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ResponseListComponent} from './response-list.component';
import {ResponseVisualizationComponent} from './response-visualization.component';

@NgModule({
    declarations: [
        ResponseListComponent,
        ResponseVisualizationComponent      
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'responses', component: ResponseListComponent},
            { path: 'response/:id', component: ResponseVisualizationComponent}
        ])
    ],
    exports: []
})
export class ResponseModule {}