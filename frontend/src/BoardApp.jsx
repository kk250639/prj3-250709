import { useState } from "react";
import axios from "axios";

export function BoardApp() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();

  function handleSaveButtonClick() {
    axios
      .post("/api/board/add", {
        title: title,
        content: content,
        author: author,
      })
      .then((res) => {
        console.log("잘 되면 실행 되는 코드");
      })
      .catch((err) => {
        console.log("잘 안되면 실행되는 코드");
      })
      .finally(() => {
        console.log("항상 실행되는 코드");
      });
  }

  return (
    <div>
      <h3>글 작성</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          id=""
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSaveButtonClick}>저장</button>
      </div>
    </div>
  );
}
