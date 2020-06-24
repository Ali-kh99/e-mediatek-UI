import { Component, OnInit } from '@angular/core';
import { JournalisationService } from 'src/app/service/journalisation.service';
import { Journalisation } from 'src/app/model/journalisation';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  constructor(private journalisationService:JournalisationService) { }

ngOnInit() {
  this.journalisationService.findAll();

}
get journalisations():Array<Journalisation>{
  return this.journalisationService.journalisations;
}
}
