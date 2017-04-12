import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

// import * as cloud from 'd3-cloud';
import { IWord } from './word.component';

import { IMessage } from './message';
import { MessageService } from './message.service';

@Component({
  moduleId: module.id,
  templateUrl: './message-visualization.component.html'
})
export class MessageVisualizationComponent implements OnInit {

  messages: IMessage[];
  tagName: string = 'Tag';
  errorMessage: string;
  private subscription: Subscription;
  words: IWord[] = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function (d) {
      return { text: d, size: 10 + Math.random() * 90 };
    });

  constructor(private _messageService: MessageService,
    private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      params => {
        const tagId = +params['id'];
        this.tagName = this._messageService.getSelectedTagName();
        this.getMessages(tagId);
      });
/*
    cloud().size([960, 500])
      .canvas(function () { return new Canvas(1, 1); })
      .words(this.words)
      .padding(5)
      .rotate(function () { return ~~(Math.random() * 2) * 90; })
      .font('Impact')
      .fontSize(function (d) { return d.size; })
      .on('end', this.end)
      .start();
*/
  }

  end(words: IWord[]): void {
    console.log(JSON.stringify(words));
  }

  getMessages(tagId): void {
    this._messageService.getMessages(tagId)
      .subscribe(messages => this.messages = messages,
      error => this.errorMessage = <any>error);
  }
}
