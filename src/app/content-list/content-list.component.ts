import {Component, OnInit} from '@angular/core';
import { Content } from 'helper-files/content-interface';
import {GamesServiceService} from "../games-service.service";
import { MessageService } from '../message.service';
import {content} from "../../../helper-files/contentDb";
import { HoverAffectDirective } from "../hover-affect.directive";
import {ContentTypeFilterPipe} from "src/app/type-filter.pipe";

@Component({
  selector: 'app-content-list',
  template: `
    <!--
    <div class="search-container">
      <input type="text" [(ngModel)]="searchTerm" placeholder="Enter content title">
      <button (click)="searchContents(searchTerm)">Search</button>
    </div>
     -->

    <h2>All Content</h2>
    <div class="content-list">
      <div *ngFor="let content of contents | contentTypeFilter">
        <app-content-card [content]="content" [ngClass]="content.type"></app-content-card>
      </div>
    </div>

    <ul>
      <li *ngFor="let message of messageService.messages">{{ message }}</li>
    </ul>
<!--
    <h2>Filtered Content</h2>
    <div class="content-list">
      <div *ngIf="searchResults.length === 0">
        <p *ngIf="searchTerm && searchTerm.trim() !== ''">No content found with title '{{ searchTerm }}'</p>
      </div>
      <div *ngFor="let content of searchResults">
        <app-content-card [content]="content" [ngClass]="content.type"></app-content-card>
      </div>
    </div>
    -->


    <div *ngFor="let content of contents; let i = index" class="content-card" [style.border-width.px]="i === 0 ? 2 : 1">
      <header>{{ content.title }}</header>
      <ng-container *ngIf="content.imgURL">
        <img [src]="content.imgURL" alt="{{ content.title }}" />
      </ng-container>
      <ng-container *ngIf="!content.imgURL">
        <img src="https://imgs.search.brave.com/E-ms5Ws7B822GVVK1FU_nQIHU6AicIMp9ose3HvkhNc/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvYnVmZmVy/aW5nLXBuZy0xLnBu/Zw" alt="{{ content.title }}" />
      </ng-container>
      <div appHoverAffect [hoverStyle]="'background-color: #f0f0f0'" [unhoverStyle]="'none'">
        <p>{{ content.description }}</p>
      </div>
      <p>Creator: {{ content.creator }}</p>
      <div appHoverAffect [hoverStyle]="'underline'" [unhoverStyle]="'none'">
        <p>Type: {{ content.type }}</p>
      </div>
        <span appHoverAffect [hoverStyle]="'bold-text'" [unhoverStyle]="'normal'">
            <p>Tags: {{ content.tags }}</p>
        </span>
      </div>

    <div *ngIf="messageService.messages.length">

      <h2>Messages</h2>
      <button type="button" class="clear"
              (click)="messageService.clear()">Clear messages</button>
      <div *ngFor='let message of messageService.messages'> {{message}} </div>

    </div>



  `,
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[] = [];


  constructor(public gamesService: GamesServiceService, public messageService: MessageService) { }

  onSelect(content: Content): void {
    this.messageService.add(`ContentListComponent: Selected content id=${content.id}`);
  }

  public contentArray: any[] = [];
  singleContent: any;


  ngOnInit(): void {
    this.gamesService.getContent().subscribe((content) => {
      this.contentArray = content;
      this.gamesService.getSingleContent(1).subscribe((content) => {
        this.singleContent = content;
      });
      /*

          filteredContents: content[] = [];

          shouldUnderline = true;


          filterContents(type:string)
          {
            this.filteredContents = this.contents.filter(content => {
              if (type) {
                return content.type === type;
              } else {
                return true;
              }
            });
          }

          searchResults: Content[] = [];
          searchTerm = '';

          searchContents(searchTerm:string)
          {
            searchTerm = searchTerm.toLowerCase();
            this.filteredContents = this.contents.filter(content =>
              content.title.toLowerCase().includes(searchTerm) || content.description.toLowerCase().includes(searchTerm)
            );
          }

          onImageClick(content:Content)
          {
            console.log(`Clicked on content ${content.id}: ${content.title}`);
          }
          */

    });
  }
}

