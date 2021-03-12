import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
var kafka = window.require("kafka-node"),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient(
    { kafkaHost: "" }
  ),
  producer = new Producer(client),
  Consumer = kafka.Consumer
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectedValue;
  topicName = "";
  produce() {
    console.log(this.selectedValue, this.topicName);
    producer.send(
      [{
        topic: this.topicName,
        messages: this.selectedValue,
        timestamp: Date.now()
      }
      ], function (err, data) {
        alert("Produced successfully");
      })
  }


}
