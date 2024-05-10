# Operátory Javy

Operátory se používají k provádění operací na proměnných a hodnotách. 

## Aritmetické operátory

Aritmetické operátory se používají k provádění běžných matematických operací. 

| Operátor | Název        | Popis                         | Příklad |
| -------- | ------------ | ----------------------------- | ------- |
| `+`      | Sčítání      | Sčítá dvě hodnoty             | `x + y` |
| `-`      | Odčítání     | Odečte jednu hodnotu od druhé | `x - y` |
| `*`      | Násobení     | Násobení dvou hodnot          | `x * y` |
| `/`      | Dělení       | Dělí jednu hodnotu druhou     | `x / y` |
| `%`      | Modulus      | Vrátí zbytek po dělení        | `x % y` |
| `++`     | Inkrementace | Zvyšuje hodnotu proměnné o 1  | `++x`   |
| `--`     | Snížení      | Sníží hodnotu proměnné o 1    | `--x`   |

## Operátory přiřazení

Operátory přiřazení se používají k přiřazení hodnot proměnným.

V následujícím příkladu použijeme operátor přiřazení `=` k přiřazení hodnoty `10` proměnné `x`:
```java
int x = 10;
```

Operátor přiřazení sčítání `+=` přidává hodnotu do proměnné:
```java
int x = 10;
x += 5;
```

| Operátor | Příklad   | Stejné jako  |
| -------- | --------- | ------------ |
| `=`      | `x = 5`   | `x = 5`      |
| `+=`     | `x += 3`  | `x = x + 3`  |
| `-=`     | `x -= 3`  | `x = x - 3`  |
| `*=`     | `x *= 3`  | `x = x * 3`  |
| `/=`     | `x /= 3`  | `x = x / 3`  |
| `%=`     | `x %= 3`  | `x = x % 3`  |
| `&=`     | `x &= 3`  | `x = x & 3`  |
| `\|=`    | `x \|= 3` | `x = x \| 3` |
| `^=`     | `x ^= 3`  | `x = x ^ 3`  |
| `>>=`    | `x >>= 3` | `x = x >> 3` |
| `<<=`    | `x <<= 3` | `x = x << 3` |

## Operátory porovnávání

Operátory porovnávání slouží k porovnání dvou hodnot (nebo proměnných). To je v programování důležité, protože nám to pomáhá hledat odpovědi a rozhodovat se.

Návratová hodnota porovnání je buď `true`, nebo `false`. Tyto hodnoty se nazývají **logické hodnoty** 

V následujícím příkladu použijeme operátor větší než `>`, abychom zjistili, zda je `5` větší než `3`:

```java
int x = 5;
int y = 3;
System.out.println(x > y); // vrátí true, protože 5 je větší než 3
```

| Operátor | Název            | Příklad  |
| -------- | ---------------- | -------- |
| `==`     | Rovná se         | `x == y` |
| `!=`     | Není rovno       | `x != y` |
| `>`      | Větší než        | `x > y`  |
| `<`      | Méně než         | `x < y`  |
| `>=`     | Větší nebo rovno | `x >= y` |
| `<=`     | Menší nebo rovno | `x <= y` |

## Logické operátory

Pomocí logických operátorů můžete také testovat pravdivé nebo nepravdivé hodnoty.

Logické operátory se používají k určení logiky mezi proměnnými nebo hodnotami:

| Operátor | Název        | Popis                                                       | Příklad              |
| -------- | ------------ | ----------------------------------------------------------- | -------------------- |
| `&&`     | Logické a    | Vrací true, pokud jsou oba příkazy pravdivé                 | `x < 5 && x < 10`    |
| `\|`     | Logické nebo | Vrátí pravdu, pokud je jeden z výroků pravdivý              | `x < 5 \| x < 4`     |
| `!`      | Logické ne   | Obrátí výsledek, vrátí nepravdu, pokud je výsledek pravdivý | `!(x < 5 && x < 10)` |

