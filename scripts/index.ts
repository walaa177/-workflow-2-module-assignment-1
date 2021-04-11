//Question 1
let towType:(number | boolean)[] ;

//Question 2
let tuple: [boolean, string,number];

//Question 3
function getFullName(firstName:string , lastName:string):string{
    return `${firstName} ${lastName}`;
}

//Question 4
interface creatPerson{
    name :string;
    age: number;
    jobtitle?:string;
}

//Question 5
enum  members{
    paid,
    unpaid,
    unknown,
}

//Question 6
class person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
    displayName(){
        return "My name is" + this.name;
    }
}



//Question 7
type StrNum = string |boolean;
type details =  { id: number | string, status: string | boolean };
function getDetails (name: StrNum, details: details){}