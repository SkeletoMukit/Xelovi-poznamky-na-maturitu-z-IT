# Datové typy

- Javovské typy se dělí na dvě skupiny:
-  Primitivní (neobjektový přístup)
	- Celočíselné
	- Reálné
	- Znakové
	- Logické
- Referenční (objektový přístup)
	- Řetězce

## Primitivní datové typy

### Celočíselné typy

- nejpoužívanějším je `int`

| Datový typ | Rozsah  | Rozsah                                                  |
| ---------- | ------- | ------------------------------------------------------- |
| `byte`     | 1 bajt  | -128 až 127                                             |
| `short`    | 2 bajty | -32,768 až 32,767                                       |
| `int`      | 4 bajty | -2,147,483,648 až 2,147,483,647                         |
| `long`     | 8 bajtů | -9,223,372,036,854,775,808 až 9,223,372,036,854,775,807 |

### Reálné datové typy

- Jako desetinný separátor se vždy používá tečka!
- Při použití typu float musíme ve zdrojovém kódu psát sufix F
```java
float f = 3.14F;
```

| Datový typ | Rozsah  | Přesnost              |
| ---------- | ------- | --------------------- |
| `float`    | 4 bajty | 7 decimálních číslic  |
| `double`   | 8 bajtů | 15 decimálních číslic |

### Znakový typ

- Je pouze jeden – `char`
- Má velikost 16 bitů
- Využívání kódování UNICODE
- Na znaky se díváme jako na celá čísla → využíváme stejné operátory jako u celočíselného datového typu
- Znakové konstanty se zapisují několika způsoby:
	- Jeden znak, který se píše do apostrofů
		- Př. `'A'`
	- Escape sekvence (tj. speciální znaky)
		- Př. `'\n'`
	- Posloupnost znaků \‘uXXXX, kde XXXX představuje kód znaku v kódování UNICODE
		- Př. `'\u000A' (=nový řádek), '\u0159' (= ř)`

### Logický typ

- Používá se typ `boolean` o velikosti 1 bit
- Může nabývat dvou hodnot
	- logická konstanta `true` (= pravda, logická 1)
	- `false` (= nepravda, logická 0)
- Používá se hodně u podmínek
```java
boolean jeSplnenTest = false;
boolean jeVetsiCislo = cislo > 5;
```

## Referenční datové typy

- Referenční datové typy jsou složitější než primitivní a nemají omezenou délku
- Identifikátor tohoto typu začíná vždy velkým písmenem!
- Typickým zástupce je datový typ `String`
	- Slouží pro ukládání řetězců → musí být ohraničeny uvozovkami
	- Lze používat diakritika
```java
String jmeno = "Jan";
String pozdrav = "Dobrý den";
```

- Spojení dvou a více řetězců do jednoho
	- pomocí spojovacího operátoru `+`
```java
String s1 = "eps";
String s2 = "2";
String s3 = s1 + s2;      //vytvori retezec eps2
```

- Řetězce lze spojovat i s hodnotami jiného typu
```java
int x = 42;
String s = "Odpověď je " + x;   //vytvori retezec Odpověď je 42
```

## Přetypování

- [Proměnné](Proměnné.md) lze přiřadit pouze hodnotu stejného typu
- Chceme-li přiřadit jiný typ, je nutné přetypování (typová konverze)
- Jméno datového typu zapisujeme do kulatých závorek před proměnnou, kterou chceme přetypovat
```java
char c = 'A';
int i = (int) c;
char d = (char) i;
```

- **Pozor!**
- Přetypování má nejvyšší prioritu → celý výraz je třeba dát do závorek
```java
(double) i + j     //přetypuje se jen i
(double) (i+j)     //správně
```

- Implicitní – proběhne automaticky
	- Je to konverze z typů s nižším rozsahem na typy s vyšším rozsahem
	- `byte` → `short` → `int` → `long` → `float` → `double`
```java
int i = 5;
double d = i;     //d bude 5.0
```

- Explicitní – je nutno zapsat do programu
	- Opačný směr, tj. z vyššího rozsahu na nižší → může dojít ke ztrátě nebo změně původní hodnoty → musí se zapsat operátor přetypování!
- `double` → `float` → `long` → `int` → `short` → `byte`
```java
double d = 5.253;
int i = (int) d;      //i bude 5
```