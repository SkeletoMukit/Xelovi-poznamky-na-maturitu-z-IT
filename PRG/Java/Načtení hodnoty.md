# Načtení hodnoty

- Existuje více způsobů načtení dat, jedna z možností:
- Načtení hodnoty typu double zajistí metoda nextDouble();
- Načtení hodnoty typu int zajistí metoda nextInt();
- Načtení hodnoty typu String zajistí metoda nextLine();

```java
Scanner sc = new Scanner(System.in);
int vstup = sc.nextInt();
System.out.println("Načtená hodnota: " + vstup);
```

- **na začátek kódu před názvem třídy je potřeba vložit následující příkaz**
```java
import java.util.Scanner;
```