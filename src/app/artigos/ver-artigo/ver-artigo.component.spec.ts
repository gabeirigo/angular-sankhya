import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArtigoComponent } from './ver-artigo.component';

describe('VerArtigoComponent', () => {
  let component: VerArtigoComponent;
  let fixture: ComponentFixture<VerArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
