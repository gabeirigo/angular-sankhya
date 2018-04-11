import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroArtigosComponent } from './filtro-artigos.component';

describe('FiltroArtigosComponent', () => {
  let component: FiltroArtigosComponent;
  let fixture: ComponentFixture<FiltroArtigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroArtigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
