# Komentáře

- Pomáhají vyznat se ve zdrojovém kódu
- Doporučení – komentovat ihned při vytváření úseků kódů, ne „až na to někdy budu mít čas“
- V Javě máme 3 typy
- Jednořádkový
	-  Začíná ```//``` a platnost je do konce řádku
```java
 utrata = pocetPiv * 28; //kolik jsem zaplatil
```
- Blokový
	- Začíná znaky ```/*``` a až do výskytu znaků ```*/``` je vše komentář
	- Lze komentovat i v rámci několika řádků
	- Píše se vždy před komentovaným kódem
```java
/*
inkrementace proměnné i,
protože to algoritmus vyžaduje
*/
i++;
```
- Dokumentační
	- Začíná znaky ```/**``` a končí znaky ```*/``` 
	- Používá se pro automatické generování dokumentace programem `javadoc.exe`

