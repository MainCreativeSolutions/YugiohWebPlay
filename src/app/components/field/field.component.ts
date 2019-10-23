import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FieldService} from '../../services/field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  private game = {
    game: {
      id: 1,
      activePlayers: 2,
      players: [
        {
          id: 1,
          team: 1,
          lifePoints: 4000,
          hand: [
            {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false,
              isAttack: false
            }
          ],
          deck: [
            {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false,
              isAttack: false
            }
          ],
          graveyard: [
            {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false,
              isAttack: false
            }
          ],
          magicOrTrapSlots: [
            {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false
            }
          ],
          monsterSlot: [
            {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false,
              isAttack: false
            }
          ],
          fieldCardsSlot: {
            card: {
              id: '91740879',
              name: 'Cauldron of the Old Man',
              type: 'Spell Card',
              desc: 'When this card is activated: Place 1 counter on this card. Once per turn, during your Standby Phase: Place 1 counter on this card. Once per turn: You can activate 1 of these effects;\r\n● Gain 500 LP for each counter on this card.\r\n● Inflict 300 damage to your opponent for each counter on this card.',
              image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/91740879.jpg',
              race: 'Continuous',
              publicPreview: false,
              faceUp: false
            }
          }
        }
      ]
    }
  };

  constructor(private db: AngularFirestore, private fieldService: FieldService) {
  }

  ngOnInit() {
    // this.startNewGame();
  }

  startNewGame() {
    this.db.collection('games').add(this.game)
      .then(res => {
          this.fieldService.gameId = res.id;
        }
      ).catch(err => console.log(err));
  }

  setupYugiohCards() {
  }

}
