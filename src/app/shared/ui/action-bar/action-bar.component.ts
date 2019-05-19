import { Component, OnInit, Input } from "@angular/core";
import { Page, isAndroid } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
declare var android: any;

@Component({
  selector: "ns-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.css"],
  moduleId: module.id
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton = true;
  constructor(private page: Page, private router: RouterExtensions) { }
  
    // tslint:disable-next-line:no-empty
  ngOnInit() {
    }
  get canGoBack() {
      return this.router.canGoBack()  && this.showBackButton;
    }
  onGoBack() {
      this.router.backToPreviousPage();
    }
  onLoadActionBar() {
      if (isAndroid) {
       const androidTollBar =  this.page.actionBar.nativeView;
       const backButton = androidTollBar.getNavigationIcon();
       if (backButton) {
           // tslint:disable-next-line:max-line-length
           backButton.setColorFilter(android.graphics.Color.parseColor("#ed5d40"), (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
       }
      }
  }
}
