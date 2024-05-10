# If... Else Javy

Pomocí podmínek můžete provádět různé akce pro různá rozhodnutí.

## Příkaz `if`

Příkaz `if` slouží k zadání bloku kódu Javy, který se provede, pokud je podmínka `pravdivá`.

### Syntaxe

```java
if (podmínka) {
  // blok kódu, který se provede, pokud je podmínka true
}
```

Všimněte si, že `if` je psáno malými písmeny. Velká písmena (If nebo IF) vyvolají chybu.

### Příklad

V následujícím příkladu testujeme dvě hodnoty, abychom zjistili, zda je 20 větší než 18. Pokud je podmínka `pravdivá`, vypíšeme nějaký text:

```java
if (20 > 18) {
  System.out.println("20 je větší než 18");
}
```


### Příklad

Můžeme také testovat proměnné:

```java
int x = 20;
int y = 18;
if (x > y) {
  System.out.println("x je větší než y");
}
```

#### Vysvětlení příkladu

Ve výše uvedeném příkladu používáme dvě proměnné, **`x`** a **`y`**, abychom otestovali, zda je `x` větší než `y` (pomocí operátoru `>`). Protože `x` je 20 a `y` je 18 a my víme, že 20 je větší než 18, vypíšeme na obrazovku, že "x je větší než y".

## Příkaz `else`

Příkaz `else` slouží k zadání bloku kódu, který se provede, pokud je podmínka `false`.

### Syntaxe

```java
if (podmínka) {
  // blok kódu, který se provede, pokud je podmínka true
} else {
  // blok kódu, který se provede, pokud je podmínka nepravdivá
}
```

### Příklad

```java
int cas = 20;
if (cas < 18) {
  System.out.println("Dobrý den.");
} else {
  System.out.println("Dobrý večer.");
}
// Vypíše "Dobrý večer."
 
```

#### Vysvětlení příkladu

Ve výše uvedeném příkladu je čas (20) větší než 18, takže podmínka je `false`. Z tohoto důvodu přejdeme k podmínce `else` a vypíšeme na obrazovku "Dobrý večer". Pokud by byl čas menší než 18, program by vypsal "Dobrý den".

## Příkaz `else if`

Příkaz `else if` slouží k zadání nové podmínky, pokud je první podmínka `false`.

### Syntaxe

```java
if (podminka1) {
  // blok kódu, který se provede, pokud je podmínka1 true
} else if (podminka2) {
  // blok kódu, který se provede, pokud je podmínka1 false a podmínka2 true
} else {
  // blok kódu, který se provede, pokud je podmínka1 nepravdivá a podmínka2 nepravdivá
}
```

### Příklad

```java
int cas = 22;
if (cas < 10) {
  System.out.println("Dobré ráno.");
} else if (cas < 18) {
  System.out.println("Dobrý den.");
} else {
  System.out.println("Dobrý večer.");
}
// Vypíše "Dobrý večer."
 
```

#### Vysvětlení příkladu

Ve výše uvedeném příkladu je čas (22) větší než 10, takže **první podmínka** je `false`. Další podmínka v příkazu `else if` je také `false`, takže přejdeme k podmínce `else`, protože **`podminka1`** a **`podminka2`** jsou obě `false` - a vypíšeme na obrazovku "Dobrý večer".

Kdyby však bylo 14 hodin, náš program by vypsal "Dobrý den".

## Zkrácené `if else`

Existuje také zkrácený zápis `if else`, který je známý jako **tercinální operátor**, protože se skládá ze tří operandů.

Lze jej použít k nahrazení více řádků kódu jediným řádkem a nejčastěji se používá k nahrazení jednoduchých příkazů `if else`:

### Syntaxe

```java
proměnná = (podmínka) ? výrazTrue : výrazFalse;
```

### Příklad

Místo zápisu:

```java
int time = 20;
if (time < 18) {
  System.out.println("Dobrý den.");
} else {
  System.out.println("Dobrý večer.");
}
```

Můžete jednoduše napsat:

```java
int time = 20;
String result = (time < 18) ? "Dobrý den." : "Dobrý večer.";
System.out.println(result);
```