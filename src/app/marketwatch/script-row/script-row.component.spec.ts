import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptRowComponent } from './script-row.component';

describe('ScriptRowComponent', () => {
  let component: ScriptRowComponent;
  let fixture: ComponentFixture<ScriptRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptRowComponent);
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
