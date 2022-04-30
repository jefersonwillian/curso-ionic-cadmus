import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { IInfiniteScrollTarget } from 'src/app/@core/interfaces/infinite-scroll-target.interface/infinite-scroll-target.interface';
import { infiniteScrollLocal } from 'src/app/@core/utils/infinite-scroll.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('onRefreshPanel') onRefreshPanel: IonRefresher;

  public listHome = [
    {
      title: 'Bamity',
      description: 'Possum, common brushtail',
      urlImg: 'http://dummyimage.com/102x100.png/dddddd/000000',
    },
    {
      title: 'Gembucket',
      description: 'Tortoise, indian star',
      urlImg: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
    },
    {
      title: 'Solarbreeze',
      description: 'Superb starling',
      urlImg: 'http://dummyimage.com/140x100.png/ff4444/ffffff',
    },
    {
      title: 'Flowdesk',
      description: 'Black-footed ferret',
      urlImg: 'http://dummyimage.com/240x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Tresom',
      description: 'Starling, cape',
      urlImg: 'http://dummyimage.com/200x100.png/cc0000/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description: 'Roe deer',
      urlImg: 'http://dummyimage.com/203x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description: 'Bird, pied butcher',
      urlImg: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
    },
    {
      title: 'Keylex',
      description: 'Brush-tailed rat kangaroo',
      urlImg: 'http://dummyimage.com/219x100.png/ff4444/ffffff',
    },
    {
      title: 'Keylex',
      description: 'Ibis, glossy',
      urlImg: 'http://dummyimage.com/119x100.png/dddddd/000000',
    },
    {
      title: 'Lotlux',
      description: 'Gray rhea',
      urlImg: 'http://dummyimage.com/121x100.png/dddddd/000000',
    },
    {
      title: 'Sonair',
      description: 'Owl, burrowing',
      urlImg: 'http://dummyimage.com/221x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description: 'Rat, desert kangaroo',
      urlImg: 'http://dummyimage.com/173x100.png/dddddd/000000',
    },
    {
      title: 'Greenlam',
      description: 'Pelican, brown',
      urlImg: 'http://dummyimage.com/152x100.png/cc0000/ffffff',
    },
    {
      title: 'Zamit',
      description: 'Gecko, ring-tailed',
      urlImg: 'http://dummyimage.com/230x100.png/cc0000/ffffff',
    },
    {
      title: 'Flexidy',
      description: 'Suricate',
      urlImg: 'http://dummyimage.com/176x100.png/ff4444/ffffff',
    },
    {
      title: 'Zontrax',
      description: 'Iguana, common green',
      urlImg: 'http://dummyimage.com/239x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Treeflex',
      description: 'Denhams bustard',
      urlImg: 'http://dummyimage.com/192x100.png/ff4444/ffffff',
    },
    {
      title: 'Y-find',
      description: 'Magistrate black colobus',
      urlImg: 'http://dummyimage.com/212x100.png/dddddd/000000',
    },
    {
      title: 'Otcom',
      description: 'Roe deer',
      urlImg: 'http://dummyimage.com/142x100.png/dddddd/000000',
    },
    {
      title: 'Wrapsafe',
      description: 'Blue shark',
      urlImg: 'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ronstring',
      description: 'Macaque, pig-tailed',
      urlImg: 'http://dummyimage.com/217x100.png/ff4444/ffffff',
    },
    {
      title: 'Matsoft',
      description: 'Honey badger',
      urlImg: 'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Lotstring',
      description: 'White-bellied sea eagle',
      urlImg: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Fixflex',
      description: 'Small-clawed otter',
      urlImg: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Home Ing',
      description: 'Squirrel, malabar',
      urlImg: 'http://dummyimage.com/126x100.png/ff4444/ffffff',
    },
    {
      title: 'Zathin',
      description: 'Lesser mouse lemur',
      urlImg: 'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Asoka',
      description: 'Suricate',
      urlImg: 'http://dummyimage.com/112x100.png/cc0000/ffffff',
    },
    {
      title: 'Sub-Ex',
      description: 'Gull, swallow-tail',
      urlImg: 'http://dummyimage.com/148x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description: 'Kudu, greater',
      urlImg: 'http://dummyimage.com/131x100.png/dddddd/000000',
    },
    {
      title: 'Tres-Zap',
      description: 'Lemming, collared',
      urlImg: 'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Andalax',
      description: 'Vicuna',
      urlImg: 'http://dummyimage.com/191x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description: 'Eagle, crowned',
      urlImg: 'http://dummyimage.com/119x100.png/dddddd/000000',
    },
    {
      title: 'Tin',
      description: 'Wolf, timber',
      urlImg: 'http://dummyimage.com/234x100.png/cc0000/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description: 'Racer, blue',
      urlImg: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description: 'Grenadier, common',
      urlImg: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Cardguard',
      description: 'Southern black-backed gull',
      urlImg: 'http://dummyimage.com/123x100.png/cc0000/ffffff',
    },
    {
      title: 'Hatity',
      description: 'Goose, egyptian',
      urlImg: 'http://dummyimage.com/196x100.png/dddddd/000000',
    },
    {
      title: 'Bytecard',
      description: 'White-fronted bee-eater',
      urlImg: 'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ventosanzap',
      description: 'Bulbul, african red-eyed',
      urlImg: 'http://dummyimage.com/186x100.png/ff4444/ffffff',
    },
    {
      title: 'Kanlam',
      description: 'Wambenger, red-tailed',
      urlImg: 'http://dummyimage.com/139x100.png/dddddd/000000',
    },
    {
      title: 'Sonair',
      description: 'Nyala',
      urlImg: 'http://dummyimage.com/103x100.png/dddddd/000000',
    },
    {
      title: 'Domainer',
      description: 'Anteater, giant',
      urlImg: 'http://dummyimage.com/217x100.png/ff4444/ffffff',
    },
    {
      title: 'Wrapsafe',
      description: 'Eland, common',
      urlImg: 'http://dummyimage.com/151x100.png/cc0000/ffffff',
    },
    {
      title: 'Zathin',
      description: 'Squirrel, arctic ground',
      urlImg: 'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Biodex',
      description: 'Common wolf',
      urlImg: 'http://dummyimage.com/127x100.png/ff4444/ffffff',
    },
    {
      title: 'Otcom',
      description: 'Meerkat, red',
      urlImg: 'http://dummyimage.com/130x100.png/ff4444/ffffff',
    },
    {
      title: 'Ventosanzap',
      description: 'Flying fox (unidentified)',
      urlImg: 'http://dummyimage.com/121x100.png/dddddd/000000',
    },
    {
      title: 'Tampflex',
      description: 'Grey fox',
      urlImg: 'http://dummyimage.com/232x100.png/ff4444/ffffff',
    },
    {
      title: 'Ronstring',
      description: 'Asian openbill',
      urlImg: 'http://dummyimage.com/184x100.png/dddddd/000000',
    },
    {
      title: 'Vagram',
      description: 'Yellow-bellied marmot',
      urlImg: 'http://dummyimage.com/104x100.png/dddddd/000000',
    },
    {
      title: 'Temp',
      description: 'Vulture, bengal',
      urlImg: 'http://dummyimage.com/159x100.png/cc0000/ffffff',
    },
    {
      title: 'Tampflex',
      description: 'Pelican, eastern white',
      urlImg: 'http://dummyimage.com/181x100.png/ff4444/ffffff',
    },
    {
      title: 'Biodex',
      description: 'Squirrel, pine',
      urlImg: 'http://dummyimage.com/148x100.png/dddddd/000000',
    },
    {
      title: 'Overhold',
      description: 'Turtle, long-necked',
      urlImg: 'http://dummyimage.com/163x100.png/cc0000/ffffff',
    },
    {
      title: 'Job',
      description: 'Slender-billed cockatoo',
      urlImg: 'http://dummyimage.com/102x100.png/cc0000/ffffff',
    },
    {
      title: 'Viva',
      description: 'Pigeon, feral rock',
      urlImg: 'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Veribet',
      description: 'Flightless cormorant',
      urlImg: 'http://dummyimage.com/154x100.png/ff4444/ffffff',
    },
    {
      title: 'Asoka',
      description: 'Heron, gray',
      urlImg: 'http://dummyimage.com/146x100.png/cc0000/ffffff',
    },
    {
      title: 'Domainer',
      description: 'Frogmouth, tawny',
      urlImg: 'http://dummyimage.com/106x100.png/ff4444/ffffff',
    },
    {
      title: 'Zoolab',
      description: 'African buffalo',
      urlImg: 'http://dummyimage.com/247x100.png/ff4444/ffffff',
    },
    {
      title: 'Cookley',
      description: 'Owl, white-browed',
      urlImg: 'http://dummyimage.com/174x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description: 'Peccary, white-lipped',
      urlImg: 'http://dummyimage.com/232x100.png/dddddd/000000',
    },
    {
      title: 'Trippledex',
      description: 'Paradoxure',
      urlImg: 'http://dummyimage.com/141x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description: 'Raccoon, common',
      urlImg: 'http://dummyimage.com/246x100.png/ff4444/ffffff',
    },
    {
      title: 'Voyatouch',
      description: 'Capuchin, black-capped',
      urlImg: 'http://dummyimage.com/226x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Overhold',
      description: 'Butterfly, tropical buckeye',
      urlImg: 'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Stringtough',
      description: 'Jaguarundi',
      urlImg: 'http://dummyimage.com/189x100.png/ff4444/ffffff',
    },
    {
      title: 'Bytecard',
      description: 'Booby, blue-faced',
      urlImg: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
    },
    {
      title: 'Ventosanzap',
      description: 'Harbor seal',
      urlImg: 'http://dummyimage.com/137x100.png/dddddd/000000',
    },
    {
      title: 'Cardguard',
      description: 'Arctic fox',
      urlImg: 'http://dummyimage.com/234x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Home Ing',
      description: 'Gazelle, thomsons',
      urlImg: 'http://dummyimage.com/117x100.png/ff4444/ffffff',
    },
    {
      title: 'Stringtough',
      description: 'Rattlesnake, dusky',
      urlImg: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      title: 'Y-Solowarm',
      description: 'Raven, cape',
      urlImg: 'http://dummyimage.com/178x100.png/dddddd/000000',
    },
    {
      title: 'Alphazap',
      description: 'Chuckwalla',
      urlImg: 'http://dummyimage.com/163x100.png/dddddd/000000',
    },
    {
      title: 'Zontrax',
      description: 'Collared lizard',
      urlImg: 'http://dummyimage.com/225x100.png/ff4444/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description: 'Sociable weaver',
      urlImg: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
    },
    {
      title: 'Greenlam',
      description: 'Kookaburra, laughing',
      urlImg: 'http://dummyimage.com/212x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Kanlam',
      description: 'Quoll, eastern',
      urlImg: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ronstring',
      description: 'Pale-throated three-toed sloth',
      urlImg: 'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Sonsing',
      description: 'Swan, trumpeter',
      urlImg: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
    },
    {
      title: 'Temp',
      description: 'Sally lightfoot crab',
      urlImg: 'http://dummyimage.com/160x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description: 'Heron, gray',
      urlImg: 'http://dummyimage.com/193x100.png/ff4444/ffffff',
    },
    {
      title: 'Regrant',
      description: 'Dove, white-winged',
      urlImg: 'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Asoka',
      description: 'Rose-ringed parakeet',
      urlImg: 'http://dummyimage.com/224x100.png/cc0000/ffffff',
    },
    {
      title: 'Overhold',
      description: 'Hoopoe, eurasian',
      urlImg: 'http://dummyimage.com/169x100.png/dddddd/000000',
    },
    {
      title: 'Keylex',
      description: 'Gorilla, western lowland',
      urlImg: 'http://dummyimage.com/178x100.png/ff4444/ffffff',
    },
    {
      title: 'Andalax',
      description: 'Tarantula',
      urlImg: 'http://dummyimage.com/159x100.png/ff4444/ffffff',
    },
    {
      title: 'Tin',
      description: 'Turkey, common',
      urlImg: 'http://dummyimage.com/142x100.png/dddddd/000000',
    },
    {
      title: 'Kanlam',
      description: 'Badger, european',
      urlImg: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
    },
    {
      title: 'Transcof',
      description: 'Blackish oystercatcher',
      urlImg: 'http://dummyimage.com/242x100.png/ff4444/ffffff',
    },
    {
      title: 'Stringtough',
      description: 'African wild cat',
      urlImg: 'http://dummyimage.com/138x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description: 'Mara',
      urlImg: 'http://dummyimage.com/128x100.png/cc0000/ffffff',
    },
    {
      title: 'Regrant',
      description: 'Bee-eater, nubian',
      urlImg: 'http://dummyimage.com/246x100.png/dddddd/000000',
    },
    {
      title: 'Biodex',
      description: 'Green-winged macaw',
      urlImg: 'http://dummyimage.com/153x100.png/dddddd/000000',
    },
    {
      title: 'Stim',
      description: 'Snake, buttermilk',
      urlImg: 'http://dummyimage.com/152x100.png/ff4444/ffffff',
    },
    {
      title: 'Gembucket',
      description: 'Squirrel, eastern fox',
      urlImg: 'http://dummyimage.com/142x100.png/cc0000/ffffff',
    },
    {
      title: 'Redhold',
      description: 'African snake (unidentified)',
      urlImg: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Viva',
      description: 'Deer, black-tailed',
      urlImg: 'http://dummyimage.com/185x100.png/cc0000/ffffff',
    },
    {
      title: 'Stronghold',
      description: 'Owl, australian masked',
      urlImg: 'http://dummyimage.com/172x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklux',
      description: 'Cat, tiger',
      urlImg: 'http://dummyimage.com/143x100.png/dddddd/000000',
    },
  ];

  public activeList: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.feedListGiven();
  }

  public handleSearch(event) {
    console.log('handleSearch ~ event', event.target.value);
    if (event.target.value) {
      const filter = this.activeList.filter(
        (el) => el.title.toLowerCase() === event.target.value.toLowerCase()
      );

      if (filter.length) {
        this.activeList = [];
        this.activeList = filter;
      }
    } else {
      this.feedListGiven();
    }
  }

  public async handleDoRefresh(event) {
    setTimeout(() => {
      this.activeList.sort(() => Math.random() - 10);
      this.onRefreshPanel.complete();
    }, 3000);
  }

  public handleClearSeach() {
    this.feedListGiven();
  }

  public async handleSearchMoreItems(infiniteScrollTarget) {
    setTimeout(() => {
      this.activeList = infiniteScrollLocal(
        this.activeList,
        this.listHome,
        10,
        infiniteScrollTarget
      );
      infiniteScrollTarget.complete();
    }, 5000);
  }

  private feedListGiven() {
    this.activeList = [];
    for (let index = 0; index <= 5; index++) {
      this.activeList.push(this.listHome[index]);
    }
  }
}
