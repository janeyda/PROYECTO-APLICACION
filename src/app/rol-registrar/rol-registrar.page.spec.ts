import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolRegistrarPage } from './rol-registrar.page';

describe('RolRegistrarPage', () => {
  let component: RolRegistrarPage;
  let fixture: ComponentFixture<RolRegistrarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RolRegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
