import { Component, OnInit } from '@angular/core';
import { tracks } from '../data/trackMOCK';
import { Track } from '../data/Track';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tracks: Track[] = tracks;
  track: Track;
  selectedTrack: Track;
  isClicked: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedTrack(track: Track): void {
    this.selectedTrack = track;
    console.log(`${track.trackName}`);
  }
}
