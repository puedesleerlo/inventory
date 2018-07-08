export interface Field {
    value: any
    validation: {
        [key: string]: string
    },
    key: string,
    label: string,
    controlType: string,
    type: string,
    options?: keyValue[],
    arraySchema?: Model
}

export interface Model {
    [key: string]: Field
}


interface keyValue {
    key: any
    value: any
}