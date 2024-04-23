# Programovací jazyk

- 3. generace kódu
- Čísla jsou vnímána již jako proměnné, zdrojový kód připomíná matematický zápis → vysoká čitelnost kódu
- Jazyky dělené podle způsobu překladu a spuštění (toto členění není absolutní):
	- Kompilované jazyky
	- Interpretované jazyky
	- Jazyky s virtuálním strojem

## Dělení dle způsobu překladu
### Kompilované jazyky

- Jazyk, kterému člověk rozumí
- Zdrojový kód se překládá do strojového kódu, aby ho procesor mohl spustit → zajišťuje překladač (kompiler)
- Kód se překládá celý najednou a teprve poté se vykoná
- Příklady jazyků: C, C++, Pascal, Delphi

#### Výhody

- Rychlost
-  Nepřístupnost zdrojového kódu
	- Program se šíří již přeložený, bez zdrojového kódu nelze měnit
-  Snadné odhalení chyb ve zdrojovém kódu
	- Pokud zdrojový kód obsahuje chybu, při kompilaci proces spadne a objeví se chybové hlášení

#### Nevýhody

- Závislost na platformě
	- Platforma = procesor + operační systém
- Nemožnost editace
	- Jakmile se program jednou zkompiluje do strojového kódu, nelze ho editovat jinak, než opětovnou kompilací
- Memory management
	- Můžeme se setkat s přetečením paměti (tj. chceme uložit více dat, než na kolik máme místo)
	- Tyto jazyky obvykle nemají automatickou správu paměti

### Interpretované jazyky

- Místo kompilátoru se používá interpret → nepřekládá celý program najednou, ale pouze tu část, která je v danou chvíli potřeba
- Překlad probíhá během běhu programu po instrukcích (po jednotlivých řádcích kódu) → časově a výkonově náročnější
- Příklad jazyka: BASIC, Perl, Python, shell, Ruby

#### Výhody

- Přenositelnost
	- Plně přenositelný na různé platformy, pokud existuje vhodný interpret
- Jednodušší vývoj
	- Nemusíme hlídat správu paměti
	- Někdy nemusíme hlídat ani datové typy
- Stabilita
	- Předchází chybám, které by zkompilovaný program jinak klidně vykonal
- Jednoduchá editace
	- Program můžeme vyvíjet po částech

#### Nevýhody

- Rychlost
- Často obtížné hledání chyb
	- Chyby se objeví až při běhu programu
- Zranitelnost
	- Protože se program šíří v podobě zdrojového kódu, každý do něj může zasahovat nebo krást jeho části

### Jazyky s virtuálním strojem

- Propojením pozitivních vlastností kompilovaných a interpretovaných jazyků vzniká tzv. virtuální stroj
- V současnosti nejmodernější podoba jazyka pro vývoj aplikací
- Příklady jazyků: [Java](Java.md), C#
- Zdrojový kód je kompilátorem přeložen do tzv. mezikódu = bajt-kódu (bytecode) – Tj. strojový (binární) kód, který přímo podporuje objektové programování
- Tento bajt-kód je interpretovaný tzv. virtuálním strojem (tj. interpretem = JVM = [Java](Java.md) Virtual Machine) do strojového kódu, který procesor vykoná

#### Výhody

- Odhalení chyb ve zdrojovém kódu
	- Díky kompilaci do bajtkódu odhalíme chyby ve zdrojovém kódu
- Stabilita
	- Interpret zastaví proces před vykonáním nebezpečné operace a upozorní na chybu
- Jednoduchý vývoj
	- Máme k dispozici různé knihovny, správa paměti je hlídaná za nás
- Slušná rychlost
- Málo zranitelný kód
	- Aplikace se šíří jako zdrojový kód v bajtkódu, není tedy úplně jednoduše lidsky čitelná
- Přenositelnost

## Nižší a Vyšší programovací jazyky

- Do skupiny vyšších jazyků dnes v podstatě patří všechny jazyky kromě [Assembler](Assembler.md) a strojového kódu

## Procedurální a Neprocedurální programovací jazyky

### Procedurální

- popisuje výpočet pomocí posloupností příkazů a určuje přesný postup (algoritmus), jak danou úlohu řešit
- Strukturované
- Objektově orientované
- Př.: C, C++, C#, [Java](Java.md), Python, ...
- Zpracovávané údaje mají formu datových objektů různých typů, které jsou v programu reprezentovány pomocí proměnných resp. konstant
- Program obsahuje deklarace a příkazy
- Deklarace definují význam jmen (identifikátorů)
- Příkazy předepisují akce s datovými objekty nebo způsob řízení výpočtu

### Neprocedurální

- programování pomocí definic co se dělat má a ne jak se to má dělat
- Funkcionální
- Logické

#### Funkcionální jazyky

- vše popisuje pomocí funkcí (často matematických)
- často neexistují proměnné, program je soustavou funkcí, které pracují se seznamy prvků
- způsob programování je blízký klasické matematice
- Zřetězené funkce postupně upravující data
- Ve velké míře je uplatněna rekurze (funkce volá sama sebe)
- Př.: Lisp, Haskell, Miranda, ...

#### Logické jazyky

- popisují daný problém pomocí logických výroků
- programu zadáme klauzule (pravidla), vztahy a vstupní data, které dále využívá k řešení problému
- i zde se ve velké míře uplatňuje rekurze
- používají se k tvorbě umělé inteligence, k praktickému programování nejsou využitelné
- nejznámější zástupce je jazyk Prolog
- Př. Program v Prologu pro zjištění většího z čísel