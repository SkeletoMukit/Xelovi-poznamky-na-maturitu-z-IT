# Java

- vznik v roce 1995 ve společnosti Sun Microsystems
- pojmenován podle indonéské odrůdy kávy

## Výhody jazyka

- Objektově orientovaný [Programovací jazyk](Programovací%20jazyk.md)
- Zdarma
- Nezávislý na platformě
- Silná typovost jazyka
- Využití v prostředí jazyku
- Možnost práce s multimédii
- Vysoký výkon
- Bezpečnost

## Nevýhody jazyka

- Hardwarová náročnost
- Rychlý vývoj jazyka
	- V současné době, ale již jsou základní funkce standardizovány
- Rozsáhlost jazyka
- Složitější práce se standardním vstupem/výstupem
- Poněkud nižší rychlost běhu programu (čím vyšší verze jazyka, tím je zpomalení nižší)
- Délka zápisu kódu

## Použití jazyka

- Desktopové a webové aplikace
- Mobilní aplikace pro operační systém Android
- Servletů (tj. programy běžící na serverech)
- Používá se na komplexní aplikace a to hlavně ve finančním a telekomunikačním sektoru
- V ČR jsou stovky firem, které Javu používají
	- Např. Oracle, Home Credit, O2, Česká Spořitelna, IBM, T-Mobile, ZEBRA, DHL, ...

## Historie jazyka

- 1990 – Green Project
- 1992 – OAK, použitý na PDA
- 1995 – první verze Javy, Java pro Netscape
- 1996 – Java 1.0, další podpora Javy
- 1997 – Java 1.1, Java Web Server
- 1999 – XML, NetBeans (Praha), J2SE, J2EE, J2ME
- 2004 – Java SE 5
- 2006 – Java SE 6

## Edice jazyka

### Java Standard Edition (Java SE)

- je vlastně Java, tak jak byla vyvíjena od první verze a postupně rozšiřována.
- Když firma Sun Microsystems zavedla termín platforma Java, bylo třeba původní kolekci API odlišit od ostatních verzí, proto vzniklo toto označení.

### Java Enterprise Edition (Java EE)

- je sada knihoven do Java SE určených pro vývoj a provoz podnikových aplikací a informačních systémů

### Java Micro Edition (Java ME)

- Běží v SIM kartách, pračkách a dalších elektronických zařízeních

## Distribuce jazyka

- Používání Javy pro běžný vývoj (i komerční) je **zdarma**
- Redistribuce javového běhového prostředí je možná **zdarma**
- Redistribuce javového vývojového prostředí je dovolena/omezena konkrétními licenčními podmínkami
- Dříve vyvíjela společnost Sun → dnes společnost **Oracle**

## Implementace jazyka
### Pro spuštění aplikací
- Aplikací je zapotřebí JRE (Java Runtime Environment) = běhové prostředí obsahující virtuální stroj
### Pro vývoj aplikací
- Je zapotřebí JDK (Java Development Kit), které obsahuje knihovny a nástroje pro vývojáře
- Pokročilé vývojové nástroje již mají implementováno

## Vývojová prostředí

- Eclipse
- NetBeans
- JBuilder
- IntelliJ IDEA
- BlueJ
- Greenfoot
- aj.

## Komponenty jazyka Java

### Programovací jazyk Java (Java Language Definition)

- Syntaxe a sémantika jazyka

### Java Virtual Machine (JVM)

- Virtuální stroj

### Java API (základní knihovna tříd)

- Knihovny a SW komponenty → nástroje pro práci se soubory, DB, řetězci, grafikou apod.
- Jsou sdružovány do balíčku tzv. packages

## Zpracování programu

- Program je tvořen jedním nebo několika zdrojovými soubory s příponou .java
- Zdrojové soubory se přeloží kompilátorem javac do mezikódu (bajtový kód)
	- Je nezávislý na konkrétním HW a SW vybavení počítače
	- Překladem ze souboru .java vznikne nový soubor .class → tento soubor může být spuštěn pouze na JVM
- Javovský virtuální stroj (JVM) provádí převod bajtového kódu do strojového kódu příslušného procesoru → tento proces se nazývá interpretace
- Překlad do bajtového kódu je proveden pouze jednou, interpretace při každém spuštění programu
- Bajtový kód lze dekompilovat a získat zpět zdrojový kód původního programu → zdrojový kód by neměl obsahovat žádné citlivé informace (např. hesla)
- .jar
	- Spustitelný java soubor (ekvivalence .exe souboru)
	- Vytváří se explicitně přes příkazový řádek nebo v nabídce vývojového prostředí

## První program v Javě

```java
public class PrvniProgram{
	public static void main(String[] args){
		System.out.println(“Hello world!“);
	}
}
```

Vysvětlivky:
- Třída
- Metoda (funkce) – první řádek se nazývá hlavička metody
- Příkaz – musí končit středníkem

## Konvence a syntaxe zápisu

- Soubor se zdrjovým kódem musí mít název shodný s názvem třídy a příponu .java
	- Viz příklad PrvniProgram.java
- Třídy se vždy píší s prvním velkým písmenem
- Každá metoda musí mít za názvem závorky ()
- Pro ukončení každého příkazu se používá oddělovač středník
	- Jeden příkaz lze umístit na více řádků → někdy lépe čitelné
- Skupinu dvou a více příkazů můžeme uzavřít do bloku kódu (příkazy se uzavřou mezi složené závorky, za závorku nepíšeme středník)
- Vnořené úseky kódu se odsazují – nemá vliv na běh programu, ale zvyšuje čitelnost programu
- Java důsledně rozlišuje malá a velká písmena (case sensitive)!!