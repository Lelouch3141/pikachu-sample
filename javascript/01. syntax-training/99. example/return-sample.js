function returnSample() {
    for (i = 1; i <= 10; i++) {
        if (i === 9) {
            return;
        }
        console.log(i);
    }

    //↓このconsole.logは呼ばれない。
    console.log("[loop finished]");
}

returnSample();
