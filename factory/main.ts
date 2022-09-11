interface Notification {
  notifyUser(): void;
}

class SMSNotification implements Notification {
  public notifyUser() {
    console.log("Sending an SMS notification");
    return "success";
  }
}

class EmailNotification implements Notification {
  public notifyUser() {
    console.log("Sending an e-mail notification");
    return "success";
  }
}

class PushNotification implements Notification {
  public notifyUser() {
    console.log("Sending a push notification");
    return "success";
  }
}

export class NotificationFactory {
  public createNotification(channel: string) {
    switch (channel) {
      case "SMS":
        return new SMSNotification();
      case "EMAIL":
        return new EmailNotification();
      case "PUSH":
        return new PushNotification();
      default:
        throw new Error("Unknown channel " + channel);
    }
  }
}
