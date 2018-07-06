import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
@NgModule ({
    declarations: [
        ServerComponent
    ],
    imports: [
        FormsModule
    ],
    providers: [],
    bootstrap: [ServerComponent]
})
export class ServerComponent {
    title = 'Hey server';
}