interface IInternet {
  connectTo(host: string): string;
}

class Internet implements IInternet {
  public connectTo(host: string): string {
    console.log("connecting to " + host);
    return "connected";
  }
}

export class ProxyInternet implements IInternet {
  private internet = new Internet();
  private static bannedWebSites = ["xyz.com", "abc.com"];
  public connectTo(host: string): string {
    if (ProxyInternet.bannedWebSites.includes(host)) {
      throw new Error("Access Denied To " + host);
    }
    return this.internet.connectTo(host);
  }
}
