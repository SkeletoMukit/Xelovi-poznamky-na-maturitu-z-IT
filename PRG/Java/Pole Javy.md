# Pole Javy

Pole se používají k uložení více hodnot do jedné proměnné, místo aby se pro každou hodnotu deklarovaly samostatné proměnné.

Chcete-li deklarovat pole, definujte typ proměnné pomocí **čtvercových závorek**:

```java
String[] auta;
```

Nyní jsme deklarovali proměnnou, která obsahuje pole řetězců. Chcete-li do ní vložit hodnoty, můžete je umístit do seznamu odděleného čárkami, který se nachází uvnitř složených závorek:

```java
String[] auta = {"Volvo", "BMW", "Ford", "Mazda"};
```

Chcete-li vytvořit pole celých čísel, můžete napsat:

```java
int[] mojeCisla = {10, 20, 30, 40};
```

---

## Přístup k prvkům pole

K prvku pole můžete přistupovat odkazem na indexové číslo.

Tento příkaz přistupuje k hodnotě prvního prvku v auta:

### Příklad

```java
String[] auta = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(auta[0]);
// Výstupy Volvo
```

**Poznámka:** Indexy pole začínají 0: `[0]` je první prvek. `[1]` je druhý prvek atd.

---

## Změna prvku pole

Chcete-li změnit hodnotu konkrétního prvku, odkažte se na číslo indexu:

### Příklad

```java
auta[0] = "Opel";
```

### Příklad

```java
String[] auta = {"Volvo", "BMW", "Ford", "Mazda"};
auta[0] = "Opel";
System.out.println(auta[0]);
// Nyní vypíše Opel místo Volvo
```

---

## Délka pole

Chcete-li zjistit, kolik prvků má pole, použijte vlastnost `length`:

### Příklad

```java
String[] auta = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(auta.length);
// Výstup 4
```