import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoArtigoComponent } from './novo-artigo.component';

describe('NovoArtigoComponent', () => {
  let component: NovoArtigoComponent;
  let fixture: ComponentFixture<NovoArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
