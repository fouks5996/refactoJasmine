var { Shop, Item } = require("../src/gilded_rose.js");

describe("Quality Increase", function () {
	it("La qualité baisse de 1 : Object Lambda", function () {
		const NewItem = new Item("Lambda Item", 10, 10);
		const item = new Item("Lambda Item", 10, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality - 1);
	});

	it("La qualité augmente de 1 si data > 10 : Backstage passes to a TAFKAL80ETC concert", function () {
		const name = "Backstage passes to a TAFKAL80ETC concert";
		const NewItem = new Item(name, 11, 10);
		const item = new Item(name, 11, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality + 1);
	});
	it("La qualité augmente de 2 si data < 10 : Backstage passes to a TAFKAL80ETC concert", function () {
		const name = "Backstage passes to a TAFKAL80ETC concert";
		const NewItem = new Item(name, 8, 10);
		const item = new Item(name, 8, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality + 2);
	});
	it("La qualité augmente de 3 si data < 5 : Backstage passes to a TAFKAL80ETC concert", function () {
		const name = "Backstage passes to a TAFKAL80ETC concert";
		const NewItem = new Item(name, 4, 10);
		const item = new Item(name, 4, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality + 3);
	});
	it("La qualité baisse de 2  : Conjured Item", function () {
		const name = "Conjured";
		const NewItem = new Item(name, 4, 10);
		const item = new Item(name, 4, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality - 2);
	});
	it("La qualité ne se modifie pas  : Sulfura Item", function () {
		const name = "Sulfuras, Hand of Ragnaros";
		const NewItem = new Item(name, 4, 10);
		const item = new Item(name, 4, 10);
		const gildedRose = new Shop([NewItem]);
		gildedRose.updateQuality();
		expect(NewItem.quality).toBe(item.quality);
	});
});

//
describe("Create Items", () => {
	it("Un item lambda est bien créé", () => {
		const item = new Item("LambdaItem", 0, 0);
		expect(item.name).toBe("LambdaItem");
		expect(item.sellIn).toBe(0);
		expect(item.quality).toBe(0);
	});
	it("Un item spécifique est bien créé", () => {
		const item = new Item("Sulfuras, Hand of Ragnaros", 0, 0);
		expect(item.name).toBe("Sulfuras, Hand of Ragnaros");
		expect(item.sellIn).toBe(0);
		expect(item.quality).toBe(0);
	});
});
