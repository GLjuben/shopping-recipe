export class Ingredient {
    // public name: string;
    // public amount: number;
    // shortcut for writing the declarations of the property inside the parenthesis(args) in the constructor;
    constructor(public name: string,public amount: number){
       this.name = name;
       this.amount = amount;
    };
};