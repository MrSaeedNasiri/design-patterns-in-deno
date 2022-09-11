abstract class Beverage {
  private description: string;

  constructor(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 0;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super("House blend");
  }

  public cost(): number {
    return 250;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super("Dark roast");
  }

  public cost(): number {
    return 300;
  }
}

abstract class AddOn extends Beverage {
  protected beverage: Beverage;

  constructor(description: string, bev: Beverage) {
    super(description);
    this.beverage = bev;
  }

  public getDescription(): string {
    return this.getDescription();
  }
}

export class Sugar extends AddOn {
  constructor(bev: Beverage) {
    super("Sugar", bev);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + " with Mocha";
  }

  public cost(): number {
    return this.beverage.cost() + 50;
  }
}

export class Milk extends AddOn {
  constructor(bev: Beverage) {
    super("Milk", bev);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + " with Milk";
  }

  public cost(): number {
    return this.beverage.cost() + 100;
  }
}

const houseBlend = new HouseBlend();
console.log(houseBlend.getDescription() + " : " + houseBlend.cost());

const milkAddOn = new Milk(houseBlend);
console.log(milkAddOn.getDescription() + " : " + milkAddOn.cost());

const sugarAddOn = new Sugar(milkAddOn);
console.log(sugarAddOn.getDescription() + " : " + sugarAddOn.cost());
