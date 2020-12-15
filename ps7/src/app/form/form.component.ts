import { Component, OnInit } from '@angular/core';
import { TrackService } from '../services/track.service';
import { FormBuilder } from '@angular/forms';
import { Track } from '../data/Track';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedArtist = {
    artistName: '',
    trackName: '',
    collectionName: '',
    primaryGenreName: '',
    releaseDate: ''
  };
  artistName: string;
  trackName: string;
  collectionName: string;
  primaryGenreName: string;
  releaseDate: string;

  tracks: Track[] = [];
  constructor(private trackService: TrackService, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  getTracks(): void {
    this.trackService.getTracks(this.artistName).subscribe(
      (response: Track) => {
        console.log(`Response: ${response}`);
        this.selectedArtist = {
          artistName: this.artistName,
          trackName: response.trackName,
          collectionName: response.collectionName,
          primaryGenreName: response.primaryGenreName,
          releaseDate: response.releaseDate
        };
        console.log(this.selectedArtist);
      }
    );
  }

}
