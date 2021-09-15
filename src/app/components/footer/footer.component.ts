import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){

      this.matIconRegistry.addSvgIcon(
        'instagram',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'twitter',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'facebook',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'google',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google-plus.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'clap',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/ic_clap.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'comment',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/ic_comment.svg")
      );
  }

  ngOnInit(): void {
  }

}
