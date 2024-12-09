import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActuarolPage } from './actuarol.page';

describe('ActuarolPage', () => {
  let component: ActuarolPage;
  let fixture: ComponentFixture<ActuarolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuarolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
