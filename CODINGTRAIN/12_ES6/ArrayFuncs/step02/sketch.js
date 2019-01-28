// Arrow Functions : step02


function setup() {
    noCanvas();
    const counter1 = new Counter(100, 500);
    const counter2 = new Counter(300, 100);
    const counter3 = new Counter(0, 1000);
}


class Counter {
    constructor(start, wait) {
        this.count = start;
        this.p = createP('');
        console.log(this);
        setInterval(() => {
            this.count++;
            this.p.html(this.count);
        }, wait);
    }
}
