class Software {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name} is running...`)
    }
}

class Plugin {
    constructor(name) {
        this.name = name
    }
    activate(){
        console.log(`plugin ${this.name} activated!`)
    }
}

class Browser extends Software {
    constructor(name){
        super(name)
        this.plugins = []
    }
    addPlugin(p){
        this.plugins.push(p)
    }
    installPlugin(p){
        this.addPlugin(p)
        p.activate()
    }
}

const p1 = new Plugin("AdBlock")
const p2 = new Plugin("Grammarly")
const p3 = new Plugin("Dark mode")

const b = new Browser("Opera GX")
b.run()

b.installPlugin(p1)
b.installPlugin(p2)
b.installPlugin(p3)