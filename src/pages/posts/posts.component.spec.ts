import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared/shared.module';
import { MainModalModule } from '../../shared/modal/modal.module';
import { PostModule } from './post/post.module';
import { PostsService } from './posts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MainModalModule,
        PostModule,
        RouterTestingModule
      ],
      declarations: [ PostsComponent ],
      providers: [ PostsService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the Posts Page', () => {
    expect(component).toBeTruthy();
  });
});
