import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { NotificationFactory } from "./main.ts";

Deno.test("DecoratorTest", async function DecoratorTest(t) {
  const correctChannels = ["SMS", "EMAIL", "PUSH"];
  const wrongChannels = ["xms", ""];
  await t.step("correctChannels", async () => {
    await Promise.all(
      correctChannels.map((e: string) => {
        const notificationFactory = new NotificationFactory();
        const notification = notificationFactory.createNotification(e);
        const res = notification?.notifyUser();
        assertEquals(res, "success");
      })
    );
  });
  await t.step("wrongChannels", () => {
    wrongChannels.forEach((e: string) => {
      const notificationFactory = new NotificationFactory();
      assertThrows(
        () => {
          notificationFactory.createNotification(e).notifyUser();
        },
        Error,
        "Unknown"
      );
    });
  });
});
