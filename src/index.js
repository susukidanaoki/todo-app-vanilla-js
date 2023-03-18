import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する。
  const inputTxt = document.getElementById("add_txt").value;
  document.getElementById("add_txt").value = "";

  addIncompleteList(inputTxt);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

//未完了リストに特定の要素を追加
const addIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";
  //divタグ生成
  const div = document.createElement("div");
  div.innerText = text;

  //button（完了）タグ生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  completeBtn.addEventListener("click", () => {
    const addTarget = completeBtn.parentNode;
    deleteFromIncompleteList(addTarget);
    //TODOタイトルテキストを取得
    const todoTitleTxt = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const div = document.createElement("div");
    div.innerText = todoTitleTxt;

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      //押下されたボタンの親要素（li）を削除する
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete_list").removeChild(deleteTarget);
      //TODOタイトルテキストを取得
      const todoTitleTxt = deleteTarget.firstElementChild.innerText;
      addIncompleteList(todoTitleTxt);
    });

    addTarget.appendChild(div);
    addTarget.appendChild(backBtn);

    document.getElementById("complete_list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    //押下された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  //未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
