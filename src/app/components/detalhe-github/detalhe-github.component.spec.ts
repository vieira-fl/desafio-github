import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGithubComponent } from './detalhe-github.component';

describe('DetalheGithubComponent', () => {
  let component: DetalheGithubComponent;
  let fixture: ComponentFixture<DetalheGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
