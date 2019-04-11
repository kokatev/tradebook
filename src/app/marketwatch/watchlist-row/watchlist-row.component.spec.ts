import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistRowComponent } from './watchlist-row.component';

describe('WatchlistRowComponent', () => {
  let component: WatchlistRowComponent;
  let fixture: ComponentFixture<WatchlistRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistRowComponent);
    component = fixture.componentInstance;
    component.script = {
        name: "hffdkj",
        CMP: 200
      };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
