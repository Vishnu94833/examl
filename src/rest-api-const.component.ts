import { environment } from '../src/environments/environment';

const baseUrl = environment.apiBaseUrl;

export class RestApiConstComponent {

  public static REGISTER_USER = `${baseUrl}/register`;
  public static LOGIN_USER = `${baseUrl}/login`;
  public static CUSTOMERS = `${baseUrl}/employees`;
  public static ADMIN = `${baseUrl}/admin`;
  public static EMPLOYEES = `${baseUrl}/employees`;

}
