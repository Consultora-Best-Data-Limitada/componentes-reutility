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

| Propiedad          | Tipo                                           | Requerido |    Valor por defecto             | Descripción                                                                                                                          |
| ------------------ | ---------------------------------------------- | --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `boxIcon`         | `String` | No| `fal-square`       |  El nombre del ícono a utilizar para la caja que rodea a la casilla de verificación. Puede ser cualquier nombre de ícono que se encuentre en la biblioteca de íconos utilizada por el proyecto. |
| `boxColor`        | `String` | No| `acento-principal` | El color de la caja que rodea a la casilla de verificación. Puede ser cualquier color válido en CSS o un nombre de color personalizado definido en el proyecto.|
| `checkedColor`    | `String` | No| `acento-principal` | El color de la casilla de verificación cuando está seleccionada. Puede ser cualquier color válido en CSS o un nombre de color personalizado definido en el proyecto. |
| `readonly`        | `Boolean`| No| `false`            | Indica si la casilla de verificación es de solo lectura  |
| `disabled`        | `Boolean`| No| `false`            | Indica si la casilla de verificación está deshabilitada o no.|
| `boxIconSize`     | `String` | No| `1rem`             | El tamaño del ícono de la caja que rodea a la casilla de verificación. Puede ser cualquier valor válido de tamaño de fuente en CSS. |
| `checkedIcon`     | `String` | No| `fas-square-check` | El nombre del ícono a utilizar para la casilla de verificación cuando está seleccionada. Puede ser cualquier nombre de ícono que se encuentre en la biblioteca de íconos utilizada por el proyecto. |
| `checkedIconSize` | `String` | No| `1rem`             | El tamaño del ícono de la casilla de verificación cuando está seleccionada. Puede ser cualquier valor válido de tamaño de fuente en CSS. |
| `modelValue`      | `Boolean`| Sí| `false`            | El valor booleano que indica si la casilla de verificación está seleccionada o no. Este valor debe ser pasado al componente y actualizado en respuesta a los cambios de estado de la casilla de verificación. |
# Confirmation Dialog 
## Props 
| Propiedad    | Tipo               | Requerido   | Valor por defecto | Descripción | 
| ------------ | ------------------ | :---------: | ----------------- | ----------- |
| `title`      | `String`           | Sí          | `undefined`       | Título del dialogo |
| `subtitle`   | `String`           | No          | `""`              | Subtítulo opcional del dialogo |  
| `modelValue` | `Boolean`          | Sí          | `false`           | Propiedad reactiva que controla si se muestra o no la ventana modal  |
| `Width`      | `WidthProperty`    | No          | `520px`           | Ancho máximo de la ventana modal |  



# Custom Button 
## Props 

| Propiedad            | Tipo                          | Requerido   | Valor por defecto | Descripción                                                                                | 
| -------------------- | ----------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| `color`              | `ColorProperty \| CustomColor`| No          | `#000000`         | Color principal del componente.                                                            |
| `contentColor`       | `ColorProperty \| CustomColor`| No          | `#ffffff`         | Color del contenido del componente.                                                        |
| `hoverColor`         | `ColorProperty \| CustomColor`| No          | `""`              | Color del componente cuando se sitúa el cursor sobre él.                                   |
| `activeColor`        | `ColorProperty \| CustomColor`| No          | `""`              | Color del componente cuando está activo.                                                   |
| `outlined`           | `Boolean`                     | No          | `false`           | Indica si el componente debe tener un borde.                                               |
| `width`              | `WidthProperty`               | No          | `initial`         | Ancho del componente.                                                                      |
| `height`             | `HeightProperty`              | No          | `2.5rem`          | Altura del componente.                                                                     |
| `disabled`           | `Boolean`                     | No          | `false`           | Indica si el componente está deshabilitado.                                                |
| `appendIcon`         | `String`                      | No          | `""`              | Icono a mostrar al final del componente.                                                   |
| `preppendIcon`       | `String`                      | No          | `""`              | Icono a mostrar al principio del componente.                                               |
| `justifyContent`     | `JustifyContentProperty`      | No          | `center`          | Alineación del contenido del componente.                                                   |
| `gridTemplateColumns`| `GridTemplateColumnsProperty` | No          | `""`              | Propiedad de la cuadrícula CSS que define el tamaño, el número y el diseño de las columnas.|
| `loading`            | `Boolean`                     | No          | `false`           | Indica si el componente está cargando.                                                     |



# Custom Date Picker
## Props

| Propiedad     | Tipo                     | Requerido | Valor por defecto | Descripción                                                        | 
| ------------- | ------------------------ | :-------: | ----------------- | ------------------------------------------------------------------ |
| `modelValue`  | `Date[] \| Date \| null` | Sí        | `null`            | Valor o valores seleccionados en el componente.                    |
| `range`       | `Boolean`                | No        | `false`           | Indica si se permite la selección de un rango de fechas.           |
| `readonly`    | `Boolean`                | No        | `false`           | Indica si el componente está en modo de solo lectura.              |
| `disabled`    | `Boolean`                | No        | `false`           | Indica si el componente está deshabilitado.                        |
| `placeholder` | `String`                 | No        | `undefined`       | Texto que se muestra como marcador de posición en el componente.   |
| `maxDate`     | `String \| Date`         | No        | `undefined`       | Fecha máxima permitida para seleccionar.                           |
| `minDate`     | `String \| Date`         | No        | `undefined`       | Fecha mínima permitida para seleccionar.                           |
| `errorMessage`| `String`                 | No        | `undefined`       | Mensaje de error que se muestra cuando hay un error de validación. |
| `outlined`    | `Boolean`                | No        | `false`           | Indica si el componente tiene un borde resaltado.                  |
| `dark`        | `Boolean`                | No        | `false`           | Indica si el componente está en modo oscuro.                       |




# Custom Dialog
## Props 
| Propiedad     | Tipo                 | Requerido   | Valor por defecto | Descripción                                                                           | 
| ------------- | -------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------- |
| `modelValue`  | `Boolean`            | Sí          | `false`           | Propiedad que determina si el componente está activo o no.                            |
| `persistent`  | `Boolean`            | No          | `false`           | Propiedad que determina si el componente debe mantener su estado después de cerrarlo. |

# Custom Select
## Props 
| Propiedad       | Tipo                                  | Requerido   | Valor por defecto | Descripción                                                                                                   | 
| --------------- | ------------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| `errorMessage`  | `String`                              | No          | `""`              | Texto de mensaje de error que se muestra debajo del componente si hay un error de validación.                 |
| `placeholder`   | `String`                              | Sí          |  N/A              | Texto que se muestra como marcador de posición en el componente                                               |
| `itemValue`     | `String`                              | No          | `"value"`         | Nombre de la propiedad de valor en el objeto de datos de cada opción.                                         |
| `itemTitle`     | `String`                              | No          | `"title"`         | Nombre de la propiedad de título en el objeto de datos de cada opción.                                        |
| `returnObject`  | `Boolean`                             | No          | `false`           | Indica si el componente debe devolver el objeto completo de la opción seleccionada en lugar de solo el valor. |
| `clearable`     | `Boolean`                             | No          | N/A               | Indica si se debe mostrar un botón de limpieza para borrar el valor seleccionado.                             |
| `textMultiple`  | `String`                              | No          | `""`              | Texto que se muestra cuando se seleccionan varias opciones en el modo `multiple`.                             |
| `items`         | `Array`                               | Sí          | N/A               | Array de objetos que representan las opciones en el componente.                                               |
| `textTransform` | `TextTransformProperty`               | No          | `"initial"`       | Valor de la propiedad `text-transform` en CSS que se aplica al texto del componente.                          |
| `multiple`      | `Boolean`                             | No          | N/A               | Indica si el componente debe permitir la selección múltiple.                                                  |
| `disabled`      | `Boolean`                             | No          | N/A               | Indica si el componente está desactivado y no se puede interactuar con él.                                    |
| `readonly`      | `Boolean`                             | No          | N/A               | Indica si el componente está en modo solo lectura.                                                            |
| `modelValue`    | `String \| Number \| Object \| Array` | No          | `null`            | Valor actual seleccionado en el componente. El tipo de valor depende del tipo de componente.                  |
| `outlined`      | `Boolean`                             | No          | N/A               | Indica si el componente debe mostrar un borde.                                                                |
| `searchable`    | `Boolean`                             | No          | N/A               | Indica si el componente debe ser buscable, lo que permite buscar opciones escribiendo en el componente.       |
| `dark`          | `Boolean`                             | No          | `false`           | Indica si el componente está en modo oscuro.                                                                  |


# Custom Text Field
## Props
| Propiedad       | Tipo              | Requerido   | Valor por defecto | Descripción                                                                                    | 
| -------------- | ------------------ | :---------: | ----------------- | ---------------------------------------------------------------------------------------------- |
| `placeholder`  | `String`           | Sí          | -                 | Texto que se muestra como indicación del contenido esperado en el campo de entrada             | 
| `modelValue`   | `String \| Number` | No          | `""`              | Valor actual del campo de entrada                                                              |
| `clearable`    | `Boolean`          | No          | -                 | Si se debe mostrar un botón para borrar el contenido del campo de entrada                      |
| `errorMessage` | `String`           | No          | `""`              | Mensaje de error que se muestra debajo del campo de entrada en caso de una validación fallida  |
| `disabled`     | `Boolean`          | No          | -                 | Si el campo de entrada está inhabilitado o no                                                  |
| `outlined`     | `Boolean`          | No          | -                 | Si el campo de entrada tiene un borde delgado en lugar de uno sólido                           |
| `readonly`     | `Boolean`          | No          | -                 | Si el campo de entrada es solo de lectura o no                                                 |
| `type`         | `String`           | No          | `text`            | Tipo de campo de entrada, puede ser "email", "phone", "text", "time" o "password"              |
| `dark`         | `Boolean`          | No          | -                 | Si el campo de entrada debe estar en modo oscuro o no                                          |


# Data Table
## Props
| Propiedad             | Tipo                | Requerido  | Valor por defecto          | Descripción                                                                                    | 
| --------------------- | ------------------- | :--------: | -------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`               | `DataTableItem[]`   | Sí         | -                          | Los datos que se mostrarán en la tabla.    |
| `headers`             | `DataTableHeader[]` | Sí         | -                          | Los encabezados de la tabla.   |
| `itemsPerPage`        | `Number`            | No         | `10`                       | El número máximo de filas que se mostrarán en la tabla por página.   |
| `height`              | `String`            | No         | `"100%"`                   | La altura de la tabla.  |
| `gridTemplateColumns` | `String`            | No         | `""`                       | La plantilla de columnas de cuadrícula de CSS que se utilizará para establecer la anchura de las columnas en la tabla.  |
| `noDataText`          | `String`            | No         | `No hay datos registrados` | El texto que se mostrará cuando no haya datos para mostrar en la tabla.  |
| `selected`            | `String`            | No         | `""`                       | La fila seleccionada actualmente.    |
| `compareSelectedWith` | `String`            | No         | `"id"`                     | La clave que se utilizará para comparar la fila seleccionada con los objetos en la matriz `items`.  |
| `disabledKey`         | `String`            | No         | `""`                       | La clave que se utilizará para determinar si una fila está deshabilitada.  |
| `disabledValue`       | `String`            | No         | `""`                       | El valor que se utilizará para determinar si una fila está deshabilitada.  |
| `hideNoDataIcon`      | `Boolean`           | No         | `false`                    | Indica si se debe ocultar el icono que se muestra cuando no hay datos en el componente.|
| `noDataIcon`          | `String`            | No         | `far-face-frown-slight`    | Define el icono que se muestra cuando no hay datos en el componente.    |
# Data Table Item
## Props

| Propiedad       | Tipo                          | Requerido | Valor por defecto | Descripción                                                                 |
| --------------- | ----------------------------- | --------- | ----------------- | --------------------------------------------------------------------------- |
| `disabled`      | `Boolean`                     | No        | N/A               | Indica si el componente está deshabilitado o no.                           |
| `selected`      | `Boolean`                     | No        | N/A               | Indica si el componente está seleccionado o no.                             |
| `textTransform` | `String`                      | No        | `""`              | Especifica la transformación del texto.                                      |
| `textAlign`     | `String`                      | No        | `"center"`        | Especifica la alineación del texto.                                          |

La propiedad `textTransform` puede tomar uno de los siguientes valores: `none`, `capitalize`, `uppercase`, `lowercase`, `full-width`.

La propiedad `textAlign` puede tomar uno de los siguientes valores: `left`, `right`, `center`, `justify`, `initial`, `inherit`.

# Filter Date Picker
## Props
| Propiedad     | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| ------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| `label`       | `String`                         | Sí          | -                 | El texto que se muestra como etiqueta para el componente de calendario.                          |
| `placeholder` | `String`                         | No          | `""`              | El texto que se muestra en el componente de calendario cuando no hay ninguna fecha seleccionada. |
| `modelValue`  | `Array<Date> \| Date \| null \|` | No          | `null`            | El valor seleccionado actualmente en el componente de calendario.                                |
| `range`       | `Boolean`                        | No          | -                 | Indica si se permitirá seleccionar un rango de fechas en lugar de una fecha única.               |
| `maxDate`     | `String \| Date`                 | No          | `""`              | La fecha máxima permitida para ser seleccionada en el componente de calendario.                  |
| `minDate`     | `String \| Date`                 | No          | `""`              | La fecha mínima permitida para ser seleccionada en el componente de calendario.                  |

# Filter Select
## Props
| Propiedad      | Tipo                                          | Requerido  | Valor por defecto | Descripción                                                                                     | 
| -------------- | --------------------------------------------- | :--------: | ----------------- | ----------------------------------------------------------------------------------------------- |
| `label`	       | `String`	                                     | Sí	        | - 	              | Etiqueta del campo de selección                                                                 |
| `placeholder`  | `String`	                                     | Sí	        | -	                | Texto de marcador de posición para el campo de selección                                        |
| `itemValue`	   | `String`                                      | No	        | `value`	          | Propiedad del objeto de la lista de elementos utilizada como valor del elemento seleccionado    |
| `itemTitle`    | `String`	                                     | No	        | `title`	          | Propiedad del objeto de la lista de elementos utilizada como etiqueta del elemento seleccionado |
| `returnObject` | `Boolean`                                     | No	        | `false`	          | Indica si el valor seleccionado debe ser el objeto completo o solo su propiedad "itemValue"     |
| `textMultiple` | `String`	                                     | No         |	`""`	            | Texto que se muestra cuando se han seleccionado varios elementos.                               |
| `items`	       | `Array`                                       | Sí         | 	-	              | Lista de elementos que se pueden seleccionar                                                    |
| `textTransform`| `String`	                                     | No         |	`initial`         |	Estilo de transformación de texto para la etiqueta del elemento seleccionado                    |
| `multiple`	   | `Boolean`                                     | No	        | `false`	          | Indica si se permiten selecciones múltiples                                                     |
| `modelValue`	 | `String \| Number \| Object \| Array \| null` | No         | `null`	          | Valor o valores seleccionados en el campo de selección                                          | 
| `searchable`   | `Boolean`	                                   | No	        | `false`           |	Indica si se puede buscar en la lista de elementos                                              |




# Flex Container
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
## Props
| Propiedad  | Tipo               | Requerido  | Valor por defecto | Descripción                         | 
| ---------- | ------------------ | :---------:| ----------------- | ----------------------------------- |
| `name`	   | `String`           |	Sí         | 	-	               | El nombre del ícono a mostrar.      |
| `color`	   | `String`           | No	       | `black`	         | El color del ícono en formato CSS.  |
| `size`	   | `String \| Number` |	No	       | `1rem`	           | El tamaño del ícono en formato CSS. |
# Form Date Picker
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
label	String	Etiqueta del campo de entrada	Requerido
errorMessage	String	Mensaje de error para mostrar debajo del campo de entrada en caso de que sea necesario	""
placeholder	String	Texto de marcador de posición para el campo de entrada	Requerido
clearable	Boolean	Si se debe mostrar o no un botón de limpieza para borrar el contenido del campo de entrada	false
range	Boolean	Si el campo de entrada es de selección de rango (para un intervalo de fechas)	false
disabled	Boolean	Si el campo de entrada está deshabilitado y no se puede editar	false
readonly	Boolean	Si el campo de entrada es de solo lectura y no se puede editar, pero aún puede seleccionar valores (para el caso de fechas)	false
modelValue	Date[] o Date o null	Valor de entrada del campo (fecha o rango de fechas)	null
outlined	Boolean	Si el campo de entrada debe tener un borde exterior resaltado	false
gridTemplateColumns	String	Plantilla de columna de cuadrícula CSS para los elementos de fecha y tiempo en el campo de entrada	"1fr 3fr"
maxDate	String o Date	Fecha máxima seleccionable en el calendario	""
minDate	String o Date	Fecha mínima seleccionable en el calendario	""
dark	Boolean	Si el tema de la interfaz es oscuro	false


# Form Select
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
label	String	Sí	-	Etiqueta para el componente
errorMessage	String	No	""	Mensaje de error a mostrar si hay un problema con el componente
placeholder	String	Sí	-	Placeholder para el componente
itemValue	String	No	"value"	El nombre de la propiedad en el objeto de items que se usará como valor en el modelo de datos
itemTitle	String	No	"title"	El nombre de la propiedad en el objeto de items que se usará como título para mostrar en la lista desplegable
returnObject	Boolean	No	false	Determina si el modelo de datos debe ser un objeto con las propiedades itemValue e itemTitle o simplemente el valor seleccionado
clearable	Boolean	No	-	Si se establece en verdadero, se mostrará un botón para limpiar la selección
textMultiple	String	No	""	Texto que se muestra si se seleccionan varios elementos
items	Array	Sí	-	Array de objetos para poblar la lista desplegable
textTransform	String	No	"initial"	El valor para la propiedad CSS text-transform del elemento
multiple	Boolean	No	-	Si se establece en verdadero, se permitirá la selección múltiple
disabled	Boolean	No	-	Si se establece en verdadero, se desactivará el componente
readonly	Boolean	No	-	Si se establece en verdadero, el componente será de solo lectura
modelValue	String/Number/Object/Array	No	null	Modelo de datos para el componente
outlined	Boolean	No	-	Si se establece en verdadero, el componente tendrá un borde delgado en lugar de un fondo sólido
gridTemplateColumns	String	No	"1fr 3fr"	El valor para la propiedad CSS grid-template-columns del elemento
searchable	Boolean	No	-	Si se establece en verdadero, se agregará una barra de búsqueda a la lista desplegable
dark	Boolean	No	-	Si se establece en verdadero, se aplicará un tema oscuro al componente
# Form Text Field
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
modelValue	String o Number	No	""	Valor del campo de entrada
label	String	Sí	-	Etiqueta del campo de entrada
placeholder	String	Sí	-	Placeholder del campo de entrada
errorMessage	String	No	""	Mensaje de error del campo de entrada
readonly	Boolean	No	-	Indica si el campo de entrada es de solo lectura
dark	Boolean	No	-	Indica si el campo de entrada se muestra en modo oscuro
disabled	Boolean	No	-	Indica si el campo de entrada está deshabilitado
outlined	Boolean	No	-	Indica si el campo de entrada tiene un borde exterior
clearable	Boolean	No	-	Indica si el campo de entrada tiene un botón para borrar su valor
gridTemplateColumns	String	No	"1fr 3fr"	El valor de la propiedad grid-template-columns de CSS que se aplica al campo de entrada y su etiqueta
type	"email", "phone", "text", "time" o "password"	No	"text"	Tipo de campo de entrada
appendIcon	String	No	""	El icono que se muestra después del campo de entrada, según la sintaxis de los iconos utilizados en la aplicación, p. ej. "mdi-lock" para un ícono de cerradura.
# Gradient Button
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
width	String o Number	No	"100%"	El ancho del botón.
height	String o Number	No	"100%"	La altura del botón.
colorFrom	String	No	"#000000"	El color de fondo del gradiente desde el que se realiza la transición.
colorTo	String	No	"#ffffff"	El color de fondo del gradiente hacia el que se realiza la transición.
textColor	String	No	"#ffffff"	El color del texto en el botón.
disabled	Boolean	No	false	Indica si el botón está desactivado.
icon	String	No	""	La clase del icono que se mostrará en el botón.
loading	Boolean	No	false	Indica si el botón está en estado de carga.
# Grid Column
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
alignContent	CSS.AlignContentProperty	""	Establece la alineación del contenido en el eje de la grilla.
alignItems	CSS.AlignItemsProperty	""	Establece la alineación de los elementos a lo largo del eje transversal.
justifyContent	CSS.JustifyContentProperty	""	Establece la alineación de los elementos a lo largo del eje principal.
justifyItems	CSS.JustifyItemsProperty	""	Establece la alineación del contenido a lo largo del eje principal.
width	CSS.WidthProperty<string | number>	"initial"	Establece el ancho del elemento.
height	CSS.HeightProperty<string | number>	"auto"	Establece la altura del elemento.
margin	CSS.MarginProperty<string | number>	0	Establece el margen del elemento.
rowGap	CSS.RowGapProperty<string | number>	0	Establece el espacio entre filas de la grilla.
padding	CSS.PaddingProperty<string | number>	0	Establece el relleno del elemento.
gridRow	CSS.GridRowProperty	""	Establece la posición en la que el elemento aparece en la grilla en el eje de las filas.
gridColumn	CSS.GridColumnProperty	""	Establece la posición en la que el elemento aparece en la grilla en el eje de las columnas.
gridTemplateRows	CSS.GridTemplateRowsProperty<string | number>	"initial"	Establece la cantidad de filas y su tamaño en la grilla.
backgroundColor	`CSS.BackgroundColorProperty	CustomColor`	"transparent"
borderRadius	CSS.BorderRadiusProperty<string>	""	Establece el radio de los bordes del elemento.
boxShadow	CSS.BoxShadowProperty	""	Establece la sombra del elemento.
overflow	CSS.OverflowProperty	"initial"	Establece el comportamiento de desbordamiento del elemento.
# Grid Container
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
height	String o Number	"auto"	Define la altura del componente.
alignItems	String	""	Define la alineación vertical de los elementos en el componente.
alignContent	String	""	Define la alineación de las filas en el eje vertical en el componente.
justifyContent	String	""	Define la alineación horizontal de los elementos en el componente.
justifyItems	String	""	Define la alineación de los elementos en el eje horizontal en el componente.
gridTemplateRows	String o Number	"initial"	Define las filas de la cuadrícula en el componente.
rowGap	String o Number	0	Define la separación vertical entre las filas de la cuadrícula en el componente.
margin	String o Number	0	Define los márgenes del componente.
padding	String o Number	0	Define el espacio interior del componente.
gridTemplateColumns	String o Number	"initial"	Define las columnas de la cuadrícula en el componente.
columnGap	String o Number	0	Define la separación horizontal entre las columnas de la cuadrícula en el componente.
gridAutoFlow	String	""	Define cómo se disponen los elementos en la cuadrícula en el componente.
backgroundColor	String o CustomColor	"transparent"	Define el color de fondo del componente.
borderRadius	String	""	Define el radio de las esquinas del componente.
boxShadow	String	""	Define la sombra del componente.
# Grid Row
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
width	[String, Number] as PropType<CSS.WidthProperty<string | number>>	""	Ancho del elemento.
backgroundColor	String as PropType<CSS.BackgroundColorProperty | CustomColor>	""	Color de fondo del elemento.
gridColumn	[String, Number] as PropType<CSS.GridColumnProperty>	""	Especifica en qué columna(s) debe estar ubicado el elemento.
gridRow	[String, Number] as PropType<CSS.GridRowProperty>	""	Especifica en qué fila(s) debe estar ubicado el elemento.
padding	[String, Number] as PropType<CSS.PaddingProperty<string | number>>	0	Espacio de relleno del elemento.
columnGap	[String, Number] as PropType<CSS.ColumnGapProperty<string | number>>	0	Espacio entre las columnas de una cuadrícula de CSS.
gridTemplateColumns	[String, Number] as PropType<CSS.GridTemplateColumnsProperty<string | number>>	"initial"	Especifica el tamaño y el número de columnas de una cuadrícula de CSS.
gridAutoColumns	String as PropType<CSS.GridAutoColumnsProperty<string | number>>	""	Especifica la longitud de las columnas no explícitamente especificadas de una cuadrícula de CSS.
justifyContent	String as PropType<CSS.JustifyContentProperty>	""	Define cómo se alinearán los elementos en el contenedor a lo largo del eje principal (horizontal) de la flexbox o cuadrícula.
alignItems	String as PropType<CSS.AlignItemsProperty>	""	Define cómo se alinearán los elementos en el contenedor a lo largo del eje secundario (vertical) de la flexbox o cuadrícula.
height	[String, Number] as PropType<CSS.HeightProperty<string | number>>	""	Altura del elemento.
# Header Tabs
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
items	Array<string>	Sí	N/A	Es un arreglo de strings que se utiliza para generar los elementos de la lista desplegable.
modelValue	Number	Sí	N/A	El valor seleccionado actual de la lista desplegable.
columnGap	String<CSS.ColumnGapProperty<string>>	No	"0.5rem"	El espacio entre columnas en el menú desplegable, que puede ser especificado en cualquier unidad de longitud CSS válida.
color	String<CSS.BackgroundColorProperty|CustomColor>	No	"acento-principal"	El color de fondo del menú desplegable. Puede ser un color CSS válido o un nombre de color personalizado definido.
# Icon Button
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
color	String | CustomColor	No	"black"	El color del icono
icon	String	Sí	N/A	El nombre del icono, para ser usado en la biblioteca de iconos
size	String | CSS.WidthProperty<string>	No	"20px"	El tamaño del icono
disabled	Boolean	No	N/A	Indica si el icono está deshabilitado o no
backgroundColor	String | CustomColor	No	""	El color de fondo del contenedor del icono
containerSize	String | CSS.WidthProperty<string>	No	""	El tamaño del contenedor que contiene el icono. Si no se establece, el contenedor se ajustará al icono
# Image Container
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
src	String	Sí	N/A	La URL de la imagen a mostrar.
alt	String	No	"Image"	El texto alternativo que se muestra si la imagen no puede cargarse.
objectPosition	CSS.ObjectPositionProperty<string|number>	No	""	Define la posición de la imagen dentro de su contenedor.
width	CSS.WidthProperty<string|number>	No	""	Define el ancho de la imagen.
height	CSS.HeightProperty<string|number>	No	""	Define la altura de la imagen.
objectFit	CSS.ObjectFitProperty	No	""	Define cómo se ajusta la imagen dentro de su contenedor.
aspectRatio	CSS.AspectRatioProperty	No	""	Define la relación de aspecto de la imagen.
clickable	Boolean	No	N/A	Si se establece en verdadero, se agrega un manejador de eventos para hacer clic en la imagen y se emite el evento.
# Information Text
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
label	String	Sí	-	Etiqueta del componente
gridTemplateColumns	String	No	"1fr 3fr"	Valor para la propiedad CSS grid-template-columns
padding	String	No	"0.75rem 0"	Valor para la propiedad CSS padding
textTransform	String	No	"capitalize"	Valor para la propiedad CSS text-transform
# Page Switch
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
modelValue	Boolean	Sí	N/A	Valor booleano que indica si el componente está activado o no.
label	String	No	""	Texto que se muestra junto al componente.
tooltip	String	No	""	Texto que se muestra al pasar el mouse sobre el componente.
disabled	Boolean	No	N/A	Indica si el componente está deshabilitado.
activeColor	String as PropType<CSS.ColorProperty | CustomColor>	No	"acento-principal"	Color del componente cuando está activado. Puede ser un color CSS o una cadena personalizada.
width	String as PropType<CSS.WidthProperty<string>>	No	"1.5rem"	Ancho del componente. Puede ser un valor CSS o una cadena personalizada.
color	String as PropType<CSS.ColorProperty | CustomColor>	No	"neutro-4"	Color del componente. Puede ser un color CSS o una cadena personalizada.
readonly	Boolean	No	N/A	Indica si el componente es de solo lectura.
labelWeight	[Number, String] as PropType<CSS.FontWeightProperty>	No	600	Peso de la fuente del texto del componente. Puede ser un valor numérico o una cadena.
gridTemplateColumns	String as PropType<CSS.GridTemplateColumnsProperty<string>>	No	"1fr auto"	Define la cantidad y tamaño de columnas para el contenedor del componente. Puede ser un valor CSS o una cadena personalizada.
justifyContent	String as PropType<CSS.JustifyContentProperty>	No	"initial"	Alineación del contenido del componente. Puede ser un valor CSS o una cadena personalizada
# Panel Title
## Props
| Propiedad  | Tipo      | Requerido  | Valor por defecto | Descripción                                                                                      | 
| ---------- | --------- | :---------:| ----------------- | ------------------------------------------------------------------------------------------------ |
| `closable` | `Boolean` | No	        | `false`           |	Indica si el componente es cerrable o no. Si se establece como true, se muestra un botón para cerrar el componente. Si se establece como false, no se muestra el botón de cerrar. |
# Search Text Field 

## Props 
| Propiedad | Descripción | Tipo | Valor por defecto |
| --- | --- | --- | --- |
| placeholder | Texto a mostrar como placeholder del input | `String` | `required` |
| modelValue | Propiedad reactiva que controla el valor del input | `String` | `""` |


# Success Dialog 
## Props
| Propiedad      | Tipo                             | Requerido   | Valor por defecto | Descripción                                                                                      | 
| -------------- | -------------------------------- | :---------: | ----------------- | ------------------------------------------------------------------------------------------------ |
## Props

| Propiedad | Descripción | Tipo | Valor por defecto |
| --- | --- | --- | --- |
| icon | Ícono a mostrar en la notificación | `String` | `required` |
| text | Texto a mostrar en la notificación | `String` | `required` |
| duration | Duración en milisegundos de la notificación antes de desaparecer | `Number` | `3000` |
| modelValue | Propiedad reactiva que controla si se muestra o no la notificación | `Boolean` | `required` |
| subtitle | Texto secundario opcional a mostrar en la notificación | `String` | `""` |
| maxWidth | Ancho máximo de la notificación | `String` o `Number` | `520` |

# SVG Icon 
Es un componente que representa un icono SVG. 
## Props 
| Propiedad          | Tipo                                           | Requerido | Valor por defecto | Descripción                                                                                                                          |
| -------- | ---------------------------------------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `color` | `String` | no | `"black"` | Color del icono |
| `src`   | `String` | no | `" "`     | Ruta de la imagen del icono |
| `name`  | `String` | no  | `""` | Nombre del icono en caso de usar una librería de iconos|
| `size`  | Tamaño del icono | `String` o `Number` | `"1.5rem"` |
# Text Container 
## Props 

| Propiedad          | Tipo                                           | Requerido | Valor por defecto | Descripción                                                                                                                          |
| ------------------ | ---------------------------------------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `fontSize`         | `String` o `Number`                            | No        | `"1rem"`          | Tamaño de fuente del texto.                                                                                                          |
| `padding`          | `String` o `Number`                            | No        | `"0"`             | Espacio entre el contenido y el borde del componente.                                                                                |
| `lineHeight`       | `String` o `Number`                            | No        | `"1rem"`          | Altura de línea del texto.                                                                                                            |
| `textAlign`        | `String`                                       | No        | `""`              | Alineación del texto.                                                                                                                 |
| `textTransform`    | `String`                                       | No        | `""`              | Transformación del texto.                                                                                                             |
| `color`            | `String` o `CustomColor`                       | No        | `""`              | Color del texto.                                                                                                                      |
| `hoverColor`       | `String` o `CustomColor`                       | No        | `""`              | Color del texto cuando se pasa el cursor sobre el componente.                                                                        |
| `activeColor`      | `String` o `CustomColor`                       | No        | `"#ffffff"`       | Color del texto cuando el componente está activo.                                                                                    |
| `hoverBackground`  | `String` o `CustomColor`                       | No        | `"-neutro-1"`     | Color de fondo cuando se pasa el cursor sobre el componente.                                                                         |
| `activeBackground` | `String` o `CustomColor`                       | No        | `"-neutro-3"`     | Color de fondo cuando el componente está activo.                                                                                     |
| `whiteSpace`       | `String`                                       | No        | `""`              | Espacio en blanco entre las palabras del texto.                                                                                       |
| `fontWeight`       | `String` o `Number`                            | No        | `""`              | Grosor de la fuente.                                                                                                                  |
| `letterSpacing`    | `String` o `Number`                            | No        | `""`              | Espaciado entre las letras del texto.                                                                                                 |
| `fontFamily`       | `String`                                       | No        | `"Metropolis"`    | Tipo de fuente del texto.                                                                                                             |
| `predefinedStyle`  | `String`                                       | No        | `""`              | Estilo predefinido para el componente. Puede ser uno de los siguientes valores: `primary`, `secondary`, `success`, `danger`, `warning`. |
| `clickable`        | `Boolean`                                      | No        | N/A               | Indica si el componente es interactivo.                                                                                                |
| `borderRadius`     | `String`                                       | No        | `"initial"`       | Radio de la esquina del borde del componente.                                                                                         |

La propiedad `predefinedStyle` define un conjunto de propiedades predefinidas que se aplican al componente en función del valor proporcionado. 

La propiedad `color`, `hoverColor`, `activeColor`, `hoverBackground`, `activeBackground` y `borderRadius` pueden tomar valores de tipo `CustomColor` que se deben definir en algún lugar del componente.

