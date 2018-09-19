// import * as data from '../config/datastructure.json';
import { Field } from './model';

//ToDO: Department
// Class of ChartofAccounts table
export class Account {
    chartofaccountsid: string	
    accountname: string	
    costcenter: boolean	
    isretatsource: boolean	
    percentage: number	
    base: number	
    usenit: boolean	
    luser: string	
    isactive: boolean	
    createat: Date	
    version: number	
    about: string	
    typechaccount: string

    constructor(...object) {
        for(let a in object[0]) {
            this[a] = object[0][a]
        }
    }

    get _chartofaccountsid(): Field	{
        return new Field({
            "value": this.chartofaccountsid,
            "validation": {
                "required":"text here"
            },
            "contolType":"hidden",
            "key":"id",
            "label": "id"
        })
    }
    get _accountname(): Field	{
        return new Field({
            "value": this.accountname,
            "validation": {
                "required":"text here"
            },
            "contolType":"input",
            "type":"string",
            "key":"key",
            "label": "label"
        })
    }
    get _costcenter(): Field	{
        return new Field({
            "value": this.costcenter,
            "validation": {
                "required":"text here"
            },
            "contolType":"switch",
            "key":"costcenter",
            "label": "Cost Center"
        })
    }
    get _isretatsource(): Field	{
        return new Field({
            "value": this._isretatsource,
            "validation": {
                "required":"text here"
            },
            "contolType":"switch",
            "key":"isretatsource",
            "label": "isretatsource"
        })
    }
    get _percentage(): Field	{
        return new Field({
            "value": this.percentage,
            "validation": {
                "required":"text here"
            },
            "contolType":"input",
            "type":"number",
            "key":"percentage",
            "label": "percentage"
        })
    }
    // get _base(): number	{
    //     return 0
    // }
    // get _usenit(): boolean	{
    //     return false
    // }
    // get _luser(): string	{
    //     return ""
    // }
    // get _isactive(): boolean	{
    //     return false
    // }
    // get _createat(): Date	{
    //     return new Date()
    // }
    // get _version(): number	{
    //     return 0
    // }
    // get _about(): string	{
    //     return ""
    // }
    // get _typechaccount(): string{
    //     return ""
    // }
}

