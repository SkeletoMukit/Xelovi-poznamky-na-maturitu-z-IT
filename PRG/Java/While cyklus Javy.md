# While cyklus Javy

Cykly mohou provádět blok kódu, dokud je splněna zadaná podmínka.

Cykly jsou užitečné, protože šetří čas, snižují počet chyb a činí kód čitelnějším.

---

Cyklus `while` prochází blokem kódu tak dlouho, dokud je zadaná podmínka pravdivá:

### Syntaxe

```java
while (podmínka) {
  // blok kódu, který se má provést
}
```

V následujícím příkladu se kód v cyklu bude spouštět stále dokola, dokud bude proměnná `i` menší než 5:

### Příklad

```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

**Poznámka:** Nezapomeňte zvýšit proměnnou použitou v podmínce, jinak cyklus nikdy neskončí!

---

---

## Smyčka Do/While

Cyklus `do/while` je variantou cyklu `while`. Tento cyklus provede blok kódu jednou, než zkontroluje, zda je podmínka pravdivá, a pak bude cyklus opakovat tak dlouho, dokud bude podmínka pravdivá.

### Syntaxe

```java
do {
  // blok kódu, který se má provést
}
while (podmínka);
```

Následující příklad používá cyklus `do/while`. Cyklus se vždy provede alespoň jednou, i když je podmínka nepravdivá, protože blok kódu se provede před testováním podmínky:

### Příklad

```java
int i = 0;do {
  System.out.println(i);
  i++;
}
while (i < 5);
```

Nezapomeňte zvýšit proměnnou použitou v podmínce, jinak cyklus nikdy neskončí!