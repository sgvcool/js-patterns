const car = {
    wheels: 4,
    init(){
        console.log(`У меня есть ${this.wheels}, мой владелец ${this.owner}`)
    }
}
const carWithOwner = Object.create(car,{
    owner: {
        value: 'Dmitriy'
    }
})

console.log(carWithOwner.__proto__ === car)
carWithOwner.init()