import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { MenuComponent } from './menu.component';
import { PlayersComponent } from '../players/players.component';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent, PlayersComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'players', component: PlayersComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // a. Should have correct route for PlayersComponent

  it('should have Players link pointing to /players', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    const playersLink = debugElements.find(
      (el) => el.properties['href'] === '/players'
    );

    expect(playersLink).toBeTruthy();
  });


  // b. Should create PlayersComponent

  it('should create PlayersComponent', () => {
    const playersFixture = TestBed.createComponent(PlayersComponent);
    const playersComponent = playersFixture.componentInstance;

    expect(playersComponent).toBeTruthy();
  });


  // c. Should correctly display a list of characters

  it('should correctly display a list of characters', () => {
    const playersFixture = TestBed.createComponent(PlayersComponent);
    playersFixture.detectChanges();

    const compiled = playersFixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.card');

    expect(cards.length).toBe(10);
  });
});
