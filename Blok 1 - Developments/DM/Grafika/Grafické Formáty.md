# Grafické formáty

Grafické formáty stanovují pravidla, podle kterých je obrázek uložen v souboru. Některé formáty mohou do souboru ukládat i další informace, např. náhled obrázku v malém [Rozlišení](Rozlišení.md), informace o expozici, datu a čase pořízení a podobně.

## Druhy grafických formátů

### Bitmapový (rastrová grafika)

- Obraz se skládá z jednotlivých pixelů (bodů), z nichž každý má definovánu určitou barvu.

### Vektorový

- Obraz se skládá z jednotlivých geometrických objektů (např. obdélník, elipsa, křivka), které mají definovanou barvu a styl obrysu a výplně. Jednotlivé objekty jsou popsány parametry obrysu, obvykle koeficienty Bézierových křivek 2. nebo 3. řádu.

## Komprese grafických formátů

Rozeznáváme dva základní druhy komprese grafických formátů: bezeztrátovou a ztrátovou.

### Bezeztrátová komprese

- I po komprimaci zachovávají soubory identickou informaci s předlohou. Nedochází tak ke ztrátě kvality obrazu. Obvykle není tak účinná jako ztrátová komprese dat.

### Ztrátová komprese

- Při kompresi zahazují část grafické informace. Používá se tam, kde je možné ztrátu některých informací tolerovat a kde nevýhoda určitého zkreslení je bohatě vyvážena velmi významným zmenšením souboru.

## Základní grafické formáty

### Rastrové formáty

#### Bezeztrátové

- **BMP**: Jednoduchý formát bitmapového obrázku.
- **GIF (Graphic Interchange Format)**: Grafický formát určený pro rastrovou grafiku, umožňuje animace.
- **PNG (Portable Network Graphics)**: Grafický formát určený pro bezeztrátovou kompresi rastrové grafiky.
- **RAW**: Soubor nijak neupravených digitalizovaných dat ze snímače digitálního fotoaparátu.
- **DNG (Digital Negative)**: Nejmodernější formát tzv. digitálního negativu.

#### Ztrátové

- **JPEG (Joint Photographic Experts Group)**: Standardní metoda ukládání snímků se ztrátovou kompresí.
- **HEIF (High Efficiency Image File Format)**: Nový kontejner pro ukládání obrázků s vysokou efektivní kompresí.
- **AVIF**: Otevřený formát kódování podobný formátu HEIC.

#### Ztrátové i bezeztrátové

- **JPEG XL**: Formát navržený tak, aby výrazně překonal existující rastrové formáty.
- **WDP (Windows Media Photo, HD Photo)**: Obrázkový kompresní algoritmus a souborový formát určený pro fotografie.

### Vektorové formáty

- **SVG (Scalable Vector Graphics)**: Značkovací jazyk a formát souboru, který popisuje dvojrozměrnou vektorovou grafiku pomocí XML.