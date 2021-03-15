import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
const { Client } = window.require('pg');
const client = new Client({
  
})

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    client.close();
  }

  ngOnInit(): void {
    client.connect();
  }
  @ViewChild("textarea") textarea;
  selectedquery: string = ""
  Execute() {
    console.log(this.textarea);
    var query;
    var selectionStart = this.textarea.nativeElement.selectionStart;
    var selectionEnd = this.textarea.nativeElement.selectionEnd;
    if (selectionStart == selectionEnd) {
      query = this.selectedquery;
    }
    else {
      query = this.selectedquery.substring(selectionStart, selectionEnd)
    }
    client.query(`${query} limit 10`, (err, res) => {
      console.log(err, res)
    })
  }

}
