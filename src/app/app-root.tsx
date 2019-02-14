import {Component, Prop, Element} from '@stencil/core';

import {MenuService} from './services/menu/menu.service';
import {Subscription} from 'rxjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  @Prop({connect: 'ion-menu-controller'}) lazyMenuController!: HTMLIonMenuControllerElement;

  private subscription: Subscription;

  @Element() el: HTMLElement;

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.subscription = this.menuService.watch().subscribe(async (enable: boolean) => {
      await this.enableMenu(enable);
    });
  }

  async componentDidUnload() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private enableMenu(enable: boolean): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const menuController: HTMLIonMenuControllerElement = this.el.querySelector('ion-menu-controller');
      if (menuController) {
        const isAnimating: boolean = await menuController.isAnimating();

        // Menu can't be disabled or enabled if currently closing or opening
        if (!isAnimating) {
          await menuController.enable(enable);
        }
      }

      resolve();
    });
  }

  private enableMenuOnClose(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const enable: boolean = await this.menuService.isEnable();
      await this.enableMenu(enable);
      resolve();
    });
  }

  render() {
    return ([
      <ion-app>

        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"/>

          <ion-route url="/docs" component="app-introduction"/>
          <ion-route url="/docs/introduction" component="app-introduction"/>
          <ion-route url="/docs/installation" component="app-installation"/>
          <ion-route url="/docs/publishing" component="app-publishing"/>

          <ion-route url="/edit" component="app-concept"/>
          <ion-route url="/edit/default" component="app-edit-default"/>
          <ion-route url="/edit/markdown" component="app-edit-markdown"/>
          <ion-route url="/edit/lazy" component="app-edit-lazy-loading"/>
          <ion-route url="/edit/theming" component="app-edit-theming"/>
          <ion-route url="/edit/rtl" component="app-edit-rtl"/>

          <ion-route url="/slides" component="app-concept"/>
          <ion-route url="/slides/concept" component="app-slides-concept"/>
          <ion-route url="/slides/title" component="app-slide-title"/>
          <ion-route url="/slides/content" component="app-slide-content"/>
          <ion-route url="/slides/split" component="app-slide-split"/>
          <ion-route url="/slides/gif" component="app-slide-gif"/>
          <ion-route url="/slides/chart" component="app-slide-chart"/>
          <ion-route url="/slides/youtube" component="app-slide-youtube"/>
          <ion-route url="/slides/code" component="app-slide-code"/>
          <ion-route url="/slides/author" component="app-slide-author"/>
          <ion-route url="/slides/qrcode" component="app-slide-qrcode"/>
          <ion-route url="/slides/background" component="app-slides-background"/>

          <ion-route url="/components" component="app-concept"/>
          <ion-route url="/components/charts" component="app-components-charts"/>
          <ion-route url="/components/gif" component="app-components-gif"/>
          <ion-route url="/components/code" component="app-components-highlight-code"/>
          <ion-route url="/components/qrcode" component="app-components-qrcode"/>
          <ion-route url="/components/social" component="app-components-social"/>
          <ion-route url="/components/youtube" component="app-components-youtube"/>

          <ion-route url="/deck" component="app-deck-navigation"/>
          <ion-route url="/deck/navigation" component="app-deck-navigation"/>
          <ion-route url="/deck/pager" component="app-deck-pager"/>
          <ion-route url="/deck/size" component="app-deck-size"/>
          <ion-route url="/deck/extra" component="app-deck-extra-features"/>
          <ion-route url="/deck/events" component="app-deck-events"/>

          <ion-route url="/misc" component="app-deck-navigation"/>
          <ion-route url="/misc/collections" component="app-misc-collections"/>
          <ion-route url="/misc/logo" component="app-misc-logo"/>
          <ion-route url="/misc/backstory" component="app-misc-backstory"/>
        </ion-router>

        <ion-split-pane when="lg">
          <ion-menu side="start" type="push" swipeGesture={false} disabled={true} onIonDidClose={() => this.enableMenuOnClose()}>
            <app-navigation logo={true} menuToggle={false} navigation={false}></app-navigation>
            <ion-content>
              <ion-menu-toggle autoHide={false}>
                <ion-list>
                  <ion-item-group>
                    <ion-item-divider>
                      <ion-label>Introduction</ion-label>
                    </ion-item-divider>
                    <ion-item href="/docs/introduction" routerDirection="forward"><ion-label>Getting started</ion-label></ion-item>
                    <ion-item href="/docs/installation" routerDirection="forward"><ion-label>Installation</ion-label></ion-item>
                    <ion-item href="/docs/publishing" routerDirection="forward"><ion-label>Publishing</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Edit</ion-label>
                    </ion-item-divider>
                    <ion-item href="/edit/default" routerDirection="forward"><ion-label>HTML</ion-label></ion-item>
                    <ion-item href="/edit/markdown" routerDirection="forward"><ion-label>Markdown</ion-label></ion-item>
                    <ion-item href="/edit/lazy" routerDirection="forward"><ion-label>Lazy loading</ion-label></ion-item>
                    <ion-item href="/edit/theming" routerDirection="forward"><ion-label>Theming</ion-label></ion-item>
                    <ion-item href="/edit/rtl" routerDirection="forward"><ion-label>RTL</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Slides</ion-label>
                    </ion-item-divider>
                    <ion-item href="/slides/concept" routerDirection="forward"><ion-label>Concept</ion-label></ion-item>
                    <ion-item href="/slides/title" routerDirection="forward"><ion-label>Title</ion-label></ion-item>
                    <ion-item href="/slides/content" routerDirection="forward"><ion-label>Content</ion-label></ion-item>
                    <ion-item href="/slides/split" routerDirection="forward"><ion-label>Split</ion-label></ion-item>
                    <ion-item href="/slides/gif" routerDirection="forward"><ion-label>Gif</ion-label></ion-item>
                    <ion-item href="/slides/chart" routerDirection="forward"><ion-label>Chart</ion-label></ion-item>
                    <ion-item href="/slides/youtube" routerDirection="forward"><ion-label>Youtube</ion-label></ion-item>
                    <ion-item href="/slides/code" routerDirection="forward"><ion-label>Code</ion-label></ion-item>
                    <ion-item href="/slides/author" routerDirection="forward"><ion-label>Author</ion-label></ion-item>
                    <ion-item href="/slides/qrcode" routerDirection="forward"><ion-label>QR Code</ion-label></ion-item>
                    <ion-item href="/slides/background" routerDirection="forward"><ion-label>Background</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Components</ion-label>
                    </ion-item-divider>
                    <ion-item href="/components/charts" routerDirection="forward"><ion-label>Charts</ion-label></ion-item>
                    <ion-item href="/components/gif" routerDirection="forward"><ion-label>Gif</ion-label></ion-item>
                    <ion-item href="/components/code" routerDirection="forward"><ion-label>Highlight Code</ion-label></ion-item>
                    <ion-item href="/components/qrcode" routerDirection="forward"><ion-label>QR Code</ion-label></ion-item>
                    <ion-item href="/components/social" routerDirection="forward"><ion-label>Social</ion-label></ion-item>
                    <ion-item href="/components/youtube" routerDirection="forward"><ion-label>Youtube</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Deck</ion-label>
                    </ion-item-divider>
                    <ion-item href="/deck/navigation" routerDirection="forward"><ion-label>Navigation</ion-label></ion-item>
                    <ion-item href="/deck/pager" routerDirection="forward"><ion-label>Pager</ion-label></ion-item>
                    <ion-item href="/deck/size" routerDirection="forward"><ion-label>Size</ion-label></ion-item>
                    <ion-item href="/deck/extra" routerDirection="forward"><ion-label>Extra</ion-label></ion-item>
                    <ion-item href="/deck/events" routerDirection="forward"><ion-label>Events</ion-label></ion-item>

                    <ion-item-divider>
                      <ion-label>Miscellaneous</ion-label>
                    </ion-item-divider>
                    <ion-item href="/misc/collections" routerDirection="forward"><ion-label>Collections</ion-label></ion-item>
                    <ion-item href="/misc/logo" routerDirection="forward"><ion-label>Logo</ion-label></ion-item>
                    <ion-item href="/misc/backstory" routerDirection="forward"><ion-label>Backstory</ion-label></ion-item>

                  </ion-item-group>
                </ion-list>
              </ion-menu-toggle>

              <app-menu-footer padding></app-menu-footer>
            </ion-content>
          </ion-menu>

          <ion-nav main/>
        </ion-split-pane>

      </ion-app>,
      <ion-menu-controller></ion-menu-controller>
    ]);
  }
}
