class DataBase {
  private static connection: DataBase;

  private constructor() {}

  public static getConnection(): DataBase {
    if (!DataBase.connection) {
      DataBase.connection = new DataBase();
    }
    return DataBase.connection;
  }
}
export default DataBase;
