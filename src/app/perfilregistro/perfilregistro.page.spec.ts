import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilregistroPage } from './perfilregistro.page';

describe('PerfilregistroPage', () => {
  let component: PerfilregistroPage;
  let fixture: ComponentFixture<PerfilregistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
