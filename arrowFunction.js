
class arrowFunction {
    constructor(w) {
      this.w = w;
    }
    life = () => {
        const foo = () => {
            var y = x * 2
            return (z) => {
                if (z.length > 3) {
                    return z.map((v) => {
                        if (v > 3) return v + y;
                        else return baz(v * 4);
                    })
                } else {
                    var obj = []
                    setTimeout(() => {
                        obj.length = 1;
                        obj[0] = this.w
                    }, 100)
                    return obj
                }
            }
        }
    }
}