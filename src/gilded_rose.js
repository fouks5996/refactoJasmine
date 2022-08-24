class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

class Shop {
	constructor(items = []) {
		this.items = items;
	}
	updateQuality() {
		for (var i = 0; i < this.items.length; i++) {
			this.items[i].sellIn = this.Decrease(this.items[i].sellIn, 1);
			this.items[i].quality < 50 &&
				this.items[i].quality > 0 &&
				this.checkValues(i, this.items[i]);
		}
		return this.items;
	}

	Decrease(value, number, sellIn = Infinity) {
		return sellIn <= 0
			? (value = value - number * 2)
			: (value = value - number);
	}

	Increase(value, number) {
		return (value = value + number);
	}

	checkValues(i, value) {
		const name = value.name;

		switch (true) {
			case name == "Aged Brie":
				this.items[i].quality = this.Increase(value.quality, 1);
				break;
			case name == "Sulfuras, Hand of Ragnaros":
				this.items[i].sellIn = 80;
				this.items[i].quality = this.Decrease(value.quality, 0);
				break;
			case name == "Backstage passes to a TAFKAL80ETC concert":
				if (value.sellIn < 10 && value.sellIn > 5) {
					this.items[i].quality = this.Increase(value.quality, 2);
				} else if (value.sellIn <= 5) {
					this.items[i].quality = this.Increase(value.quality, 3);
				} else {
					this.items[i].quality = this.Increase(value.quality, 1);
				}
				break;
			case name.includes("Conjured"):
				this.items[i].quality = this.Decrease(value.quality, 2, value.sellIn);
				break;
			default:
				this.items[i].quality = this.Decrease(value.quality, 1, value.sellIn);
				break;
		}
	}
}

// function perform() {
// 	const items = [
// 		new Item("Aged Brie", 12, 21),
// 		new Item("Sulfuras, Hand of Ragnaros", 12, 23),
// 		new Item("Backstage passes to a TAFKAL80ETC concert", 12, 23),
// 		new Item("Backstage passes to a TAFKAL80ETC concert", 8, 23),
// 		new Item("Backstage passes to a TAFKAL80ETC concert", 5, 23),
// 		new Item("Conjured", -2, 23),
// 		new Item("Conjured dzdz", 10, 23),
// 		new Item("item1", 12, 23),
// 		new Item("item2", 12, 23),
// 		new Item("item3", 12, 52),
// 		new Item("item3", 12, 0),
// 		new Item("item3", -1, 12),
// 	];

// 	const shop = new Shop(items);

// 	shop.updateQuality();
// 	console.log(shop);
// }

// perform();

module.exports = {
	Item,
	Shop,
};
