import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  template: `

  `,
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  get tags(): string[] {

    return this.gifsService.tagsHistory;

  }

  selectTag( tag: string ): void {

    this.gifsService.searchTag( tag );

  }

}
