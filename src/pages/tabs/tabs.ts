import { Component } from '@angular/core';

import { RankPage } from '../rank/rank';
import { MatchPage } from '../match/match';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RankPage;
  tab2Root = RegisterPage;
  tab3Root = MatchPage;

  constructor() {

  }
}
