function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }

        get area() {

        }


        changeUnits(units) {

            this.units = units;
        }

        toString() {
            return `Figures units: ${this.units}`
        }

    }


    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            let area = Math.PI * Math.pow(this.radius, 2);
            if (this.units === 'mm') {
                area *= 100;
            } else if (this.units === 'm') {
                area /= 100;
            }
            return area;
        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }


    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.units = units;
            this.width = width;
            this.height = height;

        }


        get area() {
            let area = this.width * this.height;
            if (this.units === 'mm') {
                this.width*=10;
                this.height*=10;
                area *= 100;
            } else if (this.units === 'm') {
                this.width/=10;
                this.height/=10;
                area /= 100;
            }
            return area;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}

solve();
