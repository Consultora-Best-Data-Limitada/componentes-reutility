## Componentes

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
| `modelValue` | `Boolean`          | Sí          | `False`           | Propiedad reactiva que controla si se muestra o no la ventana modal  |
| `Width`      | `WidthProperty`    | No          | `520px`           | Ancho máximo de la ventana modal |  



# Custom Button 

## Props 

| Propiedad      | Tipo               | Requerido   | Valor por defecto | Descripción | 
| -------------- | ------------------ | :---------: | ----------------- | ----------- |
| `color`        | `ColorProperty \| CustomColor`    | `#000000`    | Color principal del componente.                                                           |
| `contentColor` | `ColorProperty \| CustomColor`                                     | `#ffffff`    | Color del contenido del componente.                                                        |
| `hoverColor`   | `ColorProperty \| CustomColor`                                     | `""`         | Color del componente cuando se sitúa el cursor sobre él.                                    |
| `activeColor`  | `ColorProperty \| CustomColor`                                     | `""`         | Color del componente cuando está activo.                                                   |
| `outlined`     | `Boolean`                                                              | `false`      | Indica si el componente debe tener un borde.                                               |
| `width`        | `WidthProperty`                                             | `initial`    | Ancho del componente.                                                                      |
| `height`       | `HeightProperty`                                            | `2.5rem`     | Altura del componente.                                                                     |
| `disabled`     | `Boolean`                                                              | `false`      | Indica si el componente está deshabilitado.                                               |
| `appendIcon`         | `String`                                                               | `""`         | Icono a mostrar al final del componente.                                                   |
| `preppendIcon`       | `String`                                                               | `""`         | Icono a mostrar al principio del componente.                                               |
| `justifyContent`     | `CSS.JustifyContentProperty`                                             | `center`     | Alineación del contenido del componente.                                                  |
| `gridTemplateColumns`| `CSS.GridTemplateColumnsProperty<string>`                               | `""`         | Propiedad de la cuadrícula CSS que define el tamaño, el número y el diseño de las columnas. |
| `loading`            | `Boolean`                                                              | `false`      | Indica si el componente está cargando.                                                     |



# Custom Date Picker

## Props

| Propiedad     | Tipo                     | Requerido | Valor por defecto | Descripción | 
| ------------- | ------------------------ | :-------: | ----------------- | ----------- |
| `modelValue`  | `Date[] \| Date \| null` | Sí        | `null`            | Valor o valores seleccionados en el componente. |
| `range`       | `Boolean`                | No        | `false`           | Indica si se permite la selección de un rango de fechas. |
| `readonly`    | `Boolean`                | No        | `false`           | Indica si el componente está en modo de solo lectura. |
| `disabled`    | `Boolean`                | No        | `false`           | Indica si el componente está deshabilitado. |
| `placeholder` | `String`                 | No        | `undefined`       | Texto que se muestra como marcador de posición en el componente. |
| `maxDate`     | `String \| Date`         | No        | `undefined`       | Fecha máxima permitida para seleccionar. |
| `minDate`     | `String \| Date`         | No        | `undefined`       | Fecha mínima permitida para seleccionar. |
| `errorMessage`| `String`                 | No        | `undefined`       | Mensaje de error que se muestra cuando hay un error de validación. |
| `outlined`    | `Boolean`                | No        | `false`           | Indica si el componente tiene un borde resaltado. |
| `dark`        | `Boolean`                | No        | `false`           | Indica si el componente está en modo oscuro. |




# Custom Dialog

## Props 
| Propiedad     | Tipo                 | Requerido   | Valor por defecto | Descripción | 
| ------------- | -------------------- | :---------: | ----------------- | ----------- |


# Custom Select

# Custom Text Field

# Data Table
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

# Filter Select

# Flex Container

# Font Awesome Icon

# Form Date Picker

# Form Select

# Form Text Field

# Gradient Button

# Grid Column

# Grid Container

# Grid Row

# Header Tabs

# Icon Button

# Image Container

# Information Text

# Page Switch

# Panel Title

# Search Text Field 

## Props 
| Propiedad | Descripción | Tipo | Valor por defecto |
| --- | --- | --- | --- |
| placeholder | Texto a mostrar como placeholder del input | `String` | `required` |
| modelValue | Propiedad reactiva que controla el valor del input | `String` | `""` |


# Success Dialog 
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

