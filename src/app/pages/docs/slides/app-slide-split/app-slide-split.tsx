import {Component, Element} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-slide-split'
})
export class AppSlideContent {

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
        <main><h1 id="slide-split">Slide: Split</h1>
<p>The &quot;Split&quot; slide is a simple slide which display two panes on the page.</p>
<h4 id="layout">Layout</h4>
<img src="https://github.com/deckgo/deckdeckgo/blob/master/doc/slides/deckdeckgo-slide-split-layout.png" width="450px"/>

<h4 id="usage">Usage</h4>
<p>The &quot;Split&quot; slide&#39;s Web Component could be integrated using the tag <code>&lt;deckgo-slide-split/&gt;</code>.</p>
<deckgo-highlight-code language="javascript">
      <code slot="code">&lt;deckgo-deck&gt;{'\n'}  &lt;deckgo-slide-split&gt;{'\n'}    &lt;h1 slot=&quot;title&quot;&gt;Two columns subject&lt;&#47;h1&gt;{'\n'}    &lt;p slot=&quot;start&quot;&gt;{'\n'}      The content you want to display on the left side of the page{'\n'}    &lt;&#47;p&gt;{'\n'}    &lt;p slot=&quot;end&quot;&gt;{'\n'}      The content you want to display on the right side of the page{'\n'}    &lt;&#47;p&gt;{'\n'}  &lt;&#47;deckgo-slide-split&gt;{'\n'}&lt;&#47;deckgo-deck&gt;</code>
    </deckgo-highlight-code><h5 id="slots">Slots</h5>
<p>Both slots <code>title</code>, <code>start</code> and <code>end</code> are optional. Without providing one of them, the page will remain empty.</p>
<p>The <code>start</code> slot is the content of the left pane respectively the slot <code>end</code> is the content of the right pane.</p>
<p>Note: The slot <code>title</code> is per default hidden even if you provide it. See attributes below if you wish to display it. </p>
<h5 id="notes">Notes</h5>
<p>Optionally a slot <code>notes</code> could be use to add some notes regarding the particular slide. These will be automatically <code>displayed</code> in the <a href="https://deckdeckgo.app">remote control</a>.</p>
<p>If you are using the <a href="https://deckdeckgo.com">DeckDeckGo</a> starter kit and wish to make your notes accessible to anyone, you would need to mark them with an attribute <code>show</code>.</p>
<h4 id="attributes">Attributes</h4>
<p>This component offers the following options which could be set using attributes:</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>reveal</td>
<td>boolean</td>
<td>false</td>
<td>Hide the slotted elements <code>li</code>, <code>p</code> an <code>img</code> and display them when navigating using <code>slideNext()</code> or <code>slidePrev()</code> (see <a href="/doc/features/navigation.md">documention</a>)</td>
</tr>
<tr>
<td>reveal-show-first</td>
<td>boolean</td>
<td>false</td>
<td>Show the first elements which would be hidden if <code>reveal</code> is set to <code>true</code></td>
</tr>
</tbody></table>
<h4 id="theming">Theming</h4>
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
<td>--slide-split-background-start</td>
<td></td>
<td>Left split pane background</td>
</tr>
<tr>
<td>--slide-split-color-start</td>
<td></td>
<td>Left split pane color</td>
</tr>
<tr>
<td>--slide-split-background-end</td>
<td></td>
<td>Right split pane background</td>
</tr>
<tr>
<td>--slide-split-color-end</td>
<td></td>
<td>Right split pane color</td>
</tr>
<tr>
<td>--slide-split-padding-top</td>
<td>16px</td>
<td>Padding top of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-end</td>
<td>32px</td>
<td>Padding right of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-padding-start</td>
<td>32px</td>
<td>Padding left of a slide split pane</td>
</tr>
<tr>
<td>--slide-split-title-padding-top</td>
<td>16px</td>
<td>Padding top of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-end</td>
<td>32px</td>
<td>Padding right of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-bottom</td>
<td>16px</td>
<td>Padding bottom of the title of the</td>
</tr>
<tr>
<td>--slide-split-title-padding-start</td>
<td>32px</td>
<td>Padding left of the title of the</td>
</tr>
<tr>
<td>--slide-padding-start</td>
<td>32px</td>
<td>Modify slotted ul and ol padding-inline-start</td>
</tr>
<tr>
<td>--slide-split-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the content in the middle</td>
</tr>
<tr>
<td>--slide-split-text-align</td>
<td>inherit</td>
<td>Modify for example to center if you want to align the text in the middle</td>
</tr>
<tr>
<td>--slide-split-title-display</td>
<td>none</td>
<td>The <code>slot</code> title is per default hidden even if you provide it. If you wish to displays it, modify this attribute</td>
</tr>
<tr>
<td>--zIndex</td>
<td>1</td>
<td>The z-index of the slide</td>
</tr>
</tbody></table>
</main>
      </ion-content>
    ];
  }
}
