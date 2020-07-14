class SimpleMembership{
    constructor(name){
        this.name = name
        this.cost = 50
    }
}

class StandardMembership{
    constructor(name){
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership{
    constructor(name){
        this.name = name
        this.cost = 500
    }
}

class MemberFactory{
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple'){
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
       // console.log(Membership)

        const member = new Membership(name)
        member.type = type
        member.define = function(){
            console.log(`${this.name} (${this.type}: ${this.cost})`)
        }

        return member
    }
}

const factory = new MemberFactory()
const members = [
    factory.create('Tom','simple'),
    factory.create('Elena','premium'),
    factory.create('Vasylysa','standard'),
    factory.create('Ivan')
]

//console.log(members)

members.forEach(member => {
    member.define()
})