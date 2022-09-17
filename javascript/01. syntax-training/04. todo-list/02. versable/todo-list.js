/**
 * logic
 */

var array = [];

const addFunc = (value) => {
    array[array.length + 1] = value;
};

const deleteFunc = (index) => {
    const saveArray = [];

    for (i = 0; i < array.length; i++) {
        if (i === index) {
            continue;
        }
        saveArray[i] = array[i];
    }

    array = saveArray;
};

/**
 * dom
 */

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

const setDeleteButton = () => {
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

    return deleteButton;
};

//addボタン押下時の処理
const onClickAddButton = () => {
    //フォームに入力されている値を、taskに保存
    const taskValue = formValue.value;

    //フォームの値を空に
    formValue.value = "";

    //入力フォームの値をaddFuncに渡す
    addFunc(taskValue);

    displayList();
};

//削除ボタン押下時の処理
const onClickDeleteButton = (deleteButton) => {
    // console.log(taskTable);
    // while (taskTable.firstChild) {
    //     taskTable.removeChild(taskTable.firstChild);
    // }
    // console.log(taskTable);

    // var clone = taskTable.cloneNode(false);
    // taskTable.parentNode.replaceChild(clone, taskTable);

    const deleteTask = deleteButton.closest("tr");

    const deleteIndex = deleteTask.id;

    deleteFunc(deleteIndex);

    displayList();
};

const displayList = () => {
    var clone = taskTable.cloneNode(false);
    taskTable.parentNode.replaceChild(clone, taskTable);

    const td1 = document.createElement("td");

    const td2 = document.createElement("td");

    const tr = document.createElement("tr");

    //arrayに入っている全要素を出力
    for (i = 0; i < array.length; i++) {
        //td1のテキストにarrayの各要素を代入
        td1.innerHTML = array[i];

        //td2にdeleteButtonを追加
        td2.appendChild(setDeleteButton());

        //trにtd1を追加
        tr.appendChild(td1);

        //trにtd2を追加
        tr.appendChild(td2);

        //taskeTableにtrを追加
        taskTable.appendChild(tr);
    }
};
