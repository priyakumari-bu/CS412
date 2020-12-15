import { Component, OnInit, Input} from '@angular/core';
import {Track} from '../data/Track';

@Component({
  selector: 'app-result',
  template: '<h2>Query Result</h2>' +
    'Top Tracks for {{selectedArtist}}' +
    '<br/> {{selectedArtist.trackName}}' +
    '<br/> {{selectedArtist.collectionName}}' +
    '<br/> {{selectedArtist.primaryGenreName}}' +
    '<br/> {{selectedArtist.releaseDate}}',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() selectedArtist = {
      artistName: '',
      trackName: '',
      collectionName: '',
      primaryGenreName: '',
      releaseDate: ''
  };

  @Input() tracks: Track[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
