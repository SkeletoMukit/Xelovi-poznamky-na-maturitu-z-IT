# For-Each cyklus Javy

Existuje smyčka "**for-each**", která se používá výhradně k procházení prvků v **poli**:

### Syntaxe

```java
for (typ variableName : arrayName) {
  // blok kódu, který se provede
}
```

Následující příklad vypíše všechny prvky pole **auta** pomocí cyklu "**for-each**":

### Příklad

```java
String[] auta = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : auta) {
  System.out.println(i);
}
```