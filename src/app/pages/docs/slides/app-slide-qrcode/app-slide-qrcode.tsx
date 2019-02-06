import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-qrcode'
})
export class AppSlideQRCode {

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
        <main><h1 id="slide-qr-code">Slide: QR Code</h1>
<p>The &quot;QR code&quot; slide is an handy slide in case you would like to display a QR code. It could for example be use as the very last slide of your presentation to display an easy link pointing to your deck, you previously published online. It would allow your audience to get easily your slides without any delay on their phone.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-qrcode-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;QR code&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-qrcode/&gt;</code>.</p>
<h5 id="usage-1">Usage</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;{'\n'}  &lt;deckgo-slide-qrcode content=&quot;https:&#47;&#47;deckdeckgo.com&quot;&gt;{'\n'}    &lt;h1 slot=&quot;title&quot;&gt;My QR code&lt;&#47;h1&gt;{'\n'}    &lt;p slot=&quot;content&quot;&gt;An optional additional content&lt;&#47;p&gt;{'\n'}  &lt;&#47;deckgo-slide-code&gt;{'\n'}&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>The slots <code>title</code> and <code>content</code> are optional.</p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="code-components">Code components</h4>
<p>The slide &quot;QR Code&quot; relies on the code component <code>&lt;deckgo-qrcode/&gt;</code> which is described in the components <a href="https://github.com/deckgo/deckdeckgo/blob/master/doc/components/components.md">documentation</a>.</p>
<h4 id="installation">Installation</h4>
<p>The <a href="https://deckdeckgo.com">DeckDeckGo</a> - QR Code component is provided in separate extra library. If you don&#39;t use the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to add the <a href="https://deckdeckgo.com">DeckDeckGo</a> QR code to your project, you will need to install and integrate it from a CDN or <a href="https://www.npmjs.com/package/deckdeckgo-qrcode">npm</a> as described in its <a href="https://github.com/deckgo/deckdeckgo-qrcode#getting-started">installation guide</a>.</p>
<h4 id="attributes">Attributes</h4>
<p>The attribute <code>content</code> should be provided in order to render a QR code in this template. It offers the same attributes as the <a href="https://deckdeckgo.com">DeckDeckGo</a> QR code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-qrcode">documentation</a> for the details.</p>
<h5 id="example-without-any-slots">Example without any slots</h5>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;{'\n'}  &lt;deckgo-slide-qrcode content=&quot;An encoded text&quot;&gt;{'\n'}  &lt;&#47;deckgo-slide-code&gt;{'\n'}&lt;&#47;deckgo-deck&gt;  </code>
    </deckgo-highlight-code><h4 id="theming">Theming</h4>
<p>The following theming options will affect this component if set on its host or parent.</p>
<table>
<thead>
<tr>
<th>CSS4 variable</th>
<th>Default</th>
<th>Note</th>
</tr>
</thead>
<tbody><tr>
<td>--background</td>
<td></td>
<td></td>
</tr>
<tr>
<td>--color</td>
<td></td>
<td></td>
</tr>
<tr>
<td>--slide-padding-top</td>
<td>16px</td>
<td>Padding top of the all slide</td>
</tr>
<tr>
<td>--slide-padding-end</td>
<td>32px</td>
<td>Padding right of the all slide</td>
</tr>
<tr>
<td>--slide-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of the all slide</td>
</tr>
<tr>
<td>--slide-padding-start</td>
<td>32px</td>
<td>Padding left of the all slide</td>
</tr>
<tr>
<td>--slide-qrcode-align</td>
<td>center</td>
<td>QR code vertical alignment</td>
</tr>
<tr>
<td>--slide-qrcode-text-align</td>
<td>center</td>
<td>QR code horizontal alignment</td>
</tr>
<tr>
<td>--slide-qrcode-background</td>
<td></td>
<td>QR code column&#39;s background</td>
</tr>
<tr>
<td>--slide-qrcode-title-display</td>
<td>inherit</td>
<td>If you wish to hide the slot=&quot;title&quot;</td>
</tr>
</tbody></table>
<p>Furthermore, this slide component offers the exact same CSS4 variables as the <a href="https://deckdeckgo.com">DeckDeckGo</a> - QR code Web Component, see its <a href="https://github.com/deckgo/deckdeckgo-qrcode">documentation</a> for the details.</p>
</main>
      </ion-content>
    ];
  }
}
