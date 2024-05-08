# Konvence a syntaxe zápisu identifikátorů

- [Java](Java.md) důsledně rozlišuje malá a velká písmena! (case sensitive)
	- Př. `prvni.java` není to samé jako `Prvni.java`
- identifikátor musí začínat písmenem, podtržítkem nebo $
	- (pozn.: ale poslední dvě jmenované nedoporučuji)
- Názvy nesmí obsahovat diakritiku a mezeru
- Pokud název tvoří více slov, začíná každé slovo velkým písmenem kvůli lepší čitelnosti
	- Př. `pocetSlov`, `druheJmeno`, ...
	- Tento styl se označuje jako Velbloudí notace
	- (anglicky Camel Case, stylizováno jako camelCase)
- Alternativní zápis pomocí hadí notace
	- Př. `pocet_slov`, `druhe_jmeno`

***

- Třídy a rozhraní
	- Začíná vždy velkým písmenem a ostatní písmena jsou malá (př. `String`)
	- Třída se musí jmenovat stejně jako soubor, ve kterém je uložena!
- Metody a [Proměnné](Proměnné.md)
	- Začíná malým písmenem (př. `pocet`, `start()`)
	- Metoda se od [Proměnné](Proměnné.md) liší tím, že metody mají za jménem uvedeny vždy kulaté závorky
- Konstanty
	- Pouze velká písmena, ve víceslovných je oddělovačem podtržítko (př. `PI`, `MAX_VALUE`)
- Balíky
	- Pouze malá písmena, ve složených názvech je oddělovačem tečka (př.
`java.util`)

***

- Jako identifikátory se nesmí používat následující klíčová slova:

| abstract | continue | for          | new       | switch    |
| -------- | -------- | ------------ | --------- | --------- |
| assert   | package  | synchronized | default   | goto      |
| boolean  | do       | if           | private   | this      |
| break    | else     | import       | public    | throw     |
| byte     | enum     | implements   | protected | throws    |
| case     | double   | instanceof   | return    | transient |
| catch    | extends  | int          | short     | try       |
| char     | final    | interface    | static    | void      |
| class    | finally  | long         | strictfp  | volatile  |
| const    | float    | native       | super     | while     |