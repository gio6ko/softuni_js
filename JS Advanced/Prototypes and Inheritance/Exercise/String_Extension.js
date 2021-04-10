(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
    };

    String.prototype.isEmpty = function () {
        return this.toString().localeCompare("") === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        } else if (this.includes(" ")) {
            let index = this.toString().indexOf(" ")
            if (index !== -1) {
                let str = this.toString().substring(0, index);
                if (n - str.length >= 3) {
                    str += "...";
                    return str;
                }
            } else {
                return this.toString().substring(0, n - 3) + "...";
            }
        }
    };

    // String.prototype.format = function (string, ...params) {
    //     let result = '';
    //     if (/{(\d)}/gm.test(string)) {
    //         while (/({\d})/gm.test(string)) {
    //             result = string.replace(/({\d})/g.exec(string)[0], params.shift());
    //             string = result;
    //         }
    //     } else {
    //         result = string;
    //     }
    //     return result;
    // }

    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index !== -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    }
})()