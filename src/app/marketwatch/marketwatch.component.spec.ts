import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from '../users.service';

import { MarketwatchComponent } from './marketwatch.component';

describe('MarketwatchComponent', () => {
  let component: MarketwatchComponent;
  let fixture: ComponentFixture<MarketwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
