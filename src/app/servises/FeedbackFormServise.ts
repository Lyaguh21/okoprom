import ApiClient from "../client";
import { FeedbackFormServiceProps } from "@/api/FeedBackForm/route";
import { Account } from "@prisma/client";

export default class FeedbackFormService {
  private _apiClient = new ApiClient();

  async createFeedback(extendedDto: FeedbackFormServiceProps) {
    const { ...dto } = extendedDto;

    const response = await this._apiClient.post<FeedbackFormServiceProps, Account>(
      "/api/partner/newsemail",
      dto
    );

    if (!response.isSuccess) {
      console.error(response.data);

      throw response;
    }
  }
}
