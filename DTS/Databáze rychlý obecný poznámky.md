# Databáze rychlý obecný poznámky

## Entity, atributy, relace

- **Entity:** Objekt nebo věc v databázi, která je identifikovatelná a má význam pro danou oblast. Například, v databázi knihovny mohou být entity jako „Kniha“, „Autor“, „Čtenář“.
- **Atributy:** Vlastnosti nebo charakteristiky entity. Pro entitu „Kniha“ mohou být atributy jako „Název“, „Autor“, „ISBN“, „Rok vydání“.
- **Relace:** Vztahy mezi entitami. Například, relace mezi „Knihou“ a „Autorem“ může být „Napsal“.

## DMM (Data Manipulation and Management)

- **create_database:** Vytvoří novou databázi.
  ```sql
  CREATE DATABASE nazev_databaze;
  ```

- **drop_database:** Odstraní existující databázi.
  ```sql
  DROP DATABASE nazev_databaze;
  ```

- **create_table:** Vytvoří novou tabulku v databázi.
  ```sql
  CREATE TABLE nazev_tabulky (
      sloupec1 datatype,
      sloupec2 datatype,
      ...
  );
  ```

- **drop_table:** Odstraní tabulku z databáze.
  ```sql
  DROP TABLE nazev_tabulky;
  ```

- **alter_table:** Upraví strukturu existující tabulky (např. přidání nebo odstranění sloupce).
  ```sql
  ALTER TABLE nazev_tabulky ADD sloupec1 datatype;
  ALTER TABLE nazev_tabulky DROP COLUMN sloupec1;
  ```

- **create_index:** Vytvoří index pro zrychlení dotazů na tabulku.
  ```sql
  CREATE INDEX nazev_indexu ON nazev_tabulky (sloupec1, sloupec2);
  ```

## Atributy - DDL (Data Definition Language)

- **integer** - celočíselný typ
- **tinyint:** Malé celé číslo (1 bajt)
- **smallint:** Malé celé číslo (2 bajty)
- **mediumint:** Středně velké celé číslo (3 bajty)

- **varchar** - alfanumerický řetězec proměnné délky
```sql
    VARCHAR(255)
```

- **date** - datum
```sql
    DATE
```

- **timestamp** - unix timestamp, měřený od 1.1.1970 v sekundách
```sql
    TIMESTAMP
```

- **float** - desetinná čísla s jednoduchou přesností
```sql
    FLOAT
```

- **double** - desetinná čísla s dvojitou přesností
```sql
    DOUBLE
```

- **currency** - měna (závisí na databázovém systému, jak je měna implementována)

## DML (Data Manipulation Language)

- **INSERT** - vloží nový záznam do tabulky
  ```sql
  INSERT INTO nazev_tabulky (sloupec1, sloupec2) VALUES (hodnota1, hodnota2);
  ```

- **LOAD** - načte data do tabulky (různé varianty, např. z externího souboru)
  ```sql
  LOAD DATA INFILE 'soubor.csv' INTO TABLE nazev_tabulky;
  ```

- **UPDATE** - aktualizuje existující záznamy
  ```sql
  UPDATE nazev_tabulky SET sloupec1 = hodnota1 WHERE podminka;
  ```

- **DELETE** - smaže záznamy z tabulky
  ```sql
  DELETE FROM nazev_tabulky WHERE podminka;
  ```

- **TRUNCATE** - smaže všechny záznamy z tabulky a resetuje počítadla
  ```sql
  TRUNCATE TABLE nazev_tabulky;
  ```

## SELECT

- **SELECT** - vybere data z tabulky
  ```sql
  SELECT * FROM nazev_tabulky;
  ```

- **NOW** - vrátí aktuální datum a čas
  ```sql
  SELECT NOW();
  ```

- **aliasy** - zástupné znaky, které usnadňují práci s dotazy
  ```sql
  SELECT sloupec1 AS alias1 FROM nazev_tabulky;
  ```

- **ORDER BY** - třídí výsledky podle určitého sloupce
  ```sql
  SELECT * FROM nazev_tabulky ORDER BY sloupec1;
  ```

- **GROUP BY** - seskupuje výsledky podle určitého sloupce
  ```sql
  SELECT sloupec1, COUNT(*) FROM nazev_tabulky GROUP BY sloupec1;
  ```

- **HAVING** - podmínka aplikovaná na seskupená data
  ```sql
  SELECT sloupec1, COUNT(*) FROM nazev_tabulky GROUP BY sloupec1 HAVING COUNT(*) > 1;
  ```

## Spojení (Joins)

- **INNER JOIN** - vrací záznamy, které mají odpovídající hodnoty v obou tabulkách
  ```sql
  SELECT * FROM tabulka1 INNER JOIN tabulka2 ON tabulka1.sloupec = tabulka2.sloupec;
  ```

- **LEFT (OUTER) JOIN** - vrací všechny záznamy z levé tabulky a odpovídající záznamy z pravé tabulky
  ```sql
  SELECT * FROM tabulka1 LEFT JOIN tabulka2 ON tabulka1.sloupec = tabulka2.sloupec;
  ```

- **RIGHT (OUTER) JOIN** - vrací všechny záznamy z pravé tabulky a odpovídající záznamy z levé tabulky
  ```sql
  SELECT * FROM tabulka1 RIGHT JOIN tabulka2 ON tabulka1.sloupec = tabulka2.sloupec;
  ```

- **FULL (OUTER) JOIN** - vrací všechny záznamy, které mají odpovídající hodnoty v obou tabulkách, a všechny záznamy z obou tabulek, které nemají odpovídající hodnoty
  ```sql
  SELECT * FROM tabulka1 FULL OUTER JOIN tabulka2 ON tabulka1.sloupec = tabulka2.sloupec;
  ```

## Integrita

- **Referenční integrita:** Zajišťuje, že vztahy mezi tabulkami jsou zachovány. Například cizí klíč (foreign key) v jedné tabulce musí odpovídat primárnímu klíči (primary key) v jiné tabulce.
  ```sql
  CREATE TABLE objednavky (
      objednavka_id INT PRIMARY KEY,
      zakaznik_id INT,
      FOREIGN KEY (zakaznik_id) REFERENCES zakaznici(zakaznik_id)
  );
  ```