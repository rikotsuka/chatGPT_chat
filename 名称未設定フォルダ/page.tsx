"use client";
import React, { useState } from "react";
import Head from 'next/head'
import axios from "axios";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("text-davinci-002");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = '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';
    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";
    try {
      const response = await axios.post(
        URL,
        {
          prompt: prompt,
          max_tokens: 200
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Next.js で作る初めての OpenAI アプリ</title>
        <meta name="description" content="AI がどんな質問にも答えます" />
      </Head>
      <h1>Next.js で作る初めての OpenAI アプリ</h1>
      <h2>質問：</h2>
      <form onSubmit={handleSubmit}>
        <p>Prompt:</p>
          <textarea
            placeholder="質問してください"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        <p>Model:</p>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="text-davinci-002">Davinci</option>
            <option value="text-davinci-001">Davinci-codex</option>
            <option value="text-curie-001">Curie</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-ada-001">Ada</option>
          </select>
        <br />
        <button type="submit">質問する</button>
      </form>
      <h2>答え：</h2>      
      <p>{response}</p>
    </div>
  );
}
function useClient(Page: () => React.JSX.Element) {
  throw new Error("Function not implemented.");
}

