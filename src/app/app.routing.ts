import {RouterModule, Routes} from '@angular/router';
import {PostAddComponent} from './posts/post-add/post-add.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostListComponent} from './posts/post-list/post-list.component';

const routes: Routes = [
  {path: 'add-post', component: PostAddComponent},
  {path: 'edit-post', component: PostEditComponent},
  {path: 'list-post', component: PostListComponent},
  {path: '', component: PostListComponent}
];

export const routing = RouterModule.forRoot(routes);
