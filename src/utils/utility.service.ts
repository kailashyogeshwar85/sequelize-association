export default class UtilityService {
  /**
   * @description takes __filename from nodejs server
   * @param filePath
   */
  public static getFileName(filePath: string) {
    return filePath.split("/")[filePath.split("/").length - 1];
  }
}
