class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats() {
        console.log(`Health = ${this.health} \nSpeed = ${this.speed} \nStrength = ${this.strength}`)
        return this

    }
    drinkSake() {
        console.log('Drinking Sake')
        this.health += 10
        console.log(`Health increased to ${this.health}`)
        return this
        

    }
}

const ninja = new Ninja('1', 100)

ninja.sayName().showStats().drinkSake()