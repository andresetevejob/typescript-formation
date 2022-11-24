# Typescript Formations


## I - Concepts de base 
------------------------------------------
- Declaration de variable
```
   identifiant : type = valeur

```
- Template String
```
   var value: string = 'string';
   var x : string = `Ceci est une chaîne de caractère
   utilisant le template de $value `;

```

- Inference des types

Typescript permet l'inferrence de type c'est à dire qu'on pas obliger de definir le type d'une variable, cela se fera en tenant compte de la valeur
```
  var x = 25;
  x sera ici de type number
```
 - Déclaration d'un tableau
 ```
   var  tab : string[] = ["test","essai","valeur"];
 ```

 - Duck typing


## II - Typescript types
----------------------------------------------------
- Les types primitifs
```
  - number
  - string
  - boolean
```

- any
  
   IL est utiliser lorsque nous voulons eviter le verifcation du type de la   variable.
  ```
    Exple :
    let obj: any = { x: 0 };
    // None of the following lines of code will throw compiler errors.
    // Using `any` disables all further type checking, and it is assumed 
    // you know the environment better than TypeScript.
    obj.foo();
    obj();
    obj.bar = 100;
    obj = "hello";
    const n: number = obj;
  ```

- union

Le type union permet de combiner un ou plusieurs types.Les valeurs representées peuvent être de l'un des types définis dans l'union

```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

```


- Type safe guard

IL permet la vérification de type de la donnée avant un eventuel traitement

```
function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
}

```



- undefined

signifie que la variable n'est pas défini peut être utilisé comme union type en paramètre d'une méthode dont le paramètre peut être undefined

````
for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}

````


- null
contrairement à undefined dans le cas de null, la variable est connu mais possède une valeur null

````
function printValues(a: number | null) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);

````


- optional chaining vs &&
Permet à typescript d'arrêter l'execution d'une expression lorsque celui-ci rencontre un null ou undefined.l'operateur utilisé est "<b>?.</b>"

````
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}
// avant les optional chaining
function printNestedObject(obj: any) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}
// avec les optional chaining
function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}

````
reference : https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html

Contrairement au optional chaining , l'operateur && n'agit que sur les falsy values : "",0,NaN, false

- Null coalescing

cette fonctionnalité accompagne le optional chaining et permet de retourner une valeur par défaut, lorsque nous sommes confrontés à un null ou undefined, l'operateur utilisé est <b>??</b>
````
let result = foo?.bar ?? 0 / 100
// si foo est un null ou undefined, le numerateur de la fraction sera par défaut 0
````
Contrairement à Null coalescing , l'operateur || agit sur les falsy values : "",0,false,NaN



- Functions

   callback function

````
function myCallback(text: string): void {
    console.log(`myCallback called with ${text}`);
}
function withCallbackArg(
    message: string,
    callbackFn: (text: string) => void
) {
    console.log(`withCallback called, message : ${message}`);
    callbackFn(`${message} from withCallback"`);
}

````

- Object desctructing
  

  Assigner les valeurs des propriétés d'un objet à differentes variables
`````

let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}
let { aNum, bStr, cBool } = complexObject;

`````


- Type Aliase

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases


- Unknown

C'est un type similaire à any dans la mésure ou il peut stocker n'importe quelle valeur de variable, à la difference du any une variable de ce type ne peut pas être assignée à une variable connu sans au préalable un cast ou un Type safe guard

````
function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
}

````
- https://mariusschulz.com/blog/the-unknown-type-in-typescript

exple : https://medium.com/@vinhle95/the-unknown-type-in-typescript-939ec261294b

- Never



- Object spread

permet la copie d'un objet dans un autre
````
let firstObject = {name:"test",age:20};
let secondObject = {...firstObject}
console.log(secondObject) // affichera {name:"test",age:20}
````

Spread precedence
lors de la copie de plusieurs de objets ayant des propriétés identiques, dans un seul objet.Les valeurs des propriétés retenues seront celles du dernier objet spécifié dans la copie
````
let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };
// la valeur de objPrec3 sera : { id: 1001,name: "obj1 name", desc: "obj2 description" }

````

spread array
IL est aussi possible de fusionner les valeurs de différents tableaux avec le spread array

````

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);

````

- Optional parameter

````

function concatValues(a: string, b?: string) {
    console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");

`````

- Rest parameters

````
function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("1");
testArguments(10, 20);
````

- strictNullChecks

Avec cette option activé, null et undefined, ne peuvent pas être assigné à d'autres types du domain hormis, any et eux même

`````
// Compiled with --strictNullChecks
let x: number;
let y: number | undefined;
let z: number | null | undefined;
x = 1; // Ok
y = 1; // Ok
z = 1; // Ok
x = undefined; // Error
y = undefined; // Ok
z = undefined; // Ok
x = null; // Error
y = null; // Error
z = null; // Ok
x = y; // Error
x = z; // Error
y = x; // Ok
y = z; // Error
z = x; // Ok
z = y; // Ok


// Compiled with --strictNullChecks
let x: number;
let y: number | null;
let z: number | undefined;
x; // Error, reference not preceded by assignment
y; // Error, reference not preceded by assignment
z; // Ok
x = 1;
y = null;
x; // Ok
y; // Ok
`````


- Exclamation mark



- Interfaces


- classes


# II - Cas d'utilisation
----------------------



Ressource : 
 - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 - https://www.tektutorialshub.com/typescript/strictnullchecks-in-typescript/
  