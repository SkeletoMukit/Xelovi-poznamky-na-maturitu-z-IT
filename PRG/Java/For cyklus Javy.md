## Cyklus For Javy

Pokud přesně víte, kolikrát chcete projít blok kódu, použijte místo cyklu `while` cyklus `for`:

### Syntaxe

```java
for (příkaz 1; příkaz 2; příkaz 3) {
  // blok kódu, který se má provést
}
```

**Výrok 1** se provede (jednou) před provedením bloku kódu.

**Výrok 2** definuje podmínku pro provedení bloku kódu.

**Výrok 3** se provede (pokaždé) po provedení bloku kódu.

Níže uvedený příklad vypíše čísla 0 až 4:

### Příklad

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

#### Vysvětlení příkladu

Příkaz 1 nastaví proměnnou před začátkem cyklu (`int i = 0`).

Příkaz 2 definuje podmínku pro spuštění cyklu (`i` musí být menší než 5). Pokud je podmínka pravdivá, cyklus se spustí znovu, pokud je nepravdivá, cyklus se ukončí.

Příkaz 3 zvyšuje hodnotu (`i++`) pokaždé, když byl blok kódu v cyklu proveden.

---

## Další příklad

Tento příklad vypíše pouze sudé hodnoty mezi 0 a 10:

### Příklad

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```

---

## Vnořené smyčky

Je také možné umístit cyklus do jiného cyklu. Tomu se říká **vnořený cyklus**.

"Vnitřní cyklus" se provede jednou za každou iteraci "vnějšího cyklu":

### Příklad

```java
// Vnější cyklus
for (int i = 1; i <= 2; i++) {
  System.out.println("Vnější: " + i); // Provede se 2krát
  
  // Vnitřní cyklus
  for (int j = 1; j <= 3; j++) {
    System.out.println(" Vnitřní: " + j); // Provede se 6krát (2 * 3).
  }
} 
```