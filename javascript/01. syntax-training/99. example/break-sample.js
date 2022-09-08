function breakSample() {
    for (i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (i === 9) {
            break;
        }
        console.log(i);
    }
    console.log("[loop finished]");
}

breakSample();
