import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeaturedTaco {
  name: string;
  description: string;
  price: number;
  label: string; // “Spicy”, “Popular”, “New”, etc.
  chefsPick?: boolean;
}

@Component({
  selector: 'app-featured-tacos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Featured Tacos</h1>

    <div class="taco-list">
      @for (taco of tacos; track taco.name) {
        <div class="taco-card" [class.chefs-pick]="taco.chefsPick">
          <h2>{{ taco.name }}</h2>
          <p>{{ taco.description }}</p>

          <p class="price">
            {{ taco.price | currency:'USD':'symbol':'1.2-2' }}
          </p>

          <span class="label">{{ taco.label }}</span>

          @if (taco.chefsPick) {
            <div class="chefs-pick-banner">
              ⭐ Chef’s Pick ⭐
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: `
    .taco-list {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .taco-card {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 8px;
      width: 250px;
      background: #fff;
      position: relative;
    }

    .taco-card.chefs-pick {
      border-color: #ff9800;
      box-shadow: 0 0 10px rgba(255, 152, 0, 0.4);
    }

    .label {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 8px;
      background: #eee;
      border-radius: 4px;
      font-size: 0.85rem;
    }

    .chefs-pick-banner {
      margin-top: 10px;
      padding: 6px;
      background: #ff9800;
      color: white;
      font-weight: bold;
      text-align: center;
      border-radius: 4px;
    }

    .price {
      font-weight: bold;
      margin-top: 6px;
    }
  `
})
export class FeaturedTacosComponent {
  tacos: FeaturedTaco[] = [
    {
      name: 'Taco Al Pastor',
      description: 'Marinated pork with pineapple and cilantro.',
      price: 3.99,
      label: 'Popular'
    },
    {
      name: 'Birria Taco',
      description: 'Slow-cooked beef with consommé for dipping.',
      price: 4.99,
      label: 'New',
      chefsPick: true
    },
    {
      name: 'Carne Asada Taco',
      description: 'Grilled steak with onions and salsa verde.',
      price: 4.49,
      label: 'Spicy'
    },
    {
      name: 'Veggie Taco',
      description: 'Grilled peppers, onions, and avocado crema.',
      price: 3.49,
      label: 'Fresh'
    }
  ];
}

