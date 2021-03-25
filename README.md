## Training360 - Angular 02 Záróvizsga Feladatok

Az alábbi dokumentum a záróvizsga gyakorlati feladatait tartalmazza, frontend
szakirány esetén.

## Bevezetés

A feladatokat egy már előre elkészített környezetben kell megoldani. Ez az
alkalmazás feladatok adatait kezeli. A feladatok listázását, és a hozzá kapcsolódó
osztályokat és szolgáltatásokat készen tartalmazza az alap-alkalmazás. A feladat hat
darab jól elkülönülő funkció elkészítése az alap-alkalmazásra épülően.

## Beadás

A kész feladatot 2021-03-16 23:00 -ig kell beadni ezen az űrlapon. Itt fel kell tüntetni
a személyes adatokat és a feladat elérhetőségét is. Csak a határidőig beérkező
feladatokat tudjuk értékelni.
Űrlap linkje: https://forms.office.com/r/bBP4qUVkZM

## Feltételek

# A feladatok elvégzéséhez az alábbi feltételek és programok megléte szükséges:

1. PC stabil internet kapcsolattal.
2. Legalább 8GB RAM.
3. Legalább 2 magos CPU.
4. Telepített Git kliens.
5. Telepített Visual Studio Code alkalmazás.
6. Telepített NodeJS futtatókörnyezet, NPM csomagkezelővel.

# Kezdő lépések

1. Telepítsd a prog-teacher csomagot a parancssorban: `npm i -g prog-teacher`
2. Töltsd le a alap-alkalmazást: `prog-teacher strfinalexam02`
3. Hozz létre egy Github repozitorit a saját fiókodban, a neve legyen (ne hozd
   létre a Readme.md fájlt!): `strfinalexam02`
4. Lépj be a mappába: `cd strfinalexam02`
5. Állítsd be a VSCode gyökerének az aktuális mappát: `code . -r`
6. Telepítsd a függőségeket: `npm i`
7. Állítsd be a Github repozitorid távoli forrásnak:
   `git init`
   `git add .`
   `git commit -m "first commit"`
   `git branch -M main`
   `git remote add origin https://github.com/<username>/ strfinalexam02.git`
   `git push -u origin main`
   Figyelem: a <username> helyére a te github fiókod neve kerüljön.
8. Indítsd el a json-server -t és az Anagular dev-server -t:
   `json-server .\server\db.json --watch`
   `npm start`

## Feladatok

1.

ok- A megjelenő listában készítsd el a törlés funkcionalitást!
ok- A törlés gombra kattintva a példa adatbázisból törlődjön az adott rekord.
ok- Törlés előtt jelenjen meg egy megerősítő kérdés.
ok- A törléshez a TodoService osztályban is hozd létre a szükséges metódust.

2. Tedd szűrhetővé a listában megjelenő adatokat!

ok- A táblázat feletti beviteli mezőt használd.
ok- A szűrés beírásra működjön.
ok- A beviteli mező értékének módosítása esetén a lista azon rekordjai maradjanak láthatóak, amelyek `title` mezője részben vagy egészben tartalmazza a beviteli mezőbe gépelt szöveget.

3. Tedd rendezhetővé a listában megjelenő adatokat!

ok- Ha a felhasználó a táblázat felett lévő gombra kattint, akkor a megjelenő rekordok rendeződjenek a Title oszlop szerint növekvő sorrendbe. Csak növekvő sorrendbe kell rendezni.

4.  Tedd módosíthatóvá a lista elemeinek active értékét!

ok- A táblázat sorainak utolsó cellájában lévő gombra kattintva (egy check jel látható benne) az adatbázisban kerüljenek frissítésre az adott rekord adatai. Ha az active érték true volt, akkor legyen false és ha false volt akkor legyen true.
ok- A módosításhoz a TodoService osztályban is hozd létre a szükséges metódust.

5.

ok- Validáld az adatokat az oldal tetején megjelenő űrlapon!
ok- Minden input elem előtt kommentben feltüntettük a validálás szabályait.
ok- Attribútumok és reguláris kifejezések használatával validáld a mezőkbe írt adatokat.
ok- Ha nem megfelelő az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot tartalmazó mező alatt.
ok- Ha az űrlap bármely mezője hibás adatot tartalmaz, a mentés gomb legyen letiltva és ne legyen az űrlap elküldhető.

6.  Tedd lehetővé új rekord rögzítését.

ok- Az oldal felső részén látható űrlap megfelelő kitöltése után a mentés gombra kattintva történjen meg az új rekord beszúrása az adatbázisba.
ok- A beszúráshoz a TodoService osztályban is hozd létre a szükséges metódusokat.
