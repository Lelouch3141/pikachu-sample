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
