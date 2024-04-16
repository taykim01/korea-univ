"use client"

import { useRecoilState } from "recoil";
import "./page.css"
import SearchBar from "@/presentation/components/search_bar";
import { SearchAtom } from "@/presentation/states/search_atom";
import QueryAIUseCase from "@/domain/use_cases/query_AI_use_case";
import { Result } from "./types";
import { SearchResultAtom } from "@/presentation/states/search_result_atom";
import { useState } from "react";
import ChatBubble from "@/presentation/components/chat_bubble";
import LoadingDialogue from "@/presentation/components/loading_dialogue";

export default function Home() {
  const [search, setSearch] = useRecoilState(SearchAtom)
  const [searchResult, setSearchResult] = useRecoilState(SearchResultAtom)
  const [reqStatus, setReqStatus] = useState<Result>(Result.ERROR)
  const [distance, setDistance] = useState(300)
  const [loading, setLoading] = useState(false)

  const getQuery = async () => {
    setDistance(0)
    setLoading(true)
    const query_ai_use_case = new QueryAIUseCase()
    const response = await query_ai_use_case.getAnswerFromAI(search)
    console.log(response)
    setReqStatus(response.result)
    if (response.result === Result.ERROR) {
      alert("통신 실패")
      setLoading(false)
      return
    }
    setLoading(false)
    setSearchResult(response.payload)
  }

  return (
    <main className="w100 h100" style={{ backgroundColor: "var(--sub-50)" }}>
      <div className="home_main" style={{ backgroundColor: "#FFF" }}>
        <div className="pr h100 vf ca">
          <div className="r24 grey-800 _500ms" style={{ marginTop: distance }}><span className="main-500 b24">고려대학교</span>에 대해 물어보세요!</div>
          {
            reqStatus === Result.SUCCESS &&
            <div className="w100 vf jcfs yp40">
              <ChatBubble text={searchResult} />
            </div>
          }
          <div
            style={{
              position: "absolute",
              bottom: distance,
              margin: "0 auto",
            }}
            className="_500ms"
          >
            <SearchBar
              width={360}
              toParent={(input) => setSearch(input)}
              clickSearch={getQuery}
            />
          </div>
        </div>
      </div>
      {loading && <LoadingDialogue />}
    </main>
  );
}
