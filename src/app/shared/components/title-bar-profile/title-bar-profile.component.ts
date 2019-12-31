import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar-profile',
  templateUrl: './title-bar-profile.component.html',
  styleUrls: ['./title-bar-profile.component.scss']
})
export class TitleBarProfileComponent {
  @Input() userName: string;
  @Input() profileImage: string;

  get profileImageBG(): string {
    return `url('${this.profileImage}')`;
  }

}
