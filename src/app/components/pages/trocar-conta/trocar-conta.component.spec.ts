import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocarContaComponent } from './trocar-conta.component';

describe('TrocarContaComponent', () => {
  let component: TrocarContaComponent;
  let fixture: ComponentFixture<TrocarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocarContaComponent]
    });
    fixture = TestBed.createComponent(TrocarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
