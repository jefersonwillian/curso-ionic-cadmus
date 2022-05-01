/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher, ModalController } from '@ionic/angular';
import { IListHome } from 'src/app/@core/interfaces/list-home/list-home.interface';
import { infiniteScrollLocal } from 'src/app/@core/utils/infinite-scroll.utils';
import { ModalDetailsComponent } from 'src/app/@shared/components/modal-details/modal-details.component';

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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/102x100.png/dddddd/000000',
    },
    {
      title: 'Gembucket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
    },
    {
      title: 'Solarbreeze',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/140x100.png/ff4444/ffffff',
    },
    {
      title: 'Flowdesk',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/240x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Tresom',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/200x100.png/cc0000/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/203x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
    },
    {
      title: 'Keylex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/219x100.png/ff4444/ffffff',
    },
    {
      title: 'Keylex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/119x100.png/dddddd/000000',
    },
    {
      title: 'Lotlux',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/121x100.png/dddddd/000000',
    },
    {
      title: 'Sonair',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/221x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/173x100.png/dddddd/000000',
    },
    {
      title: 'Greenlam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/152x100.png/cc0000/ffffff',
    },
    {
      title: 'Zamit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/230x100.png/cc0000/ffffff',
    },
    {
      title: 'Flexidy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/176x100.png/ff4444/ffffff',
    },
    {
      title: 'Zontrax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/239x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Treeflex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/192x100.png/ff4444/ffffff',
    },
    {
      title: 'Y-find',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/212x100.png/dddddd/000000',
    },
    {
      title: 'Otcom',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/142x100.png/dddddd/000000',
    },
    {
      title: 'Wrapsafe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ronstring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/217x100.png/ff4444/ffffff',
    },
    {
      title: 'Matsoft',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Lotstring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Fixflex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Home Ing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/126x100.png/ff4444/ffffff',
    },
    {
      title: 'Zathin',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Asoka',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/112x100.png/cc0000/ffffff',
    },
    {
      title: 'Sub-Ex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/148x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/131x100.png/dddddd/000000',
    },
    {
      title: 'Tres-Zap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Andalax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/191x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/119x100.png/dddddd/000000',
    },
    {
      title: 'Tin',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/234x100.png/cc0000/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Cardguard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/123x100.png/cc0000/ffffff',
    },
    {
      title: 'Hatity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/196x100.png/dddddd/000000',
    },
    {
      title: 'Bytecard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ventosanzap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/186x100.png/ff4444/ffffff',
    },
    {
      title: 'Kanlam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/139x100.png/dddddd/000000',
    },
    {
      title: 'Sonair',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/103x100.png/dddddd/000000',
    },
    {
      title: 'Domainer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/217x100.png/ff4444/ffffff',
    },
    {
      title: 'Wrapsafe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/151x100.png/cc0000/ffffff',
    },
    {
      title: 'Zathin',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Biodex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/127x100.png/ff4444/ffffff',
    },
    {
      title: 'Otcom',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/130x100.png/ff4444/ffffff',
    },
    {
      title: 'Ventosanzap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/121x100.png/dddddd/000000',
    },
    {
      title: 'Tampflex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/232x100.png/ff4444/ffffff',
    },
    {
      title: 'Ronstring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/184x100.png/dddddd/000000',
    },
    {
      title: 'Vagram',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/104x100.png/dddddd/000000',
    },
    {
      title: 'Temp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/159x100.png/cc0000/ffffff',
    },
    {
      title: 'Tampflex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/181x100.png/ff4444/ffffff',
    },
    {
      title: 'Biodex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/148x100.png/dddddd/000000',
    },
    {
      title: 'Overhold',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/163x100.png/cc0000/ffffff',
    },
    {
      title: 'Job',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/102x100.png/cc0000/ffffff',
    },
    {
      title: 'Viva',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Veribet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/154x100.png/ff4444/ffffff',
    },
    {
      title: 'Asoka',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/146x100.png/cc0000/ffffff',
    },
    {
      title: 'Domainer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/106x100.png/ff4444/ffffff',
    },
    {
      title: 'Zoolab',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/247x100.png/ff4444/ffffff',
    },
    {
      title: 'Cookley',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/174x100.png/dddddd/000000',
    },
    {
      title: 'Holdlamis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/232x100.png/dddddd/000000',
    },
    {
      title: 'Trippledex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/141x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/246x100.png/ff4444/ffffff',
    },
    {
      title: 'Voyatouch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/226x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Overhold',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Stringtough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/189x100.png/ff4444/ffffff',
    },
    {
      title: 'Bytecard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
    },
    {
      title: 'Ventosanzap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/137x100.png/dddddd/000000',
    },
    {
      title: 'Cardguard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/234x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Home Ing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/117x100.png/ff4444/ffffff',
    },
    {
      title: 'Stringtough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      title: 'Y-Solowarm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/178x100.png/dddddd/000000',
    },
    {
      title: 'Alphazap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/163x100.png/dddddd/000000',
    },
    {
      title: 'Zontrax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/225x100.png/ff4444/ffffff',
    },
    {
      title: 'Toughjoyfax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
    },
    {
      title: 'Greenlam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/212x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Kanlam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Ronstring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Sonsing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
    },
    {
      title: 'Temp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/160x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklab',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/193x100.png/ff4444/ffffff',
    },
    {
      title: 'Regrant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Asoka',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/224x100.png/cc0000/ffffff',
    },
    {
      title: 'Overhold',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/169x100.png/dddddd/000000',
    },
    {
      title: 'Keylex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/178x100.png/ff4444/ffffff',
    },
    {
      title: 'Andalax',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/159x100.png/ff4444/ffffff',
    },
    {
      title: 'Tin',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/142x100.png/dddddd/000000',
    },
    {
      title: 'Kanlam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
    },
    {
      title: 'Transcof',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/242x100.png/ff4444/ffffff',
    },
    {
      title: 'Stringtough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/138x100.png/cc0000/ffffff',
    },
    {
      title: 'Temp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/128x100.png/cc0000/ffffff',
    },
    {
      title: 'Regrant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/246x100.png/dddddd/000000',
    },
    {
      title: 'Biodex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/153x100.png/dddddd/000000',
    },
    {
      title: 'Stim',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/152x100.png/ff4444/ffffff',
    },
    {
      title: 'Gembucket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/142x100.png/cc0000/ffffff',
    },
    {
      title: 'Redhold',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
    },
    {
      title: 'Viva',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/185x100.png/cc0000/ffffff',
    },
    {
      title: 'Stronghold',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/172x100.png/ff4444/ffffff',
    },
    {
      title: 'Konklux',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere neque. Vivamus ac rhoncus est, non aliquam lacus. Suspendisse id ultrices libero. Aliquam finibus mi metus, nec commodo dui feugiat in. Nullam tristique eget enim et pharetra. Nulla lacus ante, finibus in aliquam vel, varius ut nulla. Fusce id dictum diam. Curabitur iaculis tincidunt lacus, id maximus orci mattis ac. Aenean dignissim ex in nunc viverra porta. Aliquam erat volutpat.',
      urlImg: 'http://dummyimage.com/143x100.png/dddddd/000000',
    },
  ];

  public activeList: Array<IListHome> = [];

  constructor(public modalController: ModalController) {}

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

  public handleClearSeach() {
    this.feedListGiven();
  }

  public async handleModal(item: IListHome) {
    const modal = await this.modalController.create({
      component: ModalDetailsComponent,
      cssClass: 'rc-modal-lightbox',
      componentProps: {
        data: item,
      },
    });
    return await modal.present();
  }

  public handleDoRefresh() {
    setTimeout(() => {
      this.listHome.sort(() => Math.random() - 10);
      this.onRefreshPanel.complete();
    }, 3000);
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
