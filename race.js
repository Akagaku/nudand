//jshint esversion: 6

export function Trait (name, desc) {
    this.name = name;
    this.desc= desc;
}

const darkvision = new Trait (
    'Darkvision',
    'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.'
);

export class Race {
    constructor (name, asi, age, size, speed, traits, lang, sub) {
        this.name = name;
        this.asi = asi;
        this.age = age;
        this.size = size;
        this.speed = speed;
        this.traits = traits;
        this.lang = lang;
        this.sub = sub;
    }

    getAsi () {
        var string = 'Your ' + this.asi[0][0] + ' score increases by ' + this.asi[0][1]

        if (this.asi[0][0] == 'Any') {
            string = 'One ability score of your choice increases by ' + this.asi[0][1];

            if (this.asi.length == 2) {
                string = 'Two ability scores of your choice increase by ' + this.asi[0][1];
            }
        }

        if (this.asi.length == 2) {
            string += ', and your ' + this.asi[1][0] + ' score increases by ' + this.asi[1][1];
        }

        string += '.';

        return string;
    }

    getLang () {
        let array = this.lang;
        let list = '';

        switch (array.length) {
            case 1:
                list += array[0];
                break;
            case 2:
                list += array[0] + ' and ' + array[1];
                break;
            default:
                for (let i = 0; i < array.length; i++) {
                    if (i != array.length - 1) {
                        list += array[i] + ', '
                    } else {
                        list += 'and ' + array[i];
                    }
                }
                break;
        }
        return 'You can speak, read, and write ' + list + '.';
    }
}

export const dragonborn = new Race (
    'Dragonborn',
    [['Strength', 2]],
    'Young dragonborn grow quickly. They can walk just hours after hatching, and reach adulthood by the age of 10. They rarely live to be older than 40.',
    'Dragonborn are much taller and heavier than humans, standing well over 6 feet and weighing almost 250 pounds. Your size is Medium.',
    30,
    [
        new Trait ('Draconic Ancestry', 'You are descended from a specific species of dragon. Choose a dragon type from the table listed under your subrace.'),
        new Trait ('Damage Resistance', 'You have resistance to the damage type associated with your draconic ancestry.'),
        new Trait ('Breath Weapon', "When you take the Attack action on your turn, you can replace one of your attacks with a breath attack. Each creature in the attack's area must make a saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes 1d10 damage of the type associated with your draconic ancestry. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10). You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.")
    ],
    ['Tenian', 'one other language of your choice'],
    [
        new Race (
            'Chromatic',
            [['Constitution', 1]],
            '',
            '',
            0,
            [new Trait ('Shield of the Usurper', 'As an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your draconic ancestry. Once you use this trait, you must finish a long rest to use it again.')],
            [],
            []
        ),
        new Race (
            'Metallic',
            [['Charisma', 1]],
            '',
            '',
            0,
            [new Trait ('Breath of Bahamut', 'You have a second breath weapon. When you take the Attack action on your turn, you can replace one of your attacks with an exhalation in a 15-foot cone. The save DC for this breath is 8 + your Constitution modifier + your proficiency bonus. Whenever you use this trait, choose one of the following options:')],
            [],
            []
        ),
        new Race (
            'Gem',
            [['Intelligence', 1]],
            '',
            '',
            0,
            [
                darkvision,
                new Trait ('Psionic Mind', "You can communicate telepathically to any creature you can see within 30 feet of you. You don't need to share a language with the creature, but the creature must be able to understand at least one language."),
                new Trait ('Gem Flight', "As a bonus action, you gain a flying speed equal to your walking speed and can hover. Once you use this trait, you can't do so again until you finish a long rest."),
                new Trait ('Sunlight Sensitivity', 'While in sunlight, you have disadvantage on Attack rolls, as well as on Wisdom (Perception) checks that rely on sight.')
            ],
            [],
            []
        )
    ]
);

export const dwarf = new Race (
    'Dwarf',
    [],
    "Dwarves mature at the same rate as humans, but aren't considered adults until the age of 50. The average dwarf lives to be around 400 years old.",
    'Dwarves are shoter than humans, the average adult being the size of a human child: between 4 and 5 feet. Your size is Medium.',
    25,
    [
        new Trait ('Studied Chronicler', 'You gain proficiency with the History skill.'),
        new Trait ('Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.')
    ],
    ['Tenian'],
    [
        new Race (
            'Stone',
            [['Wisdom', 2]],
            '',
            '',
            0,
            [
                new Trait ('Practiced Stoneworker', "You gain proficiency with mason's tools, and you count as one size larger when determining how much you can carry, lift, push, pull, or drag."),
                new Trait ('Heavy Hitter', 'When you roll a 1 with a damage die, you can reroll that die. You must use the new roll, even if it is another 1.'),
            ],
            ['Fjellan'],
            []
        ),
        new Race (
            'Iron',
            [['Strength', 2]],
            '',
            '',
            0,
            [
                new Trait ('Molten Metal', 'You have resistance to fire damage.'),
                new Trait ('Weaponsmith', "You gain proficiency with smith's tools and one melee weapon of your choice.")
            ],
            ['Bjoric'],
            []
        ),
        new Race (
            'Silver',
            [['Charisma', 2]],
            '',
            '',
            0,
            [
                new Trait ('Mercantile Charm', 'You gain proficiency with the Persuasion skill, and your proficiency bonus is doubled for any Charisma (Persuasion) check made to bargain or haggle the value of an item.'),
                new Trait ('Conductive', 'You have resistance to lightning damage.')
            ],
            ['Myntian'],
            []
        ),
        new Race (
            'Coal',
            [['Constitution', 2]],
            '',
            '',
            0,
            [
                new Trait ('Toxin Resilience', 'You have advantage on saving throws against being poisoned, and you have resistance to poison damage.'),
                new Trait ('Lung Capacity', 'The amount of time you can hold your breath is doubled.')
            ],
            ['Rull'],
            []
        ),
        new Race (
            'Gem',
            [['Intelligence', 2]],
            '',
            '',
            0,
            [
                darkvision,
                new Trait ('Telepathy', "You can communicate telepathically with any creature you can see within 60 feet of you. The target can't respond telepathically. You don't need to share a language, but the target must be able to understand at least one language."),
                new Trait ('Psionic Spellcasting', 'You know the Mage Hand cantrip. When you reach 3rd level, you can cast Detect Thoughts once. When you reach 5th level, you can also cast Dispel Magic once as a 3rd-level spell. You must finish a long rest to cast these spells again with this trait. Intelligence is your spellcasting ability for these spells, and they do not require spell components.'),
                new Trait ('Sunlight Sensitivity', 'While in sunlight, you have disadvantage on Attack rolls, as well as on Wisdom (Perception) checks that rely on sight.')
            ],
            ['Edelian'],
            []
        )
    ]
);

export const elf = new Race (
    'Elf',
    [['Wisdom', 1]],
    "Elves don't reach physical maturity until the age of 30, but elven coming of age is more mental and spiritual than physical, and the age at which one is considered an adult is widely subjective between regions, families, and individuals.",
    '',
    30,
    [new Trait ('Trance', "Elves don't sleep. Instead, they enter a meditative state during which they are semiconscious and fully aware of their surroundings. Entering this trance for four hours grants you the same benefits as eight hours of sleep for humans. Additionally, you can't be put to sleep by magic.")],
    ['Tenian'],
    [
        new Race (
            'Sothonian',
            [['Strength or Dexterity', 2]],
            '',
            '',
            0,
            [
                new Trait ('Arm of Evrys', 'You gain proficiency with shortswords, longbows, spears, and shields. The armor class bonus provided by your shield is increased by 1 while adjacent to an ally.'),
                new Trait ('Philosopgher Kings', 'You gain proficiency with one skill from History, Insight, Medicine, Nature, and Religion.'),
                new Trait ('Dragonslayers', 'You have advantage on saving throws against being frightened.')
            ],
            ['Sothonian'],
            []
        ),
        new Race (
            'Alkarian',
            [['Constitution or Charisma', 2]],
            '',
            '',
            0,
            [
                new Trait ('Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.'),
                new Trait ('Wanderers', 'You are more resistant to hot climates, and can go twice as long without food or water before suffering from exhaustion.'),
                new Trait ('Desert Sorcery', 'You know the Prestidigitation cantrip. At 3rd level, you can cast Charm Person as a 1st-level spell, using Charisma as your spellcasting modifier. You must finish a long rest to cast it again with this trait.')
            ],
            ['Qarayah'],
            []
        )
    ]
);

export const genasi = new Race (
    'Genasi',
    [],
    'Genasi mature at the same rate as humans, but can live up to 120 years.',
    'Genasi are similar to humans in height and build. Your size is Medium.',
    30,
    [],
    ['Tenian'],
    [
        new Race (
            'Efreeti',
            [['Intelligence', 2]],
            '',
            '',
            0,
            [
                new Trait ('Blood of Fire', 'You have resistance to fire damage.'),
                new Trait ('Burning Blade', 'As an action, you can cause your weapon to burst into flame. For 1 minute, you can add an extra 1d6 to one of your attacks each turn. Once you use this trait, you must finish a long rest to use it agian.'),
                new Trait ('Reach to the Blaze', 'You know the Produce Flame cantrip. When you reach 3rd level, you can cast Burning Hands once as a 1st-level spell. You must finish a long rest to cast it again with this trait. Constitution is your spellcasting ability for these spells.')
            ],
            [],
            []
            ),
            new Race (
                'Djinni',
                [['Dexterity', 2]],
                '',
                '',
                0,
                [
                    new Trait ('Unending Breath', 'You can hold your breath indefinitely while not incapacitated.'),
                    new Trait ('Featherweight', 'You count as one size larger when determining how much you can carry, lift, push, pull, and drag.'),
                    new Trait ('Mingle with the Wind', 'You can cast Levitate once, requiring no spell components. You must finish a long rest to cast it again using this trait.')
                ],
                [],
                []
            ),
            new Race (
                'Marid',
                [['Charsima', 2]],
                '',
                '',
                0,
                [
                    new Trait ('Body of Water', 'You have resistance to acid damage.'),
                    new Trait ('Amphibious', 'You have a swim speed of 30 feet, and can breathe in water as well as on land.'),
                    new Trait ('Call to the Wave', 'You know the Shape Water cantrip. When you reach 3rd level, you can cast Create or Destroy Water once as a 2nd-level spell. You must finish a long rest to cast it again with this trait.')
                ],
                [],
                []
            ),
            new Race (
                'Dao',
                [['Strength', 2]],
                '',
                '',
                0,
                [
                    new Trait ('Meld with Rock', 'You can move across difficult terrain made of earth and stone without expending extra movement.'),
                    new Trait ('Mastery Over Earth', 'You know the Mold Earth cantrip. When you reach 3rd level, you can cast Earth Tremor once as a 1st-level spell, using Constitution as your spellcasting ability. You must finish a long rest to cast it again with this trait.'),
                    new Trait ('Fist of Stone', 'Your unarmed strikes deal 1d6 bludgeoning damage.')
                ],
                [],
                []
            )
    ]
);

export const halfOrc = new Race (
    'Half-Orc',
    [['Strength', 2]],
    'Half-Orcs reach full physical maturity around the age of 13, and live for about 60 years.',
    '',
    30,
    [new Trait ('Menacing', 'You gain proficiency with the Intimidation skill.')],
    ['Tenian'],
    [
        new Race (
            'Ezakh',
            [['Constitution', 1]],
            '',
            'Ezakh half-orcs are much taller than the average human, standing between 6 and 7 feet tall. Your size is Medium.',
            0,
            [
                new Trait ('Relentless Endurance', 'When you are reduced to 0 hit points but not killed outright, you can choose to drop to 1 hit point instead. Once you use this feature, you must finish a long rest to use it again.'),
                new Trait ('Savage Attacks', 'When you score a critical hit with a melee weapon attack, you roll one extra damage die.'),
                new Trait ('Charger', 'As a bonus action, you can move up to 30 feet in a straight line toward a target that you can see. Afterward, you must take the Attack action and make a melee weapon attack against the target.')
            ],
            ['Ezakh'],
            []
        ),
        new Race (
            'Yacal',
            [['Dexterity', 1]],
            '',
            'Yacal half-orcs are slightly taller than humans, ranging from 5 and a half to 6 and a half feet tall. Your size is Medium.',
            0,
            [
                new Trait ('Jungle Dweller', 'You gain proficiency with two skill from Animal Handling, Athletics, Nature, Stealth, and Survival.'),
                darkvision,
                new Trait ('Guerilla Tactics', 'You have advantage on attacks against targets who have not acted in combat.')
            ],
            ['Yacaltl'],
            []
        )
    ]
)

export const halfling = new Race (
    'Halfling',
    [['Dexterity', 2]],
    "Halflings mature at around the same rate as humans, but don't reach adulthood until their 30's. The average halfling lifespan is between one and two centuries.",
    'Halflings stand between 2 and 4 feet tall, the average halfling sitting squarely in the middle of that range. Your size is Small.',
    25,
    [
        new Trait ('Lucky', 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new roll, even if it is another 1.'),
        new Trait ('Halfling Hospitality', "You gain proficiency with either cook's utensils or brewer's tools. Your proficiency bonus is doubled for rolls using your chosen tool."),
        new Trait ('Nimble', 'You can move through the space of any creature of a size larger than yours.')
    ],
    ['Tenian', 'one other language of your choice'],
    [
        new Race (
            'Dundor',
            [['Charisma', 1]],
            '',
            '',
            0,
            [
                new Trait ('Unswayable Mind', 'You have advantage on Charisma saving throws.'),
                new Trait ('Professional Relaxer', 'You can reroll any hit die with a result of 1 or 2. You must use the new roll, even if it is a 1 or 2.')
            ],
            [],
            []
        ),
        new Race (
            'Earock',
            [['Constitution', 1]],
            '',
            '',
            0,
            [
                new Trait ('Against the Current', 'You have advantage on Strength saving throws.'),
                new Trait ('Sturdy Frame', 'Your hit point total increases by 1, and increases by 1 again each time you gain a level.')
            ],
            [],
            []
        ),
        new Race (
            'Lieftrust',
            [['Wisdom', 1]],
            '',
            '',
            0,
            [
                new Trait ('Woodland Stride', 'Ability checks to track you are made at disadvantage, and you can move through difficult terrain made of non-magical plants without expending extra movement.'),
                new Trait ("Nature's Friend", 'Through sounds and gestures, you can communicate simple ideas to Small or smaller beasts.')
            ],
            [],
            []
        )
    ]
);

export const human = new Race (
    'Human',
    [['Any', 1], ['Any', 1]],
    'Humans reach maturity in their teenage years, and typically live for less than a century.',
    'Humans vary widely in height and build, but most stand between 5 and 6 feet tall. Your size is Medium.',
    30,
    [
        new Trait ('Skilled', 'You gain proficiency in one skill of your choice.'),
        new Trait ('Arcane Intuition', "When within 30 feet of an active spell or magical effect, you can smell a faint metallic scent on the air. The smell persists after the end of the spell's duration for a number of hours equal to the spell's level. Magic items, sorcerers, and other inherently arcane creatures and objects give off the same smell within 5 feet.")
    ],
    ['Tenian', 'one other language of your choice'],
    []
);