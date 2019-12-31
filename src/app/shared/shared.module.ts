import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from '@shared/components/title-bar/title-bar.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [TitleBarComponent, SidebarNavigationComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleBarComponent, SidebarNavigationComponent]
})
export class SharedModule { }
