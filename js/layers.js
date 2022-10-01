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
            description: "This duster will find dust faster than you do.",
            cost: new Decimal(5),
            effect() {
                if (hasUpgrade(this.layer, 14)) return 3
                else return 1.5
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Hire one jobber",
            description: "This jobber is dumb. He can barely find anything...",
            cost: new Decimal(5),
            effect() {
                if (hasUpgrade(this.layer, 14)) return 3
                else return 1.1
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            title: "Hire one trashier",
            description: "You couldn't dream of a better place to find dust !",
            cost: new Decimal(5),
            effect() {
                if (hasUpgrade(this.layer, 14)) return 3
                else return 2
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            title: "Abraham the Alchemist",
            description: "",
            cost: new Decimal(15),
            style: 
            {
                'color': "black",
                'font-weight': "bold",
                'background-image': "URL('https://cdn.discordapp.com/attachments/919754298026508289/1025472188222017536/unknown.png')",
                'background-size': "cover",
            },
            tooltip: "This guy will motivate your workers.",
        },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1) },
            title: "Crush a coin",
             display() { 
                if (getBuyableAmount(this.layer, this.id) < 2) return "\nWhy would you destroy a coin you just found ??\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 3) return "\nIt's GOLD, stop that !\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 4) return "\nWait is your dust increasing ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 5) return "\nOh that's quite smart...\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 6) return "\nBut is it really worth ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 7) return "\nI wonder if people are gonna read this.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 8) return "\nHappy Birthday Abraham !\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 9) return "\nWell i don't know if it's still your birthday.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 10) return "\nAnyways can you stop crushing coins ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 11) return "\nYou are polluting our planet !\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 12) return "\n1+1=3\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 13) return "\nRoses are blue and purple are flowers.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 14) return "\nI think you should stop.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 15) return "\nI think you should really stop.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 16) return "\nI think you should really really stop.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 17) return "\nReally stop you think should really I really.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 18) return "\nDo you know this idle is based on a real game ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 19) return "\nIt was game of the Year in 2018.\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 20) return "\nWhat was i saying already ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 21) return "\nAh yes, you could maybe reconsider and stop crushing your coins ?\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
                else if (getBuyableAmount(this.layer, this.id) < 22) return "\nIt hurts to see you doing that...\n\nCoins Crushed : " + (getBuyableAmount(this.layer, this.id))
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
