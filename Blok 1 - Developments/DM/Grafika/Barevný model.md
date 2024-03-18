# Barevný model

Barevný model je matematický model popisující barvy na základě podílu jednotlivých složek, kterými mohou být vybrané základní barvy nebo jiné parametry. Množina barev definovaná daným barevným modelem se nazývá barevný prostor. Nejznámější barevný model je RGB používaný například v digitální fotografii a CMYK používaný pro barevný tisk.

Kromě modelů RGB a CMYK založených na míchání barev existují i jiné modely pracující jasem a dalšími parametry, např. HSV nebo Lab.

## Přehled barevných modelů

### RGB

RGB (Red, Green, Blue) je aditivní barevný model založený na faktu, že lidské oko je citlivé na tři barvy – červenou, zelenou a modrou. Ostatní barvy jsou dány sytostí těchto barev.

Model lze vyjádřit pomocí krychle, ve které jednotlivé osy (x,y,z) odpovídají modrému, červenému a zelenému světlu. Kombinací těchto barev lze získat téměř všechny barvy barevného spektra.

Variantou RGB je RGBA (Red, Green, Blue, Alpha), kde je navíc přidán alfa kanál, který nese informaci o průhlednosti.

sRGB je standardní barevný prostor odpovídající možnostem zobrazení většiny monitorů. Jsou v něm definovány základní RGB barvy, hodnota gamma a teplota bílé barvy.

Další variantou je Adobe RGB, který v roce 1998 vyvinula firma Adobe. Má o něco větší gamut než sRGB, o to hlavně v oblasti zeleno-azurové barvy. 

### CMY a CMYK

CMYK je barevný model založený na subtraktivním míchání barev. Používá se hlavně u reprodukčních zařízení, která barvy tvoří mícháním pigmentů. Model CMY obsahuje tři základní barvy – azurovou (Cyan), purpurovou (Magenta) a žlutou (Yellow). Jejich složením by měla vzniknout černá, ale při použití běžných tiskových barev není takto vzniklá černá příliš kvalitní. Proto se používá model CMYK, kde je navíc čtvrtá barva – černá (Key black). Jejím přidáním se navíc snižují náklady na tisk (černý pigment je levnější než barevný).

Všechny barvy vyjádřené v RGB nelze zobrazit v CMYK a naopak. Důvodem jsou rozdílné barevné trojúhelníky (gamuty). Nastává tedy problém s tiskem fotografií, hlavně se ztrátou brilance barev – barvy na monitoru budou vypadat jinak, než barvy na papíře. 