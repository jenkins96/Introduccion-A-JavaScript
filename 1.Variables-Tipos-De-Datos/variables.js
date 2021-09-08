/*==========================================================
                VARIABLES Y CONSTANTES
 =========================================================*/
/* 
En su nivel mas bajo, el lenguaje de las computadoras es la electricidad.
Para indicar una instruccion o cualquier otra cosas, esta se transmite a traves
de pulsos o no pulsos de electricidad.Es decir, se abre el circuito para dejar
pasar el pulso de energia o se cierra para que no pase.
En las computadoras la informacion es guardada como una secuencia de 'bits'.
Un 'bit' es la unidad minima de informacion y se representa como cualquier
cosa que tenga dos posibles valores. Para este caso se describen como '1'
y '0'.Donde el primero significa puslo de electricidad y el ultimo es una
ausencia de puslo.
Cualquier informacion de tipo discreto puede ser reducida a una secuencia de
unos y ceros, por tanto, representables en bits.
En una computadora existe una cantidad finita de memoria. Cuando nosotros 
guardamos informacion esta se representara en forma de 'bits' de acuerdo
al tipo de informacion y su valor y ocupara un espacio en la memoria. Cuando
esa informacion no sea necesaria se eliminara, brindando ese espacio para nueva
informacion.
QUE ES UNA VARIABLE?
*Una variable es un espacio en memoria para almacenar un tipo de dato
y asignar un valor.Como su nombre lo indica, su valor es variable, esto
quiere decir que el valor puede ser modificado.
*/
// Una variable se declara de la siguiente manera:
let colorDeCamisa = 'rojo';
console.log(colorDeCamisa);
/* Aqui suceden dos cosas:
 1)Se declara una variable denomidada: 'colorDeCamisa'.
 2) Le asigna el valor de 'rojo' a esta variable.
  */
// Puesto es una variable, es posible modificar su valor:
    colorDeCamisa = 'azul';
    console.log(colorDeCamisa);
// Dado que la variable ya ha sido declarada no se utiliza 'let'

/* 
 QUE ES UNA CONSTANTE?
 * Una constante es un espacio en memoria para almacenar un tipo de dato
y asignar un valor.Como su nombre lo indica, su valor es constante, esto
quiere decir su valor no puede ser modificado despues de su inicialización.

 * Por convencion, las constantes que refieren a un numero o cadena de texto
 se nombran con mayusculas y guion bajo.Esto para indicar visualmente que se 
 trata de un valor que no deberia modificarse.
 */
const NOMBRE_APELLIDO = "Adrian Jenkins";
console.log(NOMBRE_APELLIDO);
/* Aqui suceden dos cosas:
 1)Se declara una constante  denominada: 'NOMBRE_APELLIDO'.
 2) Se le asigna el valor de 'Adrian Jenkins' a esta constante.
  */
// Puesto es una constante, no es posible modificar su valor:
    NOMBRE_APELLIDO = 'Pedrito Micasa'; // Error
    

// Diferencias entre "var", "let", "const"
/*
 Hoisting: Proceso mediante el cual, en la fase de compilacion del motor
 de JS las declaraciones de variables y funciones son asignadas en memoria,
 por tanto, pueden ser accesadas antes de que tecnicamente sean creadas.

*/
// Formas de declarar variables:
let var1, var2, var3;
let var4, var5 = 5, var6 = 5;
const CONS1, CONS2, CONS3;
// Que deberia de utilizar, variables o constantes?
/*
 *Con el tiempo podremos discernir cuando utilizar cada uno. Por el momento, 
 es mejor utilizar constantes ya que esta si arrojara errores si el valor cambia.
 En cambio 'let' modificara el valor de la variable sin darnos cuenta y no arrojara error alguno.
 Es importante destacar que para los iteradores si debemos de utilizar 'let' ya que estos tienen
 que cambiar de valor en cada iteracion. Mas adelante se vera esta materia.
 */
// Convenciones para Nombres Identificadores
/* RECAPITULANDO:
    *  Existen dos formas de almacenar informacion en JS:
             let ==> se utiliza para variables que sabemos van a modificarse en algun momento.
             const ===> se utiliza para variables constantes, que sabemos no van a cambiar.
*/
