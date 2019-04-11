import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MarketwatchComponent } from './marketwatch.component';
import { ScriptRowComponent } from './script-row/script-row.component';
import { WatchlistRowComponent } from './watchlist-row/watchlist-row.component';

describe('MarketwatchComponent', () => {
  let component: MarketwatchComponent;
  let fixture: ComponentFixture<MarketwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MarketwatchComponent, ScriptRowComponent, WatchlistRowComponent ]
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
