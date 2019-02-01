import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-introduction',
  styleUrl: 'app-introduction.scss'
})
export class AppIntroduction {

  @Element() el: HTMLElement;

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.menuService.enable();
  }

  async componentDidLoad() {
    await DeckdeckgoDocsUtils.reloadCode(this.el);
  }

  render() {
    return [
      <app-navigation></app-navigation>,

      <ion-content padding>
        <main><h1 id="getting-started">Getting Started</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> provides a <a href="https://github.com/deckgo/create-deckdeckgo">CLI</a> and a <a href="https://github.com/deckgo/deckdeckgo-starter">starter kit</a>.</p>
<p>To get started and <strong>to create a new presentation</strong>, run the following command:</p>
<deckgo-highlight-code language="bash">
      <code slot="code">npm init deckdeckgo</code>
    </deckgo-highlight-code><p>After running init you will be provided with a prompt so that you can set the base information for your new deck and choose if you rather like to edit it in <strong>HTML</strong> or <strong>markdown</strong>:</p>
<deckgo-highlight-code language="bash">
      <code slot="code">Cool, let&#039;s kick start a new DeckDeckGo presentation<br/><br/>? What&#039;s your project name (will be use to create a new folder)? (deckdeckgo)<br/>? What&#039;s your presentation name (max. 45 characters, will be use for meta tags and manifest information)? (DeckDeckGo)<br/>? What&#039;s your presentation about (its description)? (Create a lightweight presentation using Web Components 🚀)<br/>? What&#039;s your name (will be use for the author meta information)? (David)<br/>? What method do you want to use to edit your presentation? (Use arrow keys)<br/>  ❯ HTML <br/>    Markdown</code>
    </deckgo-highlight-code><p>Once your presentation created, go to your new project&#39;s folder and start editing your slides and content for your talk 😉</p>
</main>
      </ion-content>
    ];
  }
}