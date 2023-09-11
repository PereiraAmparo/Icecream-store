# Mi Proyecto de React.js 
#### Comision 55750
## Amparo's IceCream Store

---

Mi proyecto cosiste en un e-comerce de una Heladeria artesanal.
Es una empresa pequeña y familiar que se dedica a la elaboracion de este noble producto.

Tienen para la venta 3 tipos distintos de helados a saber:
1. Helados con azúcar
1. Helados Diet
1. Helados Sin Gluten, aptos para Celíacos.

En la página principal se listan en catálogo todos los sabores con su simbolo correspondiente a la categoria a la que pertenecen ( con azúcar, diet, sin gluten).![Alt text](../assets/regular.png),![Alt text](../assets/diet.png),![Alt text](../assets/sinGluten.png),   
Asi como el precio por litro y una imagen descriptiva del producto.

En el NavBar en el boton de Nuestos Helados se puede seleccionar por categoria, obteniendo asi solo el listado de los sabores de cada cagtegoria.

Si el cliente hace click en ***detalle*** podra acceder a otra pagina donde se describe, el sabor, tipo de helado , ingredientes y precio del mismo.
Aqui el cliente podrá tambien seleccionar los litros a comprar, que nunca podran ser inferiores a 0.

_Se muestra a continuacion codigo empleado para ello:_
```javascript
 <Button size='xs' onClick={() =>{contador > 0 && setContador (contador -1)}} >
                    -
                </Button>
```



Se puede volver a la pagina inicial en cualquier momento presionando el Icono de la tienda ![Alt text](../assets/brand.ico.png)en el NavBar.


_Se agrega a continuacion un GIF mostrando la funcionalidad de la pagina web:_

![Alt text](GIF.gif)





