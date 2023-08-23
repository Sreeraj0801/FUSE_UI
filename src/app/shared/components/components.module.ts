import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { HttpClientModule } from '@angular/common/http';

import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { RouterModule } from '@angular/router';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { ModalComponent } from './modal/modal.component';
import { BadgesComponent } from './badges/badges.component';
import { InviteMembersComponent } from './invite-members/invite-members.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { SelectWorkspaceComponent } from './select-workspace/select-workspace.component';
import { RadioCardComponent } from './radio-card/radio-card.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianButtonComponent } from './accordian-button/accordian-button.component';
import { MinCardComponent } from './min-card/min-card.component';
import { CardComponent } from './card/card.component';
import { ProjectTabComponent } from './project-tab/project-tab.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { TaskMainCardComponent } from './task-main-card/task-main-card.component';
import { TaskMiniCardComponent } from './task-mini-card/task-mini-card.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { RelativeTimePipe } from '../pipes/relative-time.pipe';
import { TaskCommentComponent } from './task-comment/task-comment.component'

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
    ModalComponent,
    BadgesComponent,
    InviteMembersComponent,
    CreateWorkspaceComponent,
    MemberCardComponent,
    SelectWorkspaceComponent,
    RadioCardComponent,
    AccordianComponent,
    AccordianButtonComponent,
    MinCardComponent,
    CardComponent,
    ProjectTabComponent,
    CircleProgressComponent,
    ProjectOverviewComponent,
    ProjectTaskComponent,
    TaskMainCardComponent,
    TaskMiniCardComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    RelativeTimePipe,
    TaskCommentComponent,
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
    ModalComponent,
    BadgesComponent,
    InviteMembersComponent,
    CreateWorkspaceComponent,
    MemberCardComponent,
    RadioCardComponent,
    AccordianComponent,
    AccordianButtonComponent,
    MinCardComponent,
    CardComponent,
    ProjectTabComponent,
    CircleProgressComponent,
    ProjectOverviewComponent,
    ProjectTaskComponent,
    TaskMainCardComponent,
    TaskMiniCardComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    TaskCommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxColorsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      animateTitle: true,
      maxPercent: 100,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
})
export class ComponentsModule {}
