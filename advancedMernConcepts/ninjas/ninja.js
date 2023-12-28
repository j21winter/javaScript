class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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

class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom(){
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
        return this
    }
    displayStats(){
        super.showStats()
        return this
    }
    sayName(){
        super.sayName()
        return this
    }
}

const superSensei = new Sensei('Master Splinter')

superSensei.speakWisdom().displayStats().sayName()
