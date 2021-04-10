function solve() {
    let obj = {
        mage: function (name) {
            let mage = {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    mage.mana--;
                    console.log(`${mage.name} cast ${spell}`);
                }
            }

            return mage;
        },
        fighter: function (name) {
            let fighter = {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    fighter.stamina--;
                    console.log(`${fighter.name} slashes at the foe!`)
                }
            }
            return fighter;
        }
    }


    return obj;
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
