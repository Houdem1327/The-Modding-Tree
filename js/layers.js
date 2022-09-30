addLayer("c", {
    name: "coins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e8d630",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "coins", // Name of prestige currency
    baseResource: "dust", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Get coins", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Hire one duster",
            description: "This duster will find dust faster than you do. Dust x1.5",
            cost: new Decimal(5),
        },
        12: {
            title: "Hire one jobber",
            description: "This jobber is dumb. He can barely find anything... Dust x1.1",
            cost: new Decimal(5),
        },
        13: {
            title: "Hire one trashier",
            description: "You couldn't dream of a better place to find dust ! Dust x2",
            cost: new Decimal(5),
        },
        14: {
            title: "Hire Abraham",
            description: "This ",
            cost: new Decimal(10)
        },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1) },
            title: "Crush a coin",
            display() { 
                if (getBuyableAmount(this.layer, this.id) < 2) return "\nWhy would you destroy a coin you just found ??\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 5) return "\nOh that's a smart way to get dust...\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 10) return "\nBut that's such a waste !\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 20) return "\nYou could maybe reconsider and stop crushing your coins ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else return "\nI can't let you do this anymore. I'm gonna disappear if you crush " + (30-(getBuyableAmount(this.layer, this.id))) + " more coins !\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
            },
            unlocked() {return getBuyableAmount(this.layer, this.id) < 30},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },        
    },    
})
