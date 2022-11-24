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


- safe guard



- undefined



- null



- optional chaining vs &&


- Null coalescing vs ||


- Exclamation mark


- Functions


- Type Aliase

- Interfaces

- Unknown

- Never



Ressource : 
 - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 - https://www.tektutorialshub.com/typescript/strictnullchecks-in-typescript/
  