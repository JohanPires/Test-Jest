export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePass(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          this.updateSulfuras(item);
          break;
        case 'Conjured':
          this.updateConjured(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
    });

    return this.items;
  }

  updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
    item.sellIn--;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11) {
        item.quality++;
      }
      if (item.sellIn < 6) {
        item.quality++;
      }
    }
    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateSulfuras(item: Item) {}

  updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
  updateConjured(item: Item) {
    if (item.quality > 0) {
      item.quality--;
      item.quality--;
    }
    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
      item.quality--;
    }
  }
}
