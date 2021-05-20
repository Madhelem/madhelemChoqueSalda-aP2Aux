//-----------------TAREA1- Cree una variable “name” y dele como valor su nombre

let Name :String = "Madhelem"; 


// --------------TAREA2 Luego intente cambiar el valor de “name” por un numero 

//Name =5;


/*- --------------TAREA3-¿Por qué TypeScript no le permite realizar la acción anterior?
R.-  En TypeScript no es necesario declarar el Tipo de una variable
    implícitamente Typescript le asigna el Tipo «string»
    a la variable «name». como  Typescript  es un  lenguajes con tipado estático 
    permiten detectar errores de asignación en tiempo de desarrollo  por  eso nos 
    marca como  error */




/*
--------------------TAREA 4-Cree una función llamada “greet” para poder saludar a una persona y además mostrarle su edad, 
   es decir, la salida de la función debe ser algo parecido a “hello Josie, your age is 25”,*/

/*function greet(nombre :String, age :number ) :String {

    return "hello "+ nombre+" your  age is "+age;
    

}
console.log(greet("Josie",25));*/

   /*
-------------------TAREA5   ¿Qué tipo de retorno le asigno TypeScript a esta función?

R.- El tipo de  retorno  es  un dato String  esto sucede  porque   es  un  codigo  fuertemente tipado y  en esste caso  se asigno el 
a la funcion de  tipo string  y por  ello  nos  devolvera  en todo  caso un dato string, en caso de  que  se quiera devolver  un dato de 
tio  number  nos  saldra  un error , pero en caso   no especifiquemos  que dato obtendra  de  regreso  la funcion   tomara  como tipo de  dato de  
regreso el tipo de  dato  que  esta  regresando  con el return 
*/


/*
- ------------------TARREA 6  Cree una función donde el tipo de retorno “never” sea útil
*/
//esta  funcion nuca termino de  ejecutarse ,arroja  un error, nunca  sale de la funcion esto nos  puede  ser util  para  emitir  los mensajes  de  errror 
/*function funcionArrojaError(): never{

    throw new Error("ha  ocurido  un grave  error");
}
function keepProcessing(): never { 
            //y la keepProcessing()función siempre se está ejecutando y nunca alcanza un punto final porque el ciclo while nunca termina. Por lo tanto, nunca se usa 
            //el tipo para indicar el valor que nunca ocurrirá o regresará de una función
            while (true) 
            { 
              console.log('I always does something and never ends.')
            }
}
keepProcessing();
//funcionArrojaError();

/*------------------------------------
// Otro  ejemplo que  sea util  usando este  tipo pordria ser  la  siguiente en el uso popular para `never` es asegurarse de que una
// cláusula `switch` sea exhaustiva. Por ejemplo, que todas
// las rutas han sido cubiertas.

// Aquí hay una enumeración y una cláusula `switch` exhaustiva,
// intenta añadir una nueva opción a la enumeración
// (¿tal vez Tulip?)

enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,//si  asignamos  aqui  Tulip no  será  posible  ya  que  con la  funcion never  //decimos  que  nunca  pasarra
}

const flowerLatinName = (flower: Flower) => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";

    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck;
  }
};
console.log(flowerLatinName)

// Recibirás un error de compilación diciendo que tu
// nuevo tipo de flor no puede convertirse en `never`.

// Never en Uniones

// Un tipo `never` es algo que es automáticamente removido
// de una unión de tipos.

type NeverIsRemoved = string | never | number;

// Si analizas el tipo de NeverIsRemoved, podrás observar que
// es un string | number. Esto se debe a nunca puede pasar en
// tiempo de ejecución debido a que no puedes asignar a un tipo
// `never`.





/*
- ----------------TAREA 7--Cambie el tipo de retorno de la función “greet” a “never”

*/
/*function greet(nombre :String, age :number ) :never   {
    let e :String=  "hello "+ nombre+" your  age is "+age;
    return e
    

}
let e :String=(greet("Josie",25));
console.log(e)*/



/*

- -------------TAREA8  --¿La acción anterior le da algún error? ¿Sí? ¿No? ¿Por qué?
R.-  si existe  un error  pero  este  aun asi se compila   y  se  muestra   ocure  este  error 
porque explicado en el documento  word
*/

/*
---------------TAREA9 Modifique la función “greet” para poder implementar una función 
  como parámetro la cual se encargará de imprimir o generar el saludo, 
  establezca los tipos de datos necesarios para que la función cumpla con los
  requerimientos de TypeScript*/ 
  
     // funcion que  no s ayudara  a generar  el saludo 
    function saludo (x: String, h:number): String {
        let e: String= "hello "+ x+" your  age is "+h;
        return e 
    }

   
    // A una función podemos pasarle otras funciones como parámetros
    /*function greet(f: (j:String ,x: number) => String, j:String ,x:number) :String {
        
        return f(j,x);
    }

    console.log(greet(saludo, "juana",1));
  */
  
  
  
  
  /*
--------------------TAREA 10 Haga una llamada a la función para comprobar sus resultados*/


//console.log(greet(saludo, "Josie",25));




/*
----------------------TAREA  11 Modifique una vez más la función de “greet” para poder imprimir su año de nacimiento,
  pero agregue un parámetro para poder imprimirlo como numero o como cadena, de manera 
  que dependiendo que argumento le pasen, lo imprima como uno de estos dos tipos de datos
*/

//una manera  de  poder aceptar  el parametro como  numero o como cadena 
   /* function greet(f: (j:String ,x: number) => String, j:String ,x:number, a: number | string) :String {
        if (typeof a=== 'number')
        {
          return f(j,x)+" date of birth "+a.toString();
        }
        else 
        {
          return f(j,x)+" date of birth "+a;

        }
       
    }

    console.log(greet(saludo, "juana",1,"8"));*/
  
//------------------segunda  manera de  reaizar  esto
   function greet(f: (j:String ,x: number) => String, j:String ,x:number, a: number | string) :number | string {
       
          return f(j,x)+" date of birth "+a.toString();
      
       
    }

    console.log(greet(saludo, "juana",1,7));


/*
- Es necesario que TODOS los parámetros o variables estén tipados apropiadamente 
  (no valen tipos como “any”, “unknow”, etc)
*/



