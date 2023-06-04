import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenssagemErroComponent } from './menssagem-erro.component';

describe('MenssagemErroComponent', () => {
  let component: MenssagemErroComponent;
  let fixture: ComponentFixture<MenssagemErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenssagemErroComponent]
    });
    fixture = TestBed.createComponent(MenssagemErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
