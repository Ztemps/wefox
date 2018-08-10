import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the Home Page', () => {
    expect(component).toBeTruthy();
  });

  it('Should Check if the video would be displayed', () => {
    expect(component.isLoaded).toBeFalsy();
    component.isLoaded = true;
    expect(component.isLoaded).toBeTruthy();
  });


});
