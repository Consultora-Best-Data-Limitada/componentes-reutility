<h1 align="center">Componentes Reutility</h1>


- [Check Box](#check-box) 
- [Confirmation Dialog](#confirmation-dialog)
- [Custom Button](#custom-button)
- [Custom Date Picker](#custom-date-picker)
- [Custom Dialog](#custom-dialog)
- [Custom Select](#custom-select)
- [Custom Text Field](#custom-text-field)
- [Data Table](#data-table)
- [Data Table Item](#data-table-item)
- [Filter Date Picker](#filter-date-picker)
- [Filter Select](#filter-select)
- [Flex Container](#flex-container)
- [Font Awesome Icon](#font-awesome-icon)
- [Form Date Picker](#form-date-picker)
- [Form Select](#form-select)
- [Form Text Field](#form-text-field)
- [Gradient Button](#gradient-button)
- [Grid Column](#grid-column)
- [Grid Container](#grid-container)
- [Grid Row](#grid-row)
- [Header Tabs](#header-tabs)
- [Icon Button](#icon-button)
- [Image Container](#image-container)
- [Information Text](#information-text)
- [Page Switch](#page-switch)
- [Panel Title](#panel-title)
- [Search Text Field](#search-text-field)
- [Success Dialog](#success-dialog)
- [Svg Icon](#svg-icon)
- [Text Container](#text-container)
# Check Box
Este componente es una casilla de verificación que puede ser seleccionada o no seleccionada por el usuario.
## Props

| Propiedad         | Tipo      | Requerido   | Valor por defecto  | Descripción                                                                                | 
| ----------------- | --------- | :---------: | ------------------ | ------------------------------------------------------------------------------------------ |
| `boxColor`        | `String`  | No          | `acento-principal` | El color de la caja que rodea a la casilla de verificación.
| `boxIcon`         | `String`  | No          | `fal-square`       | El nombre del ícono a utilizar para la caja que rodea a la casilla de verificación. 
| `boxIconSize`     | `String`  | No          | `1rem`             | El tamaño del ícono de la caja que rodea a la casilla de verificación. 
| `checkedColor`    | `String`  | No          | `acento-principal` | El color de la casilla de verificación cuando está seleccionada.
| `checkedIcon`     | `String`  | No          | `fas-square-check` | El nombre del ícono a utilizar para la casilla de verificación cuando está seleccionada.
| `checkedIconSize` | `String`  | No          | `1rem`             | El tamaño del ícono de la casilla de verificación cuando está seleccionada. 
| `disabled`        | `Boolean` | No          | `false`            | Indica si la casilla de verificación está deshabilitada o no.
| `modelValue`      | `Boolean` | Sí          | `false`            | El valor booleano que indica si la casilla de verificación está seleccionada o no. 
| `readonly`        | `Boolean` | No          | `false`            | Indica si la casilla de verificación es de solo lectura  

# Confirmation Dialog 
Es un componente que consiste en una ventana emergente que se muestra en una aplicación para pedir al usuario que confirme una acción antes de que se realice. 
## Props 
| Propiedad    | Tipo               | Requerido   | Valor por defecto | Descripción                                                            | 
| ------------ | ------------------ | :---------: | ----------------- | ---------------------------------------------------------------------- |
| `modelValue` | `Boolean`          | Sí          | `false`           | Propiedad reactiva que controla si se muestra o no la ventana modal
| `subtitle`   | `String`           | No          | `""`              | Subtítulo opcional del dialogo 
| `title`      | `String`           | Sí          | `""`              | Título del dialogo 
| `width`      | `WidthProperty`    | No          | `520px`           | Ancho máximo de la ventana modal 



# Custom Button 
Es un componente que consiste en un boton que se puede personalizar.
## Props 

| Propiedad            | Tipo                          | Requerido   | Valor por defecto | Descripción                                                                                | 
| -------------------- | ----------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| `activeColor`        | `ColorProperty \| CustomColor`| No          | `""`              | Color del componente cuando está activo.        
| `appendIcon`         | `String`                      | No          | `""`              | Icono a mostrar al final del componente.            
| `color`              | `ColorProperty \| CustomColor`| No          | `#000000`         | Color principal del componente.                                                            
| `contentColor`       | `ColorProperty \| CustomColor`| No          | `#ffffff`         | Color del contenido del componente.                                                        
| `disabled`           | `Boolean`                     | No          | `false`           | Indica si el componente está deshabilitado.                                                 
| `gridTemplateColumns`| `GridTemplateColumnsProperty` | No          | `""`              | Propiedad de la cuadrícula CSS que define el tamaño, el número y el diseño de las columnas.
| `height`             | `HeightProperty`              | No          | `2.5rem`          | Altura del componente.                                                                     
| `hoverColor`         | `ColorProperty \| CustomColor`| No          | `""`              | Color del componente cuando se sitúa el cursor sobre él.                                   
| `justifyContent`     | `JustifyContentProperty`      | No          | `center`          | Alineación del contenido del componente.                                          
| `loading`            | `Boolean`                     | No          | `false`           | Indica si el componente está cargando.   
| `outlined`           | `Boolean`                     | No          | `false`           | Indica si el componente debe tener un borde.                                                                              
| `preppendIcon`       | `String`                      | No          | `""`              | Icono a mostrar al principio del componente.                                             
| `width`              | `WidthProperty`               | No          | `initial`         | Ancho del componente.        

# Custom Date Picker
Es un componente que consiste en un selector de fechas personalizable
## Props

| Propiedad     | Tipo                     | Requerido | Valor por defecto | Descripción                                                        | 
| ------------- | ------------------------ | :-------: | ----------------- | ------------------------------------------------------------------ |
| `dark`        | `Boolean`                | No        | `false`           | Indica si el componente está en modo oscuro. 
| `disabled`    | `Boolean`                | No        | `false`           | Indica si el componente está deshabilitado.   
| `errorMessage`| `String`                 | No        | `""`              | Mensaje de error que se muestra cuando hay un error de validación. 
| `maxDate`     | `String \| Date`         | No        | `""`              | Fecha máxima permitida para seleccionar. 
| `minDate`     | `String \| Date`         | No        | `""`              | Fecha mínima permitida para seleccionar.
| `modelValue`  | `Date[] \| Date \| null` | Sí        | `null`            | Valor o valores seleccionados en el componente.                                           
| `outlined`    | `Boolean`                | No        | `false`           | Indica si el componente tiene un borde resaltado.                  
| `placeholder` | `String`                 | No        | `""`              | Texto que se muestra como marcador de posición en el componente.   
| `range`       | `Boolean`                | No        | `false`           | Indica si se permite la selección de un rango de fechas.           
| `readonly`    | `Boolean`                | No        | `false`           | Indica si el componente está en modo de solo lectura.                            




# Custom Dialog
Es un componente que consiste en un dialogo emergente personalizable
## Props 
| Propiedad     | Tipo                 | Requerido   | Valor por defecto | Descripción                                                                           | 
| ------------- | -------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------- |
| `modelValue`  | `Boolean`            | Sí          | `false`           | Propiedad que determina si el componente está activo o no.                            
| `persistent`  | `Boolean`            | No          | `false`           | Propiedad que determina si el componente debe mantener su estado después de cerrarlo. 

# Custom Select
Es un componente que consiste en un selector de valores personalizable 
## Props 
| Propiedad       | Tipo                                  | Requerido   | Valor por defecto | Descripción                                                                                                   | 
| --------------- | ------------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------------------- |

| `errorMessage`  | `String`                              | No          | `""`              | Texto de mensaje de error que se muestra debajo del componente si hay un error de validación.                 
| `placeholder`   | `String`                              | Sí          | `""`              | Texto que se muestra como marcador de posición en el componente                                               
| `itemValue`     | `String`                              | No          | `value`           | Nombre de la propiedad de valor en el objeto de datos de cada opción.                                         
| `itemTitle`     | `String`                              | No          | `title`           | Nombre de la propiedad de título en el objeto de datos de cada opción.                                        
| `returnObject`  | `Boolean`                             | No          | `false`           | Indica si el componente debe devolver el objeto completo de la opción seleccionada en lugar de solo el valor. 
| `clearable`     | `Boolean`                             | No          | `false`           | Indica si se debe mostrar un botón de limpieza para borrar el valor seleccionado.                             
| `textMultiple`  | `String`                              | No          | `""`              | Texto que se muestra cuando se seleccionan varias opciones en el modo `multiple`.                             
| `items`         | `Array`                               | Sí          | `[]`              | Array de objetos que representan las opciones en el componente.                                               
| `textTransform` | `TextTransformProperty`               | No          | `"initial"`       | Valor de la propiedad `text-transform` en CSS que se aplica al texto del componente.                          
| `multiple`      | `Boolean`                             | No          | `false`           | Indica si el componente debe permitir la selección múltiple.                                                  
| `disabled`      | `Boolean`                             | No          | `false`           | Indica si el componente está desactivado y no se puede interactuar con él.                                    
| `readonly`      | `Boolean`                             | No          | `false`           | Indica si el componente está en modo solo lectura.                                                            
| `modelValue`    | `String \| Number \| Object \| Array` | No          | `null`            | Valor actual seleccionado en el componente. El tipo de valor depende del tipo de componente.                  
| `outlined`      | `Boolean`                             | No          | `false`           | Indica si el componente debe mostrar un borde.                                                                
| `searchable`    | `Boolean`                             | No          | `false`           | Indica si el componente debe ser buscable, lo que permite buscar opciones escribiendo en el componente.       
                                                                 


# Custom Text Field
Es un componente que consiste en un campo de texto que se puede personalizar 
## Props
| Propiedad       | Tipo              | Requerido   | Valor por defecto | Descripción                                                                                    | 
| -------------- | ------------------ | :---------: | ----------------- | ---------------------------------------------------------------------------------------------- |
| `dark`         | `Boolean`          | No          | `false`           | Si el campo de entrada debe estar en modo oscuro o no    
| `placeholder`  | `String`           | Sí          | `""`              | Texto que se muestra como indicación del contenido esperado en el campo de entrada              
| `modelValue`   | `String \| Number` | No          | `""`              | Valor actual del campo de entrada                                                              
| `clearable`    | `Boolean`          | No          | `false`           | Si se debe mostrar un botón para borrar el contenido del campo de entrada                      
| `errorMessage` | `String`           | No          | `""`              | Mensaje de error que se muestra debajo del campo de entrada en caso de una validación fallida  
| `disabled`     | `Boolean`          | No          | `false`           | Si el campo de entrada está inhabilitado o no                                                  
| `outlined`     | `Boolean`          | No          | `false`           | Si el campo de entrada tiene un borde delgado en lugar de uno sólido                           
| `readonly`     | `Boolean`          | No          | `false`           | Si el campo de entrada es solo de lectura o no                                                 
| `type`         | `String`           | No          | `text`            | Tipo de campo de entrada, puede ser "email", "phone", "text", "time" o "password"              
                                      


# Data Table
Es un componente que consiste en un tabla de datos personalizable, que se ajusta al diseño utilizado en reutility
## Props
| Propiedad             | Tipo                | Requerido  | Valor por defecto          | Descripción                                                                                    | 
| --------------------- | ------------------- | :--------: | -------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`               | `DataTableItem[]`   | Sí         | `[]`                       | Los datos que se mostrarán en la tabla.    
| `headers`             | `DataTableHeader[]` | Sí         | `[]`                       | Los encabezados de la tabla.   
| `itemsPerPage`        | `Number`            | No         | `10`                       | El número máximo de filas que se mostrarán en la tabla por página.   
| `height`              | `String`            | No         | `100%`                     | La altura de la tabla.  
| `gridTemplateColumns` | `String`            | No         | `""`                       | La plantilla de columnas de cuadrícula de CSS que se utilizará para establecer la anchura de las columnas en la tabla.  
| `noDataText`          | `String`            | No         | `No hay datos registrados` | El texto que se mostrará cuando no haya datos para mostrar en la tabla.  
| `selected`            | `String`            | No         | `""`                       | La fila seleccionada actualmente.    
| `compareSelectedWith` | `String`            | No         | `id`                       | La clave que se utilizará para comparar la fila seleccionada con los objetos en la matriz `items`.  
| `disabledKey`         | `String`            | No         | `""`                       | La clave que se utilizará para determinar si una fila está deshabilitada.  
| `disabledValue`       | `String`            | No         | `""`                       | El valor que se utilizará para determinar si una fila está deshabilitada.  
| `hideNoDataIcon`      | `Boolean`           | No         | `false`                    | Indica si se debe ocultar el icono que se muestra cuando no hay datos en el componente.
| `noDataIcon`          | `String`            | No         | `far-face-frown-slight`    | Define el icono que se muestra cuando no hay datos en el componente.    
# Data Table Item
Es un componente que consiste en un item personalizable de la tabla de datos.  
## Props

| Propiedad       | Tipo                          | Requerido | Valor por defecto | Descripción                                                                 |
| --------------- | ----------------------------- | --------- | ----------------- | --------------------------------------------------------------------------- |
| `disabled`      | `Boolean`                     | No        | `false`           | Indica si el componente está deshabilitado o no.                           
| `selected`      | `Boolean`                     | No        | `false`           | Indica si el componente está seleccionado o no.                             
| `textAlign`     | `String`                      | No        | `"center"`        | Especifica la alineación del texto.  
| `textTransform` | `String`                      | No        | `""`              | Especifica la transformación del texto.                                      
                                        

La propiedad `textTransform` puede tomar uno de los siguientes valores: `none`, `capitalize`, `uppercase`, `lowercase`, `full-width`.

La propiedad `textAlign` puede tomar uno de los siguientes valores: `left`, `right`, `center`, `justify`, `initial`, `inherit`.

# Filter Date Picker
Es un componente que consiste en un filtro personalizable de tipo selector de fechas 
## Props
| Propiedad     | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| ------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `label`       | `String`                         | Sí          | -                 | El texto que se muestra como etiqueta para el componente de calendario.                          
| `maxDate`     | `String \| Date`                 | No          | `""`              | La fecha máxima permitida para ser seleccionada en el componente de calendario.                  
| `minDate`     | `String \| Date`                 | No          | `""`              | La fecha mínima permitida para ser seleccionada en el componente de calendario.   
| `modelValue`  | `Array<Date> \| Date \| null \|` | No          | `null`            | El valor seleccionado actualmente en el componente de calendario.                                
| `placeholder` | `String`                         | No          | `""`              | El texto que se muestra en el componente de calendario cuando no hay ninguna fecha seleccionada. 
| `range`       | `Boolean`                        | No          | -                 | Indica si se permitirá seleccionar un rango de fechas en lugar de una fecha única.               
               

# Filter Select
Es un componente que consiste en un filtro personalizable de tipo selector de opciones. 
## Props
| Propiedad      | Tipo                                          | Requerido  | Valor por defecto | Descripción                                                                                     | 
| -------------- | --------------------------------------------- | :--------: | ----------------- | ----------------------------------------------------------------------------------------------- |
| `label`	       | `String`	                                     | Sí	        | - 	              | Etiqueta del campo de selección                                                                 
| `placeholder`  | `String`	                                     | Sí	        | -	                | Texto de marcador de posición para el campo de selección                                        
| `itemValue`	   | `String`                                      | No	        | `value`	          | Propiedad del objeto de la lista de elementos utilizada como valor del elemento seleccionado    
| `itemTitle`    | `String`	                                     | No	        | `title`	          | Propiedad del objeto de la lista de elementos utilizada como etiqueta del elemento seleccionado 
| `returnObject` | `Boolean`                                     | No	        | `false`	          | Indica si el valor seleccionado debe ser el objeto completo o solo su propiedad "itemValue"     
| `textMultiple` | `String`	                                     | No         |	`""`	            | Texto que se muestra cuando se han seleccionado varios elementos.                               
| `items`	       | `Array`                                       | Sí         | 	-	              | Lista de elementos que se pueden seleccionar                                                    
| `textTransform`| `String`	                                     | No         |	`initial`         |	Estilo de transformación de texto para la etiqueta del elemento seleccionado                    
| `multiple`	   | `Boolean`                                     | No	        | `false`	          | Indica si se permiten selecciones múltiples                                                   
| `modelValue`	 | `String \| Number \| Object \| Array \| null` | No         | `null`	          | Valor o valores seleccionados en el campo de selección                                           
| `searchable`   | `Boolean`	                                   | No	        | `false`           |	Indica si se puede buscar en la lista de elementos                                              




# Flex Container
Es un componente que es un contenedor flex
[Flex Container](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container)
## Props
| Propiedad        | Tipo               | Requerido  | Valor por defecto | Descripción                                                                     | 
| ---------------- | ------------------ | :--------: | ----------------- | ------------------------------------------------------------------------------- |
| `padding`	       | `String \| Number` |	No         | `0`               | Define el espacio entre el borde del componente y su contenido.
| `margin`	       | `String \| Number` | No         | `0`	             | Define el espacio entre el componente y los elementos circundantes.
| `width`	         | `String`	          | No         | `""`	             | Define el ancho del componente.
| `height`	       | `String`           | No         | `""`	             | Define la altura del componente.
| `alignItems`	   | `String`           | No         | `""`	             | Define la alineación vertical de los elementos dentro del componente.
| `alignContent`	 | `String`           | No         | `""`	             | Define la alineación vertical de varias filas dentro del componente.
| `justifyItems`	 | `String`	          | No         | `""`	             | Define la alineación horizontal de los elementos dentro del componente.
| `flexDirection`	 | `String`	          | No         | `row`	           | Define la dirección principal en la que se apilan los elementos dentro del componente.
| `justifyContent` | `String`           |	No         | `""`              | Define la alineación horizontal de los elementos dentro del componente.

# Font Awesome Icon
Es un componente que consiste en un icono perteneciente a la libreria Font Awesome 
## Props
| Propiedad  | Tipo               | Requerido  | Valor por defecto | Descripción                         | 
| ---------- | ------------------ | :---------:| ----------------- | ----------------------------------- |
| `name`	   | `String`           |	Sí         | `""`	             | El nombre del ícono a mostrar.      
| `color`	   | `String`           | No	       | `black`	         | El color del ícono en formato CSS.  
| `size`	   | `String \| Number` |	No	       | `1rem`	           | El tamaño del ícono en formato CSS. 
# Form Date Picker
Es un componente que consiste en un selector de fecha personalizable para formularios
## Props
| Propiedad             | Tipo                    | Requerido   | Valor por defecto | Descripción                                                                                      | 
| --------------------- | ----------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `label`               |	`String`	              | No          | `""`              | Etiqueta del campo de entrada
| `errorMessage`	      | `String`	              | No          | `""`              | Mensaje de error para mostrar debajo del campo de entrada en caso de que sea necesario	
| `placeholder`	        | `String`	              | No          | `""`              | Texto de marcador de posición para el campo de entrada	Requerido
| `clearable`	          | `Boolean`               | No	        | `false`           | Si se debe mostrar o no un botón de limpieza para borrar el contenido del campo de entrada	false
| `range`	              | `Boolean`               | No          | `false`           | Si el campo de entrada es de selección de rango (para un intervalo de fechas)	false
| `disabled`	          | `Boolean`               | No	        | `false`           | Si el campo de entrada está deshabilitado y no se puede editar	false
| `readonly`	          | `Boolean`               | No          | `false`           | Si el campo de entrada es de solo lectura y no se puede editar, pero aún puede seleccionar valores.
| `modelValue`	        | `Date[] \| Date \| null`| No          | `null`            | Valor de entrada del campo (fecha o rango de fechas)	
| `outlined`	          | `Boolean`               |	No          | `false`           | Define si el campo de entrada debe tener un borde exterior resaltado	
| `gridTemplateColumns`	| `String`                | No          | `1fr 3fr`         | Plantilla de columna de cuadrícula CSS para los elementos de fecha y tiempo en el campo de entrada	
| `maxDate`	            | `String \| Date`        |	No          |	`""`              | Fecha máxima seleccionable en el calendario	""
| `minDate`	            | `String \| Date`        |	No          |	`""`              | Fecha mínima seleccionable en el calendario	
| `dark`                |	`Boolean`	              | No          | `false`           | El tema de la interfaz es oscuro


# Form Select
Es un componente que consiste en un selector de opciones personalizable para formularios
## Props
| Propiedad             | Tipo                                  | Requerido   | Valor por defecto | Descripción                                                                                      | 
| --------------------- | ------------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `label`               |	`String`	                            | Sí          |	`""`	            | Etiqueta para el componente
| `errorMessage`	      | `String`	                            | No	        | `""`              |	Mensaje de error a mostrar si hay un problema con el componente
| `placeholder`	        | `String`	                            | Sí	        | `""`	            | Placeholder para el componente
| `itemValue`	          | `String`	                            | No	        | `value`	          | El nombre de la propiedad en el objeto de items que se usará como valor en el modelo de datos
| `itemTitle`	          | `String`	                            | No	        | `title`	          | El nombre de la propiedad en el objeto de items que se usará como título para mostrar en la lista desplegable
| `returnObject`        |	`Boolean`	                            | No	        | `false`	          | Determina si el modelo de datos debe ser un objeto con las propiedades itemValue e itemTitle o simplemente el valor seleccionado
| `clearable`	          | `Boolean`	                            | No	        | `false`           |	Si se establece en verdadero, se mostrará un botón para limpiar la selección
| `textMultiple`	      | `String`	                            | No	        | `""`	            | Texto que se muestra si se seleccionan varios elementos
| `items`               |	`Array`                               |	Sí	        | `[]`	            | Array de objetos para poblar la lista desplegable
| `textTransform`	      | `String`                              |	No	        | `initial`         |	El valor para la propiedad CSS text-transform del elemento
| `multiple`	          | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, se permitirá la selección múltiple
| `disabled`	          | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, se desactivará el componente
| `readonly`	          | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, el componente será de solo lectura
| `modelValue`	        | `String \| Number \| Object \| Array`	| No	        | `null`	          | Modelo de datos para el componente
| `outlined`	          | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, el componente tendrá un borde delgado en lugar de un fondo sólido
| `gridTemplateColumns`	| `String`	                            | No	        | `1fr 3fr`	        | El valor para la propiedad CSS grid-template-columns del elemento
| `searchable`	        | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, se agregará una barra de búsqueda a la lista desplegable
| `dark`                | `Boolean`	                            | No	        | `false`	          | Si se establece en verdadero, se aplicará un tema oscuro al componente
# Form Text Field
Es un componente que consiste en un campo de texto personalizable para formularios 
## Props
| Propiedad             | Tipo               | Requerido   | Valor por defecto | Descripción                                                                                      | 
| --------------------- | ------------------ | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `modelValue`	        | `String \| Number` | No          | `""`	             | Valor del campo de entrada
| `label`	              | `String`	         | Sí	         | `""`	             | Etiqueta del campo de entrada
| `placeholder`	        | `String`	         | Sí	         | `""`	             | Placeholder del campo de entrada
| `errorMessage`        | `String`	         | No	         | `""`	             | Mensaje de error del campo de entrada
| `readonly`	          | `Boolean`          | No	         | `false`	         | Indica si el campo de entrada es de solo lectura
| `dark`	              | `Boolean`	         | No	         | `false`	         | Indica si el campo de entrada se muestra en modo oscuro
| `disabled`	          | `Boolean`          | No	         | `false`           | Indica si el campo de entrada está deshabilitado
| `outlined`	          | `Boolean`	         | No	         | `false`	         | Indica si el campo de entrada tiene un borde exterior
| `clearable`	          | `Boolean`	         | No	         | `false`	         | Indica si el campo de entrada tiene un botón para borrar su valor
| `gridTemplateColumns` |	`String`	         | No	         | `1fr 3fr`	       | El valor de la propiedad grid-template-columns de CSS que se aplica al campo de entrada y su etiqueta
| `type`	              | `String`           | No	         | `text`	           | Tipo de campo de entrada
| `appendIcon`	        | `String`           | No          |	`""`	           | El icono que se muestra después del campo de entrada, según la sintaxis de los iconos utilizados en la aplicación.

En la propiedad `type` solo se puede escoger entre estos valores: `email`, `phone`, `text`, `time`, `password`
# Gradient Button 
Es un componente que consiste en un boton que tiene gradiente
**Deprecated:** Este componente no es utilizado y sera removido en una futura versión. 

## Props
| Propiedad      | Tipo             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| ----------- | ------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `width`	    | `String \| Number`	| No	        | `100%`	          |El ancho del botón.
| `height`	  | `String \| Number`	| No	        | `100%`	          |La altura del botón.
| `colorFrom`	| `String`	          | No	        | `#000000`	        |El color de fondo del gradiente desde el que se realiza la transición.
| `colorTo`   |	`String`	          | No	        | `#ffffff`	        |El color de fondo del gradiente hacia el que se realiza la transición.
| `textColor`	| `String`	          | No	        | `#ffffff`	        |El color del texto en el botón.
| `disabled`	|` Boolean`	          | No	        | `false`	          |Indica si el botón está desactivado.
| `icon`	    | `String`	          | No	        | `""`	            |La clase del icono que se mostrará en el botón.
| `loading`	  | `Boolean`	          | No	        | `false`	          |Indica si el botón está en estado de carga.
# Grid Column
Es una columna de tipo Grid  
[Grid Column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
## Props
| Propiedad          | Tipo                                       | Requerido  | Valor por defecto | Descripción                                                                                      | 
| ------------------ | ------------------------------------------ | :--------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `alignContent`     | `AlignContentProperty`	                    |  No        | `""`	             | Establece la alineación del contenido en el eje de la grilla.
| `alignItems`	     | `AlignItemsProperty`	                      |  No        | `""`	             | Establece la alineación de los elementos a lo largo del eje transversal.
| `backgroundColor`	 | `BackgroundColorProperty \|	CustomColor`	|  No        | `transparent`     | Establece el color del fondo de una columna grid
| `borderRadius`	   | `BorderRadiusProperty`	                    |  No        | `""`	             | Establece el radio de los bordes del elemento.
| `boxShadow`	       | `BoxShadowProperty`	                      |  No        | `""`	             | Establece la sombra del elemento.
| `gridColumn`	     | `GridColumnProperty`	                      |  No        | `""`	             | Establece la posición en la que el elemento aparece en la grilla en el eje de las columnas.
| `gridRow`	         | `GridRowProperty	`                         |  No        | `""`	             | Establece la posición en la que el elemento aparece en la grilla en el eje de las filas.
| `gridTemplateRows` | `GridTemplateRowsProperty`	                |  No        | `initial`	       | Establece la cantidad de filas y su tamaño en la grilla.
| `height`	         | `HeightProperty`	                          |  No        | `auto`	           | Establece la altura del elemento.
| `justifyContent`   | `JustifyContentProperty`	                  |  No        | `""`	             | Establece la alineación de los elementos a lo largo del eje principal.
| `justifyItems`	   | `JustifyItemsProperty`                     |  No        | `""`	             | Establece la alineación del contenido a lo largo del eje principal.
| `margin`	         | `MarginProperty`	                          |  No        | `0`	             | Establece el margen del elemento.
| `overflow`	       | `OverflowProperty`	                        |  No        | `initial`	       | Establece el comportamiento de desbordamiento del elemento.
| `padding`	         | `PaddingProperty`	                        |  No        | `0`	             | Establece el relleno del elemento.
| `rowGap`	         | `RowGapProperty`	                          |  No        | `0`	             | Establece el espacio entre filas de la grilla.
| `width`	           | `WidthProperty`	                          |  No        | `initial`	       | Establece el ancho del elemento.
# Grid Container
Es un contenedor de tipo Grid  
[Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
## Props
| Propiedad      | Tipo                           | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | ------------------------------ | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `height`	            | `String \| Number`	    | No          | `auto`            |	Define la altura del componente.
| `alignItems`	        | `String`	              | No          | `""`              |	Define la alineación vertical de los elementos en el componente.
| `alignContent`	      | `String`	              | No          | `""`              |	Define la alineación de las filas en el eje vertical en el componente.
| `justifyContent`	    | `String`	              | No          | `""`              |	Define la alineación horizontal de los elementos en el componente.
| `justifyItems`	      | `String`	              | No          | `""`              |	Define la alineación de los elementos en el eje horizontal en el componente.
| `gridTemplateRows`	  | `String \| Number`	    | No          | `initial`         |	Define las filas de la cuadrícula en el componente.
| `rowGap`	            | `String \| Number`	    | No          | `0`               |	Define la separación vertical entre las filas de la cuadrícula en el componente.
| `margin`	            | `String \| Number`	    | No          | `0`               |	Define los márgenes del componente.
| `padding`	            | `String \| Number`	    | No          | `0`               |	Define el espacio interior del componente.
| `gridTemplateColumns`	| `String \| Number`	    | No          | `initial`         |	Define las columnas de la cuadrícula en el componente.
| `columnGap`	          | `String \| Number`	    | No          | `0`               |	Define la separación horizontal entre las columnas de la cuadrícula en el componente.
| `gridAutoFlow`	      | `String`	              | No          | `""`              |	Define cómo se disponen los elementos en la cuadrícula en el componente.
| `backgroundColor`	    | `String \| CustomColor`	| No          | `transparent`     |	Define el color de fondo del componente.
| `borderRadius`	      | `String`	              | No          | `""`              |	Define el radio de las esquinas del componente.
| `boxShadow`	          | `String`	              | No          | `""`              |	Define la sombra del componente.
# Grid Row
Es una fila de tipo Grid  
[Grid Row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
## Props
| Propiedad             | Tipo                                     | Requerido   | Valor por defecto | Descripción                                                                                      | 
| --------------------- | ---------------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `width`	              | `WidthProperty`	                         | No          | `""`	             |Ancho del elemento.
| `backgroundColor`     |	`BackgroundColorProperty \| CustomColor` | No          | `""`	             | Color de fondo del elemento.
| `gridColumn`	        | `GridColumnProperty`                     | No          | `""`	             | Especifica en qué columna(s) debe estar ubicado el elemento.
| `gridRow`	            | `GridRowProperty`	                       | No          | `""`              | Especifica en qué fila(s) debe estar ubicado el elemento.
| `padding`	            | `PaddingProperty`	                       | No          | `0`	             | Espacio de relleno del elemento.
| `columnGap`	          | `ColumnGapProperty`                      | No          | `0`	             | Espacio entre las columnas de una cuadrícula de CSS.
| `gridTemplateColumns`	| `GridTemplateColumnsProperty`	           | No          | `initial`	       | Especifica el tamaño y el número de columnas de una cuadrícula de CSS.
| `gridAutoColumns`	    | `GridAutoColumnsProperty`	               | No          | `""`              | Especifica la longitud de las columnas no explícitamente especificadas de una cuadrícula de CSS.
| `justifyContent`	    | `JustifyContentProperty`	               | No          | `""`	             | Define cómo se alinearán los elementos en el contenedor a lo largo del eje principal (horizontal) de la flexbox o cuadrícula.
| `alignItems`	        | `AlignItemsProperty`	                   | No          | `""`	             | Define cómo se alinearán los elementos en el contenedor a lo largo del eje secundario (vertical) de la flexbox o cuadrícula.
| `height`	            | `HeightProperty`	                       | No          | `""`           	 | Altura del elemento.
# Header Tabs
Es un componente que consiste en pestañas de cabecera que son utilizadas en los distintos formularios.
## Props
| Propiedad    | Tipo                                     | Requerido   | Valor por defecto  | Descripción                                                                                      | 
| ------------ | ---------------------------------------- | :---------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| `color`	     | `BackgroundColorProperty \| CustomColor` |	No          |	`acento-principal` | El color de fondo del menú desplegable. Puede ser un color CSS válido o un nombre de color personalizado definido.
| `columnGap`	 | `ColumnGapProperty`	                    | No          |	`0.5rem`	         | El espacio entre columnas en el menú desplegable, que puede ser especificado en cualquier unidad de longitud CSS válida.
| `items`      | `String[]`                               |	Sí          |	N/A                | Es un arreglo de strings que se utiliza para generar los elementos de la lista desplegable.
| `modelValue` | `Number`	                                | Sí          |	N/A	               | El valor seleccionado actual de la lista desplegable.


# Icon Button
Es un componente que representa un boton con forma de un icono. 
## Props
| Propiedad         | Tipo                      | Requerido   | Valor por defecto | Descripción                                                                                      | 
| ----------------- | ------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `color`	          | `String \| CustomColor`	  | No	        | `black`	          | El color del icono
| `icon`	          | `String`	                | Sí          |	`""`	            | El nombre del icono, para ser usado en la biblioteca de iconos
| `size`	          | `String \| WidthProperty`	| No	        | `20px`	          | El tamaño del icono
| `disabled`	      | `Boolean`	                | No	        | `false`	          | Indica si el icono está deshabilitado o no
| `backgroundColor` |	`String \| CustomColor`	  | No	        | `""`	            | El color de fondo del contenedor del icono
| `containerSize`   |	`String \| WidthProperty`	| No	        | `""`	            | El tamaño del contenedor que contiene el icono. Si no se establece, el contenedor se ajustará al icono
# Image Container
Es un componente que consiste en un contenedor para una imagen.
## Props
| Propiedad        | Tipo                    | Requerido   | Valor por defecto | Descripción                                                                                      | 
| ---------------- | ----------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `src`	           | `String`	               | Sí	         | `""`              | La URL de la imagen a mostrar.
| `alt`	           | `String`                | No	         | `Image`	         | El texto alternativo que se muestra si la imagen no puede cargarse.
| `objectPosition` | `ObjectPositionProperty`| No	         | `""`              | Define la posición de la imagen dentro de su contenedor.
| `width`          | `WidthProperty`	       | No	         | `""`              | Define el ancho de la imagen.
| `height`         | `HeightProperty`        | No	         | `""`	             | Define la altura de la imagen.
| `objectFit`      | `ObjectFitProperty`	   | No	         | `""`	             | Define cómo se ajusta la imagen dentro de su contenedor.
| `aspectRatio`    | `AspectRatioProperty`	 | No	         | `""`	             | Define la relación de aspecto de la imagen.
| `clickable`      | `Boolean`               | No          | `false`	         | Si se establece en verdadero, se agrega un manejador de eventos para hacer clic en la imagen y se emite el evento.
# Information Text
Es un componente que consiste 
## Props
| Propiedad             | Tipo      | Requerido   | Valor por defecto | Descripción                                                                                      | 
| --------------------- | --------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `label`	              | `String`	| Sí	        | `""`	            | Etiqueta del componente
| `gridTemplateColumns` |	`String`	| No	        | `1fr 3fr`	        | Valor para la propiedad CSS grid-template-columns
| `padding`	            | `String`	| No	        | `0.75rem 0`       | Valor para la propiedad CSS padding
| `textTransform`	      | `String`	| No	        | `capitalize`	    | Valor para la propiedad CSS text-transform
# Page Switch
Es un componente que consiste en un switch personalizable
## Props
| Propiedad             | Tipo                           | Requerido   | Valor por defecto  | Descripción                                                                                      | 
| --------------------- | ------------------------------ | :---------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| `modelValue`	        | `Boolean`                      | Sí	         | `false`	          | Valor booleano que indica si el componente está activado o no.
| `label`	              | `String`                       | No	         | `""`               |	Texto que se muestra junto al componente.
| `tooltip`             |	`String`	                     | No	         | `""`               | Texto que se muestra al pasar el mouse sobre el componente.
| `disabled`	          | `Boolean`	                     | No	         | `false`            |	Indica si el componente está deshabilitado.
| `activeColor`         |	`ColorProperty \| CustomColor` | No          | `acento-principal` |	Color del componente cuando está activado. Puede ser un color CSS o una cadena personalizada.
| `width`	              | `WidthProperty`                | No	         | `1.5rem`	          | Ancho del componente. Puede ser un valor CSS o una cadena personalizada.
| `color`	              | `ColorProperty \| CustomColor` | No	         | `neutro-4`	        | Color del componente. Puede ser un color CSS o una cadena personalizada.
| `readonly`	          | `Boolean`                      | No	         | `false`            | Indica si el componente es de solo lectura.
| `labelWeight`	        | `FontWeightProperty`           | No	         | `600`	            | Peso de la fuente del texto del componente. Puede ser un valor numérico o una cadena.
| `gridTemplateColumns`	| `GridTemplateColumnsProperty`	 | No	         | `1fr auto`	        | Define la cantidad y tamaño de columnas para el contenedor del componente. Puede ser un valor CSS o una cadena personalizada.
| `justifyContent`	    |  `JustifyContentProperty`      | No	         | `initial`	        | Alineación del contenido del componente. Puede ser un valor CSS o una cadena personalizada
# Panel Title
Es un componente que consiste en un panel en donde se muestra el titulo para los formularios y además provee la acción de añadir un boton de cerrado
## Props
| Propiedad  | Tipo      | Requerido  | Valor por defecto | Descripción                                 | 
| ---------- | --------- | :---------:| ----------------- | ------------------------------------------- |
| `closable` | `Boolean` | No	        | `false`           |	Indica si el componente es cerrable o no. 
# Search Text Field 
Es un componente que contiene un campo de texto de búsqueda.
## Props 
| Propiedad      | Tipo     | Requerido  | Valor por defecto | Descripción                                            | 
| -------------- | -------- | :---------:| ----------------- | ------------------------------------------------------ |
| `placeholder`  | `String` | Sí         | `""`              | Texto a mostrar como placeholder del input
| `modelValue`   | `String` | No         | `""`              | Propiedad reactiva que controla el valor del input 


# Success Dialog 
Es un componente consiste en una ventana emergente que se muestra en una aplicación para mostrar un mensaje de éxito.  
## Props
| Propiedad    | Tipo               | Requerido   | Valor por defecto | Descripción                                                         | 
| ------------ | ------------------ | :---------: | ----------------- | ------------------------------------------------------------------- |
| `duration`   | `Number`           | No          | `3000`            | Duración en milisegundos de la notificación antes de desaparecer
| `icon`       | `String`           | Sí          | `""`              | Ícono a mostrar en la notificación 
| `maxWidth`   | `String \| Number` | No          | `520`             | Ancho máximo de la notificación 
| `modelValue` | `Boolean`          | Sí          | `false`           | Propiedad reactiva que controla si se muestra o no la notificación
| `subtitle`   | `String`           | No          | `""`              | Texto secundario opcional a mostrar en la notificación 
| `text`       | `String`           | Sí          | `""`              | Texto a mostrar en la notificación 

# SVG Icon 
Es un componente que representa un icono SVG. 
## Props 
| Propiedad  | Tipo               | Requerido   | Valor por defecto | Descripción                                            | 
| ---------- | ------------------ | :---------: | ----------------- | -------------------------------------------------------|
| `color`    | `String`           | No          | `black`           | Color del icono 
| `size`     | `String \| Number` | No          | `1.5rem`          | Tamaño del icono
| `src`      | `String`           | No          | `""`              | Ruta de la imagen del icono 

# Text Container 
Es un componente que representa un contenedor de texto configurable.
## Props 

| Propiedad          | Tipo                           | Requerido   | Valor por defecto | Descripción                                                           | 
| ------------------ | ------------------------------ | :---------: | ----------------- | --------------------------------------------------------------------- |
| `activeBackground` | `ColorProperty \| CustomColor` | No          | `-neutro-3`       | Color de fondo cuando el componente está activo.     
| `activeColor`      | `ColorProperty \| CustomColor` | No          | `#ffffff`         | Color del texto cuando el componente está activo.    
| `borderRadius`     | `String`                       | No          | `initial`         | Radio de la esquina del borde del componente.
| `clickable`        | `Boolean`                      | No          | `false`           | Indica si el componente es interactivo.   
| `color`            | `ColorProperty \| CustomColor` | No          | `""`              | Color del texto.      
| `fontFamily`       | `String`                       | No          | `Metropolis`      | Tipo de fuente del texto.                                     
| `fontSize`         | `String \| Number`             | No          | `1rem`            | Tamaño de fuente del texto.              
| `fontWeight`       | `String \| Number`             | No          | `""`              | Grosor de la fuente.                 
| `hoverBackground`  | `ColorProperty \| CustomColor` | No          | `-neutro-1`       | Color de fondo cuando se pasa el cursor sobre el componente.  
| `hoverColor`       | `ColorProperty \| CustomColor` | No          | `""`              | Color del texto cuando se pasa el cursor sobre el componente.    
| `letterSpacing`    | `String \| Number`             | No          | `""`              | Espaciado entre las letras del texto.             
| `lineHeight`       | `String \| Number`             | No          | `1rem`            | Altura de línea del texto.                      
| `padding`          | `String \| Number`             | No          | `0`               | Espacio entre el contenido y el borde del componente.     
| `predefinedStyle`  | `String`                       | No          | `""`              | Estilo predefinido para el componente.
| `specialText`      | `String`                       | No          | `""`              | Agregando los caracteres especiales `*` entre una palabra o mas, para reemplazar el tipo de letra a negrita
| `textAlign`        | `String`                       | No          | `""`              | Alineación del texto.                                            
| `textTransform`    | `String`                       | No          | `""`              | Transformación del texto.   
| `whiteSpace`       | `String`                       | No          | `""`              | Espacio en blanco entre las palabras del texto.                          

La propiedad `predefinedStyle` define un conjunto de propiedades predefinidas que se aplican al componente en función del valor proporcionado. Puede ser uno de los siguientes valores: `primary`, `secondary`, `success`, `danger`, `warning`. 

