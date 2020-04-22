import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessSecretWordComponent } from './guess-secret-word.component';

describe('GuessSecretWordComponent', () => {
  let component: GuessSecretWordComponent;
  let fixture: ComponentFixture<GuessSecretWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessSecretWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessSecretWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
