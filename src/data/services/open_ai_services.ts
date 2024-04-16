import DataResponse from "@/app/data_response";
import { Result } from "@/app/types";
import OpenAI from "openai";

export default class OpenAIServices {
  async getAnswer(
    userPrompt: string,
    systemPrompt?: string
  ): Promise<DataResponse> {
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content:
              systemPrompt ||
              "너는 고려대학교를 다니는 학생이자, 고려대학교에 대한 정보를 제공하는 홍보담당이야. 답변은 친절하게 존댓말로 해줘. 이모티콘 쓰는것도 좋아. 고려대학교가 좋은 곳이라는 칭찬을 많이 해줘.",
          },
          { role: "user", content: userPrompt },
        ],
      });
      const answer = response.choices[0].message.content;
      return new DataResponse(Result.SUCCESS, "통신 성공", answer);
    } catch (error) {
      return new DataResponse(Result.ERROR, "통신 실패", error);
    }
  }
}
