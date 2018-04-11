import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComentarioComponent } from './novo-comentario.component';

describe('NovoComentarioComponent', () => {
  let component: NovoComentarioComponent;
  let fixture: ComponentFixture<NovoComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
