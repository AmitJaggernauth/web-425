import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCharacterComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1
  it('should generate a random character ID between 1 and 1000 with no decimals', () => {
    const id = component.generateId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBeTrue();
  });

  // Test 2
  it('should add a character with correct customization', () => {
    component.character = {
      name: 'Leo',
      gender: 'Male',
      class: 'Mage'
    };

    component.addCharacter();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Leo');
    expect(component.characters[0].gender).toBe('Male');
    expect(component.characters[0].class).toBe('Mage');
  });

  // Test 3
  it('should reset all form fields to default values after resetForm is called', () => {
    component.character = {
      name: 'Test',
      gender: 'Female',
      class: 'Rogue'
    };

    component.resetForm();

    expect(component.character.name).toBe('');
    expect(component.character.gender).toBe('Male');
    expect(component.character.class).toBe('Warrior');
  });
});
