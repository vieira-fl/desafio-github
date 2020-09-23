import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPaginaInicialComponent } from './link-pagina-inicial.component';

describe('LinkPaginaInicialComponent', () => {
  let component: LinkPaginaInicialComponent;
  let fixture: ComponentFixture<LinkPaginaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPaginaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPaginaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
