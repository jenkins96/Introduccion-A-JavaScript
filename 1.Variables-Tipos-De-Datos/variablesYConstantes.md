# Sobre Variables Y Constantes
El lenguaje de las computadoras son unos y ceros.
Estos se puede materializar de distintas maneras. Hoy en día se materializan
mediante pulsos de electricidad. Para indicar alguna  instrucción esta se transmite a través
de pulsos o no pulsos de electricidad.En este caso '1' significa
pulso de electricidad y '0' ausencia de pulso.  
  
En las computadoras la información es guardada 'bytes', el cual es una secuencia
de ocho 'bits'.  Un 'bit' es la unidad mínima de información y se representa como cualquier
cosa que tenga dos posibles valores. Cualquier información de tipo discreto 
puede ser reducida a una secuencia de unos y ceros, por tanto, representables
en bits.  
  
En una computadora existe una cantidad finita de memoria. Pensemos en un casillero
que tiene 40 casillas. Cuando nosotros guardamos algo en la memoria, esta se transformará
en una secuencia de unos y ceros donde cada valor individual tomará una casilla
temporalmente. Esta información se representa en forma de 'bits' de acuerdo
al valor y ocupará un espacio en la memoria. Cuando esa información no sea 
necesaria se eliminará, liberando  ese espacio para nueva información.  
  
Tomemos por ejemplo el número 5, este se representa como: '1 0 1'. Cada dígito
se guardará en una casilla independiente y el conjunto de esas casillas tendrá
el valor de '5'. Aquí tenemos la visualizacion:    
![texto](./images/locker.png)  
Donde '1000' refiere a la posición en memoria y el valor de '5' ocupa los primeros
tres casilleros (bits) de un total de ocho que conforman un 'byte'.
## ¿Qué Es Una Variable?
**Una variable es un espacio en memoria para almacenar un tipo de dato
y asignar un valor**. Como su nombre lo indica, su valor es variable, esto
quiere decir que el valor puede ser modificado.  
Una variable se declara de la siguiente manera:
```js
let colorDeCamisa = 'rojo';
console.log(colorDeCamisa);
```
Aquí suceden dos cosas:  
 1. Se declara una variable denomidada: 'colorDeCamisa'.  
 2. Se le asigna el valor de 'rojo' a esta variable.  
   
Puesto es una variable, es posible modificar su valor:
```js
    colorDeCamisa = 'azul';
    console.log(colorDeCamisa);
```
Dado que la variable ya ha sido declarada no se utiliza 'let'.
## ¿Qué Es Una Constante? 
**Una constante es un espacio en memoria para almacenar un tipo de dato
y asignar un valor**. Como su nombre lo indica, su valor es constante, esto
quiere decir su valor no puede ser modificado después de su inicialización.  
Por convención, las constantes que refieren a un numero o cadena de texto
se nombran con mayusculas y guión bajo. Esto para indicar visualmente que se 
trata de un valor que no debería modificarse
Una constante se declara de la siguiente manera:
 ```js
const NOMBRE_APELLIDO = "Adrian Jenkins";
console.log(NOMBRE_APELLIDO);
 ```
Aquí suceden dos cosas:  
 1. Se declara una constante  denominada: 'NOMBRE_APELLIDO'.  
 2. Se le asigna el valor de 'Adrian Jenkins' a esta constante.  
   
Puesto es una constante, no es posible modificar su valor y nos genera un error:
```js
  NOMBRE_APELLIDO = 'Pedrito Micasa'; // Error
```
## Formas De Declarar Variable Y Constantes
```js
let var1, var2, var3;
let var4, var5 = 5, var6 = 6;
// Las constantes tienen que ser inicializadas con un valor
const CONS1=1, CONS2=2, CONS3=3;
```
## Concepto De Hoisting
* Hoisting: Proceso mediante el cual durante la fase de compilación el motor
de JavaScript asigna un espacio en memoria a las declaraciones de variables y funciones 
antes de proceder la fase de ejecución.  
## Diferencias Entre var, let y  const
### Var
 Es la forma de nombrar variables anterior a ES6. Tienen alcance global(global scope)
 o alcance de función(function scoped). El alcance es simplemente a donde podemos utilizar
 estas variables. Es global cuando se declara fuera de una función y por tanto se puede utilizar
 en cualquier lugar; mientras que si se declara dentro de una función solamente se puede utilizar
 dentro de ella misma. Asímismo las variables declaradas con 'var' pueden ser redeclaradas.
 ```js
// lAS VARIABLES PUEDE SER REDECLARADAS:
var edadDePedro = 22;
var edadDePedro = 20;

// Sobre alcance global Vs alcance de función
function empresa(){

    var empleado1 = "Federico";

    function recursosHumanos(){

        var empleado2 = "Mari";
        console.log(empleado1);

    }

    if(true){
        var empleado3 = "Johnny Comodin";
    }

    recursosHumanos();
    console.log(empleado3);
    console.log(empleado2);
}
empresa();// "Federico","Johnny Comodin", Reference Error

// Hoisting de var:

console.log(comidaPreferidaDePedro); // Retorna 'undefined' 
var comidaPreferidaDePedro = 'Hamburguesa';

/* Esto sucede así porque durante la fase de compilación
se le asigna un espacio a 'var comidaPreferidaDePedro'. Las variables que 
se inicializan sin ningún valor tiene un valor por defecto de 'undefined'. 
*/

// Comportamiento  de var
var pesoEnKg = 88;
if(true){
    var pesoEnKg = 82;
}
console.log(pesoEnKg); // 82
 ```
### Let
 Forma de declarar variables en ES6. Tiene un alcance de bloque, esto refiere a cualquier codigo dentro de "{}".
 Pueden ser actualizadas pero no redeclaradas dentro del mismo alcance. Al momento del "hoisting" estas
 no son inicializadas por lo que se genera un error.
 ```js
// Puede cambiar de valor, pero no puede ser redeclarada:
let tallaZapatos = 42; // Es válido
tallaZapatos = 43; // Es valido
let tallaZatapos = 41; // Error, ya ha sido declarada.

// Sobre alcance de bloque
function empresa(){

    let empleado1 = "Federico";

    function recursosHumanos(){

        let empleado2 = "Mari";
        console.log(empleado1);

    }

    if(true){
        let empleado3 = "Johnny Comodin";
    }

    recursosHumanos();
    console.log(empleado3);
    console.log(empleado2);
}
empresa();// "Federico",Reference Error, Reference Error
// Cuando el motor de JS se encuentra este error, sale inmediatamente, por lo
// que el segundo "Reference Error" no sale en la consola.

// Hoisting de let, no serán inicializadas, por lo que sucederá un "Reference Error".
console.log(comidaPreferidaDePedro); // "Reference Error" 
let comidaPreferidaDePedro = 'Hamburguesa';

// Comportamiento  de let
let pesoEnKg = 88;
if(true){
    let pesoEnKg = 82;
}
console.log(pesoEnKg); // 88
 ```
### Const
 Forma de declarar variables en ES6. Tiene un alcance de bloque, esto refiere a cualquier codigo dentro de "{}".No pueden ser redeclaras(dentro del mismo alcance) 
 o actualizadas. Al momento de declarar una constante esta tiene que ser
 inicializada con algún valor. Al momento del "hoisting" esta no es
 inicializada, por lo que se genera un error.
 ```js
// Puede cambiar de valor, pero no puede ser redeclarada:
const tallaDeCamisa = "L"; // Es válido
tallaDeCamisa = "M"; //Error Asignación a una variable constante.
const tallaDeCamisa = "S"; // Es válido, mas no deseable.

//Sin embargo, en arrays y objetos **es posible actualizar la información** sin
//ningún problema. Este comportamiento lo exploraremos en otra lección.
const MYARR = [];
MYARR.push(5,67, 3);
console.log(MYARR);

// Sobre alcance de bloque
function empresa(){

    const EMPLEADO_1 = "Federico";

    function recursosHumanos(){

        const EMPLEADO_2 = "Mari";
        console.log(EMPLEADO_1);

    }

    if(true){
        const EMPLEADO_3 = "Johnny Comodin";
    }

    recursosHumanos();
    console.log(EMPLEADO_3);
    console.log(EMPLEADO_2);
}
empresa();// "Federico","Reference Error", "Reference Error"

// "Hoisting" de const, no serán inicializadas, por lo que sucederá un "Reference Error".
console.log(comidaPreferidaDePedro); // Reference Error 
const comidaPreferidaDePedro = 'Hamburguesa';

// Comportamiento  de const
const pesoEnKg = 88;
if(true){
    const pesoEnKg = 82;
}
console.log(pesoEnKg); // 88
 ```
## ¿Qué Debería Utilizar, let o const?
 Con el tiempo podremos discernir cuando utilizar cada uno. Por el momento, 
 **es mejor utilizar constantes** ya que estas sí arrojarán errores si el valor es modificado.
 En cambio 'let' modificará el valor de la variable sin darnos cuenta y no arrojará error alguno.
 Es importante destacar que para los iteradores sí debemos de utilizar 'let' ya que estos tienen
 que cambiar de valor en cada iteración. Más adelante se verá esta materia.
## Convenciones Básicas Para Nombrar Identificadores
 * Los nombres son sensibles a las mayúsculas.
 * Los identificadores deben comenzar con una letra, signo de dolar($) o guion bajo(_).
 * Los identificadores deben consisten  de letras, signo de dolar($) y guion bajo(_).
 * No pueden denominarse como alguna palabra reservada propia de JavaScript.
 * El nombre debe ser autodescriptivo
 * Existen varias formas de nombrar las variables, una de ellas es 'camelCase',
 donde la inicial de cada palabra se escribe con mayúscula, a excepción de la primera palabra.
 * Todos los nombres deben comenzar con una letra.
 * Si es una variable 'booleana' se le debe anteponer un 'is' o 'has'.
 * Si es una función se le debe anteponer un verbo como 'get', 'make', 'apply', etc.
 * Si es constante se suelen nombrar en mayúscula en algún formato como: 'SNAKE_CASE'
 * Si es una variable privada se le antepone un '_' para indicar que es de intencion privada.  
## Recapitulando
 1. Las computadoras almacenan la información en 'bytes',el cual es una cadena de ocho bits que toman unos y ceros como valores.
 2. Existen dos formas de almacenar información en JS:  
    2.1 **let**    ==> tienen un alcance de bloque. Se utiliza para variables que sabemos van a modificarse en algun momento.
    Pueden ser actualizadas pero no redeclaradas.Durante el "hoisting" no son
    inicializadas, generando un error.  
    2.2 **const**  ==> tienen un alcance de bloque. Se utiliza para variables constantes que sabemos no van a cambiar.
    No pueden ser actualizadas ni redeclaradas(existen excepciones).Tienen que
    ser inicializadas con algún valor. Durante el "hoisting" no son
    incializadas, generando un error.   
    2.3 **var**    ==> tienen un alcance global o de función. Pueden ser
    actualizadas y redeclaradas. Durante el "hoisting" son inicializadas con
    "undefined".
 3. "Hoisting" es el mecanismo donde el motor de JavaScript durante la fase de 
 compilación, le asigna un espacio en la memoria  a las declaraciones de variables y funciones.
 4. Como regla general utiliza 'const', será más fácil identificar los errores.
