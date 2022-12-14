import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { HouseBlend, Milk, Sugar, DarkRoast } from "./main.ts";

// Test Decorator
Deno.test(function DecoratorTest() {
  const totalCostHouseBlend = () => {
    const houseBlend = new HouseBlend();
    const withMilk = new Milk(houseBlend);
    const withSugar = new Sugar(withMilk);
    const totalCost = withSugar.cost();
    return totalCost;
  };

  const totalCostDarkRoast = () => {
    const darkRoast = new DarkRoast();
    const withMilk = new Milk(darkRoast);
    const withSugar = new Sugar(withMilk);
    const totalCost = withSugar.cost();
    return totalCost;
  };
  assertEquals(totalCostHouseBlend(), 400);
  assertEquals(totalCostDarkRoast(), 450);
});
