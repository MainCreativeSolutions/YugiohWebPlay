import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
  }

  onSaveAllCards(inp: HTMLInputElement) {
    const file = inp.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonObj = JSON.parse(event.target['result']);
      console.log(jsonObj);

      let counter = 0;
      for (const i of jsonObj) {
        this.db.collection('cards')
          .add(i)
          .then(value => {
            counter++;
            console.log(counter, value);
          })
          .catch(reason => console.log(reason));

      }

      console.log('DONE');
    };

    reader.readAsText(file);
  }

  onGetAllCards() {
    console.log('Getting Data...');

    const subs = this.db.collection('cards', ref => {
      return ref
        .where('type', '==', 'Effect Monster')
        .where('atk', '>=', 3000)
        .limit(100);
    }).valueChanges().subscribe(value => {
      console.log('Received Data:');
      console.log(value);
      subs.unsubscribe();
    });
  }
}
