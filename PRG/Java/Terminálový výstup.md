# Terminálový výstup

- Tisk provede metoda System.out.print();
```java
int i = 5;
System.out.print(i); //vytiskne hodnotu 5
```

- Pokud chceme vytisknout více proměnných nebo i nějaký řetězec → spojujeme znaménkem `+`
```java
System.out.print(„Číslo „ + i + „ je kladné“);
```

- Pokud chceme za výpisem odřádkovat
	- Použijeme metodu println() místo print()
```java
System.out.println(„Číslo „ + i + „ je kladné“);
```
- 
	- Metoda print() a znak \n
```java
System.out.print(„Číslo „ + i + „ je kladné\n“);
```

- Prázdný řádek vložíme zavoláním metody `System.out.println();` bez jakéhokoli argumentu (parametru)

