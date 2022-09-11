import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ProxyInternet } from "./main.ts";

Deno.test("ProxyTest", async function ProxyTest(t) {
  const internet = new ProxyInternet();
  await t.step("random website", () => {
    const res = internet.connectTo("google.com");
    assertEquals(res, "connected");
  });
  await t.step("blocked website", () => {
    assertThrows(
      () => {
        internet.connectTo("xyz.com");
      },
      Error,
      "Access Denied"
    );
  });
});
