import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActuausuarioPage } from './actuausuario.page';

describe('ActuausuarioPage', () => {
  let component: ActuausuarioPage;
  let fixture: ComponentFixture<ActuausuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
