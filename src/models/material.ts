
import { Bill } from "./bill.model";
import { User } from "./user.model";
import * as faker from 'faker/locale/en_US';
import { Model, Field } from "./model";
import { Itemize } from "./itemize";
interface FakerData {
    faker?(): void
}
export class Material extends Itemize implements FakerData {
    static listType: "table"
    id: string = ""
    name: string = ""
    unity: string = ""
    quantity: number = 0
    department: string = ""
    bill: Object[] = [
                {supplier: "o", quantity: 50},
                {supplier: "m", quantity: 2}
            ]
    // imageId: string
    // imageUrl: string
    // createdAt: Date
    // createdBy: User

    faker() {
        this.id = faker.random.uuid(),
            this.name = faker.commerce.productMaterial(),
            this.unity = faker.random.arrayElement(["mm", "m", "kg", "l"])
        this.quantity = faker.random.number(400);
        this.department = faker.commerce.department();
        // this.imageId = faker.image.image();
        // this.imageUrl = faker.image.imageUrl();
        // this.createdAt = faker.date.past();
        // this.createdBy = faker.internet.userName();
    }

    getKeys() {
        return Object.keys(new Material())
    }

    static displayInfo(): string[] {
        return ["name", "quantity", "unity"]
    }

    // constructor(
    //     id: string = "0",
    //     name: string = "",
    //     unity: string = "",
    //     quantity: number = 0,
    //     department: string = "",
    //     bill: Bill[] = [
    //         new Bill("o", 50),
    //         new Bill("m", 1)
    //     ],
    //     imageId: string = "",
    //     imageUrl: string = "",
    //     createdAt: Date = new Date(),
    //     createdBy: User = "",
    // ) {
    //     super();
    //     this.id = id
    //     this.name = name
    //     this.unity = unity
    //     this.quantity = quantity
    //     this.department = department
    //     this.bill = bill
    //     // this.imageId = imageId
    //     // this.imageUrl = imageUrl
    //     // this.createdAt = createdAt
    //     // this.createdBy = createdBy
    // }
    constructor(...object) {
        super()
        for(let a in object[0]) {
            this[a] = object[0][a]
        }
    }

    get _id(): Field {
        return {
            value: this.id,
            validation: {
                required: "hola amigos"
            },
            controlType: "input",
            type: "string",
            key: "id",
            label: "Id"
        }
    }
    get _name(): Field {
        return {
            value: this.name,
            validation: {
                required: "hola name"
            },
            controlType: "input",
            type: "string",
            key: "name",
            label: "Name"
        }
    }
    get _unity(): Field {
        return {
            value: this.unity,
            validation: {
                required: "hola unity"
            },
            controlType: "input",
            type: "string",
            key: "unity",
            label: "unity"
        }
    }
    get _quantity(): Field {
        return {
            value: this.quantity,
            validation: {
                required: "hola quantity"
            },
            controlType: "input",
            type: "number",
            key: "quantity",
            label: "quantity"
        }
    }
    get _department(): Field {
        return {
            value: this.department,
            validation: {
                required: "hola department"
            },
            controlType: "input",
            type: "string",
            key: "department",
            label: "department"
        }
    }
    get _bill(): Field {
        var map = this.bill.map((val) => {
            return new Bill(val).getModel()
        })
        return {
            value: map,
            validation: {
                required: "hola array"
            },
            controlType: "arrayModal",
            type: "group",
            key: "bill",
            label: "Bills",
            arraySchema: new Bill().getModel()  
        }
    }
}
