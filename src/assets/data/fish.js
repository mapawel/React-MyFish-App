import karas from '../images/fish/karas.gif';
import karp from '../images/fish/karp.gif';
import klen from '../images/fish/klen.gif';
import leszcz from '../images/fish/leszcz.gif';
import okon from '../images/fish/okon.gif';
import ploc from '../images/fish/ploc.gif';
import pstrag from '../images/fish/pstrag_potokowy.gif';
import sandacz from '../images/fish/sandacz.gif';
import szczupak from '../images/fish/szczupak.gif';
import sum from '../images/fish/sum.gif';
import wzdrega from '../images/fish/wzdrega.gif';
import ukleja from '../images/fish/ukleja.gif';


const fish = [
    {
        id: '1',
        name: 'Karaś',
        location: 'strumień, rzeka, ujście, jezioro, staw',
        generalInfo: 'Bardzo pospolity, Niezwykle odporny i żywotny, Chętnie trzymany w stawikach',
        food: 'Rośliny wodne i małe zwierzęta denne (zwłaszcza larwy ochotkowatych i jętek).',
        advice: 'Karasia łowi się z reguły na metodę gruntową podając przynętę w taki sposób, by znajdowała się tuż nad dnem. Karaś jest wszystkożerny, więc można z równym powodzeniem użyć np. białych i czerwonych robaków, kukurydzy, ziemniaków lub ciasta.',
        lengthLimit: 'brak',
        timeLimit: 'brak',
        img: karas,
    },
    {
        id: '2',
        name: 'Karp',
        location: 'rzeka, jezioro, staw',
        generalInfo: 'Istnieją rozliczne odmiany, Może żyć 40 - 50 lat, Forma dzika (sazan) jest zagrożona wymarciem',
        food: 'Młode kapie zjadają rośliny i zwierzęcy plankton (wyrostki, skorupiaki). Przy długości około 18 mm zaczynają polować na zwierzęta denne. Osobniki dorosłe pobierają dodatkowo pokarm roślinny. Karpie rozpoczynają żerowanie dopiero przy temperaturze wody przekraczającej 8°C. jednak najlepiej przyswajają pokarm w temperaturze powyżej 20°C.',
        advice: 'Łowienie karpi to wielka dziedzina wędkarskiej wiedzy, która mogłaby wypełnić całą książkę. Skuteczne przynęty to m.in. ziemniaki, kukurydza, białe i czerwone robaki oraz kulki proteinowe o różnych smakach i zapachach. Każdy wędkarz może zresztą spróbować skomponowania własnej przynęty. Zalecane jest regularne zanęcanie wybranego łowiska. Po złowieniu pierwszego karpia warto łowić dalej w tym samym miejscu, ryby te rzadko bowiem żerują samotnie.',
        lengthLimit: 'do 30cm',
        timeLimit: 'brak',
        img: karp,
    },
    {
        id: '3',
        name: 'Kleń',
        location: 'strumień, rzeka, ujście, jezioro',
        generalInfo: 'Jedna z najpospolitszych ryb naszych wód płynących, Z wiekiem staje się drapieżnikiem, Ciemne obwódki łusek tworzą na ciele siatkowaty wzór',
        food: 'W wieku młodzieńczym robaki, skorupiaki, mięczaki, larwy owadów i owady z powietrza. Duże osobniki zjadają głównie małe ryby, żaby, przechodzące wylinkę raki a także drobne ssaki.',
        advice: 'Inne, czasami całkowicie zapomniane nazwy klenia to... biełucha, biały jelec, ześnioczek, paruch, paryj, jedlica, klan, klanek, kleniak, kliniak, klin, klonik, lalczyk, lalec, ześnioczek oraz żabiak, kliń.',
        lengthLimit: 'do 25cm',
        timeLimit: 'brak',
        img: klen,
    },
    {
        id: '4',
        name: 'Leszcz ',
        location: 'rzeka, ujście, jezioro, staw',
        generalInfo: 'Pospolita, przydenna ryba stadna, Samiec z silną wysypką godową, W wodach płynących gatunek przewodni krainy leszcza',
        food: 'Małe zwierzęta denne.',
        advice: 'Inne, czasami całkowicie zapomniane nazwy leszcza to... glapa, kleszcz oraz laskura.',
        lengthLimit: 'do 40cm',
        timeLimit: 'od 10 kwietnia do 20 czerwca',
        img: leszcz,
    },
    {
        id: '5',
        name: 'Okoń',
        location: 'strumień, rzeka, ujście, jezioro, staw',
        generalInfo: 'Dwie płetwy grzbietowe, Pospolity i liczny w wodach wszelkich typów, Wysoko ceniona ryba sportowa i konsumpcyjna',
        food: 'Bezkręgowce, ikra i wylęg ryb oraz małe ryby.',
        advice: 'Inne, czasami całkowicie zapomniane nazwy okonia to... okłoń, garbus oraz kostyrz.',
        lengthLimit: 'do 17cm',
        timeLimit: 'brak',
        img: okon,
    },
    {
        id: '6',
        name: 'Płoć',
        location: 'strumień, rzeka, ujście, jezioro, staw',
        generalInfo: 'Jedna z najpospolitszych ryb, Dobrze nadaje się do akwarium zimnowodnego, Stosunkowo mało wrażliwa na moską jakość wody',
        food: 'Małe organizmy zwierzęce oraz rośliny.',
        advice: 'Inne, czasami całkowicie zapomniane nazwy płoci to... wandrówka oraz płotka.',
        lengthLimit: 'do 20 cm',
        timeLimit: 'brak',
        img: ploc,
    },
    {
        id: '7',
        name: 'Pstrąg potokowy',
        location: 'sstrumień, rzeka, jezioro',
        generalInfo: 'Zajmuje terytoria osobnicze, Jest rybą przewodnią krainy pstrąga, Wędkarze nazywają go zwykle "potokowcem"',
        food: 'Małe, różnorodne organizmy zwierzęce, również owady fruwające ponad powierzchnią wody, w starszym wieku głowacze i inne małe ryby.',
        advice: 'Pstrąg potokowy jest wysoko ceniony przez wędkarzy nie tylko z powodu smacznego mięsa, ale też dlatego, że jego połów wymaga zastosowania wyrafinowanej techniki. Szczególnie eleganckie jest łowienie na sztuczną muchę. Podczas wędkowania należy zawsze przestrzegać obowiązujących przepisów.',
        lengthLimit: 'do 25/30 cm',
        timeLimit: 'od 1 września do 31 stycznia',
        img: pstrag,
    },
    {
        id: '8',
        name: 'Sandacz',
        location: 'rzeka, ujście, jezioro',
        generalInfo: 'Samiec strzeże ikry, Cenna ryba konsumpcyjna i sportowa, Największy krajowy przedstawiciel rodziny okoniowatych',
        food: 'Wylęg sandacza oprócz drobnych form zooplanklonu zjada również swych później wylęgających się pobratymców. Osobniki dorosłe odżywiają się niedużymi rybami (stynka, płoć, okoń, ukleja i inne). W okresie zimowym sandacz nie zapada w zimowy letarg i w związku z tym nie zaprzestaje pobierania pokarmu. Natomiast w okresie rozrodu nie odżywia się.',
        advice: 'Sandacz należy do ryb najwyżej cenionych przez wędkarzy, a jego pogłowie jest stale wzmacniane regularnymi zarybieniami. W wodach o "gołym" dnie można znacznie zwiększyć sukces rozrodczy sandacza tworząc sztuczne gniazda z powiązanych w pęki gałęzi jodłowych zatopionych w odpowiednich miejscach zbiornika.',
        lengthLimit: 'do 45 cm',
        timeLimit: 'od 1 marca do 31 czerwca',
        img: sandacz,
    },
    {
        id: '9',
        name: 'Szczupak',
        location: 'rzeka, ujście, jezioro, staw',
        generalInfo: 'Ma pysk podobny do kaczego dzioba, Czatuje wśród roślin wodnych, Jedna z najważniejszych ryb sportowych',
        food: 'Świeżo wylęgłe szczupaki odżywiają się zooplanktonem. W miarę wzrostu aczynają polować, głównie na obunogi z rodzaju Gammarus, by przy długości 4 cm rozpocząć odżywianie się wyłącznie rybami. Dorosłe szczupaki zjadają również dostające się do wody małe zwierzęta lądowe (szczury, myszy, żaby i inne) oraz młode ptaki wodne.',
        advice: 'Szczupak jest rybą bardzo wysoko cenioną przez wędkarzy i mimo dość ościstego mięsa także doskonałą rybą konsumpcyjną. Łowiąc szczupaki należy pamiętać o obowiązującym wymiarze i okresie ochronnym.',
        lengthLimit: 'do 45 cm',
        timeLimit: 'od 1 stycznia do 30 kwietnia',
        img: szczupak,
    },
    {
        id: '10',
        name: 'Sum',
        location: 'rzeka, ujście, jezioro',
        generalInfo: 'Nocny drapieżnik, Jedna z naszych największych i najsilniejszych ryb, Wysoko ceniona przez wędkarzy, smaczna ryba',
        food: 'W młodości plankton i małe zwierzęta denne. Rośnie bardzo szybko. Osiągnąwszy długość 30 cm odżywia się małymi rybami. Później jego pokarmem stają się ryby większe (miętus, leszcz, węgorz). Nie gardzi również żabami, traszkami, rakami, ptactwem wodnym i małymi sskami (piżmaki, myszy). W wieku dorosłym jest groźnym drapieżnikiem.',
        advice: 'Sum ze względu na swe pokaźne wymiary, siłę i waleczność, a także smaczne mięso, jest rybą wyjątkowo wysoko cenioną przez wędkarzy. Najlepiej bierze latem, od czerwca do września. Do połowu należy używać mocnego wędziska z bardzo wytrzymałą żyłką i stalowym przyponem. Przynętę - martwą lub gumową rybkę, duży wobler, pęczek rosówek, albo kawałek smażonej wątroby - podaje się jak najbliżej dna. Zaciętego, dużego suma nie tak łatwo wyholować. Trzeba zwykle posłużyć się w tym celu hakiem lądowniczym. Można też mocno chwycić go dłonią, najlepiej w ochronnej rękawicy, wkładając kciuk do paszczy tak, by pozostałe palce obejmowały od spodu żuchwę.',
        lengthLimit: 'do 70cm',
        timeLimit: 'od 1 listopada do 30 czerwca',
        img: sum,
    },
    {
        id: '11',
        name: 'Wzdręga',
        location: 'rzeka, ujście, jezioro, staw',
        generalInfo: 'Czerwone płetwy, Chętnie przebywa przy powierzchni wody, Samce podczas tarła z wysypką godową',
        food: 'Głównie pokarm roślinny; również małe organizmy zwierzęce.',
        advice: 'Wzdręga to jedyna rodzima ryba, która żywi się głównie glonami i roślinami wodnymi, zmniejszając dzięki temu ich zagęszczenie w zamieszkiwanych przez nią zbiornikach. W dużych stawikach ogrodowych może być dzięki temu atrakcyjną i godną polecenia alternatywą dla nader żarłocznego i zbyt szybko rosnącego amura białego. Szczególnie efektowna jest odmiana wzdręgi o złotym ubarwieniu ciała.',
        lengthLimit: 'do 15 cm',
        timeLimit: 'brak',
        img: wzdrega,
    },
    {
        id: '12',
        name: 'Ukleja',
        location: 'strumień, rzeka, ujście, jezioro, staw',
        generalInfo: 'Przypowierzchniowa ryba stadna, Wyraźnie górny otwór gębowy, Dawniej z jej łusek wytwarzano sztuczne perły',
        food: 'Zwierzęta planktonowe, larwy owadów.',
        advice: 'Stadna, ruchliwa ryba powierzchniowa, żyjąca zarówno w strefie brzegowej, jak i otwartej wody. Wybiera miejsca spokojne, unikając wody zmąconej, a także rejonów silnie porośniętych roślinnością.',
        lengthLimit: 'brak',
        timeLimit: 'brak',
        img: ukleja,
    },
];

export default fish;