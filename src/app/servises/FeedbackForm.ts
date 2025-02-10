import ApiClient from "@/http/client";
import { NewsEmailService } from "@/app/api/partner/newsemail/route";

export default class NewsEmail {
  private _apiClient = new ApiClient();

  async createNewsEmail(extendedDto: NewsEmailService) {
    const { ...dto } = extendedDto;

    const response = await this._apiClient.post<NewsEmailService>(
      "/api/partner/newsemail",
      dto
    );

    if (!response.isSuccess) {
      console.error(response.data);

      throw response;
    }
  }
}
