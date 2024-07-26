import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        if (typeof floors === 'number') {
            this._floors = floors;
        } else {
            throw new TypeError('floors should be number');
        }
    }

    get floors() {
        return this._floors;
    }

    set floors(floors) {
        if (typeof floors === 'number') {
            this._floors = floors;
        } else {
            throw new TypeError('floors should be number');
        }
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
