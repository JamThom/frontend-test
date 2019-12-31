import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from '@shared/components/title-bar/title-bar.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';



@NgModule({
  declarations: [TitleBarComponent, SidebarNavigationComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
