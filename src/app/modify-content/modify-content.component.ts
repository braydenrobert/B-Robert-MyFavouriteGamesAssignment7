import { Component, OnInit } from '@angular/core';
import { Content } from 'helper-files/content-interface';
import { ContentService } from '../content-service.service.spec';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    creator: ''
  };

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  addContent() {
    const content: Content = { id: null, title: 'New Content', description: 'Lorem ipsum', creator: 'John Doe' };
    this.contentService.testFunction(content).subscribe(result => {
      console.log(result); // Response from server
    });
  }
}
