## Switch Javy

Místo psaní mnoha příkazů `if..else` můžete použít příkaz `switch`.

Příkaz `switch` vybere jeden z mnoha bloků kódu, který se má provést:

### Syntaxe

```java
switch(výraz) {
  case x:
    // blok kódu
    break;
  case y:
    // blok kódu
    break;
  výchozí:
    // blok kódu
}
```

Takto to funguje:

- Výraz `switch` se vyhodnotí jednou.
- Hodnota výrazu se porovná s hodnotami jednotlivých `case`.
- Pokud dojde ke shodě, provede se příslušný blok kódu.
- Klíčová slova `break` a `default` jsou nepovinná a budou popsána později v této kapitole.

Následující příklad používá číslo dne v týdnu pro výpočet názvu dne v týdnu:

### Příklad

```java
int den = 4;
switch (den) {
  case 1:
    System.out.println("Pondělí");
    break;
  case 2:
    System.out.println("Úterý");
    break;
  případ 3:
    System.out.println("Středa");
    break;
  případ 4:
    System.out.println("Čtvrtek");
    break;
  případ 5:
    System.out.println("Pátek");
    break;
  případ 6:
    System.out.println("Sobota");
    break;
  case 7:
    System.out.println("Neděle");
    break;
}
// Výpis "čtvrtek" (den 4)
```

---

## Klíčové slovo `break`

Když Java dosáhne klíčového slova `break`, přeruší blok přepínačů.

Tím se zastaví provádění dalšího kódu a testování případů uvnitř bloku.

Když je nalezena shoda a úloha je hotova, je čas na break. Další testování již není potřeba.

Přerušení může ušetřit spoustu času při provádění, protože "ignoruje" provádění celého zbytku kódu v bloku switch.

---

---

## Klíčové slovo `default`

Klíčové slovo `default` určuje nějaký kód, který se má spustit, pokud neexistuje shoda případů:

### Příklad

```java
int den = 4;
switch (den) {
  case 6:
    System.out.println("Dnes je sobota");
    break;
  case 7:
    System.out.println("Dnes je neděle");
    break;
  výchozí:
    System.out.println("Těšíme se na víkend");
}
// Výpis "Těšíme se na víkend".
```

Všimněte si, že pokud je výchozí příkaz použit jako poslední příkaz v bloku `switch`, nepotřebuje `break`.