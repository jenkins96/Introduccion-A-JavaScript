/*==========================================================
                VARIABLES Y CONSTANTES
 =========================================================*/
/* 
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
// --------------
 // Existen dos formas de asignar valor a una variabl o constante:
 /*
    1) Asignacion por valor:

    2) Asignacion por referencia:
 */

// Diferencias entre "var", "let", "const"
// Hoisting:
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
