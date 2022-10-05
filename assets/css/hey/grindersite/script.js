var names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Caethan", "Cahl", "Cahlum", "Cai", "Caidan", "Caiden", "Caiden-Paul", "Caidyn", "Caie", "Cailaen", "Cailean", "Caileb-John", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Christoph", "Christopher", "Christopher-Lee", "Christy", "Chu", "Chukwuemeka", "Cian", "Ciann", "Ciar", "Ciaran", "Ciarian", "Cieran", "Cillian", "Cillin", "Cinar", "CJ", "C-Jay", "Clark", "Clarke", "Clayton", "Clement", "Clifford", "Clyde", "Cobain", "Coban", "Coben", "Cobi", "Cobie", "Coby", "Codey", "Codi", "Codie", "Cody", "Cody-Lee", "Coel", "Cohan", "Cohen", "Colby", "Cole", "Colin", "Coll", "Colm", "Colt", "Colton", "Colum", "Colvin", "Comghan", "Conal", "Conall", "Conan", "Conar", "Conghaile", "Conlan", "Conley", "Conli", "Conlin", "Conlly", "Conlon", "Conlyn", "Connal", "Connall", "Connan", "Connar", "Connel", "Connell", "Conner", "Connolly", "Connor", "Connor-David", "Conor", "Conrad", "Cooper", "Copeland", "Coray", "Corben", "Corbin", "Corey", "Corey-James", "Corey-Jay", "Cori", "Corie", "Corin", "Cormac", "Cormack", "Cormak", "Corran", "Corrie", "Cory", "Cosmo", "Coupar", "Craig", "Craig-James", "Crawford", "Creag", "Crispin", "Cristian", "Crombie", "Cruiz", "Cruz", "Cuillin", "Cullen", "Cullin", "Curtis", "Cyrus", "Daanyaal", "Daegan", "Daegyu", "Dafydd", "Dagon", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay", "David-Lee", "Davie", "Davis", "Davy", "Dawid", "Dawson", "Dawud", "Dayem", "Daymian", "Deacon", "Deagan", "Dean", "Deano", "Decklan", "Declain", "Declan", "Declyan", "Declyn", "Dedeniseoluwa", "Deecan", "Deegan", "Deelan", "Deklain-Jaimes", "Del", "Demetrius", "Denis", "Deniss", "Dennan", "Dennin", "Dennis", "Denny", "Dennys", "Denon", "Denton", "Denver", "Denzel", "Deon", "Derek", "Derick", "Derin", "Dermot", "Derren", "Derrie", "Derrin", "Derron", "Derry", "Derryn", "Deryn", "Deshawn", "Desmond", "Dev", "Devan", "Devin", "Devlin", "Devlyn", "Devon", "Devrin", "Devyn", "Dex", "Dexter", "Dhani", "Dharam", "Dhavid", "Dhyia", "Diarmaid", "Diarmid", "Diarmuid", "Didier", "Diego", "Diesel", "Diesil", "Digby", "Dilan", "Dilano", "Dillan", "Dillon", "Dilraj", "Dimitri", "Dinaras", "Dion", "Dissanayake", "Dmitri", "Doire", "Dolan", "Domanic", "Domenico", "Domhnall", "Dominic", "Dominick", "Dominik", "Donald", "Donnacha", "Donnie", "Dorian", "Dougal", "Douglas", "Dougray", "Drakeo", "Dre", "Dregan", "Drew", "Dugald", "Duncan", "Duriel", "Dustin", "Dylan", "Dylan-Jack", "Dylan-James", "Dylan-John", "Dylan-Patrick", "Dylin", "Dyllan", "Dyllan-James", "Dyllon", "Eadie", "Eagann", "Eamon", "Eamonn", "Eason", "Eassan", "Easton", "Ebow", "Ed", "Eddie", "Eden", "Ediomi", "Edison", "Eduardo", "Eduards", "Edward", "Edwin", "Edwyn", "Eesa", "Efan", "Efe", "Ege", "Ehsan", "Ehsen", "Eiddon", "Eidhan", "Eihli", "Eimantas", "Eisa", "Eli", "Elias", "Elijah", "Eliot", "Elisau", "Eljay", "Eljon", "Elliot", "Elliott", "Ellis", "Ellisandro", "Elshan", "Elvin", "Elyan", "Emanuel", "Emerson", "Emil", "Emile", "Emir", "Emlyn", "Emmanuel", "Emmet", "Eng", "Eniola", "Enis", "Ennis", "Enrico", "Enrique", "Enzo", "Eoghain", "Eoghan", "Eoin", "Eonan", "Erdehan", "Eren", "Erencem", "Eric", "Ericlee", "Erik", "Eriz", "Ernie-Jacks", "Eroni", "Eryk", "Eshan", "Essa", "Esteban", "Ethan", "Etienne", "Etinosa", "Euan", "Eugene", "Evan", "Evann", "Ewan", "Ewen", "Ewing", "Exodi", "Ezekiel", "Ezra", "Fabian", "Fahad", "Faheem", "Faisal", "Faizaan", "Famara", "Fares", "Farhaan", "Farhan", "Farren", "Farzad", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Faysal", "Fearghus", "Feden", "Felix", "Fergal", "Fergie", "Fergus", "Ferre", "Fezaan", "Fiachra", "Fikret", "Filip", "Filippo", "Finan", "Findlay", "Findlay-James", "Findlie", "Finlay", "Finley", "Finn", "Finnan", "Finnean", "Finnen", "Finnlay", "Finnley", "Fintan", "Fionn", "Firaaz", "Fletcher", "Flint", "Florin", "Flyn", "Flynn", "Fodeba", "Folarinwa", "Forbes", "Forgan", "Forrest", "Fox", "Francesco", "Francis", "Francisco", "Franciszek", "Franco", "Frank", "Frankie", "Franklin", "Franko", "Fraser", "Frazer", "Fred", "Freddie", "Frederick", "Fruin", "Fyfe", "Fyn", "Fynlay", "Fynn", "Gabriel", "Gallagher", "Gareth", "Garren", "Garrett", "Garry", "Gary", "Gavin", "Gavin-Lee", "Gene", "Geoff", "Geoffrey", "Geomer", "Geordan", "Geordie", "George", "Georgia", "Georgy", "Gerard", "Ghyll", "Giacomo", "Gian", "Giancarlo", "Gianluca", "Gianmarco", "Gideon", "Gil", "Gio", "Girijan", "Girius", "Gjan", "Glascott", "Glen", "Glenn", "Gordon", "Grady", "Graeme", "Graham", "Grahame", "Grant", "Grayson", "Greg", "Gregor", "Gregory", "Greig", "Griffin", "Griffyn", "Grzegorz", "Guang", "Guerin", "Guillaume", "Gurardass", "Gurdeep", "Gursees", "Gurthar", "Gurveer", "Gurwinder", "Gus", "Gustav", "Guthrie", "Guy", "Gytis", "Habeeb", "Hadji", "Hadyn", "Hagun", "Haiden", "Haider", "Hamad", "Hamid", "Hamish", "Hamza", "Hamzah", "Han", "Hansen", "Hao", "Hareem", "Hari", "Harikrishna", "Haris", "Harish", "Harjeevan", "Harjyot", "Harlee", "Harleigh", "Harley", "Harman", "Harnek", "Harold", "Haroon", "Harper", "Harri", "Harrington", "Harris", "Harrison", "Harry", "Harvey", "Harvie", "Harvinder", "Hasan", "Haseeb", "Hashem", "Hashim", "Hassan", "Hassanali", "Hately", "Havila", "Hayden", "Haydn", "Haydon", "Haydyn", "Hcen", "Hector", "Heddle", "Heidar", "Heini", "Hendri", "Henri", "Henry", "Herbert", "Heyden", "Hiro", "Hirvaansh", "Hishaam", "Hogan", "Honey", "Hong", "Hope", "Hopkin", "Hosea", "Howard", "Howie", "Hristomir", "Hubert", "Hugh", "Hugo", "Humza", "Hunter", "Husnain", "Hussain", "Hussan", "Hussnain", "Hussnan", "Hyden", "I", "Iagan", "Iain", "Ian", "Ibraheem", "Ibrahim", "Idahosa", "Idrees", "Idris", "Iestyn", "Ieuan", "Igor", "Ihtisham", "Ijay", "Ikechukwu", "Ikemsinachukwu", "Ilyaas", "Ilyas", "Iman", "Immanuel", "Inan", "Indy", "Ines", "Innes", "Ioannis", "Ireayomide", "Ireoluwa", "Irvin", "Irvine", "Isa", "Isaa", "Isaac", "Isaiah", "Isak", "Isher", "Ishwar", "Isimeli", "Isira", "Ismaeel", "Ismail", "Israel", "Issiaka", "Ivan", "Ivar", "Izaak", "J", "Jaay", "Jac", "Jace", "Jack", "Jacki", "Jackie", "Jack-James", "Jackson", "Jacky", "Jacob", "Jacques", "Jad", "Jaden", "Jadon", "Jadyn", "Jae", "Jagat", "Jago", "Jaheim", "Jahid", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii", "Jaime", "Jai-Rajaram", "Jaise", "Jak", "Jake", "Jakey", "Jakob", "Jaksyn", "Jakub", "Jamaal", "Jamal", "Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jayden", "Jayden-James", "Jayden-Lee", "Jayden-Paul", "Jayden-Thomas", "Jaydn", "Jaydon", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jaz", "Jazeb", "Jazib", "Jazz", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo", "Jerrick", "Jerry", "Jesse", "Jesuseun", "Jeswin", "Jevan", "Jeyun", "Jez", "Jia", "Jian", "Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe", "Joeddy", "Joel", "Joey", "Joey-Jack", "Johann", "Johannes", "Johansson", "John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Paul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Joris", "Jorryn", "Josan", "Josef", "Joseph", "Josese", "Josh", "Joshiah", "Joshua", "Josiah", "Joss", "Jostelle", "Joynul", "Juan", "Jubin", "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin", "Kaelum", "Kai", "Kaid", "Kaidan", "Kaiden", "Kaidinn", "Kaidyn", "Kaileb", "Kailin", "Kain", "Kaine", "Kainin", "Kainui", "Kairn", "Kaison", "Kaiwen", "Kajally", "Kajetan", "Kalani", "Kale", "Kaleb", "Kaleem", "Kal-el", "Kalen", "Kalin", "Kallan", "Kallin", "Kalum", "Kalvin", "Kalvyn", "Kameron", "Kames", "Kamil", "Kamran", "Kamron", "Kane", "Karam", "Karamvir", "Karandeep", "Kareem", "Karim", "Karimas", "Karl", "Karol", "Karson", "Karsyn", "Karthikeya", "Kasey", "Kash", "Kashif", "Kasim", "Kasper", "Kasra", "Kavin", "Kayam", "Kaydan", "Kayden", "Kaydin", "Kaydn", "Kaydyn", "Kaydyne", "Kayleb", "Kaylem", "Kaylum", "Kayne", "Kaywan", "Kealan", "Kealon", "Kean", "Keane", "Kearney", "Keatin", "Keaton", "Keavan", "Keayn", "Kedrick", "Keegan", "Keelan", "Keelin", "Keeman", "Keenan", "Keenan-Lee", "Keeton", "Kehinde", "Keigan", "Keilan", "Keir", "Keiran", "Keiren", "Keiron", "Keiryn", "Keison", "Keith", "Keivlin", "Kelam", "Kelan", "Kellan", "Kellen", "Kelso", "Kelum", "Kelvan", "Kelvin", "Ken", "Kenan", "Kendall", "Kendyn", "Kenlin", "Kenneth", "Kensey", "Kenton", "Kenyon", "Kenzeigh", "Kenzi", "Kenzie", "Kenzo", "Kenzy", "Keo", "Ker", "Kern", "Kerr", "Kevan", "Kevin", "Kevyn", "Kez", "Khai", "Khalan", "Khaleel", "Khaya", "Khevien", "Khizar", "Khizer", "Kia", "Kian", "Kian-James", "Kiaran", "Kiarash", "Kie", "Kiefer", "Kiegan", "Kienan", "Kier", "Kieran", "Kieran-Scott", "Kieren", "Kierin", "Kiern", "Kieron", "Kieryn", "Kile", "Killian", "Kimi", "Kingston", "Kinneil", "Kinnon", "Kinsey", "Kiran", "Kirk", "Kirwin", "Kit", "Kiya", "Kiyonari", "Kjae", "Klein", "Klevis", "Kobe", "Kobi", "Koby", "Koddi", "Koden", "Kodi", "Kodie", "Kody", "Kofi", "Kogan", "Kohen", "Kole", "Konan", "Konar", "Konnor", "Konrad", "Koray", "Korben", "Korbyn", "Korey", "Kori", "Korrin", "Kory", "Koushik", "Kris", "Krish", "Krishan", "Kriss", "Kristian", "Kristin", "Kristofer", "Kristoffer", "Kristopher", "Kruz", "Krzysiek", "Krzysztof", "Ksawery", "Ksawier", "Kuba", "Kurt", "Kurtis", "Kurtis-Jae", "Kyaan", "Kyan", "Kyde", "Kyden", "Kye", "Kyel", "Kyhran", "Kyie", "Kylan", "Kylar", "Kyle", "Kyle-Derek", "Kylian", "Kym", "Kynan", "Kyral", "Kyran", "Kyren", "Kyrillos", "Kyro", "Kyron", "Kyrran", "Lachlainn", "Lachlan", "Lachlann", "Lael", "Lagan", "Laird", "Laison", "Lakshya", "Lance", "Lancelot", "Landon", "Lang", "Lasse", "Latif", "Lauchlan", "Lauchlin", "Laughlan", "Lauren", "Laurence", "Laurie", "Lawlyn", "Lawrence", "Lawrie", "Lawson", "Layne", "Layton", "Lee", "Leigh", "Leigham", "Leighton", "Leilan", "Leiten", "Leithen", "Leland", "Lenin", "Lennan", "Lennen", "Lennex", "Lennon", "Lennox", "Lenny", "Leno", "Lenon", "Lenyn", "Leo", "Leon", "Leonard", "Leonardas", "Leonardo", "Lepeng", "Leroy", "Leven", "Levi", "Levon", "Levy", "Lewie", "Lewin", "Lewis", "Lex", "Leydon", "Leyland", "Leylann", "Leyton", "Liall", "Liam", "Liam-Stephen", "Limo", "Lincoln", "Lincoln-John", "Lincon", "Linden", "Linton", "Lionel", "Lisandro", "Litrell", "Liyonela-Elam", "LLeyton", "Lliam", "Lloyd", "Lloyde", "Loche", "Lochlan", "Lochlann", "Lochlan-Oliver", "Lock", "Lockey", "Logan", "Logann", "Logan-Rhys", "Loghan", "Lokesh", "Loki", "Lomond", "Lorcan", "Lorenz", "Lorenzo", "Lorne", "Loudon", "Loui", "Louie", "Louis", "Loukas", "Lovell", "Luc", "Luca", "Lucais", "Lucas", "Lucca", "Lucian", "Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej", "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison", "Madison-Jake", "Madox", "Mael", "Magnus", "Mahan", "Mahdi", "Mahmoud", "Maias", "Maison", "Maisum", "Maitlind", "Majid", "Makensie", "Makenzie", "Makin", "Maksim", "Maksymilian", "Malachai", "Malachi", "Malachy", "Malakai", "Malakhy", "Malcolm", "Malik", "Malikye", "Malo", "Ma'moon", "Manas", "Maneet", "Manmohan", "Manolo", "Manson", "Mantej", "Manuel", "Manus", "Marc", "Marc-Anthony", "Marcel", "Marcello", "Marcin", "Marco", "Marcos", "Marcous", "Marcquis", "Marcus", "Mario", "Marios", "Marius", "Mark", "Marko", "Markus", "Marley", "Marlin", "Marlon", "Maros", "Marshall", "Martin", "Marty", "Martyn", "Marvellous", "Marvin", "Marwan", "Maryk", "Marzuq", "Mashhood", "Mason", "Mason-Jay", "Masood", "Masson", "Matas", "Matej", "Mateusz", "Mathew", "Mathias", "Mathu", "Mathuyan", "Mati", "Matt", "Matteo", "Matthew", "Matthew-William", "Matthias", "Max", "Maxim", "Maximilian", "Maximillian", "Maximus", "Maxwell", "Maxx", "Mayeul", "Mayson", "Mazin", "Mcbride", "McCaulley", "McKade", "McKauley", "McKay", "McKenzie", "McLay", "Meftah", "Mehmet", "Mehraz", "Meko", "Melville", "Meshach", "Meyzhward", "Micah", "Michael", "Michael-Alexander", "Michael-James", "Michal", "Michat", "Micheal", "Michee", "Mickey", "Miguel", "Mika", "Mikael", "Mikee", "Mikey", "Mikhail", "Mikolaj", "Miles", "Millar", "Miller", "Milo", "Milos", "Milosz", "Mir", "Mirza", "Mitch", "Mitchel", "Mitchell", "Moad", "Moayd", "Mobeen", "Modoulamin", "Modu", "Mohamad", "Mohamed", "Mohammad", "Mohammad-Bilal", "Mohammed", "Mohanad", "Mohd", "Momin", "Momooreoluwa", "Montague", "Montgomery", "Monty", "Moore", "Moosa", "Moray", "Morgan", "Morgyn", "Morris", "Morton", "Moshy", "Motade", "Moyes", "Msughter", "Mueez", "Muhamadjavad", "Muhammad", "Muhammed", "Muhsin", "Muir", "Munachi", "Muneeb", "Mungo", "Munir", "Munmair", "Munro", "Murdo", "Murray", "Murrough", "Murry", "Musa", "Musse", "Mustafa", "Mustapha", "Muzammil", "Muzzammil", "Mykie", "Myles", "Mylo", "Nabeel", "Nadeem", "Nader", "Nagib", "Naif", "Nairn", "Narvic", "Nash", "Nasser", "Nassir", "Natan", "Nate", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathan-Rae", "Nawfal", "Nayan", "Neco", "Neil", "Nelson", "Neo", "Neshawn", "Nevan", "Nevin", "Ngonidzashe", "Nial", "Niall", "Nicholas", "Nick", "Nickhill", "Nicki", "Nickson", "Nicky", "Nico", "Nicodemus", "Nicol", "Nicolae", "Nicolas", "Nidhish", "Nihaal", "Nihal", "Nikash", "Nikhil", "Niki", "Nikita", "Nikodem", "Nikolai", "Nikos", "Nilav", "Niraj", "Niro", "Niven", "Noah", "Noel", "Nolan", "Noor", "Norman", "Norrie", "Nuada", "Nyah", "Oakley", "Oban", "Obieluem", "Obosa", "Odhran", "Odin", "Odynn", "Ogheneochuko", "Ogheneruno", "Ohran", "Oilibhear", "Oisin", "Ojima-Ojo", "Okeoghene", "Olaf", "Ola-Oluwa", "Olaoluwapolorimi", "Ole", "Olie", "Oliver", "Olivier", "Oliwier", "Ollie", "Olurotimi", "Oluwadamilare", "Oluwadamiloju", "Oluwafemi", "Oluwafikunayomi", "Oluwalayomi", "Oluwatobiloba", "Oluwatoni", "Omar", "Omri", "Oran", "Orin", "Orlando", "Orley", "Orran", "Orrick", "Orrin", "Orson", "Oryn", "Oscar", "Osesenagha", "Oskar", "Ossian", "Oswald", "Otto", "Owain", "Owais", "Owen", "Owyn", "Oz", "Ozzy", "Pablo", "Pacey", "Padraig", "Paolo", "Pardeepraj", "Parkash", "Parker", "Pascoe", "Pasquale", "Patrick", "Patrick-John", "Patrikas", "Patryk", "Paul", "Pavit", "Pawel", "Pawlo", "Pearce", "Pearse", "Pearsen", "Pedram", "Pedro", "Peirce", "Peiyan", "Pele", "Peni", "Peregrine", "Peter", "Phani", "Philip", "Philippos", "Phinehas", "Phoenix", "Phoevos", "Pierce", "Pierre-Antoine", "Pieter", "Pietro", "Piotr", "Porter", "Prabhjoit", "Prabodhan", "Praise", "Pranav", "Pravin", "Precious", "Prentice", "Presley", "Preston", "Preston-Jay", "Prinay", "Prince", "Prithvi", "Promise", "Puneetpaul", "Pushkar", "Qasim", "Qirui", "Quinlan", "Quinn", "Radmiras", "Raees", "Raegan", "Rafael", "Rafal", "Rafferty", "Rafi", "Raheem", "Rahil", "Rahim", "Rahman", "Raith", "Raithin", "Raja", "Rajab-Ali", "Rajan", "Ralfs", "Ralph", "Ramanas", "Ramit", "Ramone", "Ramsay", "Ramsey", "Rana", "Ranolph", "Raphael", "Rasmus", "Rasul", "Raul", "Raunaq", "Ravin", "Ray", "Rayaan", "Rayan", "Rayane", "Rayden", "Rayhan", "Raymond", "Rayne", "Rayyan", "Raza", "Reace", "Reagan", "Reean", "Reece", "Reed", "Reegan", "Rees", "Reese", "Reeve", "Regan", "Regean", "Reggie", "Rehaan", "Rehan", "Reice", "Reid", "Reigan", "Reilly", "Reily", "Reis", "Reiss", "Remigiusz", "Remo", "Remy", "Ren", "Renars", "Reng", "Rennie", "Reno", "Reo", "Reuben", "Rexford", "Reynold", "Rhein", "Rheo", "Rhett", "Rheyden", "Rhian", "Rhoan", "Rholmark", "Rhoridh", "Rhuairidh", "Rhuan", "Rhuaridh", "Rhudi", "Rhy", "Rhyan", "Rhyley", "Rhyon", "Rhys", "Rhys-Bernard", "Rhyse", "Riach", "Rian", "Ricards", "Riccardo", "Ricco", "Rice", "Richard", "Richey", "Richie", "Ricky", "Rico", "Ridley", "Ridwan", "Rihab", "Rihan", "Rihards", "Rihonn", "Rikki", "Riley", "Rio", "Rioden", "Rishi", "Ritchie", "Rivan", "Riyadh", "Riyaj", "Roan", "Roark", "Roary", "Rob", "Robbi", "Robbie", "Robbie-lee", "Robby", "Robert", "Robert-Gordon", "Robertjohn", "Robi", "Robin", "Rocco", "Roddy", "Roderick", "Rodrigo", "Roen", "Rogan", "Roger", "Rohaan", "Rohan", "Rohin", "Rohit", "Rokas", "Roman", "Ronald", "Ronan", "Ronan-Benedict", "Ronin", "Ronnie", "Rooke", "Roray", "Rori", "Rorie", "Rory", "Roshan", "Ross", "Ross-Andrew", "Rossi", "Rowan", "Rowen", "Roy", "Ruadhan", "Ruaidhri", "Ruairi", "Ruairidh", "Ruan", "Ruaraidh", "Ruari", "Ruaridh", "Ruben", "Rubhan", "Rubin", "Rubyn", "Rudi", "Rudy", "Rufus", "Rui", "Ruo", "Rupert", "Ruslan", "Russel", "Russell", "Ryaan", "Ryan", "Ryan-Lee", "Ryden", "Ryder", "Ryese", "Ryhs", "Rylan", "Rylay", "Rylee", "Ryleigh", "Ryley", "Rylie", "Ryo", "Ryszard", "Saad", "Sabeen", "Sachkirat", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", "Saim", "Sajid", "Sajjad", "Salahudin", "Salman", "Salter", "Salvador", "Sam", "Saman", "Samar", "Samarjit", "Samatar", "Sambrid", "Sameer", "Sami", "Samir", "Sami-Ullah", "Samual", "Samuel", "Samuela", "Samy", "Sanaullah", "Sandro", "Sandy", "Sanfur", "Sanjay", "Santiago", "Santino", "Satveer", "Saul", "Saunders", "Savin", "Sayad", "Sayeed", "Sayf", "Scot", "Scott", "Scott-Alexander", "Seaan", "Seamas", "Seamus", "Sean", "Seane", "Sean-James", "Sean-Paul", "Sean-Ray", "Seb", "Sebastian", "Sebastien", "Selasi", "Seonaidh", "Sephiroth", "Sergei", "Sergio", "Seth", "Sethu", "Seumas", "Shaarvin", "Shadow", "Shae", "Shahmir", "Shai", "Shane", "Shannon", "Sharland", "Sharoz", "Shaughn", "Shaun", "Shaunpaul", "Shaun-Paul", "Shaun-Thomas", "Shaurya", "Shaw", "Shawn", "Shawnpaul", "Shay", "Shayaan", "Shayan", "Shaye", "Shayne", "Shazil", "Shea", "Sheafan", "Sheigh", "Shenuk", "Sher", "Shergo", "Sheriff", "Sherwyn", "Shiloh", "Shiraz", "Shreeram", "Shreyas", "Shyam", "Siddhant", "Siddharth", "Sidharth", "Sidney", "Siergiej", "Silas", "Simon", "Sinai", "Skye", "Sofian", "Sohaib", "Sohail", "Soham", "Sohan", "Sol", "Solomon", "Sonneey", "Sonni", "Sonny", "Sorley", "Soul", "Spencer", "Spondon", "Stanislaw", "Stanley", "Stefan", "Stefano", "Stefin", "Stephen", "Stephenjunior", "Steve", "Steven", "Steven-lee", "Stevie", "Stewart", "Stewarty", "Strachan", "Struan", "Stuart", "Su", "Subhaan", "Sudais", "Suheyb", "Suilven", "Sukhi", "Sukhpal", "Sukhvir", "Sulayman", "Sullivan", "Sultan", "Sung", "Sunny", "Suraj", "Surien", "Sweyn", "Syed", "Sylvain", "Symon", "Szymon", "Tadd", "Taddy", "Tadhg", "Taegan", "Taegen", "Tai", "Tait", "Taiwo", "Talha", "Taliesin", "Talon", "Talorcan", "Tamar", "Tamiem", "Tammam", "Tanay", "Tane", "Tanner", "Tanvir", "Tanzeel", "Taonga", "Tarik", "Tariq-Jay", "Tate", "Taylan", "Taylar", "Tayler", "Taylor", "Taylor-Jay", "Taylor-Lee", "Tayo", "Tayyab", "Tayye", "Tayyib", "Teagan", "Tee", "Teejay", "Tee-jay", "Tegan", "Teighen", "Teiyib", "Te-Jay", "Temba", "Teo", "Teodor", "Teos", "Terry", "Teydren", "Theo", "Theodore", "Thiago", "Thierry", "Thom", "Thomas", "Thomas-Jay", "Thomson", "Thorben", "Thorfinn", "Thrinei", "Thumbiko", "Tiago", "Tian", "Tiarnan", "Tibet", "Tieran", "Tiernan", "Timothy", "Timucin", "Tiree", "Tisloh", "Titi", "Titus", "Tiylar", "TJ", "Tjay", "T-Jay", "Tobey", "Tobi", "Tobias", "Tobie", "Toby", "Todd", "Tokinaga", "Toluwalase", "Tom", "Tomas", "Tomasz", "Tommi-Lee", "Tommy", "Tomson", "Tony", "Torin", "Torquil", "Torran", "Torrin", "Torsten", "Trafford", "Trai", "Travis", "Tre", "Trent", "Trey", "Tristain", "Tristan", "Troy", "Tubagus", "Turki", "Turner", "Ty", "Ty-Alexander", "Tye", "Tyelor", "Tylar", "Tyler", "Tyler-James", "Tyler-Jay", "Tyllor", "Tylor", "Tymom", "Tymon", "Tymoteusz", "Tyra", "Tyree", "Tyrnan", "Tyrone", "Tyson", "Ubaid", "Ubayd", "Uchenna", "Uilleam", "Umair", "Umar", "Umer", "Umut", "Urban", "Uri", "Usman", "Uzair", "Uzayr", "Valen", "Valentin", "Valentino", "Valery", "Valo", "Vasyl", "Vedantsinh", "Veeran", "Victor", "Victory", "Vinay", "Vince", "Vincent", "Vincenzo", "Vinh", "Vinnie", "Vithujan", "Vladimir", "Vladislav", "Vrishin", "Vuyolwethu", "Wabuya", "Wai", "Walid", "Wallace", "Walter", "Waqaas", "Warkhas", "Warren", "Warrick", "Wasif", "Wayde", "Wayne", "Wei", "Wen", "Wesley", "Wesley-Scott", "Wiktor", "Wilkie", "Will", "William", "William-John", "Willum", "Wilson", "Windsor", "Wojciech", "Woyenbrakemi", "Wyatt", "Wylie", "Wynn", "Xabier", "Xander", "Xavier", "Xiao", "Xida", "Xin", "Xue", "Yadgor", "Yago", "Yahya", "Yakup", "Yang", "Yanick", "Yann", "Yannick", "Yaseen", "Yasin", "Yasir", "Yassin", "Yoji", "Yong", "Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu", "Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach", "Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary", "Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki", "Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn", "Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]

  // image https://unsplash.com/collections/1109504/men







  var ads = [
    '<img src="https://assets.codepen.io/3508410/300x250.jpg" />'
  ];


  var profiles = [
    {
      id:0,
      //name: names[Math.floor(Math.random() * names.length],
      img: "img/",
      crop: [0,0,0,0]
    }

  ];



$( document ).ready(function() {

  var container= $("grid-container");

  // DEFAULT FOR IMAGES + ORDER...
  var max_profiles = 89;
  
  
  
  // ##################################################
  // !!!!!!!! SAM SAM SAM SAM SAM SAM SAM SAM !!!!!!!!!
  // !!!!!! GET DATA FROM THE GRAPH SERVICE HERE !!!!!!
  // ##################################################
  var graph_DB_results = [];
  var graph_DB_results1 = [{"profileId":133592615,"imageHash":"846c241414c940c5e1967454d971010ac470d2fa"},{"profileId":133592611,"imageHash":"69dbf6d23eb4c5ba6ba592e080169d8b5c70817f"},{"profileId":133594452,"imageHash":"3c55bfa307c5885a3fc24b48a0842aa7e70529f7"},{"profileId":133592615,"imageHash":"846c241414c940c5e1967454d971010ac470d2fa"},{"profileId":133592606,"imageHash":"c2b331bd9b3a8ca5a5af2613d59f4ce7e25b65c3"},{"profileId":133594458,"imageHash":"10ef529d5db72d0ec48353c9315c5320967d50f9"},{"profileId":133594457,"imageHash":"84b255f720e0d4d0297b9e4e7dd9619bcb05f73d"},{"profileId":133594499,"imageHash":"9665d12ac7add321c5dbfa6f74e9dddef7201342"},{"profileId":133588718,"imageHash":"913ba012cdd27d01bb5d89aeed2adef2fb8c358a"},{"profileId":133588643,"imageHash":"f8e82ecda8fb87c2185be7f60ec02874b74a6935"},{"profileId":133588630,"imageHash":"a63f8e783403da41a75d777443399df194723dbe"},{"profileId":133588629,"imageHash":"bf03e1ebffa2dc24db349928ae4d2d1278878bc7"},{"profileId":133588718,"imageHash":"913ba012cdd27d01bb5d89aeed2adef2fb8c358a"},{"profileId":133591361,"imageHash":"f3f733af9ad3d1dd5f4c4bf02770119dec542fb7"},{"profileId":133551377,"imageHash":"4b74ec85f0f4f9656b5338f1b2d749776a7a77ff"},{"profileId":133594460,"imageHash":"13a05df8305e231ae6984c212401e870e769e483"},{"profileId":133591361,"imageHash":"f3f733af9ad3d1dd5f4c4bf02770119dec542fb7"},{"profileId":133594584,"imageHash":"a1e200416a5a566525676df0c838742048dd390b"},{"profileId":133592604,"imageHash":"b2657d106815237dddbfdcb856b88a381adf9295"},{"profileId":133592603,"imageHash":"190e0c265919e683bbc2d7d67a1d8dd24f71364e"},{"profileId":133592601,"imageHash":"9dfc63d730776e50f302b21b9ff86d7527b1127c"},{"profileId":133592599,"imageHash":"710640e5e143b46a2fc3e07c201662684b1d6897"},{"profileId":133592598,"imageHash":"fc93f60abfba6c868e9eee0e7c5c5c9ff945209d"},{"profileId":133592603,"imageHash":"190e0c265919e683bbc2d7d67a1d8dd24f71364e"},{"profileId":133592601,"imageHash":"9dfc63d730776e50f302b21b9ff86d7527b1127c"},{"profileId":133592600,"imageHash":"2674433e0e4d151536f66f624481d69ba4b089f2"},{"profileId":133592599,"imageHash":"710640e5e143b46a2fc3e07c201662684b1d6897"},{"profileId":133592598,"imageHash":"fc93f60abfba6c868e9eee0e7c5c5c9ff945209d"},{"profileId":133592611,"imageHash":"69dbf6d23eb4c5ba6ba592e080169d8b5c70817f"},{"profileId":133594452,"imageHash":"3c55bfa307c5885a3fc24b48a0842aa7e70529f7"},{"profileId":133592614,"imageHash":"b3e797394d820f74aa50f87b9eba9cd3c09d9200"},{"profileId":133592615,"imageHash":"846c241414c940c5e1967454d971010ac470d2fa"},{"profileId":133594458,"imageHash":"10ef529d5db72d0ec48353c9315c5320967d50f9"},{"profileId":133594457,"imageHash":"84b255f720e0d4d0297b9e4e7dd9619bcb05f73d"},{"profileId":133594499,"imageHash":"9665d12ac7add321c5dbfa6f74e9dddef7201342"},{"profileId":133592604,"imageHash":"b2657d106815237dddbfdcb856b88a381adf9295"},{"profileId":133592603,"imageHash":"190e0c265919e683bbc2d7d67a1d8dd24f71364e"},{"profileId":133592601,"imageHash":"9dfc63d730776e50f302b21b9ff86d7527b1127c"},{"profileId":133592600,"imageHash":"2674433e0e4d151536f66f624481d69ba4b089f2"},{"profileId":133592598,"imageHash":"fc93f60abfba6c868e9eee0e7c5c5c9ff945209d"},{"profileId":133592604,"imageHash":"b2657d106815237dddbfdcb856b88a381adf9295"},{"profileId":133592603,"imageHash":"190e0c265919e683bbc2d7d67a1d8dd24f71364e"},{"profileId":133592600,"imageHash":"2674433e0e4d151536f66f624481d69ba4b089f2"},{"profileId":133592599,"imageHash":"710640e5e143b46a2fc3e07c201662684b1d6897"},{"profileId":133592598,"imageHash":"fc93f60abfba6c868e9eee0e7c5c5c9ff945209d"},{"profileId":133590155,"imageHash":"c93d133194a5e47a81bb850b01124580d65a7df9"},{"profileId":133567869,"imageHash":"e84e89832ad5a7bb66e76b5215b35e9f39d82fb2"},{"profileId":133567869,"imageHash":"e84e89832ad5a7bb66e76b5215b35e9f39d82fb2"},{"profileId":133590155,"imageHash":"c93d133194a5e47a81bb850b01124580d65a7df9"},{"profileId":133567869,"imageHash":"e84e89832ad5a7bb66e76b5215b35e9f39d82fb2"},{"profileId":133563300,"imageHash":"d7eb3ed1d2ab7f3ad9e302cc64c810bf9c01e808"},{"profileId":133567940,"imageHash":"a3b5cb8c133b29a6593f0d706b6272dad5e77734"},{"profileId":133592604,"imageHash":"b2657d106815237dddbfdcb856b88a381adf9295"},{"profileId":133592603,"imageHash":"190e0c265919e683bbc2d7d67a1d8dd24f71364e"},{"profileId":133592601,"imageHash":"9dfc63d730776e50f302b21b9ff86d7527b1127c"},{"profileId":133592600,"imageHash":"2674433e0e4d151536f66f624481d69ba4b089f2"},{"profileId":133592599,"imageHash":"710640e5e143b46a2fc3e07c201662684b1d6897"},{"profileId":133592598,"imageHash":"fc93f60abfba6c868e9eee0e7c5c5c9ff945209d"},{"profileId":133563300,"imageHash":"d7eb3ed1d2ab7f3ad9e302cc64c810bf9c01e808"}];
  
  
  // IF we get data back grom the Graph Service, USE THAT INSTEAD
  if (graph_DB_results > 0) {
    max_profiles = graph_DB_results.length;
    console.log(graph_DB_results.length);
  }
  
  
  var i, separator = "img" + "\/", big='', online='', anon='', pulse='', sparkle='', rec = '', imgURL ='', backupURL = 'https://assets.codepen.io/3508410/', s3URL ='https://s3.amazonaws.com/s3.preprod1.grindr.com/grindr/chat/';

  for (i = 1; i <= max_profiles; i++) {

    big='', online='', anon='', pulse='', sparkle='', rec = '';
    
    if (Math.floor(Math.random() * 6) == 1) {
      // if i = 1 or 3
      if (i % 3 === 1) {

        if (Math.floor(Math.random() * 2) == 1) {
          big = " big-right pulse";
          rec = ' data-rec="true" ';
          sparkle = '<div class="template shine"></div>';
        } else {
          big = " big-left pulse";
          rec = ' data-rec="true" ';
          sparkle = '<div class="template shine"></div>';
        }

      }

    }
    
    if (Math.floor(Math.random() * 20) == 1) {
      if (i % 3 === 1) {
        //online = " big-super";
      }
    }
    
    if (Math.floor(Math.random() * 11) == 1 && big === "") {
      //anon = " anon";
    } else if (Math.floor(Math.random() * 20) == 1) {
      //pulse = " pulse";
    }


    if (Math.floor(Math.random() * 4) == 1) {
        online = " online";
    }

    if (graph_DB_results > 0) {
      // this builds the background image URL from the REAL results
      imgURL = s3URL + graph_DB_results[i].imageHash;
      console.log(imgURL);
    } else {
      // build the background image URL from the backup results
      imgURL = backupURL + i + '.jpg';
    }
    
    $("#grid-container").append(
      '<div class="square'+ big + online + anon + pulse + '" style="background-size: cover; background-image: url(' + imgURL + ');" data-image=' + i + rec + '>' + sparkle +
        '<div class="recommend">✶ For you</div>' +
        '<div class="name">' + names[Math.floor(Math.random() * names.length)] + '</div>' +
        '<div class="gradient"></div>' +
        '<div class="shadow"></div>' +
      '</div>');

    if (i % 18 === 0) {
      $("#grid-container").append(
        '<div class="ad">' +
          '<div class="advert">' + ads[Math.floor(Math.random() * ads.length)] +
            //'<video id="videoPlayer" autoplay controls>' +
            //  '<source src="video.mp4" type="video/mp4">' +
            //  '<source src="video.webm" type="video/webm">' +
            //    'Your browser does not support the video tag.' +
            //'</video>' +
          '</div>' +
        '</div>');
    }

    big = "";
    online = "";
    anon = "";
    pulse = "";
  }

  // go through each image in an array
  // loop through array...
  // determine the appropriate crop for each photo...
  // insert the new elements into the dom

  $('.square').on('click touchstart', function(e){
    var bkg='', imgURL='';
    bkg = $(e.currentTarget).attr("data-image");

    if (graph_DB_results.length > 0) {
      // this builds the background image URL from the REAL results
      imgURL = s3URL + graph_DB_results[bkg].imageHash;
      console.log(imgURL);
    } else {
      // build the background image URL from the backup results
      imgURL = backupURL + bkg + '.jpg';
    }
    
    $('.profile-container').css('background-image', 'url('+imgURL+')');
    if ( $(e.currentTarget).attr("data-rec") === 'true') {
      $('.profile-container').addClass('rec');
    }
    $('#grid-profile').addClass('show');
  });
  
  $('#back-button').on('click touchstart', function(e){
    $('#grid-profile').removeClass('show');
    $('.profile-container').removeClass('rec');
  });
  
});










function hola() {
  var ParticleNetworkAnimation, PNA;
  ParticleNetworkAnimation = PNA = function() {};

  PNA.prototype.init = function(element) {
    this.$el = $(element);

    this.container = element;
    this.canvas = document.createElement("canvas");
    this.sizeCanvas();
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.particleNetwork = new ParticleNetwork(this);

    this.bindUiActions();

    return this;
  };

  PNA.prototype.bindUiActions = function() {
    $(window).on(
      "resize",
      function() {
        // this.sizeContainer();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.sizeCanvas();
        this.particleNetwork.createParticles();
      }.bind(this)
    );
  };

  PNA.prototype.sizeCanvas = function() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  };

  var Particle = function(parent, x, y) {
    this.network = parent;
    this.canvas = parent.canvas;
    this.ctx = parent.ctx;
    this.particleColor = returnRandomArrayitem(
      this.network.options.particleColors
    );
    this.radius = getLimitedRandom(1.5, 2.5);
    this.opacity = 0;
    this.x = x || Math.random() * this.canvas.width;
    this.y = y || Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * parent.options.velocity,
      y: (Math.random() - 0.5) * parent.options.velocity
    };
  };

  Particle.prototype.update = function() {
    if (this.opacity < 1) {
      this.opacity += 0.01;
    } else {
      this.opacity = 1;
    }
    // Change dir if outside map
    if (this.x > this.canvas.width + 100 || this.x < -100) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y > this.canvas.height + 100 || this.y < -100) {
      this.velocity.y = -this.velocity.y;
    }

    // Update position
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };

  Particle.prototype.draw = function() {
    // Draw particle
    this.ctx.beginPath();
    this.ctx.fillStyle = this.particleColor;
    this.ctx.globalAlpha = this.opacity;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  };

  var ParticleNetwork = function(parent) {
    this.options = {
      velocity: 1, // the higher the faster
      density: 22500, // the lower the denser
      netLineDistance: 200,
      netLineColor: "#5ddcff", //#ff1e46; #929292
      particleColors: ["#5ddcff"] // #aaa; ['#6D4E5C', '#aaa', '#FFC458' ]
    };
    this.canvas = parent.canvas;
    this.ctx = parent.ctx;

    this.init();
  };

  ParticleNetwork.prototype.init = function() {
    // Create particle objects
    this.createParticles(true);

    // Update canvas
    this.animationFrame = requestAnimationFrame(this.update.bind(this));

    this.bindUiActions();
  };

  ParticleNetwork.prototype.createParticles = function(isInitial) {
    // Initialise / reset particles
    var me = this;
    this.particles = [];
    var quantity =
      this.canvas.width * this.canvas.height / this.options.density;

    if (isInitial) {
      var counter = 0;
      clearInterval(this.createIntervalId);
      this.createIntervalId = setInterval(
        function() {
          if (counter < quantity - 1) {
            // Create particle object
            this.particles.push(new Particle(this));
          } else {
            clearInterval(me.createIntervalId);
          }
          counter++;
        }.bind(this),
        1
      );
    } else {
      // Create particle objects
      for (var i = 0; i < quantity; i++) {
        this.particles.push(new Particle(this));
      }
    }
  };

  ParticleNetwork.prototype.createInteractionParticle = function() {
    // Add interaction particle
    this.interactionParticle = new Particle(this);
    this.interactionParticle.velocity = {
      x: 0,
      y: 0
    };
    this.particles.push(this.interactionParticle);
    return this.interactionParticle;
  };

  ParticleNetwork.prototype.removeInteractionParticle = function() {
    // Find it
    var index = this.particles.indexOf(this.interactionParticle);
    if (index > -1) {
      // Remove it
      this.interactionParticle = undefined;
      this.particles.splice(index, 1);
    }
  };

  ParticleNetwork.prototype.update = function() {
    if (this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.globalAlpha = 1;

      // Draw connections
      for (var i = 0; i < this.particles.length; i++) {
        for (var j = this.particles.length - 1; j > i; j--) {
          var distance,
            p1 = this.particles[i],
            p2 = this.particles[j];

          // check very simply if the two points are even a candidate for further measurements
          distance = Math.min(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
          if (distance > this.options.netLineDistance) {
            continue;
          }

          // the two points seem close enough, now let's measure precisely
          distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          if (distance > this.options.netLineDistance) {
            continue;
          }

          this.ctx.beginPath();
          this.ctx.strokeStyle = this.options.netLineColor;
          this.ctx.globalAlpha =
            (this.options.netLineDistance - distance) /
            this.options.netLineDistance *
            p1.opacity *
            p2.opacity;
          this.ctx.lineWidth = 0.7;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }

      // Draw particles
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
        this.particles[i].draw();
      }

      if (this.options.velocity !== 0) {
        this.animationFrame = requestAnimationFrame(this.update.bind(this));
      }
    } else {
      cancelAnimationFrame(this.animationFrame);
    }
  };

  ParticleNetwork.prototype.bindUiActions = function() {
    // Mouse / touch event handling
    this.spawnQuantity = 3;
    this.mouseIsDown = false;
    this.touchIsMoving = false;

    this.onMouseMove = function(e) {
      if (!this.interactionParticle) {
        this.createInteractionParticle();
      }
      this.interactionParticle.x = e.offsetX;
      this.interactionParticle.y = e.offsetY;
    }.bind(this);

    this.onTouchMove = function(e) {
      e.preventDefault();
      this.touchIsMoving = true;
      if (!this.interactionParticle) {
        this.createInteractionParticle();
      }
      this.interactionParticle.x = e.changedTouches[0].clientX;
      this.interactionParticle.y = e.changedTouches[0].clientY;
    }.bind(this);

    this.onMouseDown = function(e) {
      this.mouseIsDown = true;
      var counter = 0;
      var quantity = this.spawnQuantity;
      var intervalId = setInterval(
        function() {
          if (this.mouseIsDown) {
            if (counter === 1) {
              quantity = 1;
            }
            for (var i = 0; i < quantity; i++) {
              if (this.interactionParticle) {
                this.particles.push(
                  new Particle(
                    this,
                    this.interactionParticle.x,
                    this.interactionParticle.y
                  )
                );
              }
            }
          } else {
            clearInterval(intervalId);
          }
          counter++;
        }.bind(this),
        50
      );
    }.bind(this);

    this.onTouchStart = function(e) {
      e.preventDefault();
      setTimeout(
        function() {
          if (!this.touchIsMoving) {
            for (var i = 0; i < this.spawnQuantity; i++) {
              this.particles.push(
                new Particle(
                  this,
                  e.changedTouches[0].clientX,
                  e.changedTouches[0].clientY
                )
              );
            }
          }
        }.bind(this),
        200
      );
    }.bind(this);

    this.onMouseUp = function(e) {
      this.mouseIsDown = false;
    }.bind(this);

    this.onMouseOut = function(e) {
      this.removeInteractionParticle();
    }.bind(this);

    this.onTouchEnd = function(e) {
      e.preventDefault();
      this.touchIsMoving = false;
      this.removeInteractionParticle();
    }.bind(this);

    this.canvas.addEventListener("mousemove", this.onMouseMove);
    this.canvas.addEventListener("touchmove", this.onTouchMove);
    this.canvas.addEventListener("mousedown", this.onMouseDown);
    this.canvas.addEventListener("touchstart", this.onTouchStart);
    this.canvas.addEventListener("mouseup", this.onMouseUp);
    this.canvas.addEventListener("mouseout", this.onMouseOut);
    this.canvas.addEventListener("touchend", this.onTouchEnd);
  };

  ParticleNetwork.prototype.unbindUiActions = function() {
    if (this.canvas) {
      this.canvas.removeEventListener("mousemove", this.onMouseMove);
      this.canvas.removeEventListener("touchmove", this.onTouchMove);
      this.canvas.removeEventListener("mousedown", this.onMouseDown);
      this.canvas.removeEventListener("touchstart", this.onTouchStart);
      this.canvas.removeEventListener("mouseup", this.onMouseUp);
      this.canvas.removeEventListener("mouseout", this.onMouseOut);
      this.canvas.removeEventListener("touchend", this.onTouchEnd);
    }
  };

  var getLimitedRandom = function(min, max, roundToInteger) {
    var number = Math.random() * (max - min) + min;
    if (roundToInteger) {
      number = Math.round(number);
    }
    return number;
  };

  var returnRandomArrayitem = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  pna = new ParticleNetworkAnimation();
  pna.init($(".particle-network-animation")[0]);
};
hola();