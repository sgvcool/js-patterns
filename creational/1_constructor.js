class Server {
    constructor(name,ip){
        this.name = name
        this.ip = ip
    }

    getUrl(){
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS German', '82.32.31.31')
console.log(aws.getUrl())