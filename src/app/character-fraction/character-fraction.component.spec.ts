import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFractionComponent } from './character-fraction.component';

describe('CharacterFractionComponent', () => {
  let component: CharacterFractionComponent;
  let fixture: ComponentFixture<CharacterFractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
