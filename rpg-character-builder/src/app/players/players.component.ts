import { Component } from '@angular/core';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  characters: Character[] = [
    {
      name: "Thorn",
      gender: "Male",
      class: "Warrior",
      faction: "The Iron Brotherhood",
      startingLocation: "Ironhold",
      funFact: "Thorn once single-handedly defeated a dragon."
    },
    {
      name: "Lyra",
      gender: "Female",
      class: "Mage",
      faction: "The Arcane Circle",
      startingLocation: "Silverpeak",
      funFact: "Lyra can cast spells without speaking."
    },
    {
      name: "Shade",
      gender: "Other",
      class: "Rogue",
      faction: "The Silent Veil",
      startingLocation: "Nightfall",
      funFact: "Shade has never been seen in daylight."
    },
    {
      name: "Brom",
      gender: "Male",
      class: "Warrior",
      faction: "Stoneguard Clan",
      startingLocation: "Hammerdeep",
      funFact: "Brom once arm-wrestled a troll and won."
    },
    {
      name: "Seraphine",
      gender: "Female",
      class: "Mage",
      faction: "The Crystal Order",
      startingLocation: "Frostspire",
      funFact: "She can freeze water with a blink."
    },
    {
      name: "Kestrel",
      gender: "Other",
      class: "Rogue",
      faction: "The Windstriders",
      startingLocation: "Skyreach",
      funFact: "Kestrel can pick any lock in under 10 seconds."
    },
    {
      name: "Darius",
      gender: "Male",
      class: "Warrior",
      faction: "The Ember Legion",
      startingLocation: "Ashenforge",
      funFact: "Darius once walked through fire unharmed."
    },
    {
      name: "Mira",
      gender: "Female",
      class: "Mage",
      faction: "The Dawnweavers",
      startingLocation: "Suncrest",
      funFact: "Mira can summon light creatures."
    },
    {
      name: "Riven",
      gender: "Other",
      class: "Rogue",
      faction: "The Shadow Syndicate",
      startingLocation: "Blackhollow",
      funFact: "Riven can vanish in a puff of smoke."
    },
    {
      name: "Kael",
      gender: "Male",
      class: "Warrior",
      faction: "The Stormborn",
      startingLocation: "Thunderhold",
      funFact: "Kael survived being struck by lightning."
    }
  ];

}
