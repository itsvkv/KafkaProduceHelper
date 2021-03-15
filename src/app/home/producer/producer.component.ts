import { Component, OnInit } from '@angular/core';
var kafka = window.require("kafka-node"),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient(
    {
      kafkaHost: "",
    }
  ),
  producer = new Producer(client),
  Consumer = kafka.Consumer
@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
