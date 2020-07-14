class Complaints{
    constructor(){
        this.complains = []
    }

    reply(complaint){

    }
    add(complaint){
        this.complains.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints{
    reply({id,customer,details}){
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id,customer,details}){
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplaintsRegistry{
    register(customer,type,details){
        const id = Date.now()
        let complaint
        if(type === 'service' ){
            complaint = new ServiceComplaints()
        }else{
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}

const regystry = new ComplaintsRegistry()
console.log(regystry.register('Dima', 'service', 'Not found'))
console.log(regystry.register('Elena', 'product', '502 server error'))
console.log(regystry.register('Elena3', 'product', '401 server error'))
console.log(regystry.register('Elena6', 'product', '503 server error'))