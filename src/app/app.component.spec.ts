import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './app.routes';
import { PagesModule } from '../pages/pages.module';
import { SharedModule } from '../shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes, { useHash: true}),
        PagesModule,
        SharedModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    }).compileComponents();
  }));
  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
