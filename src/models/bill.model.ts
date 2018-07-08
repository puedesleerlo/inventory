import { Model } from "./model";

export class Bill {
    supplier: string = ""
    quantity: number = 0
    constructor(...object) {
        for(let a in object[0]) {
            this[a] = object[0][a]
        }
    }
    getModel(): Model {
        var keys = Object.keys(new Bill())
        var modelForm: Model = {}
        keys.forEach((val) => {
            modelForm[val] = this['_' + val]
        })
        return modelForm
    }
    get _supplier() {
        return {
            value: this.supplier,
            type: "string",
            key: "supplier",
            label: "Supplier",
            controlType: "input",
            validation: {
                required: "hola supplier"
            }
        }
    }

    get _quantity() {
        return {
            value: this.quantity,
            type: "number",
            key: "quantity",
            label: "Quantity",
            controlType: "input",
            validation: {
                required: "hola quantity"
            }
        }
    }
}