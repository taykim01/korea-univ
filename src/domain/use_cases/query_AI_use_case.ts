import DataResponse from "@/app/data_response";
import OpenAIServices from "@/data/services/open_ai_services";

export default class QueryAIUseCase {
  async getAnswerFromAI(query: string): Promise<DataResponse> {
    const open_AI_services = new OpenAIServices();
    const openaiResult = await open_AI_services.getAnswer(query);
    return new DataResponse(openaiResult.result, openaiResult.message, openaiResult.payload);
  }
}
