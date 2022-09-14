//formに入っている値
const formValue = document.getElementById("form_value");

//addボタン
const addButton = document.getElementById("add_button");

//現在表示しているlist
const taskElement = document.getElementById("task_list");

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

    //liタグのlistItemを用意
    const listItem = document.createElement("li");

    //listItemのclassに"listItems"を設定(CSS適用のため)
    listItem.className = "list_items";

    //今表示している一覧のtaskListにlistItemを追加して、newTaskListに保存
    const newTaskElement = taskElement.appendChild(listItem);

    //newTaskListのテキストに、taskValueを代入
    newTaskElement.innerHTML = taskValue;

    //削除ボタンである、deleteButtonを作成
    const deleteButton = document.createElement("button");

    //deleteButtonのclassに"deleteButton"を設定(CSS適用のため)
    deleteButton.className = "delete_button";

    //deleteButtonのテキストを"delete"に変更
    deleteButton.innerHTML = "delete";

    // 追加ボタンをクリック時の処理を登録
    deleteButton.addEventListener("click", (event) => {
        onClickDeleteButton(deleteButton);
    });

    //タスクにボタンを追加
    newTaskElement.appendChild(deleteButton);
};

//削除ボタン押下時の処理
const onClickDeleteButton = (deleteButton) => {
    //deleteButtonの一番近いli要素を取得
    const deleteTask = deleteButton.closest("li");

    //deleteTaskを削除
    taskList.removeChild(deleteTask);
};
