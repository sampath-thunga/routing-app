
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { FirstChildComponent } from './first-child/first-child.component'
import { SecondChildComponent } from './second-child/second-child.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  const routes: Routes = [
    {
      path: 'first-component',
      component: FirstComponent, // this is the component with the <router-outlet> in the template
      children: [
        {
          path: 'first-child-component', // child route path
          component: FirstChildComponent, // child route component that the router renders
        },

      ],
    },
  { path: 'second-component', 
    component: SecondComponent,
    children: [
    {
      path: 'second-child-component',
      component: SecondChildComponent, // another child route component that the router renders
    },
  ],
},
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
