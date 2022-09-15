//formに入っている値
const formValue = document.getElementById("form_value");

//addボタン
const addButton = document.getElementById("add_button");

//現在表示しているlist
const taskTable = document.getElementById("task_table");

// 追加ボタンをクリック時の処理を登録
addButton.addEventListener("click", (event) => {
    onClickAddButton();
});

// 追加ボタン押下時の処理
const onClickAddButton = () => {
    //フォームに入力されている値を、taskに保存
    const taskValue = formValue.value;

    //フォームの値を空に
    formValue.value = "";

    const td1 = document.createElement("td");

    const td2 = document.createElement("td");

    const tr = document.createElement("tr");

    td1.innerHTML = taskValue;

    //削除ボタンである、deleteButtonを作成
    const deleteButton = document.createElement("button");

    //deleteButtonのclassに"deleteButton"を設定(CSS適用のため)
    deleteButton.id = "delete_button";
    deleteButton.className = "button";

    //deleteButtonのテキストを"delete"に変更
    deleteButton.innerHTML = "delete";

    // 追加ボタンをクリック時の処理を登録
    deleteButton.addEventListener("click", (event) => {
        onClickDeleteButton(deleteButton);
    });

    td2.appendChild(deleteButton);

    tr.appendChild(td1);

    tr.appendChild(td2);

    taskTable.appendChild(tr);
};

//削除ボタン押下時の処理
const onClickDeleteButton = (deleteButton) => {
    //deleteButtonの一番近いli要素を取得
    const deleteTask = deleteButton.closest("tr");

    //deleteTaskを削除
    taskTable.removeChild(deleteTask);
};
