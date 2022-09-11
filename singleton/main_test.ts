import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import DataBase from "./main.ts";

// Test Singleton
Deno.test(function SingletonTest() {
  assertEquals(DataBase.getConnection(), DataBase.getConnection());
});
