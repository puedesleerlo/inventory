// import * as data from '../config/datastructure.json';
import { Field } from './model';
import { Itemize } from './itemize';
import * as faker from 'faker/locale/en_US';

//ToDO: Department
// Class of ChartofAccounts table
export class Account extends Itemize {
    chartofaccountsid: string = "0"	
    accountname: string	= ""
    costcenter: boolean	 = true
    isretatsource: boolean	= true
    percentage: number	= 0
    // base: number	= 0
    // usenit: boolean	= true
    // luser: string = "ef"
    // isactive: boolean= true
    // createat: Date	= new Date()
    // version: number	= 0
    // about: string= "sefae"
    // typechaccount: string = "aesfase"

    constructor(...object) {
        super()
        for(let a in object[0]) {
            this[a] = object[0][a]
        }
    }

    faker() {
        this.chartofaccountsid = faker.random.uuid(),
        this.accountname = faker.commerce.productMaterial(),
        this.costcenter = true
        this.isretatsource = true;
        this.percentage = faker.random.number(100);
    }

    getKeys() {
        return Object.keys(new Account())
    }

    static displayInfo(): string[] {
        return ["accountname", "costcenter", "isretatsource"]
    }

    get _chartofaccountsid(): Field	{
        return new Field({
            "value": this.chartofaccountsid,
            "validation": {
                "required":"text here"
            },
            "controlType":"hidden",
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
            "controlType":"input",
            "type":"string",
            "key":"accountname",
            "label": "accountname"
        })
    }
    get _costcenter(): Field	{
        return new Field({
            "value": this.costcenter,
            "validation": {
                "required":"text here"
            },
            "controlType":"switch",
            "key":"costcenter",
            "label": "Cost Center"
        })
    }
    get _isretatsource(): Field	{
        return new Field({
            "value": this.isretatsource,
            "validation": {
                "required":"text here"
            },
            "controlType":"switch",
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
            "controlType":"input",
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

