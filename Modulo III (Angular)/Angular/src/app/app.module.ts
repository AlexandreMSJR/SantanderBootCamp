import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CourseModule,
    RouterModule.forRoot([ /* essa parte está no course.module.ts
      {
        path: 'courses', component: CourseListComponent // Router para http://localhost:4200/courses
      },
      {
        path: 'course/info/:id', component: CourseInfoComponent // Varíavel "id" para o component
      }, */
      {
        path: "", redirectTo: 'courses', pathMatch: "full" // "Raiz do projeto"
      } /*
      {
        path: '**', component: Error404Compononent // "**" - tratamento de erro, quando não encontra o router.
      } */
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
