# TyperTyper



[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)





## Description



TyperTyper is a dead simple typing text animation written in Javascript.



No dependencies, ridiculously small and simple. 1ko unminified



## Usage



### Setup



Just include the JS file and declare your element.



Add the Javascript:

```html
<script type="text/javascript" src="typertyper.js"></script>
```


Declare the TyperTyper element:

```html
<h1>
  TyperTyper is <span class="typer" data-typer-words="tiny;simple;badass;for the cool kids" data-typer-cursor="_" data-typer-erase="true" data-typer-delay="200"></span>
</h1>
```


### Attributes



/!\ Your element need to have the `typer` class. 



Below the list of options : 



1. data-typer-words 

   The list of words to write, separated by `;`

   ​
2. data-typer-cursor

   What takes place of your cursor.  

   ​
3. data-typer-delay

   The letter display delay in milliseconds 

   ​
4. data-typer-erase (Optionnal)

   Set it to false in order to delete the whole world instead of letters

   ​