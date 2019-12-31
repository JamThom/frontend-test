import { Component } from '@angular/core';

@Component({
  selector: 'app-title-bar-profile',
  templateUrl: './title-bar-profile.component.html',
  styleUrls: ['./title-bar-profile.component.scss']
})
export class TitleBarProfileComponent {
  userName = 'Morten';
  // tslint:disable-next-line: max-line-length
  profileImage = 'data:image/png;base64,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';

  get profileImageBG(): string {
    return `url(${this.profileImage})`;
  }

}
