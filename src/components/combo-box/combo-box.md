# DatePicker

This renders a suggestions combo box that gets its items from a url and  by default pre-populates the list 

## Props
#### valuePropName : 
Requireable [string]

#### dataPropName : 
Requireable [string]

#### labelPropName : 
Requireable [string]

#### url : 
````jsx
/**
* @required
* The url form which list items will be fetched
*/
````
Requireable [string]

#### preloaded : 
Requireable [string]


## Example
```jsx
<DatePicker
  url="/broadband-packages"
  labelPropName="name"
  dataPropName="name"
  placeholder="Some example text"  
>
</DatePicker>
```
    
