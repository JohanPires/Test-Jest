import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('divide 2 times more', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('quality can\'t be negative', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie increase quality', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  it('quality can\'t be more 50 (Aged Brie)', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras don\' lose quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(45);
  });

  it('Backstage passes increase 1', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(46);
  });

  it('Backstage passes increase 2', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(47);
  });

  it('Backstage passes increase 3', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(48);
  });

  it('Backstage equal 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Conjured increase quality -2', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 1, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  it('Conjured increase quality -4', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });
});
