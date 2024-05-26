# Pthfind

# Myšlenka
- lidi stále nepřišli na jednoduché generické řešení CV/vizitek a vetšinou si to kuchtí sami ve Wordu nebo jsou na Linkedinu, který stejně nikoho moc nezajímá
- hojně se stává, že mají lidi CV přesycené "omáčkou" a fakta se hůře hledají, HR z toho šílí
- stále si lidi předávají vizitky nebo dávají link na Instagram nebo Linkedin, tohle by mohl být takový minimalistický rozcestník naší digitální identity něco jako Linktree, ale více profi a mířený spíše předtavení člověka v jeho nejlepším světle
- rozcestník tvého digi života
- \= Minimalistický hostovaný profil
- nový uživatel se dostane na síť, jen pokud dostane od uživatele jeho portfolio/profil
- nenahradí způsob jak si najít práci
- sebeprezentace sebe jako osobu, produkt, společnost
- představit se co nejefektivněji v pár větách
- osobní hodnoty
- lidi zajímá, jaké máš zkušenosti, ale více je zajímá co si dokázal
- neslibuj čiň
- jak by si se představil na první schůzce?
- lidi budu dopředu vědět co od tebe čekat, to ušetři čas a nepříjemnosti
- export max do VCARD ne do pdf, profil zůstane na stránkách
- PWA, není potřeba desktop aplikace, jen by to bralo čas, maximální přístupnost.
# Pro koho
- Obecně kreativci a umělci, který chtějí představit svoje perly světu
- Snaha zaujmout, měla by tam prvky, kterých si jednotlivce nejvíce váží
	- fotograf/grafik: Sbírka jeho nejpovedenějíšch obrázků
	- Kodér: stránky, kterých si nejvíce váží, že dokázal.
	- hudebnik: svůj nejnovější hudební počin či akce na, kterých bude v nejbližím čase působit
- i obyčejní lidé mají své koníčky
# Pilíře
- minimalismus, jak v designu, tak i v používání aplikace
	- jde o tebe ne o aplikaci
	- aplikace je jen prostředek, který má zabrat jen minimum času, než se dostaneme ke kýženému cíli
- osobní přístup, žádné korporátní sítě
	- neformální vyjadřování
	- aby ses mohl dostat na síť, tak se musíš seznámit s někým kdo ti dá na sebe kontakt/profil
- edukace
	- už od prvního spuštění se aplikace představí a ukáže jak se má používat
	- snaha vytvořit uživatelům návyky
# Funkce
- Bude možné nastavit svému profilu pozadí, obrázek/video
- generace qr kodu s vcard
- sdílení
- změna primární barvy
- pokud bude uživatel na svém profilu, tak je možnost uzamknutí, která bude ve výchozím režimu zapnuto. Ve zkratce se takhle přepíná edit mode.
# Elementy
- profil se bude skládat z elementů
	- dlaždice/prvek, kterým se bude moct uživatel představit nebo odlišit
	- na desktopu/tabletu v gridu 6x*, na mobilu 2x*
- s elementy bude možné pohybovat a některé dokonce roztahovat přes více sloupců/řádků
- elementy: 
	- profil: obrázek se jménem
	- kontakt: odstavce s kontaktními údaji, ikonky se k údaji budou přidávat podle regexu.
	- text: normální textový odstavec
	- iFrame: dlaždice s vybranou stránkou
	- galerie: swiper s photoswipe, do kterém bude možné přidat do 8 videí nebo obrázků
	- odkaz: samostatný blok s odkazem na sociální síť
	- mapa
# Nástroje pro tvorbu
- Frontend:
	- React.ts
	- Swiper a Photoswipe pro galerii
	- Pragmatic drag and drop pro přemísťování elementů a maniplace s nimi
	- heroicons pro ikonky.
- Backend:
    - ASP.NET Core

## Odkazy pro vývoj

- [Figma](https://www.figma.com/file/FNIubqs15CI6uT6EClqgkX/Pthfind?type=design&node-id=0%3A1&mode=design&t=0Nose62vSZgYsUG9-1)