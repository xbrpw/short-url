var toAdd = [];

window.onerror = function() {};

// All movies. We can't copy paste any text from netflix, so I had to write it all on my own :(
var dict = {
    "emily in paris": [["https://imgur.com/MFH9G6M", "https://imgur.com/5GJg612"], "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance.", "https://www.dropbox.com/s/0xnc73pf28u2sw7/emily%20in%20paris.mp4?dl=1", ["you ve got this", "the boys in the band", "orange is the new black", "oktoberfest beer & blood", "baxu and the giants", "oloture", "turkish dance school", "enola holmes", "familiar wife", "riverdale", "vampires vs the bronx", "all because of you"]],
    
    "dolly kitty aur woh chamakte sitare": [["https://imgur.com/qX4y9tl", "https://imgur.com/04mOoSS", "https://i.imgur.com/fveNTyf"], "A disillusioned Delhi wife and her new-in-town cousin navigate damning secrets, dreams and their thorny dynamic on their respective roads to freedom", "https://www.dropbox.com/s/cwkmv5mhhy4fy9c/dolly%20kitty%20aur%20woh%20chamakte%20sitare.mp4?dl=1", ["masaba masaba", "class of 83", "cargo", "for here or to go", "gunjan saxena", "love aaj kal", "kaagar", "aapla manus", "guilty", "raat akeli hai", "motichoor chaknachoor", "saheb biwi aur gangster returns"]],
    
    "friends": [["https://imgur.com/UoaHwc1", "https://imgur.com/88cjA6i"], "A deliveryman accidently brings a pizza meant for George Stephanopoulos, who lives across the street from the girls.", "https://www.dropbox.com/s/trq48e7e9v46hol/friends.mp4?dl=1", ["two and a half men", "euro vision", "brooklyn nine-nine", "the big bang theory", "my big fat greek wedding", "the invention of lying", "schitt s creek", "close enough", "kim's convenience", "along came polly", "sneaker heads", "johnny english reborn"]],
    
    "enola holmes": [["https://imgur.com/LG00M6F", "https://imgur.com/Hxx8oMQ", "https://imgur.com/8wyzStE"], "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.", "https://www.dropbox.com/s/1gafk7ervjjqgtl/enola%20holmes.mp4?dl=1", ["changeling", "lucifer", "ratched", "the devil all the time", "how to get away with murder", "i m thinking of ending things", "away", "wonder", "the green mile", "freaks", "cast away", "the paramedic"]],
    
    "serious men": [["https://imgur.com/mh10fTW", "https://imgur.com/M3Jd77m"], "When a slum dweller spins a web of lies in pusuit of the upward mobility he has long craved, his ruse could be especially dangerous for his young son.", "https://www.dropbox.com/s/8z1eeo81779d3sa/serious%20men.mp4?dl=1", ["mann", "kandasamys the wedding", "3 idiots", "emily in paris", "dhh", "cargo", "ankhon dekhi", "khoobsurat", "guilty", "katha", "the oc", "ajji"]],
    
    "saheb biwi aur gangster returns": [["https://imgur.com/zgzZPGz"], "Knotty love triangles and nefarious schemes arise when a nobleman's plans to remarry fall into the cunning hands of his first wife and a vengeful rival", "https://www.dropbox.com/s/52wzkehmvzemmos/saheb%20biwi%20aur%20gangster%20returns.mp4?dl=1", ["class of 83", "raat akeli hai", "dolly kitty aur woh chamakte sitare", "aapla manus", "ek hasina thi", "cargo", "gunjan saxena", "sacred games", "masaba masaba", "article 15", "malang", "manorama"]],
    
    "zindagi gulzar hai": [["https://imgur.com/Rh7HQUG"], "Kashaf forms an unfavourable opinion about carefree Zaroon, but Asmara gets jealous when other women shower Zaroon with attention.", "https://www.dropbox.com/s/9p2hiauyg445ixd/zindagi%20gulzar%20hai.mp4?dl=1", ["humsafar", "sadqay tumhare", "khaani", "zindagi kitni haseen hay", "chalay & saath", "abdul all", "balu mahi", "cake", "rangreza", "shubh aarambh", "pinky memsaab", "moor"]],
    
    "aapla manus": [["https://imgur.com/Ul933Ke"], "When a man falls from his balcony, an investigator questions the victim's family, determined to uncover a darker truth behind the alleged accident.", "https://www.dropbox.com/s/29vk4c4s37u24um/aapla%20manus.mp4?dl=1", ["raat akeli hai", "class of 83", "saheb biwi aur gangster returns", "ek hasina thi", "dolly kitty aur woh chamakte sitare", "kaagar", "cargo", "sacred games", "dhh" ,"masaba masaba", "article 15", "she"]],
    
    "masaba masaba": [["https://imgur.com/7nqMsFr"], "Masaba deals with social scrunity, professional pressure, and life back at her mother's house. Neena scores a meeting with a popular filmmaker.", "https://www.dropbox.com/s/3wayw5dffrxia8z/masaba%20masaba.mp4?dl=1", ["for here or to go", "dolly kitty aur woh chamakte sitare", "motichoor chaknachoor", "cargo", "lova aaj kal", "class of 83", "kaagar", "ramji london waley", "raat akeli hai", "dil dhadakne do", "poshter girl", "aapla manus"]],
    
    "ramji london waley": [["https://imgur.com/PGKDjhT"], "A small-town cook moves to London to earn a living, but from his employer's sudden death to the immigration officials on his trail, plans soon go sour.", "https://www.dropbox.com/s/ergrgbfh45jzkmq/ramji%20london%20waley.mp4?dl=1", ["dil dhadakne do", "veerey di wedding", "motichoor chaknachoor", "emi", "jai mummy di", "jaanemann", "for here or to go", "ungli", "chalte chalte", "professor", "phir se", "pyaar ka punchnama 2"]],
    
    "suits": [["https://imgur.com/vAVYJRK"], "An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.", "https://www.dropbox.com/s/b8nftv4hmkkdx04/suits.mp4?dl=1", ["good girls", "ozark", "doc martin", "rita", "sherlock", "peaky blinders", "bloodline", "fargo", "house of cards", "sons of anarchy", "young wallander", "criminal united kingdom"]],
    
    "gilmore girls": [["https://imgur.com/SPbhUMb"], "Fiercely indepedent single mom Lorelai raises gifted, Ivy League-bound daughter Rory amid a continual stream of quick-witted repartee.", "https://www.dropbox.com/s/55y7l3xh5re2cwc/gilmore%20girls.mp4?dl=1", ["good girls", "jane the virgin", "teenage bounty hunters", "suits", "glee", "the duchess", "rita", "never have i ever", "insatiable", "the end of the world f***ing world", "the last world"]],
    
    "khan no.1": [["https://imgur.com/IEp44vg"], "From fake marriages to online shopping fraud, a whip-smart police officer investigates truly baffling cons that were inspired by true stories.", "https://www.dropbox.com/s/5m39ppz3w425r2o/khan%20no.1.mp4?dl=1", ["taj mahal" ,"barah aana", "little things", "girls hotel", "yeh hai bakrapur", "hasmukh", "halkaa", "brij mohan amar rahe", "sacred games", "jamtara sabka number ayega", "she", "soni"]],
    
    "good girls": [["https://imgur.com/0RzXxbq"], "Three suburban moms orchestrate a local grocery store heist to escape financial ruin and establish independence -- together.", "https://www.dropbox.com/s/lcujm304p69am0j/good%20girls.mp4?dl=1", ["suits", "gilmore girls", "the politician", "orange is the new black", "dead to me", "teenage bounty hunters", "the duchess", "after life", "rita", "loaded", "jane the virgin", "atypical"]],
    
    "love me as i am": [["https://imgur.com/FK4ktEn"], "After wealthy college boy Omer and lower class college girl Aysem fall in love and quickly marry, they learn that love and life aren't always perfect.", "https://www.dropbox.com/s/u2dntq0khnind0p/love%20me%20as%20i%20am.mp4?dl=1", ["intersection", "20 minutes", "gorumce", "burned cocoon", "love 101", "love is in the air", "sen benim herseyimsin", "black money love", "behzat", "patron mutlu son istiyor", "sadece sen", "yunus emre", "emily in paris", "the perfect date"]],
    
    "jane the virgin": [["https://imgur.com/cKJSgCN"], "When her baby daddy's wild past comes to light, Jane chooses to keep working in the hotel he manages to see if he and his wife would be good parents.", "https://www.dropbox.com/s/kbkoegoleeh1sro/jane%20the%20virgin.mp4?dl=1", ["gilmore girls", "rita", "suits", "good girls", "never have i ever", "life as we know it", "gossip girl", "teenage bounty hunters", "insatiable", "trinkets", "riverdale", "bonus family"]],
    
    "shameless": [["https://imgur.com/LkzVK0V"], "Living in a housing project, the anarchic Gallagher clan copes with an estranged mum and a boozing dad as the kids get into a string of complications.", "https://www.dropbox.com/s/kbkoegoleeh1sro/jane%20the%20virgin.mp4?dl=1", ["peep show", "katch & kim", "loaded", "flowers", "the duchess", "cuckoo", "toast of london", "offspring", "schitt s creek", "people just do nothing", "crashing", "man like mobeen"]],
    
    "hasmukh": [["https://imgur.com/uFnnNyB", "https://imgur.com/BBrJJsC"], "Hasmukh's past haunts him as he continues his viscious pre-show ritual. Amid scandal in Mumbai, TV executive Sinha seeks new talent for his comedy show.", "https://www.dropbox.com/s/hcu4u062dmjstjn/hasmukh.mp4?dl=1", ["taj mahal 1989", "delhi crime", "jamtara sabka number ayega", "girls hotel", "sacred games", "she", "khan no.1", "brij mohan amar rahe", "shor in the city", "wazir", "bombairiya", "little things"]],
    
    "grace and frankie": [["https://imgur.com/zJZN0Eg"], "They're not friends, but when their husbands leave them foor each other, proper Grace and eccentric Frankie begin to bond in this Emmy-nominated series.", "https://www.dropbox.com/s/lc0nlv1uc6k4rma/grace%20and%20frankie.mp4?dl=1", ["the let down", "dead to me", "the kominsky method", "the politician", "living with yourself", "the ranch", "russian doll", "bonding", "girlboss", "after life", "flaked"]],
    
    "insatiable": [["https://imgur.com/8JtcmBM"], "A bullied teenager turns to beauty pageants as a way to exact her revenge, with the help of a disgraced coach who soon realizes he's in over his head.", "https://www.dropbox.com/s/jg61noksyir1jl0/insatiable.mp4?dl=1", ["never have i ever", "everything sucks", "atypical", "the end of the fucking world", "gossip girl", "glee", "13 reasons why", "i am not okay with this", "trinkets", "teenage bounty hunters", "the politician", "sex education"]],
    
    "doc martin": [["https://imgur.com/vNWEI0k"], "Crippled by a sudden fear of blood, a curmedgeonly surgeon leaves his city practice to be a country doc in a seaside village populated by eccentrics.", "https://www.dropbox.com/s/nj803a8gj7w8gtq/doc%20martin.mp4?dl=1", ["suits", "rake", "after life", "good girls", "the good cop", "the ranch", "vexed", "loaded", "the duchess", "maniac", "offspring", "republic of doyle"]],
    
    "the ranch": [["https://imgur.com/NisPfia"], "Being a pro athlete didn't pan out for Colt. Now he's helping his dad and brother keep the ranch afloat, and figuring out how he fits into his family.", "https://www.dropbox.com/s/ncupnnfejdhfzre/the%20ranch.mp4?dl=1", ["gentefied", "the politician", "the good place", "living with yourself", "the let down", "the indian detective", "grace and frankie", "sick note", "dead to me", "the good cop", "space force", "cuckoo"]],
    
    "lucifer": [["https://imgur.com/iEm6HMQ"], "Lucifer tries to make sense of his new accessories. Meanwhile, newcomer Lieutenant Marcus Pierce gets off to a rocky start with his coworkers.", "https://www.dropbox.com/s/onu2urzs4orpwkl/lucifer.mp4?dl=1", ["enola holmes", "baby", "gossip girl", "riverdale", "how to get away with murder", "dark", "the 100", "cast away", "ratched", "away", "trinkets", "freaks"]],
    
    "she": [["https://imgur.com/blZdEKz"], "An undercover assignment to expose a drug ring becomes a timid Mumbai constable's road to empowerment as her dormant sexuality's potential.", "https://www.dropbox.com/s/l8smzv60anyu7ag/she.mp4?dl=1", ["delhi crime", "jamtara sabka number ayega", "sacred games", "raat akeli hai", "class of 83", "ek hasina thi", "bard of blood", "aapla manus", "guilty", "famous", "choked paisa bolta hai", "saheb biwi aur gangster returns"]],
    
    "soni": [["https://imgur.com/oklfNhL"], "While fighting crimes against women in Delhi, a short-fused policewoman and her level-headed female boss grapple with gender issues in their own lives.", "https://www.dropbox.com/s/897rhafwouo9mry/soni.mp4?dl=1", ["guilty", "choked paisa bolta hai", "mumbai raja", "project marathwada", "beyond the clouds", "rukh", "article 15", "x past is present", "famous", "mantra", "music teacher", "class of 83"]],
    
    "ratched": [["https://imgur.com/L43ot9v", "https://imgur.com/lslShv9"], "In 1947, Mildred Ratched begins working as a nurse at a leading psychiatric hospital. But beneath her stylish exterior lurks a growing darkness.", "https://www.dropbox.com/s/dnr8n3usvcrmeuu/ratched.mp4?dl=1", ["a secret love", "the politician", "eat pray love", "circus of books", "pose", "glee", "versace", "the boys in the band", "hollywood", "the people v oj simpson"]],
    
    "the social dilemma": [["https://imgur.com/fyw8Go4","https://imgur.com/3edLKb8", "https://imgur.com/3Xhk8CT"], "This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.", "https://www.dropbox.com/s/z9c8kat6mcb4p1x/the%20social%20dilemma.mp4?dl=1", ["connected", "high score", "challenger the final flight", "kiss the ground", "stars in the sky", "rising phoenix", "great hack", "100 humans", "minimalism", "i am a killer realeased", "bob lazar", "my octopus teacher", "how to sell drugs online (fast)", "how to get away with murder"]],
    
    "designated survivor": [["https://imgur.com/JnZz5B9", "https://imgur.com/nNOBxj0"], "America's fate rests in the hands of a low-level official after attack on Washington decimates the government in this gripping political thriller.", "https://www.dropbox.com/s/td46sq7iwpzr1bd/designated%20survivor.mp4?dl=1", ["ozark", "blacklist", "better call saul", "bodyguard", "house of cards", "bloodline", "mindhunter", "animal kingdom", "you", "wentworth", "bad blood", "the people v oj simpson"]],
    
    "chopsticks": [["https://imgur.com/45tuton"], "A gifted but insecure woman embarks on a transformative journey when she enlists an enigmatic con man to recover her stolen car from an eccentric thug.", "https://www.dropbox.com/s/12qj9edr21xnfve/chopsticks.mp4?dl=1", ["bombairiya", "zed plus", "for here or to go", "cargo", "dharm sankat", "masaba masaba", "chaman bahaar", "made in china", "what are the odds", "brij mohan amar rahe", "lust stories", "axone"]],
    
    "typewriter": [["https://imgur.com/hiBryaf"], "Three young friends in Goa plan to search an old villa for ghosts, but when a new family moves in, the home's buried past resurfaces in chilling ways.", "https://www.dropbox.com/s/c7gr6xrumylulg8/typewriter.mp4?dl=1", ["ghoul", "anjaan", "darna mana hai", "betaal", "krishna cottage", "darr sabko lagta hai", "rise of the zombie", "lupt", "pizza", "adrishya", "kanika", "chopsticks", "kaali khuhi"]],
    
    "the crown": [["https://imgur.com/qKSg8n1"], "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.", "https://www.dropbox.com/s/c2ziy7njqaw1cv5/the%20crown.mp4?dl=1", ["when calls the heart", "stateless", "unorthodox", "alias grace", "miss fisher s murder mysteries", "borgen", "virgin river", "outlander", "the bonfire of destiny", "the spy", "peaky blinders", "house of cards", "pose", "hollywood", "the last kingdom"]],
    
    "ishqiya": [["https://imgur.com/dUpGGLB"], "A deceitful woman seduces two of her husband's crooked friends into helping her hatch a nefarious kidnapping plot for a hefty ransom.", "https://www.dropbox.com/s/vf0ohs9yqzevc3u/ishqiya.mp4?dl=1", ["dedh ishqiya", "what s your rashee om shanti om", "pyaar ka punchnama 2", "main meri patni aur woh", "hattrick", "mumbai delhi mumbai", "kal ho naa ho", "chup chup ke", "running shaadi", "deewana main deewana", "kismat konnection"]],
    
    "santa banta": [["https://imgur.com/VgeGL6K"], "Passed off as spies, two inept pals are sent to Fiji to rescue a kidnapped bureaucrat. Soon enough, they're creating more problems then they're solving.", "https://www.dropbox.com/s/t4r8ogmrwvmyeeo/santa%20banta.mp4?dl=1", ["golmaal fun unlimited", "aagey se right", "welcome", "dil dhadakne do", "yeh jawaani hai deewani", "humpty sharma ki dulhania", "jai mummy di", "door ke darshan", "tere naal love ho gya", "poster boys", "luka chhupi", "boss"]],
    
    "manorama": [["https://imgur.com/WB82Xcm"], "A government employee and aspiring crime writer, who is under investigation for corruption, is asked by a politician's wife to spy on her husband.", "https://www.dropbox.com/s/kq0ruezpzztmt9j/manorama.mp4?dl=1", ["saheb biwi aur gangster returns", "article 15", "class of 83", "special 26", "talaash", "ittefaq", "3 deewarein", "romeo akbar walter", "raat akeli hai", "my birthday song", "ek hasina thi", "aapla manus"]],
    
    "ankhon dekhi": [["https://imgur.com/YUlAxnJ"], "After a distressed incident a Delhi man vows to believe only what he can see, but his new ideals soon take his life in extreme directions.", "https://www.dropbox.com/s/c467sc1jexuzx3v/ankhon%20dekhi.mp4?dl=1", ["ahista ahista", "love aaj kal", "midnight's children", "maya memsaab", "half girlfriend", "dolly kitty aur woh chamakte sitare", "masaba masaba", "guzaarish", "baazaar", "deewana main deewana", "kareeb", "haraamkhor"]],
    
    "jab we met": [["https://imgur.com/suHo3P7"], "Changing fortunes await a wealthy but dejected industrialist when he meets a spirited chatterbox on a train in this breezy Bollywood romantic comedy.", "https://www.dropbox.com/s/m1td2iypft1w64b/jab%20we%20met.mp4?dl=1", ["wake up sid", "kuch kuch hota hai", "ishqiya", "golmaal fun unlimited", "kal ho naa ho", "luka chhupi", "judwaa 2", "do dooni chaar", "jab harry met sejal", "yeh jawaani hai deewani", "mujhse shaadi karogi", "ugli aur pagli"]],
    
    "dedh ishqiya": [["https://imgur.com/EM6h206"], "After failing to win heart of an aristrocat's widow, a thief plans to abduct her, only to discover that there are others with the same idea.", "https://www.dropbox.com/s/xinop8scpk0yiok/dedh%20ishqiya.mp4?dl=1", ["ishqiya", "pyaar ka punchnama 2", "toilet ek prem katha", "kal ho naa ho", "ramji london waley", "namastey london", "om shanti om", "dil dhadakne do", "chup chup ke", "kabhi haan kabhi naa", "yeh jawaani hai deewani", "hattrick"]],
    
    "life in a metro": [["https://imgur.com/qIPQylY"], "A group of Mumbai up-and-comers search for love and struggle for success in this ensemble drama that centers on an easger young cell-center executive.", "https://www.dropbox.com/s/h6mcte4kan79m5o/life%20in%20a%20metro.mp4?dl=1", ["kabhi khushi kabhi gham", "dear zindagi", "kabhi alvida naa kehna", "deewana main deewana", "zindagi na milegi dobarah", "secret superstar", "kareeb", "tanu weds manu", "vivah", "tamasha", "inkaar", "malaal"]],
    
    "mubarakan": [["https://imgur.com/KoE7LOc"], "Chaos ensues after two orphaned twin brothers raised apart team up with their eccentric, unmarried uncle to find a solution to their romantic woes.", "https://www.dropbox.com/s/qp45tu8flelfmzv/mubarakan.mp4?dl=1", ["ishq vishk", "phir se", "dostana", "kareeb", "humpty sharma ki dulhania", "c kkompany", "what s your rashee", "pyaar ka punchnama 2", "shaandaar", "vivah", "jab harry met sejal", "inkaar"]],
    
    "fashion": [["https://imgur.com/gykajjA"], "A small-town girl finally realizes her dream of becoming a famous supermodel but soon finds there's a price for her glamorous new life.", "https://www.dropbox.com/s/kupz5exf5143sgn/fashion.mp4?dl=1", ["heroine", "secret superstar", "tamasha", "life in a metro", "kabir singh", "luck by chance", "parmanu", "guru", "half girlfriend", "no one killed jessica", "taare zameen par", "baazaar"]],
    
    "thank you": [["https://imgur.com/hxWIOjU"], "Three cheating husbands end up paying the price for their infidelities when their spouses hire a private detective -- who falls for one of the wives.", "https://www.dropbox.com/s/yx61f3c1f1y0hm6/thank%20you.mp4?dl=1", ["what the f!$#", "luka chhupi", "door ke darshan", "mumbai delhi mumbai", "chashme baddoor", "main aur mrs khanna", "ek main aur ekk tu", "running shaadi", "jai mummy di", "love per square feet", "shimla mirch", "pyaar ka punchnama 2"]],
    
    "guru": [["https://imgur.com/aASfF4Y"], "Ambitious Gurukant Desai ignores his father's advice and leaves his vilage to find success in Turkey.", "https://www.dropbox.com/s/dkcsenhl90680ay/guru.mp4?dl=1", ["taare zameen par", "swades", "delhi-6", "heroine", "billu", "dhobi ghat", "no one killed jessica", "secret superstar", "baazaar", "soorma", "guzaarish", "udta punjab"]],
    
    "time out": [["https://imgur.com/SNJSuKR"], "Raised in the privileged bubble of Delhi's elite, a teen is compelled to question his outlook on life and love when his older brother comes out as gay.", "https://www.dropbox.com/s/6svyjn42szhbc4a/time%20out.mp4?dl=1", ["ascharyachakit", "x past is present", "ba pass 2", "jaoon kahan bata ae dil", "haraamkhor", "i am", "do paise ki dhoop chaar aane ki baarish", "guilty", "beyond the clouds", "evening shadow", "ba pass", "soni"]],
    
    "gori tere pyaar mein": [["https://imgur.com/26VGNnL"], "Sriram is concerned only with spending money, until he meets Dia, a principled activist. Now he's determined to prove himself worthy of her affection.", "https://www.dropbox.com/s/ck8ruedw1splvjf/gori%20tere%20pyaar%20mein.mp4?dl=1", ["tanu weds manu", "hasee toh phasee", "khoobsurat", "what s your raashee", "pyaar ka punchnama 2", "humpty sharma ki dulhania", "jab harry met sejal", "vivah", "tere naal love ho gaya", "wake up sid", "barfi", "mubarakan"]],
    
    "schitt s creek": [["https://imgur.com/saJA7dd"], "Suddenly broke, the formerly filthy-rich Rose family is reduced to living in a ramshackle motel in a town they once bought as a joke: Schitt's Creek.", "https://www.dropbox.com/s/jw6v8eg2ql1vu88/schitt%27s%20creek.mp4?dl=1", ["derry girl", "kim s convenience", "the good place", "cuckoo", "the it crowd", "crashing", "space force", "great news", "ricky gerwals is derek", "people just do nothing", "the inbetweeners"]],
    
    "the 100": [["https://imgur.com/5F9Z89i", "https://imgur.com/qjNiTTP"], "A century after Earth was devastated by a nuclear apocalypse, 100 space station residents are sent to the planet to determine whether it's habitable.", "https://drive.google.com/uc?export=download&id=1FoAkn3EEe1GUpZmmxfIF2kRW93i-mSQ2", ["the umbrella academy", "gotham", "v wars", "the i-land", "the rain", "snow piercer", "black mirror", "salvation", "punisher", "ragnarok", "teen wolf", "titans"]],
    
    "blacklist": [["https://imgur.com/Tu4PLmW"], "After turning himslef in, a brilliant fugitive offers to help the FBI bag other baddies, but only if rookie profiler Elizabeth Keen in his partner.", "https://drive.google.com/uc?export=download&id=1Gm6Qx3PkW6BEIQdaXEn5A5ekzmY-X2Ig", ["designated survivor", "criminal united kingdom", "bodyguard", "bloodline", "queen of the south", "ozark", "line of duty", "house of cards", "animal kingdom", "the people v oj simpson"]],
    
    "vikings": [["https://imgur.com/wcKc0Vx"], "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision.", "https://drive.google.com/uc?export=download&id=1jKBeLJHziCdAuAiSEGxXnZQWDt6duxff", ["spartacus", "thieves of the wood", "black sails", "marco polo", "troy fall of city", "the last kingdom", "frontier", "knightfall", "blood diamond", "noah", "the 100", "the letter for the king"]],
    
    "cobra kai": [["https://imgur.com/41gh7YV"], "Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignities in this sequel to the \"Karate Kid\" films", "https://drive.google.com/uc?export=download&id=1jCY515zsuDUyS0gCVKN9vAQQp2xeJi4p", ["pose idon", "unbroken", "away", "shooter", "gotham", "django", "v for vendetta", "blacklist", "da 5 bloods", "gladiator", "tom cruise top gun", "project power"]],
    
    "brooklyn nine-nine": [["https://imgur.com/YkB1vEx"], "The team turns on Jake for delaying an autopsy report by  flirting with an attractive medical examiner, who turns out to be more than he bargained for.", "https://drive.google.com/uc?export=download&id=1NmYnbWEILaQ-YXmyLUDPMfhE0Ix75l4P", ["close enough", "south park", "rick and morky", "the good place", "archer", "hoops", "sneaker heads", "schitt s creek", "friends", "disjointed", "cuckoo", "the it crowd"]],
    
    "baby": [["https://imgur.com/d6I5bUU"], "Fed up with their families and classmates, two teen girls from a wealthy part of Rome are drawn to the city's underworld and start leading double lives.", "https://drive.google.com/uc?export=download&id=1tfqoJBTIs3cbZIZf6BjbZ-xdIoVAbWCq", ["trinkets", "lucifer", "summer time", "how to get away with murder", "the watch", "elite", "enola holmes", "riverdale", "365 days", "gossip girl", "anne with an e", "all together now"]],
    
    "gotham": [["https://imgur.com/ruov5KZ"], "Long before he was commissioner, rookie cop James Gordon takes on Gotham City crime and corruption to avenge the murder of Bruce Wayne's parents.", "https://drive.google.com/uc?export=download&id=1xTWgXnjzKcxjX50_b7bK9LeTLZ_L4_PK", ["the umbrella", "the 100", "titans", "defenders", "snow piercer", "arrow", "star trek discovery", "the i-land", "altered carbon", "shooter", "black lightning", "jessica jones"]],
    
    "the good place": [["https://imgur.com/ETZKqUn"], "Due to an error, self-absorbed Eleanor Shellstrop arrives at the Good Place after her death. Determined to stay, she tries to become a better person.", "https://drive.google.com/uc?export=download&id=1aljYCAmJn09IT5DkQ767cAjve6dn-qcA", ["schitt s creek", "cuckoo", "crashing", "space force", "unbreakable kimmy schmidt", "derry girls", "sick note", "kim s convenience", "great news", "special", "master of none", "black af"]],
    
    "ozark": [["https://imgur.com/HQQl8oX"], "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.", "https://drive.google.com/uc?export=download&id=173BZMNJe8KLSARJX_0z47XwQ_0vPOvZt", ["designated survivor", "bloodline", "better call saul", "bodyguard", "house of cards", "mindhunter", "fargo", "you", "unbelievable", "the people v oj simpson", "blacklist", "animal kingdom"]],
    
    "wentworth": [["https://imgur.com/9nf6P01"], "Bea Smith is locked up while awaiting trial for the alleged attempted murder of her husband and must learn how life works in prison.", "https://drive.google.com/uc?export=download&id=10zRPajSiM7xuBVtZkflWErMA4FftNvM1", ["pose", "animal kingdom", "kingdom", "bodyguard", "northern rescue", "designated survivor", "green leaf", "bad blood", "the people v oj simpson", "dynasty", "ozark", "unbelievable"]],
    
    "arrow": [["https://imgur.com/K6E6U0k"], "Based on DC Comic's Green Arrow, an affluent playboy becomes a vengeful superhero, saving the city from villains armed with just a bow and arrows.", "https://drive.google.com/uc?export=download&id=1UzV9WfHMjyBB2ViPAI-_ngB8wvogM3mQ", ["titans defenders", "iron fist", "black lightning", "dare devil", "the umbrella academy", "gotham", "warrior nun", "altered carbon", "star trek enterprise", "ragnarok", "wu assassins"]],
    
    "queen of the south": [["https://imgur.com/vasAtsA"], "To avoid prostitution, Teresa offers to be a drug mule and is put to the test. Meanwhile in Mexico, Brenda and her son try to evade Epifanio's thugs.", "https://drive.google.com/uc?export=download&id=1jcoUnQE_zYl_rE3kDcqqYZN9DVJ2rReX", ["la reina del sur", "shooter", "designated survivor", "undercover", "blacklist", "the 100", "fauda", "bad blood", "vikings", "sons of anarchy", "peaky blinders", "narcos"]],
    
    "narcos": [["https://imgur.com/wcm7pfo"], "Communist radical group M-19 makes a move against the narcos, while Murphy gets an education in Colombian law enforcement from his new partner Pena.", "https://drive.google.com/uc?export=download&id=1py2mqToaI1xSO5LoGiPJPGcKuvQh5pWU", ["narcos mexico", "fauda", "queen of the south", "suburra on rome", "locked up", "bad blood", "el chapo", "shooter", "vikings", "mossad 101", "the inmate", "bloodline"]],
    
    "iron fist": [["https://imgur.com/C7d5nHo"], "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.", "https://drive.google.com/uc?export=download&id=1yp9ralYCCIR-pp01MJ1A1XpVh0g-KJ8g", ["defenders", "punisher", "dare devil", "jessica jones", "luke cage", "black lightning", "arrow", "cursed", "wu assassins", "titans", "ragnarok", "the witcher"]],
    
    "jessica jones": [["https://imgur.com/7iSht2D"], "Haunted by a traumatic past, Jessica Jones uses her gifts as a private eye to find her tormentor before he can harm anyone else in Hell's Kitchen.", "https://drive.google.com/uc?export=download&id=12VTmK9MKP5yi2N3_rdbFk3DtD_oNKy2a", ["defenders", "luke cage", "dare devil", "iron fist", "punisher", "arrow", "black lightning", "the i-land", "gotham", "colony", "cursed", "v wars"]],
    
    "dare devil": [["https://imgur.com/rxvrd10"], "Blinded as a young boy, Matt Murdock fights injustices by day as a lawyer and by night as the Super Hero Daredevil in Hell's Kitchen, New York City.", "https://drive.google.com/uc?export=download&id=194UKN31p1H5JzzAaJ0PRwHC-LxFTvDPy", ["defenders", "punisher", "luke cage", "jessica jones", "iron fist", "arrow", "gotham", "black lightning", "wu assassins", "titans", "warrior nun", "shadow"]],
    
    "narcos mexico": [["https://imgur.com/lTSqKLH"], "Witness the birth of the Mexican drug war in the 1980s as a gritty new \"Narcos\" saga chronicles the true story of the Guadalajara cartel's ascent.", "https://drive.google.com/uc?export=download&id=1x2v5W8rLg9KEJ0nPU0YvfkPKImZX3Baw", ["narcos", "the inmate", "bad blood", "fauda", "el chapo", "shooter", "ozark", "you cannot hide", "anauthorized living", "blacklist", "pablo escobar"]],
    
    "luke cage": [["https://imgur.com/4IJ6AZm"], "A hoodie-wearing, unbreakable ex-con fights to clear his name and save his neighborhood. He wasn't looking for a fight, but the people need a hero.", "https://drive.google.com/uc?export=download&id=1eEEZCwVGobz6hUaOKv-iHRjQ1Sv30oIY", ["defenders", "dare devil", "jessica jones", "iron fist", "punisher", "arrow", "black lightning", "wu assassins", "gotham", "titans", "cursed", "the i-land"]],
    
    "el chema": [["https://imgur.com/3N1HGOa"], "Follow one man's epic journey as he transforms from wily underage drug smuggler to one of the world's most infamous cartel leaders.", "https://drive.google.com/uc?export=download&id=1m7ITHLOkYdWcg0_uTFTsLoeLxcmebHRr", ["el dragon", "pablo escobar", "the mafia dolls", "the inmate", "puerta 7", "apache", "nicky jam", "ingobernable"]],
    
    "defenders": [["https://imgur.com/gC273eV"], "Daredevil, Jesscia Jones, Luke Cage and Iron Fist join forces to take on common enemies as a sinister conspiracy threatens New York City.", "https://drive.google.com/uc?export=download&id=1V59lh2uFPLDUY3l3h5INTaMwGNZvBIGG", ["iron fist", "dare devil", "jessica jones", "luke cage", "punisher", "arrow", "titans", "black lightning", "colony", "wu assassins", "gotham", "warrior nun"]],
    
    "khaani": [["https://imgur.com/jilfIJT"], "After a rich politician's son kills a young woman's brother, an unlikely romantic connection complicates her pursuit of justice.", "https://drive.google.com/uc?export=download&id=1yLby7Im-zbEQ_4Zq_VpQDcvDXfKckvU7", ["zindagi gulzar hai", "zindagi kitni haseen hay", "saqday tumhare", "humsafar", "abdul all", "balu mahi", "chalay & saath", "cake", "pinky memsaab", "shubh aakambh", "rangreza", "chupan chupai"]],
    
    "naruto": [["https://imgur.com/ZQdWNAR"], "Guided by the spirit demon within him, orphaned Naruto learns to harness his powers as a ninja in his anime adventure series.", "https://drive.google.com/uc?export=download&id=1WAKaB0ESm_hd_Tjg5Ppv8BHRaUb5Ixve", ["hunter hunter", "knights of the zodiac", "fairy tail", "the seven deadly sins", "ushio & tora", "bleach", "one punch man", "full metal alchemist", "the idhun chronicles", "black lagion", "loaded", "wonder"]],
    
    "money heist": [["https://imgur.com/sIzOqFm"], "The Profeesor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.", "https://drive.google.com/uc?export=download&id=1m3KH62O0GDiHnxF0KsdJ0Zzmo2glLq2D", ["locked up", "dark desire", "unknown origins", "the great heist", "narcos", "good morning veronica", "the paramedic", "the barrier", "dark", "the platform", "in the shadow or iris"]],
    
    "fauda": [["https://imgur.com/gi8vDuq"], "A top Israeli agent comes out of the retirement tohunt for a Palestinian fighter he thought he'd killed, setting a chaotic chain of events into motion.", "https://drive.google.com/uc?export=download&id=1wRsXgftOxuBePpB3JhfBxv3wTKCPl5fI", ["when heroes fly", "narcos", "unauthorized living", "silver spoon", "mossad 101", "narcos mexico", "bad blood", "spy", "queen of the south", "shooter", "vikings", "deadwind"]],
    
    "elite": [["https://imgur.com/QKzaLm3"], "Samuel throws a party, where Nano makes a move on Marina and spiked punch affects more than one couple. Nadia is hurt by what she learns about Guzman.", "https://drive.google.com/uc?export=download&id=14LFXXtJ25ZVfT_Q7T8Hdi3LchQRn76YZ", ["control 2", "kissing game", "valeria", "riverdale", "gossip girl", "trinkets", "summer time", "toy boy", "degrassi next class", "women of the night", "baby", "tidelands"]],
    
    "resurrection ertugrul": [["https://imgur.com/8gPfQqY"], "When a good deed unwittingly endangers his clan, a 13th-century Turkish warrior agrees to fight a sultan's enemies in exchange for new tribal land.", "https://drive.google.com/uc?export=download&id=1gOGzpRHwyP_E8WP5w0I8ywB6DbwZxEnr", ["21 sarfarosh", "bard of blood", "the treasure", "panipat", "saladin", "gunjan saxena", "bahubali 2", "alhayba", "filinta", "bahubali", "parmanu", "very big shot"]],
    
    "the protector": [["https://imgur.com/11UhmAh"], "Discovering his tries to a secret ancient order, a young man living in modern Istanbul emabarks on a quest to save the city from an immortal enemy.", "https://drive.google.com/uc?export=download&id=1ovcyTX983_lH1zI0msCUYKYBMipkrkjn", ["v wars", "snow piercer", "the i-land", "cursed", "punisher", "warrior nun", "ragnarok", "wu assassins", "colony", "october", "iron fist", "dare devil"]],
    
    "the gift": [["https://imgur.com/LA3Fia1"], "A painter in Istanbul emabarks on a personal journey as she unearths universal secrets about an Anatolian archaelogical site and its link to her past.", "https://drive.google.com/uc?export=download&id=12TVJJCr33qgrBK_EE_FEY4kG-JWMYYFs", ["my mother s wound", "miracle in cell no. 7", "rhino season", "intersection", "the yard", "winter sun", "toll booth", "behzat", "20 minutes", "subat", "one way to tomorrow", "filinta", "schitt s creek", "wentworth"]],
    
    "la reina del sur": [["https://imgur.com/2CtGI4u"], "After years of blood, sweat and tears, a woman from humble beginnings finds herself in the perilious position of being a legend in drug trafficking.", "https://drive.google.com/uc?export=download&id=1Zi-Q0A5wSJsqtTM39HmFEF8IO02_Czl7", ["queen of the south", "puerta 7", "the inmate", "ingobernable", "the mafia dolls", "presso no. 1", "tijuana", "the candidate", "falsa identidad", "the search", "yankee"]],
    
    "toy boy": [["https://imgur.com/nE1PsEj"], "After seven years in a Malaga prison, a male stripper is released pending retrial and sets out to prove his lover framed him for her husband's murder.", "https://drive.google.com/uc?export=download&id=12b4RszDClYDmyIAl6I9h_0xxC14cE7CP", ["elite", "dark desire", "hache", "anauthorized living", "women of the night", "the inmate", "victim number 8", "what if", "playing with fire", "unstoppable", "bitter daisies", "perfume"]],
    
    "locked up": [["https://imgur.com/8fYPLe5"], "Manipulating into embezzling funds for her boyfriend and sentenced to prison, a naive young woman must quickly learn to survive in a harsh new world.", "https://drive.google.com/uc?export=download&id=1bXWV159PjpGkWzHamoLeqV6moNDP_p8R", ["the great heist", "money heist", "dark desire", "unauthorized living", "el chapo", "the inmate", "toy boy", "earth and blood", "the barrier", "suburra blood on rome", "puerta 7", "you cannot hide"]],
    
    "playing with fire": [["https://imgur.com/giMYKdZ"], "Three prosperous women -- including a mother and her daughter -- fall for a seductive man in Colombia's Coffee Triangle.", "https://drive.google.com/uc?export=download&id=1kQ_Pff_x2LTlCcQfofqLdX_RzOlUJdkH", ["abzurdah", "gypsy", "tiger", "white girl", "valeria", "the club", "dry martina", "the chosen ones", "you me her", "newness", "addicted", "i am happiness on earth", "enola holmes", "gilmore girls", "love me as i am", "shameless"]],
    
    "sacred games": [["https://imgur.com/jhjnW4r"], "News of Ganesh Gaitonde creates a stir among Mumbai's VIPs, from politicians to film stars. Removed from the case, Sartaj begins his own investigation.", "https://drive.google.com/uc?export=download&id=1qpYwi8LLz_N9UDt8WU4zctsuz5CAdXrE", ["ek hasina thi", "class of 83", "raat akeli hai", "she", "barah aana", "saheb biwi aur gangster returns", "delhi crime", "famous", "aapla manus", "jamtara sabka number ayega", "choked paisa bolta hai", "guilty"]],
    
    "bodyguard": [["https://imgur.com/JK46IJr"], "After helping thwart of a terrorist attack, a war veteran is assigned to protect a politician who was a main proponent of the very conflict he fought in.", "https://drive.google.com/uc?export=download&id=13NCPZHUJW-ivk4rstzev8auyvLsZYMM9", ["house of cards", "wanted", "manhunt unabomber", "bloodline", "the sinner", "secret city", "the people v oj simpson", "the stranger", "the bletchley circle", "ozark", "unbelievable", "designated survivor"]],
    
    "black mirror": [["https://imgur.com/84vre9s"], "This sci-fi anthology series explores a twisted, high-tech new-future where humanity's greatest innovations and darkest instincts collide.", "https://drive.google.com/uc?export=download&id=1qq5COmgI8rrBRiOyYOPtd4f9wvrlk38c", ["snow piercer", "salvation", "into the night", "orphan black", "the i-land", "the umbrella", "the oa", "designated survivor", "between", "dark", "the 100"]],
    
    "el chapo": [["https://imgur.com/IFRp2p4"], "Chapo desires to achieve patron status and feels disrespected as he tries to collaborate with drug lords. Miguel Angel must make a decision.", "https://drive.google.com/uc?export=download&id=1UNYEwsWDIK9U7DV7IN_olPyZho7Fbw4M", ["the inmate", "narcos mexico", "puerta 7", "el chema", "pablo escobar", "cocaine coast", "locked up", "enemig intimo", "the great heist", "unauthorized living", "narcos"]],
    
    "v wars": [["https://imgur.com/YGnCigt"], "A fast-spreading disease that turns victims into blood-sucking fiends pits two best friends against each other in a fight for humanity's future.", "https://drive.google.com/uc?export=download&id=1kAgwOVVuVp99L-8QvX0up94zVtfDaJD5", ["van helsing", "october faction", "the i-land", "vampires", "the order", "warrior nun", "the protector", "curon", "iron fist", "chilling adventures of sabrina", "the shannaro chronicles", "superstition"]],
    
    "bio hacker": [["https://imgur.com/r6EJ3SR"], "A medical student enters a top German university on a  secret mission to uncover a conspiracy linking a family tragedy to a visionay biology professor.", "https://drive.google.com/uc?export=download&id=1ZibZ-7sJUVz9RjI9Kjoz_Jt6m874Pr_6", ["the barrier", "dark", "lucifer", "the rain", "away", "young wallander", "freaks", "ratched", "how to get away with murder", "the devil all the time", "marseille", "black mirror"]],
    
    "stranger": [["https://imgur.com/WPBxutJ"], "With the help of a gutsy female detective, a prosecutor who has lost the ability to feel empathy tackles a murder case amid political corruption.", "https://drive.google.com/uc?export=download&id=1OAkp9-oog38DlqoSeVVUTN7e7Us8N3tS", ["the school nurse files", "kingdom", "hospital playlist", "extra curricular", "record of youth", "what s wrong with secretary kim", "save me", "my mister", "mr.sunshine", "reply 1988", "the chase", "signal", "bad blood", "she", "soni", "ratched", "blacklist"]],
    
    "iris": [["https://imgur.com/2nFgtlZ"], "Two friends' lives are changed forever when they are recruited by a top-secret organization tasked with portecting the country from foreign threats.", "https://drive.google.com/uc?export=download&id=15Tn4Q8fcmaeS4KHZtgbGlgq1GhRPyDue", ["bad guys", "a man called god", "vagabond", "rugal", "the guardians", "my country the new ace", "you re all surrounded", "the k2", "possessed", "the lies within", "the rebel", "2 weeks"]],
    
    "silver spoon": [["https://imgur.com/uNygYHH"], "Forced to become an apprentice cop, cocky playboy Igor finds he's got a knakc for police work. But his job soon takes him down a dark personal path.", "https://drive.google.com/uc?export=download&id=1yjyskWuOH3uUs6TkIbubxOuDZwn3DJAI", ["fauda", "when heroes fly", "the method", "mossad 101", "locust", "fartsa", "signs", "the spy", "white lines", "unauthorized living", "sparta", "bloodline"]],
    
    "vagabond": [["https://imgur.com/pzKgWwG"], "When his nephew dies in a plane crash, stunt man Cha Dal-geon resolves to find out what happened, with the help of covert operative Go Hae-ri.", "https://drive.google.com/uc?export=download&id=1aGnIl5O_V6DkC4OUefOz3mDd8W_WEhrc", ["the guardians", "man to man", "2 weeks", "the k2", "the lies within", "you re all surrounded", "bad guys vile city", "abyss", "my country the new ace", "possessed", "iris", "bad guys"]],
    
    "12 monkeys": [["https://imgur.com/WeACd1q"], "In a post-apocalyptic future, a time traveler uses his powers to return  to the present and try to stop the plague that is about to decimate humankind.", "https://drive.google.com/uc?export=download&id=1vBAMaiFBQ_vqngmIZsRllIrwNR-HSVzW", ["salvation", "zoo", "between", "into the night", "black mirror", "another life", "the i-land", "night flyers", "kiss me first", "snow piercer", "the oa", "star trek discovery"]],
    
    "secret city": [["https://imgur.com/VX4tGIL"], "A relentless muckraker pushes for truth and transparency in Australia's corridors of political power, despite threats to her life and career.", "https://drive.google.com/uc?export=download&id=1opqLO8AOAL_E_QOdNgKhvHQeRQ-B2QM8", ["harlan coben s safe", "collateral", "wanted", "the code", "the sinner", "marcella", "broadchurch", "the stranger", "manhunt unabomber", "retribution", "the bletchley circle", "bodyguard"]],
    
    "london spy": [["https://imgur.com/kwR2qmg"], "When his reclusive-banker lover disappears, a hard-partying young British hedonist plunges into the dangerous world of espionage to find the truth.", "https://drive.google.com/uc?export=download&id=1Ot_Iny0XUDlExAiLLiG8AW5IH5BCXMMj", ["collateral", "shetland", "paranoid", "secret city", "marcella", "retribution", "broadchurch", "the sinner", "the code", "criminal united kingdom", "rake", "miss fisher s murder mysteries"]],
    
    "the code": [["https://imgur.com/WctnlzC"], "Investigating a deadly car crash, a journalist and his hacker brother stumble into a conspiracy that reaches into the upper echelons of government.", "https://drive.google.com/uc?export=download&id=1zL2ig6u9DXzjWi09QqqOBUJwDJbwPX_k", ["harlan coben s safe", "secret city", "paranoid", "retribution", "collateral", "marcella", "deep water", "wanted", "broadchurch", "spotless", "the sinner", "the bletchley circle"]],
    
    "american assassin": [["https://imgur.com/c3ElMMt", "https://imgur.com/RKfyEfi"], "After grad student Mitch Rapp suffers a tragic loss during a terrorist attack, his single-minded thirst for vengeance catches the interest of the CIA.", "https://drive.google.com/uc?export=download&id=1zIAVgZcs0iXQRQnELw_oYTZFDpb-kGWT", ["close", "triple frontier", "haywire", "a man apart", "polar", "the decline", "peppermint", "the saint", "the town", "takers", "the hard way", "acts of vergeance", "iron fist", "jessica jones", "dare devil", "black lightning"]],
    
    "the losers": [["https://imgur.com/XcMDetL","https://imgur.com/7xMm5hs"], "After learning that their handler set them up, a group of disavowed CIA operatives bands together to bring down their betrayers.", "https://drive.google.com/uc?export=download&id=1tkTypAWdZUdfzv-OB7IXCK6cN_zIcErs", ["triple frontier", "the decline", "santana", "6 underground", "extraction", "a man apart", "faster", "the saint", "the town", "snitch", "the bourne legacy", "escape plan", "delhi crime", "sacred games"]],
    
    "wonder": [["https://imgur.com/cNsAAAX", "https://imgur.com/KWl9chI"], "After being home schooled all his life, a boy with facial differences attends a traditional school, where he must find friends among his bullies.", "https://drive.google.com/uc?export=download&id=1gRWIEZYczwTzQbxqheB6HYl4HHdUqdC8", ["miracle from heaven", "anne with an e", "all together now", "the lovely bones", "enola holmes", "all saints", "the boy who harnessed the wind", "changeling", "maudie", "trouble with the curve", "lion", "the crimes that bind"]],
    
    "teen wolf": [["https://imgur.com/VyViVVk"], "An animal bite turns a high schooler into a werewolf and he suddenly becomes a star athlete and chick magnet. But he also faces a new set of problems.", "https://drive.google.com/uc?export=download&id=1HFIWfZnRTPX2fNGXSEy-hMNG9qSj6-_V", ["shadow hunters the mortal instruments", "vampires", "the order", "v wars", "van helsing", "bitten", "chilling adventures of sabrina", "the 100", "from dusk till dawn", "october faction", "luna nera", "the vampire diaries"]],
    
    "chilling adventures of sabrina": [["https://imgur.com/HWsrlxT"], "Magic and mischief collide as half-human, half-witch Sabrina navigates between two worlds: mortal teen life and her family's legacy, the Church of Night.", "https://drive.google.com/uc?export=download&id=138rwWJm0Xu_slIiDSUEtHBgtnsdioGrW", ["vampires", "the order", "october faction", "the originals", "from dusk till dawn", "daybreak", "shadow hunters the mortal instrument", "hemlock grove", "locke & key", "van helsing", "zombie", "superstition", "gotham", "kaali khuhi"]],
    
    "selection day": [["https://imgur.com/lF6nRmJ"], "Two teen cricket prodigies struggle against their overbearing father and a system stacked against them to realize their own ambitions and identities.", "https://drive.google.com/uc?export=download&id=1_tbP2dhY_SfpZBMYaEL730Mtu2SEmQft", ["girls hotel", "sacred games", "she", "delhi crime", "bhouri", "taj mahal 1989", "jamtara sabka number ayega", "leila", "baazaar", "ek hasina thi", "raat akeli hai", "jal"]],
    
    "boys over flowers": [["https://imgur.com/mXk8nlK"], "Unassuming high school girl Jan-di stands up to -- and eventually falls for -- a spoiled rich kid who belongs to the school's most powerful clique.", "https://drive.google.com/uc?export=download&id=1Vq3tZ5lNAIoCbxql0r8Sc56MAek7aZig", ["meteor garden", "meteor garden", "the king eternal monarch", "inheritors", "my love from the star", "my secret romance", "because this is my first life", "cinderella and trhe four knights", "chocolate", "romance is a bonus book", "well intended love", "love alarm"]],
    
    "how to sell drugs online (fast)": [["https://imgur.com/UxRCLk4"], "To win back his ex-girlfriend, a nerdy teen starts selling ecstasy onlone out of his bedroom -- and becomes one of Europe's biggest dealers.", "https://drive.google.com/uc?export=download&id=1L86bXggE_ATOMZNtaUZ-iEgBhsVGIUY0", ["the end of the fucking world", "teenage bounty hunters", "13 reasons why", "good girls", "orange is the new black", "rita", "trinkets", "sky lines", "suits", "i am not okay with this", "dead to me", "criminal germany"]],
    
    "glee": [["https://imgur.com/fl3npe1"], "Amid relationship woes and personal attacks from a wicked cheerleading coach, a teacher fights to turn underdog glee club members into winners.", "https://drive.google.com/uc?export=download&id=1T03uAfr-1HHjzNo9bxeZ2bp7Z8WPpYXd", ["the people v oj simpson", "eat pray love", "the boys in the band", "hollywood", "ratched", "pose", "a secret love", "versace", "circus of books", "the politician"]],
    
    "inheritors": [["https://imgur.com/LkEC58Y"], "After a chance encounter in LA, two teens from different social backgrounds reunite at an exclusive high school attended by Korea's uber rich.", "https://drive.google.com/uc?export=download&id=1uBNzg5HE4w64MUWgmH09nJCgfOq9W-IA", ["chocolate", "my first first love", "the third charm", "that winter the wind blows", "love alarm", "cheese in the trap", "one more time", "cinderella and the four knights", "hyena", "one spring night", "my golden life", "where stars land", "the boys in the band", "stranger", "the good place", "boys over flowers"]],
    
    "on my block": [["https://imgur.com/JqZFkIL"], "In a rough Los Angeles neighborhood, four smart, funny and streetwise teens find their lifelong friendship tested as they begin high school.", "https://drive.google.com/uc?export=download&id=1YLPuQ1T9Rus7cFH7OOzzUhDCOaZabHNW", ["turn up charlie", "atypical", "soundtrack", "pose", "aj and the queen", "teenage bounty hunters", "everything sucks", "oliter banks", "gentefied", "she's gotta have it", "dead to me", "blood & water"]],
    
    "stories by rabindranath tagore": [["https://imgur.com/qSlh36y"], "The writings of Nobel Prize winner Rabindranath Tagore com eto life in this collection of tales set in early-20th-century Bengal.", "https://drive.google.com/uc?export=download&id=1oyAYhsG8Wj5c2KnovOaq1yR9G90aA7qg", ["dhh", "she", "choked paisa bolta hai", "mandi", "delhi crime", "dr kashinath ghanekar", "bhaai", "barah aana", "taj mahal 1989", "firebrand", "1000 rupee note", "21 sarfarosh"]],
    
    "spartacus": [["https://imgur.com/sBMCxQ4"], "A Thracian man is condemned to a brutal death in the arena, only to outlast his executioners and be reborn as the enslaved gladiator Spartacus.", "https://drive.google.com/uc?export=download&id=1JDcICKaTMWXe_w7s2hrWu4WtIoUHzdYW", ["marco polo", "the last kingdom", "vikings", "noah", "black sails", "outlaw king", "troy fall of a city", "thieves of the wood", "marco polo on hundred eyes", "knight fall", "zero dark thirty", "deepwater horizon"]],
    
    "the last kingdom": [["https://imgur.com/7343kRb"], "As Alfred the Great defends his kingdom from Norse invaders, Uhtred -- born a Saxon but raised by Vikings -- seeks to claim his ancestral birthright.", "https://drive.google.com/uc?export=download&id=18KUwr45uHGV9SoxaFOv5h4rZoanDxBYs", ["troy fall of a city", "knight fall", "marco polo", "thieves of the wood", "vikings", "frontier", "spartacus", "black sails", "marco polo one hundred eyes", "the letter for the king", "cathedral", "punisher"]],
    
    "beecham house": [["https://imgur.com/O57FKL8"], "Secrets, betrayals, romances and family drama unfurl in the lives of an enigmatic, former British soldier and his household in 19th-century Delhi.", "https://drive.google.com/uc?export=download&id=1C75lSLxx3FmYN_Cpje1auqm1etfYQ2ZT", ["saawan", "midnight s children", "what will people say", "dolly kitty aur woh chamakte sitare", "class of 83", "pinky memsaab", "kaagar", "stories of rabindranath tagore", "dhh", "cake", "khan no.1", "21 sarfarosh"]],
    
    "world war II in colour": [["https://imgur.com/jC5LdDF"], "Footage of the most dramatic moments from the World WarII is restored in color and high definition for his historical documentary series.", "https://drive.google.com/uc?export=download&id=1UvScDlCEAl-uaRbbsn5-1j7t2PT8mHD7", ["age of tanks", "five came back", "greatest events of ww 2 in colour", "hitler s circle of evil", "rise of empires ottoman", "nazi concentration camps", "roman empire", "bobby kennedy for president", "hitler s steel beast", "being napoleon", "the pact", "the russian revolution"]],
    
    "marco polo": [["https://imgur.com/VZlyTtU"], "Set in a world of greed, betrayal, sexual intrigue and rivalry \"Marco Polo\" is based on the famed explorer's adventures in Kublai Khan's court.", "https://drive.google.com/uc?export=download&id=1TLeuFNb2jHX70FLGRt1OdqegL6q36VV0", ["marco polo one hundred eyes", "troy fall os a city", "the last kingdom", "frontier", "knight fall", "thieves of the wood", "black sails", "outlaw king", "spartacus", "vikings", "godless", "troy"]],
    
    "grand hotel": [["https://imgur.com/AqS76hY"], "To learn the truth about his sister's mysterious disappearance, a young man infiltrates a hotel in the guise of a footman and begins an investigation.", "https://drive.google.com/uc?export=download&id=1XArT2F9Qkg0M6uE9Fgsgz5WPPFUd54Te", ["velvet", "three days of christmas", "morocco love in times of war", "velvet coleccion", "cable girls", "high seas", "cathedral of the sea", "the bonfire of destiny", "alias grace", "the queen and the conquerer", "girls from ipanema", "when calls the heart"]],
    
    "the empress ki": [["https://imgur.com/ja5rKbt"], "A woman born in Korea navigates her way through love, war politics and national loyalties to become a powerful empress in China's Yuan dynasty.", "https://drive.google.com/uc?export=download&id=1Xxf_Yp7M64KDN86awSERnlVTcMFnSLoK", ["the king eternal monarch", "mr sunshine", "was it love", "record of youth", "white nights", "inheritors", "guardian the lonely and great god", "the princess weiyoung", "rookie historian goo hae ryung", "my mister", "live up to your name", "descendants of the sun"]],
    
    "cable girls": [["https://imgur.com/nJ9Nm05"], "In 1920s Madrid, four women at the National Telephone Company ring in revolution as they manage romance, friendship and the modern workplace.", "https://drive.google.com/uc?export=download&id=1PvgNphq5r_brmkBNyMe8MlToqsiC7rlq", ["velvet coleccion", "grand hotel", "velvet", "twice upon a time", "high seas", "holiday secrets", "three days of christmas", "unorthodox", "stateless", "the paper", "the eddy", "girls from ipanema"]],
    
    "roman empire": [["https://imgur.com/B7aYm5Z"], "This stylish mix of documentary and lavish historical epic chronicles the turbulent, violent reigns of Commodus, Julius Caesar and Caligula.", "https://drive.google.com/uc?export=download&id=1-IFGYLj72xCQKBOQnTRIKOhqqccSYemn", ["greatest events of ww 2 in colour", "rise of empires ottoman", "history 101", "nazi concentration camps", "hitler s circle of evil", "hitler a career", "trump an american dream", "the west", "world war 2 in colour", "age of tanks", "five came back", "challenger the final flight", "vikings", "world war 2 in colour", "marco polo", "the empress ki"]],
    
    "the perfect date": [["https://imgur.com/qMZeyXc"], "To earn money for college, a high schooler launches an app offering his services as a fake date. But when real feelings emerge, things get complicated.", "https://drive.google.com/uc?export=download&id=1Ecu1enl-phg7BxI5Q-0IzfA55LOuwWw4", ["to all the boys", "falling inn love", "the last summer", "someone great", "whatever it takes", "sixteen candles", "love jacked", "to all the boys i ve loved before", "christmas wedding planner", "my perfect romance", "the kissing booth", "reality high", "emily in paris", "boys over flowers", "on my block"]],
    
    "drive": [["https://imgur.com/pnt0xhA"], "A notorious thief allies with a street racer for a grand heist involving an elaborate game of deceit with authorities, who have their own dirty secrets.", "https://drive.google.com/uc?export=download&id=1qhMmB30MSy-bf0RvXNSXYnNwVzTghZ02", ["force 2", "naam shabana", "rocky handsome", "black", "phantom", "saaho", "gabbar is back", "tezz", "malang unleash the madness", "baadshaho", "mard ko dard nahin hota", "don 2", "luka chhupi", "jai mummy di", "for here or to go"]],
    
    "guilty": [["https://imgur.com/jrtfksf"], "When a college heartthrob is accused of rape by a less popular student, his girlfriend navigates various versions of the story in search of the truth.", "https://drive.google.com/uc?export=download&id=15-YebtWXjh6r4D6r0jJQcV4B-4-17lzt", ["soni", "article 15", "choked paisa bolta hai", "class of 83", "famous", "sacred games", "ankhon dekhi", "music teacher", "x past is present", "she", "ek hasina thi", "raat akeli hai"]],
    
    "someone great": [["https://imgur.com/qbeZITS"], "On the heels of a blindsiding breakup, music journalist Jenny braces for a new beginning -- and one last adventure with her closest friends.", "https://drive.google.com/uc?export=download&id=1v5QwWtd7y_xkKycw41ihNjonMm66gikV", ["love jacked", "my perfect romance", "desperados", "the wedding year", "the perfect date", "set it up", "jumping the broom", "seriously single", "christmas wedding planner", "the incredible jessica james", "let it snow", "falling inn love"]],
    
    "gunjan saxena": [["https://imgur.com/koM3foU"], "Flight Lieutenant Gunjan Saxenaa makes a history in her journey from aspiring aviator to India's first female comabt pilot in the Kargil War.", "https://drive.google.com/uc?export=download&id=1IS1MEae_BzIf3z6qjKR5oB-gQzhuRAbR", ["dolly kitty aur woh chamakte sitare", "class of 83", "cargo", "saheb biwi aur gangster returns", "raat akeli hai", "parmanu", "masaba masaba", "aapla manus", "pink", "the sky is pink", "panipat", "love aaj kal"]],
    
    "cargo": [["https://imgur.com/KamFUIE"], "Aboard a spaceship where souls of the deceased are readied for reincarnation, a lone crew member's rigid existence is disrupted by a spry new assistant.", "https://drive.google.com/uc?export=download&id=1cokLGROaCtLtp7GqAx1ve7mR16Giqs3b", ["masaba masaba", "dolly kitty aur woh chamakte sitare", "for here or to go", "motichoor chaknachoor", "raat akeli hai", "saheb biwi aur gangster returns", "dil dhadakne do", "aapla manus", "class of 83", "guilty", "gunjan saxena"]],
    
    "raat akeli hai": [["https://imgur.com/ptOgdeU"], "When a newly married landlord is murdered, a misfit cop's investigation is complicated by the victim's secretive family and his own conflicted heart.", "https://drive.google.com/uc?export=download&id=1pxneQhLS0eLfhA2MD6ImKklmBTt2Rak1", ["class of 83", "aapla manus", "saheb biwi aur gangster returns", "dolly kitty aur woh chamakte sitare", "sacred games", "ek hasina thi", "article 15", "she", "cargo", "masaba masaba", "gunjan saxena", "special 26"]],
    
    "class of 83": [["https://imgur.com/5sOvD3L"], "Demoted to an academy job, a cop trains five foolhardy students as assassins in his risky revenge plot against police corruption and the underworld.", "https://drive.google.com/uc?export=download&id=1_6jPsjeGE_Fp1J1ullqqv82fBA4emLHv", ["raat akeli hai", "saheb biwi aur gangster returns", "aapla manus", "dolly kitty aur woh chamakte sitare", "sacred games", "article 15", "ek hasina thi", "gunjan saxena", "cargo", "masaba masaba", "she", "guilty"]],
    
    "kaagar": [["https://imgur.com/q8Vk2ep"], "When an activist begins aiding a shrewd political advisor -- also his girlfriend's father, personal agendas lead to betrayal as love and duty clash.", "https://drive.google.com/uc?export=download&id=1tzK7ROsqU_jJZaO4bgtb0Fr7d3XZazSJ", ["dhh", "dr kashinath ghanekar", "poshter girl", "aapla manus", "masaba masaba", "for here or to go", "barah aana", "ek hasina thi", "choked paisa bolta hai", "bhaai", "dolly kitty aur woh chamakte sitare", "firebrand"]],
    
    "dhh": [["https://imgur.com/1ueGePC"], "Convinced only a miracle can save them from failing school exams, a trio of friends seek help from a magician. To their surprise, he gamely complies.", "https://drive.google.com/uc?export=download&id=1sFgDnjV03l6KfITNQJCQXTcwkw74eeTJ", ["dolly kitty aur woh chamakte sitare", "kaagar", "saheb biwi aur gangster returns", "cycle", "poshter girl", "ankhon dekhi", "cargo", "masaba masaba", "gunjan saxena", "saawan", "harishchandrachi factory", "barah aana"]],
    
    "ek hasina thi": [["https://imgur.com/8BC5cdF"], "Imprisoned for underworld crimes she didn't commit, a vengeful woman breaks free and goes scorched earth on the smooth-talking suitor who framed her.", "https://drive.google.com/uc?export=download&id=1_9F4Ot8ZXd0XhNn0GzqiEmT1t4AUZtbB", ["raat akeli hai", "class of 83", "aapla manus", "saheb biwi aur gangster returns", "sacred games", "delhi crime", "kaagar", "she", "dolly kitty aur woh chamakte sitare", "barah aana", "raja natwarlal", "malang unleash the madness"]],
    
    "article 15": [["https://imgur.com/sRSBkx4"], "The grim realities of caste discrimination come to light as an entitled but upright city cop ventures into India's heartland to investigate a murder.", "https://drive.google.com/uc?export=download&id=1hE6YYpjW9rzaSLEaWX0Mr6_EpngNgk6f", ["class of 83", "raat akeli hai", "she", "guilty", "andhadhun", "delhi crime", "romeo akbar walter", "aapla manus", "sacred games", "my birthday song", "jamtara sabka number ayega", "gabbar is back"]],
    
    "orange is the new black": [["https://imgur.com/V2f9JTE"], "Targeted for romance by a fellow prisoner, Piper finds that subtlety is an ineffective approach to letting her suitor down.", "https://drive.google.com/uc?export=download&id=14pMPIwg20AYX9hlEd4hfLQXBQNOsSv3H", ["dead to me", "suits", "teenage bounty hunters", "good girls", "the end of the fucking world", "the politician", "sex education", "insatiable", "never have i ever", "riverdale", "13 reasons why", "dynasty"]],
    
    "riverdale": [["https://imgur.com/hvDFNLn"], "As police begin an investigation into Jason's death, Archie's guilt and Jughead's suspicions intensify. Betty struggles with her feelings for Archie.", "https://drive.google.com/file/d/158j8yl98JqRPwmxd3atkB9BEp4A9SsjS/view?usp=sharing", ["gossip girl", "13 reasons why", "oliter banks", "trinkets", "vampire diaries", "dynasty", "elite", "dare me", "never have i ever", "get even", "sweet magnolias", "control 2"]],
    
    "for here or to go": [["https://imgur.com/nQ2buch"], "A software engineer must decide if he'd rather navigate America's frustrating visa renewal process or simply return to his home country of India.", "https://drive.google.com/uc?export=download&id=1JphkLEawQUQCtUnSLMqVlhboqmjOAqCP", ["masaba masaba", "motichoor chaknachoor", "love & shukla", "halkaa", "poshter girl", "dhh", "chaman bahaar", "ungli", "cargo", "kaagar", "choked paisa bolta hai", "barah aana"]],
    
    "motichoor chaknachoor": [["https://imgur.com/dTYFCM2"], "Pushing 40 and unemployed, a Dubai returnee desperate for a wife catches the eye of a Bhopal belle, who sees him solely as her ticket out of India.", "https://drive.google.com/uc?export=download&id=1mwbuofN5ItlecLHxTb8t9heAutRGVdet", ["masaba masaba", "for here or to go", "ungli", "cargo", "dil dhadakne", "rajma chawal", "pyaar ka punchnama 2", "love aaj kal", "dharam sankat mein", "dolly kitty aur woh chamakte sitare", "shimla mirch", "mubarakan"]],
    
    "dil dhadakne do": [["https://imgur.com/9fP8pdb"], "While hosting a shipboard holiday for relatives and friends, a wealthy but dysfunctional family must face the ugly truths under their flawless facade.", "https://drive.google.com/uc?export=download&id=1JpTnD6xW8aHl1gotNtUTsmlM94xtL-wg", ["motichoor chaknachoor", "yeh jawaani hai deewani", "emi", "dear zindagi", "masaba masaba", "kuc kuch hota hai", "kal ho naa ho", "om shanti om", "kapoor & sons", "ramji london waley", "ishqiya", "kabir singh"]],
    
    "rita": [["https://imgur.com/6N9N0PP"], "Independent, outspoken and adored by her students, schoolteacher Rita fares less well with adults in this comedy-drama from Denmark.", "https://drive.google.com/uc?export=download&id=16JzTF5nMeQedqoIz7oiDTC3jjwYd2SCa", ["bonus family", "maniac", "suits", "good girls", "fallet", "gilmore girls", "jane the virgin", "welcome to the family", "call my agent", "how to sell drugs online (fast)", "i love you", "borgen"]],
    
    "teenage bounty hunters": [["https://imgur.com/JRcTUMp"], "Twin sisters Sterling and Blair balance teen life at an elite Southern high school with an unlikely new career as butt-kicking bounty hunters.", "https://drive.google.com/uc?export=download&id=1TWGOiW9jRLMJhiYqbFN5asbdiXAsPBw6", ["insatiable", "good girls", "never have i ever", "dead to me", "on my block", "glee", "everything sucks", "trinkets", "i am not okay with this", "orange is the new black", "how to sell drugs online (fast)", "riverdale"]],
    
    "the duchess": [["https://imgur.com/imPATYO"], "Katherine's a single mom juggling her career, her tween daughter, her relationship with her boyfriend -- and pondering getting pregnant with her ex.", "https://drive.google.com/uc?export=download&id=1idljq16prhzsDdRSffwipS6h6r2ZL3Bl", ["katherine ryan in trouble", "katherine ryan glitter room", "after life", "good girls", "grace and frankie", "schitt s creek", "shameless", "loaded", "daed to me", "derry girls", "doc martin", "parenthood"]],
    
    "never have i ever": [["https://imgur.com/yytRSdu"], "Devi hopes to win cool points with Paxton at a party, until a surprising turn of events. Hidden emotions emerge for Fabiola. Kamala makes a choice.", "https://drive.google.com/uc?export=download&id=1qgQ2OvxRSmN623yDsP70dDDfJID_9Gzl", ["insatiable", "trinkets", "everything sucks", "glee", "gossip girl", "teenage bounty hunters", "sex education", "on my block", "riverdale", "atypical", "13 reasons why", "gilmore girls"]],
    
    "little things": [["https://imgur.com/207YEx0"], "A sleepless night proves surprisingly eventful for Kavya and Dhruv, with an impromptu store run, an unexpected encounter and a midnight chat.", "https://drive.google.com/uc?export=download&id=1f-Ae25LgixUbaqEnu5azTRmSwONTpef6", ["taj mahal 1989", "girls hotel", "masaba masaba", "axone", "motichoor chaknachoor", "halkaa", "for here or to go", "lust stories", "college romance", "yeh hai bakrapur", "pyaar ka punchnama 2", "choked paisa bolta hai"]],
    
    "girls hotel": [["https://imgur.com/yrPTQuL"], "Four girls from different backgrounds become unlikely friends when they move into a dormitory for female dental students.", "https://drive.google.com/uc?export=download&id=1AJQyIT0qkNC9-5q_CquGOmzy47s0WZq-", ["taj mahal 1989", "little things", "sacred games", "selection day", "she", "college romance", "choked paisa bolta hai", "hasmukh", "life ki toh lag gayi", "delhi crime", "bombairiya", "ungli"]],
    
    "brij mohan amar rahe": [["https://imgur.com/Z08v8vc"], "Faking his death to escape the realities of his uneventful life worked out well for Brij Mohan -- until he was sentenced to death for his own murder.", "https://drive.google.com/uc?export=download&id=1-RqOS6HEndhjLrL22DxV0lLM2cOzeI7-", ["ungli", "motichoor chaknachoor", "yeh hai bakrapur", "welcome to sajjanpur", "bombairiya", "zed plus", "sacred games", "chaman bahaar", "barah aana", "pranam", "life ki toh lag gayi", "for here or to go"]],
    
    "jamtara sabka number ayega": [["https://imgur.com/6vJn8wY"], "The successful phishing scams of Rocky, Sunny and their friends pique a corrupt local politician's interest. Tension brews between Rocky and Sunny.", "https://drive.google.com/uc?export=download&id=1yBHwPtSvyBVmq4w72xoJJPzXr4-BfOSk", ["she", "delhi crime", "sacred games", "gurgaon", "famous", "hasmukh", "barah aana", "bard of blood", "leila", "choked paisa bolta hai", "soni", "jail"]],
    
    "the politician": [["https://imgur.com/w8TB6O8"], "Amid escalating concerns about his vice presidential pick, Payton gets plungedd into a family crisis that stokes long-seething resentments.", "https://drive.google.com/uc?export=download&id=1lRNjQF0dPshS7-ICGCVPT6EiLF_aa7qv", ["the people v oj simpson", "eat pray love", "the boys in the band", "ratched", "circus of books", "pose", "a secret love", "glee", "versace", "hollywood"]],
    
    "dead to me": [["https://imgur.com/bTXWwZI"], "A hotheaded widow searching for the hit-and-run driver who mowed down her husband befriends an ecentric optimist who isn't quite what she seems.", "https://drive.google.com/uc?export=download&id=1emrIOyg-aUFPWKYBG4jcSo31A-IZB6G0", ["the politician", "living with yourself", "grace and frankie", "russian doll", "bonding", "the kominsky method", "the end of the fucking world", "the let down", "everything sucks", "atypical", "flaked", "gentefied"]],
    
    "after life": [["https://imgur.com/2vr47WP"], "Struggling to come to erms with hsi wife's death, a writer for a newspaper adopts a gruff new persona in an effort to push away trying to help.", "https://drive.google.com/uc?export=download&id=1UNWFHHM0eiB32R11PFLKnzTHa6J5v7V9", ["grace and frankie", "the duchess", "ricky gervais is derek", "good girls", "the politician", "the kominsky method", "dead to me", "derry girl", "the let down", "schitt s creek", "the ranch", "maniac"]],
    
    "loaded": [["https://imgur.com/yCGZBaw"], "Four friends become overnight millionaires after selling their video game start-up. But their newfound status test their friendship and resolve.", "https://drive.google.com/uc?export=download&id=1Lz2W531rBPUOmOBetu3eDvn0LAs-lU4Q", ["after life", "4 flowers", "the duchess", "derry girls", "the good cop", "good girls", "cuckoo", "crashing", "fallet", "working moms", "people just do nothing", "the let down"]],
    
    "gossip girl": [["https://imgur.com/om8EvGS"], "In a season finale rife with cliffhangers, Gossip Girl livens things up at graduation by sending out a shocking email blast during the ceremony.", "https://drive.google.com/uc?export=download&id=1ACqrCfcmOWyLMl-ky3hHz3Zxa52RCyxA", ["riverdale", "oliter banks", "trinkets", "13 reasons why", "dare me", "summer time", "never have i ever", "insatiable", "degrassi next class", "vampire diaries", "elite", "atypical"]],
    
    "trinkets": [["https://imgur.com/yEjUBfZ"], "As Elodie hits the mall to deal with her grief, Moe questions her relationship with Noah, and Tabitha gets fed up with everyone's expectations.", "https://drive.google.com/uc?export=download&id=1C8lXqz7aSfGqjaY7TtenEfSeCfyBbYyQ", ["never have i ever", "gossip girl", "riverdale", "elite", "insatiable", "oliter banks", "baby", "summer time", "dynasty", "13 reasons why", "teenage bounty hunters", "pose"]],
    
    "how to get away with murder": [["https://imgur.com/y9zP8Pf"], "A tough criminal law professor challenges her brightest students to solve thorny cases, but five scholars soon learn the high price of impressing her.", "https://drive.google.com/uc?export=download&id=1aIdP-EZOLMiNfzX_whNryRm4QWOnRJe6", ["enola holmes", "lucifer", "the devil all the time", "baby", "ratched", "criminal united kitngdom", "oktoberfest beer & blood", "dirty john betty broderick", "blacklist", "away", "the barrier", "dynasty"]],
    
    "away": [["https://imgur.com/qvRtvR8"], "A staff change at Mission Control upsets the usually unflappable Lu, and the fallout undermines Emma's command. Matt encourages Lex to return to school.", "https://drive.google.com/uc?export=download&id=1kh4VenCOYrn5qbdYp-ex4p-slhjUohp5", ["ratched", "dirty john betty broderick", "criminal united kingdom", "enola holmes", "young wallander", "freaks", "the devil all the time", "bio hackers", "blacklist", "sons of anarchy", "borgen", "crown"]],
    
    "jai mummy di": [["https://imgur.com/p9ox2WS"], "Sick of keeping their love a secret from their constantly bickering mothers, a young couple seeks to uncover the cause of the women's longstanding war.", "https://drive.google.com/uc?export=download&id=1PIden7ZkotKSeb6U5eWGDuMe7bBfN_pt", ["main meri patni aur woh", "katti batti", "pyaar ka punchnama 2", "shimla mirch", "what s your raashee", "santa banta", "motichoor chaknachoor", "mumbai delhi mumbai", "luv shuv tey chicken khurana", "qarib qarib singlle", "aagey se right"]],
    
    "pyaar ka punchnama 2": [["https://imgur.com/rlwjD3k"], "Three young bachelors find the reality of relationships to be far removed from the idea of true romance that they had once pursued.", "https://drive.google.com/uc?export=download&id=1eYbjMmxP8obljifCOiSmfbNMv9G6j4wm", ["bareilly ki barfi", "wake up sid", "shimla mirch", "kismat konnection", "tum milo toh sahi", "kapoor & sons", "motichoor chaknachoor", "yeh jawaani hai deewani", "zindagi na milegi dobara", "main aur mrs khanna", "katti batti", "dostana"]],
    
    "bloodline": [["https://imgur.com/E16yLFt"], "When the black sheep son of a respected family threatens to expose dark secrets from their past, sibling loyalties are put to the test.", "https://drive.google.com/uc?export=download&id=12mYTmA9WhTrzffld3T7fqVT2X1oJb2mb", ["house of cards", "mind hunter", "manhunt unabomber", "harlan coben s safe", "bodyguard", "wanted", "ozark", "designated survivor", "criminal united kingdom", "unbelievable", "blacklist", "better call saul"]],
    
    "house of cards": [["https://imgur.com/TItyjjL"], "A ruthless politician will stop at nothing to conquer Washington DC, in this Emmy and Golden Globe-winning political drama.", "https://drive.google.com/uc?export=download&id=1TbAAizc_xaxMZ9-CcsE2825S_TWKAnUS", ["unbelievable", "bodyguard", "mind hunter", "better call saul", "bad blood", "the people v oj simpson", "designated survivor", "manhunt unabomber", "white lines", "ozark", "bloodline", "sherlock"]],
    
    "cuckoo": [["https://imgur.com/YXvPPwa"], "Rachel shocks her proper British parents when she marries an America hippie, but it's just the first in series of surprises for the family.", "https://drive.google.com/uc?export=download&id=1aRn9xUhlf-0pWFLtcuuBMELGdzkzPpZE", ["derry girl", "the good place", "schitt s creek", "kim s convenience", "crashing", "the it crowd", "sick note", "great news", "people just do nothing", "kath & kim", "master of none", "white gold"]],
    
    "crashing": [["https://imgur.com/1PHVfxv"], "In exchange for low rent, a hodgepodge group of 20-something tenants set up residence as property guards in a disused hospital, where hilarity ensues.", "https://drive.google.com/uc?export=download&id=1souznkch9fcczEl5ZpfgA7Ti3G_hrJi8", ["sick note", "derry girls", "special", "great news", "cuckoo", "love sick", "the it crowd", "people just do nothing", "champions", "white gold", "lunatics", "working moms"]],
    
    "space force": [["https://imgur.com/ZLAIDmj"], "A four-star general begrudgingly teams up with an eccentric scientist to get the US military's newest agency -- Space Force -- ready for lift-off.", "https://drive.google.com/uc?export=download&id=1uqlFetok_27Az6Umwk0nfA10HDdosPAC", ["medical police", "brews brothers", "it s bruno", "norsemen", "white gold", "sick note", "the curious creations of christine mcconnell", "the good place", "astronomy club", "hardy bricks", "trailer park boys", "happy"]],
    
    "the people v oj simpson": [["https://imgur.com/gAH8dfE"], "This dramatization traces the twists and turns of OJ Simpson's murder trial, examining behind-the-scenes gambits on both sides of the court.", "https://drive.google.com/uc?export=download&id=1qQEP1ejPUwCIyYOsPjFoKXr3FM27bXYq", ["versace", "eat pray love", "the boys in the band something personal", "hollywood", "ratched", "pose", "a secret love", "glee", "circus of books", "the politician", "the boys in the band"]],
    
    "animal kingdom": [["https://imgur.com/J6KDumq"], "Smurf orders the boys to cover their tracks after the botched getaway and shootout, while tensions mount between J and Pope.", "https://drive.google.com/uc?export=download&id=1HfKvH0iWRdo285J9AOdBQ9egXMi0uiBG", ["kingdom", "northern rescue", "harlan coben s the stranger", "blacklist", "fargo", "unbelievable", "hinterland", "manhunt unabomber", "designated survivor", "sons of anarchy", "the sinner", "the people v oj simpson"]],
    
    "kal ho naa ho": [["https://imgur.com/ZZ39CvM"], "Amn uptight MBA student falls for the charismatic new neighbor who charms her troubled family - but he has a secret that forces him to push her away.", "https://drive.google.com/uc?export=download&id=1YIaCMQMYR56kqiB5f3If0E5K90--9k4m", ["kabhi alvida naa kehna", "kuch kuch hota hai", "chalte chalte", "kabhi haan kabhi naa", "vivah", "namastey london", "english babu desi mem", "socha na tha", "life in a metro", "kabhi khushi kabhi gham", "chaahat", "bareilly ki barfi"]],
    
    "deewana main deewana": [["https://imgur.com/zFBAbE2"], "A man's instant attraction to a woman becomes an obsession as he adopts a friend's identity and even commits murder in order to get closer to her.", "https://drive.google.com/uc?export=download&id=1KB792cPS1WzTwpczVDP0OCx0EJG1An00", ["main meri patni aur woh", "luck by chance", "kareeb", "half girfriend", "love aaj kal", "one by two", "malaal", "student of the year", "shimla mirch", "humpty sharma ki dulhania", "kuchh bheege alfaaz", "chance pe dance"]],
    
    "yeh jawaani hai deewani": [["https://imgur.com/pkLADqO"], "On a trekking trip, an introvert falls for a charming ex-classmate, whose thirst for adventure drives them apart. Years later, their paths cross again.", "https://drive.google.com/uc?export=download&id=1EDEH-m9sUHc5CyQkRA-60voN-jpQkCeJ", ["dil dhadakne do", "om shanti om", "kapoor & sons", "kal ho naa ho", "barfi", "emi", "kuch kuch hota hai", "namastey london", "humpty sharma ki dulhania", "tum milo toh sahi", "bhagam bhag", "dear zindagi"]],
    
    "humpty sharma ki dulhania": [["https://imgur.com/eZLjDP6"], "A small-town girl heads to Delhi to find a designer outfit for the wedding her orthodox father has arranged for her but ends up finding love instead.", "https://drive.google.com/uc?export=download&id=1OmMBFFhcq_PkSGUlut30qHqliWtAO9Ts", ["mumbai delhi mumbai", "one by two", "jai mummy di", "student of the year", "shimla mirch", "tere naal love ho gaya", "shaandaar", "mumbai matinee", "main aurr mrs khanna", "pyaar ka punchnama 2", "thank you", "chal mere bhai"]],
    
    "luka chhupi": [["https://imgur.com/IFAU6sx"], "Pretending to marry in order to cohabitate, a small-town couple lands in endless awkward situations to hide the truth from their orthdodox families.", "https://drive.google.com/uc?export=download&id=1uKJFFcPIjfyB34ycrf8hiGGvO1e_kHfX", ["shimla mirch", "jai mummy di", "love per square foot", "qarib qarib singlle", "tere naal love ho gaya", "mumbai delhi mumbai", "do dooni chaar", "chashme baddoor", "jab harry met sejal"]],
    
    "baazaar": [["https://imgur.com/VnPDttl"], "A wide-eyed graduate learns the ugly side of ambition when he joins in the dubious business practices of his idol, a ruthless Mumbai stock tycoon.", "https://drive.google.com/uc?export=download&id=1ZWK4nt7moNeXulk8SHupOjQXvED7Wbti", ["one day justice delievered", "umrika", "sacred games", "ungli", "delhi crime", "udaan", "my birthday song", "heroine", "aarakshan", "dolly kitty aur woh chamakte sitare", "soorma", "fashion"]],
    
    "jab harry met sejal": [["https://imgur.com/BphiO6f"], "A philandering tour guide in Europe begins to develop feelings for one of his clients while helping her search for her lost engagement ring.", "https://drive.google.com/uc?export=download&id=1ZC5SD2EcvqwgdiJ2QdDCQVROXqmDSeps", ["qarib qarib singlle", "shimla mirch", "what s your raashee", "love per square foot", "ishq vihk", "pyaar ka punchnama 2", "running shaadi", "vivah", "mumbai delhi mumbai", "bareilly ki barfi", "humpty sharma ki dulhania", "dil dhadakne do"]],
    
    "secret superstar": [["https://imgur.com/h5Bok34"], "A talented teenage singer-songwriter living amid domestic abuse becomes a YouTube sensation after a video in which she hides her identity goes viral.", "https://drive.google.com/uc?export=download&id=151gg-H5gGvwc64PtXNldWAtTx7EGhzYm", ["heroine", "sur", "fashion", "baazaar", "mere pyare prime minister", "one day justice delivered", "aarakshan", "bhavesh joshi", "tamasha", "luck by chance", "zubaan", "jail"]],
    
    "vivah": [["https://imgur.com/aFKMkeh"], "Set up for an arranged marriage, a young couple enjoys an old-fashioned courtship, until an accident days before their wedding tests their nascent love.", "https://drive.google.com/uc?export=download&id=1Sy1ZRa9cYJP_zNV-CQTPGFqZi3E882B-", ["dil dhadakne do", "tanu weds manu", "love aaj kal", "kabhi alvida naa kehna", "bareilly ki barfi", "pyaar ka punchnama 2", "kapoor & sons", "jab harry met sejal", "mubarakan", "kareeb", "malaal", "hasee toh phasee"]],
    
    "barah aana": [["https://imgur.com/hNvOVbo"], "After futile attempts to better their lives with honest work, three broke friends opt for a more dubious means of making money: kidnapping for ransom.", "https://drive.google.com/uc?export=download&id=1Vz0h2UjLm3QB-YKN6WuZ8aZq1_co1tLb", ["sacred games", "guilty", "choked paisa bolta hai", "ek hasina thi", "parmanu", "kaagar", "delhi crime", "dolly kitty aur woh chamakte sitare", "encounter the killing", "saheb biwi aur gangster returns", "lucknow central"]],
    
    "atypical": [["https://imgur.com/KhL9cey"], "When a team on the autism spectrum decides to get a girlfriend, his bid for more independence puts his whole family on a path of self-discovery.", "https://drive.google.com/uc?export=download&id=1ln7TeYlfrqF5RIPKBCnA7yMNgpow1FW8", ["i am not okay with this", "the end of the fucking world", "good girls", "spinning out", "riverdale", "insatiable"]],
    
    "delhi crime": [["https://imgur.com/rLV9nK5"], "Disturbing details about the night of the crime emerge when bus driver Jai Singh is interrogated further. The hunt begins for his five accomplices", "https://drive.google.com/uc?export=download&id=1FN3KrMS9-KUZHFYqzajLIkGunIjP_mFr", ["she", "sacred games", "ek hasina thi", "aapla manus", "article 15", "raat akeli hai", "class of 83", "guilty", "jamtara sabka number ayega", "dolly kitty aur woh chamakte sitare"]],
    
    "13 reasons why": [["https://imgur.com/1tDUc1p"], "As the school mourns the death of Hannah Baker, her friend Clay receives a box of tapes with messages she recorded before she committed suicide.", "https://drive.google.com/uc?export=download&id=1rTn4meb-XATdLXa15D0I62a36y5oir2d", ["13 reasons why beyond the reasons", "riverdale", "trinkets", "insatiable", "you", "dare me", "orange is the new black", "oliter banks", "the society", "degrassi next class", "spinning out", "never have i ever"]],
    
    "choked paisa bolta hai": [["https://imgur.com/V4UGzHf"], "A bank employee weighed down by her jobless husband's debts -- and her own broken dreams -- finds a secret source of seemingly unlimited cash in her home.", "https://drive.google.com/uc?export=download&id=1_1t2MUpD-w8DvjtlocPSzO74HKWnyOP9", ["barah aana", "soni", "mumbai city", "kaagar", "dolly kitty aur woh chamakte sitare", "music teacher", "guilty", "saawan", "rukh", "dhh", "masaba masaba", "parmanu"]],
    
    "pose": [["https://imgur.com/8B2kVY6"], "In 1987 New York, LGBTQ ball fixture Blanca starts her own house, soon becoming mother to a gifted dancer and a sex worker in love with a yuppie client.", "https://drive.google.com/uc?export=download&id=1jrs5ZK5baPiE3JA2ZX-uWzXfHixPbEwR", ["hollywood", "the people v oj simpson", "eat pray love", "the boys in the band", "the politician", "ratched", "circus of books", "a secret love", "glee", "versace"]],
    
    "bad blood": [["https://imgur.com/2gdtiqw"], "Inspired by true events, this sprawling crime drama follows the Rizzuto family and its successors, as they preside over organized crime in Montreal.", "https://drive.google.com/uc?export=download&id=1Jm0wmy8t1W5i2NBkWF7xMusnLA34a28J", ["the people v oj simpson", "messiah", "ozark", "unbelievable", "queen of the south", "house of cards", "designated survivor", "the spy", "bloodline", "white lines", "bodyguard", "seven seconds"]],
    
    "the i-land": [["https://imgur.com/5b02DkY"], "Wiped clean of memories and thrown together, a group of strangers fight to survive harsh realities -- and the island that traps them.", "https://drive.google.com/uc?export=download&id=1ZDQ-DuC5eLROeLF3yftiJhz1QoQS6XNN", ["colony", "altered carbon", "zoo", "travelers", "another life", "kiss me first", "snow piercer", "between", "into the night", "the oa", "omniscient", "v wars"]],
    
    "punisher": [["https://imgur.com/CfJRNZ4"], "A former Marine out to punish the criminals responsible for his family's murder finds himself ensnared in a military conspiracy.", "https://drive.google.com/uc?export=download&id=1q8XsA6PzoL9bfOV-HC_wP3_GKgrRRJxF", ["dare devil", "jessica jones", "luke cage", "defenders", "iron fist", "gotham", "the protector", "arrow", "shooter", "cursed", "ragnarok", "v wars"]],
    
    "titans": [["https://imgur.com/q8h6tML"], "After striking out on his own, Batman's former partner Dick Grayson encounters a number of troubled young heroes in desperate need of a mentor.", "https://drive.google.com/uc?export=download&id=1b0lsIn-4Oe-E4hA0ZyYXSVPFr4seGzOF", ["defenders", "iron fist", "black lightning", "colony" ,"star trek enterprise", "the i-land", "dare devil", "star trek voyager", "altered carbon", "star trek discovery", "love death robots", "the umbrella academy"]],
    
    "shooter": [["https://imgur.com/1AKiMOD"], "A highly decorated ex-Marine sniper returns to action to foil an assassination plot targeting the president, but soon fins himself framed for murder.", "https://drive.google.com/uc?export=download&id=18bPCrB8NBQXJlhp_r-7WQEjX415r5pw6", ["queen of the south", "arrow", "gotham", "vikings", "blacklist", "punisher", "cobra kai", "silver spoon", "the 100", "marco polo", "spartacus", "designated survivor"]],
    
    "black lightning": [["https://imgur.com/RvWxtvD"], "School principal and retired superhero Jefferson Pierce leaps back into action as the legendary Black Lightning after a gang threatens his family.", "https://drive.google.com/uc?export=download&id=1mfy6MIKjTqpyolVMnPCRq0O57TyFjc6D", ["iron fist", "defenders", "luke cage", "titans", "cursed", "gotham", "wu assassins", "arrow", "colony", "warrior nun", "v wars", "the umbrella academy"]],
    
    "wu assassins": [["https://imgur.com/LaRv6Kq"], "An unassumingSan Francisco chef becomes the latest in a long line of assassins chosen to keep the mystical Wu powers out of the wrong hands.", "https://drive.google.com/uc?export=download&id=1SqajQmGuC4-cHv0AvIN9svvwkot7qT-H", ["iron fist", "warrior nun", "luke cage", "arrow", "dare devil", "shadow", "black lightning", "cursed", "the protector", "the unwanted", "titans", "the umbrella academy"]],
    
    "the inmate": [["https://imgur.com/xI3Ek2s"], "A former Marine poses as an inmate inside a Mexican prison in order to infiltrate a gang suspected of kidnapping a US judge's teen daughter.", "https://drive.google.com/uc?export=download&id=19s4baOJ5i8QqwmZircfyQ4bMZHR-H8ND", ["yankee", "the unknown hitman", "la reina del sur", "the mafia dolls", "el dragon return of a warrior", "cocaine coast", "hache", "unauthorized living", "edha", "drug squad costa del sol", "preso no. 1", "el chema"]],
    
    "ginny weds sunny": [["https://imgur.com/OjsAj7z"], "Eager to marry but constantly rejected by women, a bachelor hopes to won over a former crush by accepting help from an unlikely source: her mother.", "https://drive.google.com/uc?export=download&id=1I__Tkuqyzk1SO8Bsaer46KvDIekTZ8es", ["khoobsurat", "two and a half men", "action replayy", "friends", "jab we met", "serious men", "main aurr mrs khanna", "queen", "3 idiots", "dil chahta hai", "humpty sharma ki dulhania", "mann"]],
    
    "kaali khuhi": [["https://imgur.com/U29TMfb"], "When a restless spirit curses a Punjab village that has a history of female infanticide, the town's fate lies in the hands of a 10-year-old girl.", "https://imgur.com/QutnEvW.mp4", ["the little stranger", "the haunting of hill house", "ghost wars", "betaal", "darr sabko lagta hai", "hubie halloween", "bulbbul", "the walking dead", "rise of the zombie", "dracula", "baxu and the giants", "to the lake", "the haunting of bly manor", "raat akeli hai"]],
    
    "the haunting of bly manor": [["https://imgur.com/V0fe2xU"], "Dead doesn't mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of \"The Haunting of Hill House\".", "https://drive.google.com/uc?export=download&id=1eFwpFlSy5_BQgkxBahNnFswIxyMBGEGs", ["to the lake", "the little stranger", "hubie halloween", "the haunting of hill house", "baxu and the giants", "the walking dead", "oktoberfest beer & blood", "the boys in the band", "lucifer", "ratched", "do do sol sol la la sol", "van helsing"]],
    
    "holidate": [["https://imgur.com/OhF9roy"], "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.", "https://drive.google.com/uc?export=download&id=1pF6fP0eahtRCbkiPlh84up1qbt8IuqsT", ["emily in paris", "hubie halloween", "do do sol sol la la sol", "the boys in the band", "teenage bounty hunters", "you ve got this", "glee", "you me her", "crazy rich asians", "gilmore girls", "the end of the fucking world", "baxu and the giants"]],
    
    "rebecca": [["https://imgur.com/qwNAX6T"], "A young newlywed moves to her husband's imposing estate, where she must contend with his sinister housekeeper and the haunting shadow of his late wife.", "https://drive.google.com/uc?export=download&id=1eFwpFlSy5_BQgkxBahNnFswIxyMBGEGs", ["to the lake", "baxu and the giants", "do do sol sol la la sol", "the boys in the band", "emily in paris", "poacher", "sherlock", "winter s tale", "the mule", "lucifer"]],
    
    "the boys in the band": [["https://imgur.com/gSKnMki"], "At a birthday party in 1968 New York, a surprise guest and a drunken game leave seven gay friends reckoning with unspoken feelings and buried truths.", "https://drive.google.com/uc?export=download&id=1Usr7CcKgYoaiBVhSK-qNyJpJX96lTkH3", ["hollywood", "the people v oj simpson", "eat pray love", "the politician", "ratched", "pose", "circus of books", "a secret love", "glee", "versace"]],
    
    "love aaj kal": [["https://imgur.com/RpE1EWa"], "When professional ambitions clash with personal feelings for a modern-day couple, a love story from a bygone decade may offer some wisdom.", "https://drive.google.com/uc?export=download&id=1Lky1V9X7s_O9d-Om1mr4aIdWZrd9Ehdw", ["vivah", "half girlfriend", "kabir singh", "luck by chance", "dil dhadakne do", "kabhi khushi kabhi gham", "malaal", "mann", "maska", "masaba masaba", "namastey london"]],
    
    "ungli": [["https://imgur.com/1zJSwFM"], "An undercover cop finds himself in a strange position after infiltrating a \"gang\" that pulls wildly popular pranks on corrupt officials in Mumbai.", "https://drive.google.com/uc?export=download&id=1svxUOZlCP5NU4nWNyMVPhmIZaIbsb44z", ["masaba masaba", "motichoor chaknachoor", "for here or to go", "saheb biwi aur gangster returns", "kabir singh", "duniya", "ramji london waley", "main meri patni aur woh", "shimla mirch", "dharam sankat mein", "welcome to sajjanpur", "dil dhadakne do"]],
    
    "the end of the fucking world": [["https://imgur.com/LkrEKF2"], "A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel.", "https://drive.google.com/uc?export=download&id=1r89NpAZLuYHbFIVU8DIRf-la0Q6m9R6q", ["orange is the new black", "i am not okay with this", "insatiable", "atypical", "gilmore girls", "grace and frankie", "maang", "dead to me", "the hockey girl", "aj and the queen", "everything sucks", "teenage bounty hunters"]],
    
    "mumbai delhi mumbai": [["https://imgur.com/wlhfVxt"], "In Delhi for the first time, a MUmbai girl loses her phone but gets a surprise chance at true love with a local boy who begrudgingly helps her.", "https://drive.google.com/uc?export=download&id=1wSmfW3eOQLRoeJsmdMagNaVxpcbqZt7F", ["i hate luv storys", "jab harry met sejal", "chal mera bhai", "shimla mirch", "humpty sharma ki dulhania", "mumbai matinee", "pyaar ka punchnama 2", "running shaadi", "jai mummy di", "aagey se right", "main aurr mrs khanna", "jab we met"]],
    
    "shimla mirch": [["https://imgur.com/IRs3Rao"], "A young man who gets tongue-tied around women writes a love letter to his crush, but it ends up in the hands of her mother, who thinks it's for her.", "https://drive.google.com/uc?export=download&id=1QmoGkPPE8KV3TA6mZKGgt1H3l3iaIZ9B", ["jai mummy di", "jab we met", "pyaar ka punchnama 2", "tume milo toh sahi", "main meri patni aur woh", "qarib qarib singlle", "ungli", "what s your raashee", "motichoor chaknachoor", "running shaadi", "tere naal love ho gaya", "mumbai delhi mumbai"]],
    
    "snow piercer": [["https://imgur.com/enzC2FU"], "While First Class confronts Melanie about who's running the train, Layton and his conspirators mount their biggest attemptto march to the Engine.", "https://drive.google.com/uc?export=download&id=1DLEaXECZtVdhDylViQhDE8Xc8gCQb3JU", ["travelers", "zoo", "the i-land", "colony", "between", "altererd carbon", "kiss me first", "salvation", "the rain", "the oa", "another life", "black mirror"]],
    
    "unbelievable": [["https://imgur.com/Q8fb98W"], "As Karen and Grace Rasmussen compare notes on their cases, they consider an alarming possibility. In Washington, Marie's name is leaked to the press.", "https://drive.google.com/uc?export=download&id=1TpxBVNVhM_7fqctZSy2speEEX3vj2q-v", ["the sinner", "white lines", "ozark", "versace", "the people v oj simpson", "house of cards", "the stranger", "bodyguard", "bloodline", "stateless", "northern rescue", "aquarius"]],
    
    "warrior nun": [["https://imgur.com/Ril5QXq"], "After waking up in a morgue, an orphaned teen discovers she now possesses superpowers as the chosen Halo-Bearer for a secret sect of demon-hunting nuns.", "https://drive.google.com/uc?export=download&id=1xvcp6l2UESqI7c3xUv0R-L9b90ZD1p2I", ["cursed", "wu assassins", "defenders", "the witcher", "the shannara chronicles", "jessica jones", "iron fist", "the protector", "merlin", "ragnarok", "v wars", "the letter for the king"]],
    
    "cursed": [["https://imgur.com/uUIGut1"], "Shaken and alone, Nimue presses ahead on her quest, as flashbakcs reveal a harrowing encounter years ago that changed the course of her life.", "https://drive.google.com/uc?export=download&id=1QYoGk2SNQ7u9xb7TU3vIo0FGQka_pBRC", ["the witcher", "warrior nun", "the protector", "the letter for the king", "merlin", "the shannara chronicles", "iron fist", "defenders", "the umbrella academy", "black lightning", "gotham", "v wars"]],
    
    "colony": [["https://imgur.com/8CNfKCG"], "When LA is invaded by outside forces and becomes a walled-in settlement, a former FBI agent and his wife risk everything to find their lost son.", "https://drive.google.com/uc?export=download&id=1lkkCvx_ebzdSJTEe5kvKkX7AyhCPq43i", ["the i-land", "zoo", "altered carbon", "travelers", "defenders", "snow piercer", "another life", "titans", "salvation", "star trek enterprise", "lost in space", "v wars"]],
    
    "everything sucks": [["https://imgur.com/2hKvTFN"], "It's 1996 in a town called Boring, where high school misfits in the AV and drama clubs brave the ups and downs of teenage life in the VHS era.", "https://drive.google.com/uc?export=download&id=1ZnI6_QmhzILnC3HOi8w_tMhbXmUAuUCQ", ["mery happy whatever", "crazy ex girl friend", "never have i ever", "insatiable", "bonding", "i am not okay with this", "friends from college", "aj and the queen", "the hockey girls", "the end of the fucking world", "grace and frankie", "love"]],
    
    "a secret love": [["https://imgur.com/aOx57vP"], "Amid shifting times, two women kept their decades-long love a secret, But coming out later in life comes with its own set of challenges.", "https://drive.google.com/uc?export=download&id=11wx937vonXcDfPe-ZiFA0oSZVYmWaXNA", ["hollywood", "the people v oj simpson", "eat pray love", "the boys in the band", "the politician", "ratched", "pose", "circus of books", "glee", "versace"]],
    
    "eat pray love": [["https://imgur.com/e06eAhb"], "After deciding to reshape her life after divorce, Liz travels around the world in search of good food, spiritually and true love.", "https://drive.google.com/uc?export=download&id=1YBCDUPXDhKqyS00RPETuX1p3k6TZ3L4b", ["hollywood", "the people v oj simpson", "the boys in the band", "the politician", "ratched", "pose", "circus of books", "a secret love", "glee", "versace"]],
    
    "circus of books": [["https://imgur.com/EBf2BaQ"], "For decades, a nice Jewish couple ran Circus of Books, a porn shop and epicenter of gay LA. Their director daughter documents their life and times.", "https://drive.google.com/uc?export=download&id=1h6bH0Wf8sJ8FzIc_c3X7F7Ee1cIcJp2Z", ["hollywood", "the people v oj simpson", "eat pray love", "the boys in the band", "the politician", "ratched", "pose", "a secret love", "glee", "versace"]],
    
    "versace": [["https://imgur.com/AybX5bl"], "Defining moments in Andrew Cunanan's life, starting in childhood, lead up to a 1997 murder spree that kills five, including fashion icon Gianni Versace.", "https://drive.google.com/uc?export=download&id=1v3iCAm8SrW9-lgJO9udIUhtZsXwI-bsv", ["the people v oj simpson", "hollywood", "eat pray love", "the boys in the band", "the politician", "ratched", "pose", "circus of books", "a secret love", "glee"]],
    
    "hollywood": [["https://imgur.com/HbcBUkT"], "In post-World War II Hollywood, an ambitious group of aspiring actors and filmmakers will do almost anything to make their showbiz dreams come true.", "https://drive.google.com/uc?export=download&id=1TSsLYE0wblRC_KJ0CKWT0jnDzNt_6iRo", ["the people v oj simpson", "eat pray love", "the boys in the band", "the politician", "ratched", "pose", "circus of books", "a secret love", "glee", "versace"]],
    
    "the umbrella academy": [["https://imgur.com/tP2eUJI"], "After sharing the story of his time travel with Vanya, Five hunts for the owner of a fake eye. But two mysterious assassins are hot on his trail.", "https://drive.google.com/uc?export=download&id=1Xs0rkwRZzGrIDrUqT7ITRPmd6ADXJ4lw", ["star trek discovery", "gotham", "cursed", "ragnarok", "colony", "iron fist", "arrow", "final space", "defenders", "titans", "warrior nun", "altered carbon"]],
    
    "ragnarok": [["https://imgur.com/1p9Ql6b"], "In a Norwegian town poisoned by pollution and rattled by melting glaciers, the End Times feel all too real. It'll take a legend to battle an old evil.", "https://drive.google.com/uc?export=download&id=14qsO2y99_pnScl03OaqSXUihDyecoFW2", ["defenders", "the umbrella academy", "between", "jessica jones", "colony", "warrior nun", "into the night", "cursed", "zoo", "the i-land", "snow piercer", "iron fist"]],
    
    "the sinner": [["https://imgur.com/8wcakZe"], "In a small New York town, a haunted detective hunts for answers about perplexing crimes while wrestling with his own demons.", "https://drive.google.com/uc?export=download&id=1eki69-MOgwDJ2yxx0sKCm9vsSiXGHmxX", ["white lines", "mindhunter", "unbelievable", "bloodline", "stateless", "house of cards", "bodyguard", "harlan coben s safe", "paranoid", "broadchurch", "retribution", "secret city"]],
    
    "i am not okay with this": [["https://imgur.com/skB9uTN"], "Angsty Syd navigates high school awkwardness, family drama and an unrequited crush on her best friend while trying to rein in her budding superpowers.", "https://drive.google.com/uc?export=download&id=1P3WHBCxGVQ3xHJTzayQp_z_MEarex1mq", ["the end of the fucking world", "atypical", "insatiable", "the hockey girls", "bonding", "orange is the new black", "the kominsky method", "everything sucks", "flaked", "the politician", "aj and the queen", "russian doll"]],
    
    "altered carbon": [["https://imgur.com/rK4kGDr"], "After 250 years on ice, a prisoner returns to life in a new body with one chance to win his freedom: by solving a mind-bending murder.", "https://drive.google.com/uc?export=download&id=1ypfh-fWh6XCI7VjHX6Bii1tPYzZXJxal", ["the i-land", "colony", "zoo", "star trek enerprise", "another life", "snow piercer", "12 monkeys", "omni scient", "kiss me first", "travelers", "love death robots"]],
    
    "zoo": [["https://imgur.com/WjJTWhG"], "When animal species all over the world begin attacking humans, controversial zoologist Jackson Oz tries to discover the cause of the sudden change.", "", ["colony", "travelers", "the i-land", "altered carbon", "salvation", "kiss me first", "between", "snow piercer", "another life", "12 monkeys", "the oa", "lost in space"]]
};


var els = [];

/*console.log(Object.keys(dict).indexOf("how to sell drugs online (fast)"));
for (let i = 0; i < Object.values(dict).length; i++) {
    if (Object.values(dict)[i].length === 4 && Object.values(dict)[i][3].includes("emily in the paris")) {
        console.log(Object.keys(dict)[i] + " ... " + i*2);
    }
}

// Some testing to check if I missed a movie which is very famous (means it has come many times in the 'more like this' column)
for (let i of Object.values(dict)) {
    if (i.length === 4) {
        for (let j of i[3]) {
            els.push(j);
        }
    }
}
for (let i of els) {
    let count = 0;
    for (let j of els) {
        if (j === i) {
            count++;
        }
    }
    if (toAdd.includes(i) === false && count>=6 && Object.keys(dict).includes(i) === false) {
        toAdd.push(i);
    }
}
if (toAdd.length !== 0) {
    console.log(toAdd.length);
    for (let i of toAdd) {
        console.log(i);
    }
}*/
// Making all the list elements working (putting them in a tag)
for (let i of Object.keys(dict)) {
    if (dict[i].length >= 3) {
        dict[i][2] = `<video controls style = "outline:none;"><source src = '${dict[i][2]}'></video>`;
    }
    if (dict[i].length === 4) {
        let val = "";
        let eltop = 0;
        let elleft = 0;
        for (let j of dict[i][3]) {
            if (Object.keys(dict).includes(j)) {
                val += `<div class = "tab1-movies" style = "background-image: url('${dict[j][0][0]}.jpg');top: ${eltop}vw; left: ${elleft}vw;" onclick = "newMovie('${j}')"></div>`;
                elleft += 29.5;
                if (elleft >= 80) {
                    eltop += 44;
                    elleft = 0;
                }
            }
        }
        dict[i][3] = val;
    }
}

// Defining some variables
var mainNav,main,lst=0,navtop=0,rowtop = 930, t, t2, lastvalue,tActive=true, t2Active=false, cstop=[0, 50], t3, downloads = [], mn = "", myList = [], myLiked = [], cml = 0, cmml = 0, myDisliked = [];

// Calling everything (making long rows of movies)
window.onload = function() {
    t = setInterval(NavBar, 10);
    setInterval(BackHolder, 10);
    setInterval(dpMovies, 1000);
    
    addRow(180, 120, "Trending Now", ["emily in paris", "dolly kitty aur woh chamakte sitare", "friends", "enola holmes", "serious men", "saheb biwi aur gangster returns", "ginny weds sunny", "zindagi gulzar hai", "aapla manus", "masaba masaba", "ramji london waley", "luka chhupi", "pyaar ka punchnama 2", "wonder", "raat akeli hai", "jamtara sabka number ayega", "never have i ever", "humpty sharma ki dulhania", "shimla mirch"]);
    addRow(330, 160, "Netflix Originals", ["lucifer", "dolly kitty aur woh chamakte sitare<>", "enola holmes<>", "she", "soni", "ratched<>", "the social dilemma<>", "designated survivor<>", "hasmukh<>", "chopsticks", "typewriter", "the crown"]);
    addRow(180, 120, "Indian Movies", ["luka chhupi", "ishqiya", "guilty", "santa banta", "jai mummy di", "gunjan saxena", "manorama", "ankhon dekhi", "saheb biwi aur gangster returns", "dhh", "jab we met", "dedh ishqiya", "life in a metro", "secret superstar", "jab harry met sejal", "mubarakan", "pyaar ka punchnama 2", "cargo", "fashion", "thank you", "ramji london waley", "guru", "time out", "gori tere pyaar mein", "kaagar", "for here or to go", "motichoor chaknachoor", "yeh jawaani hai deewani", "dil dhadakne do", "kal ho naa ho", "vivah", "barah aana", "ungli", "mumbai delhi mumbai"]);
    addRow(180, 120, "New Releases", ["schitt s creek", "the 100", "blacklist", "vikings", "designated survivor", "cobra kai", "ratched", "brooklyn nine-nine", "baby", "gotham", "the social dilemma", "the good place", "ozark", "motichoor chaknachoor", "jai mummy di", "ginny weds sunny", "wentworth", "good girls", "drive", "cargo", "article 15", "jamtara sabka number ayega", "rita", "the politician", "dead to me", "baazaar", "jab harry met sejal", "secret superstar", "kaali khuhi", "the haunting of bly manor", "rebecca", "holidate", "love aaj kal"]);
    addRow(300, 240, "Top 10 in India Today", ["serious men<>", "enola holmes><", "dolly kitty aur woh chamakte sitare><", "american assassin<>", "the 100<>", "emily in paris<>", "friends<>", "the social dilemma><", "the losers<>", "wonder<>"]);
    addRow(180, 120, "TV Dramedies", ["suits","gilmore girls","khan no.1","good girls","love me as i am","jane the virgin", "shameless", "hasmukh", "grace and frankie", "insatiable", "doc martin", "the ranch", "the losers", "girls hotel", "after life", "loaded", "the end of the fucking world", "everything sucks", "the umbrella academy"]);
    addRow(180, 120, "Exciting US Crime TV Shows", ["arrow", "designated survivor", "queen of the south", "narcos", "gotham", "iron fist", "jessica jones", "titans", "ragnarok", "dare devil", "narcos mexico", "luke cage", "el chema", "colony", "defenders", "american assassin", "house of cards", "shooter", "space force", "the people v oj simpson", "bad blood", "punisher", "wu assassins", "black lightning", "the inmate", "snow piercer", "warrior nun", "versace", "the sinner"]);
    addRow(180, 120, "International TV Shows", ["khaani", "baby", "love me as i am", "holidate", "naruto", "money heist", "fauda", "elite", "resurrection ertugrul", "the protector", "the gift", "la reina del sur", "zindagi gulzar hai", "toy boy", "locked up", "playing with fire", "everything sucks", "wonder", "cuckoo", "someone great", "i am not okay with this", "13 reasons why", "orange is the new black", "riverdale", "the duchess", "how to get away with murder", "pose", "the i-land", "the boys in the band", "a secret love", "eat pray love", "circus of books"]);
    addRow(180, 120, "Conspiracy TV Thrillers", ["delhi crime", "designated survivor", "sacred games", "class of 83", "bodyguard", "black mirror", "jamtara sabka number ayega", "el chapo", "v wars", "article 15", "bio hacker", "stranger", "iris", "silver spoon", "vagabond", "12 monkeys", "secret city", "london spy", "the code", "the losers", "bloodline", "brij mohan amar rahe", "deewana main deewana", "choked paisa bolta hai", "punisher", "shooter", "unbelievable", "cursed", "colony", "versace", "hollywood", "altered carbon"]);
    addRow(180, 120, "High School TV Shows", ["teen wolf", "cobra kai", "elite", "the perfect date", "chilling adventures of sabrina", "insatiable", "dhh", "selection day", "boys over flowers", "how to sell drugs online (fast)", "glee", "inheritors", "on my block", "guilty", "rita", "teenage bounty hunters", "the duchess", "little things", "crashing", "the politician", "away", "animal kingdom", "atypical", "13 reasons why", "eat pray love", "unbelievable", "i am not okay with this"]);
    addRow(180, 120, "Historical TV Shows", ["stories by rabindranath tagore", "vikings", "resurrection ertugrul", "spartacus", "the last kingdom", "beecham house", "world war II in colour", "marco polo", "grand hotel", "the empress ki", "cable girls", "roman empire"]);
    
    
    addComingSoonContent("https://drive.google.com/uc?export=download&id=1I__Tkuqyzk1SO8Bsaer46KvDIekTZ8es", "https://imgur.com/kfjFpDf.jpg", "Ginny Weds Sunny", "Eager to marry but constantly rejected by women, a bachelor hopes to won over a former crush by accepting help from an unlikely source: her mother.", ["Feel-Good", "Irrelevant", "Romantic", "Comedy", "Bollywood"]);
    addComingSoonContent("https://imgur.com/QutnEvW.mp4", "https://imgur.com/c5w3bUt.jpg", "Kaali Khuhi", "When a restless spirit curses a Punjab village that has a history of female infanticide, the town's fate lies in the hands of a 10-year-old girl.", ["Chilling", "Scary", "Dark", "Suspenseful", "Horror", "Ghosts", "Indian"]);
    addComingSoonContent("https://drive.google.com/uc?export=download&id=1pF6fP0eahtRCbkiPlh84up1qbt8IuqsT", "https://imgur.com/hxvVWR9.jpg", "Holidate", "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.", ["Feel-Good", "Romantic", "Comedy", "Valentine's Day", "US"]);
    addComingSoonContent("https://drive.google.com/uc?export=download&id=1eFwpFlSy5_BQgkxBahNnFswIxyMBGEGs", "https://imgur.com/xCQC7IV.jpg", "The Haunting of Bly Manor", "Dead doesn't mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of \"The Haunting of Hill House\".", ["Ominous", "Scary", "Dark", "Suspenseful", "Emotional", "Horror"]);
    addComingSoonContent("https://drive.google.com/uc?export=download&id=1XFz6x9Wd14oi9hWlCgYeNNMiwkilwkaQ", "https://imgur.com/MJPfb39.jpg", "Rebecca", "A young newlywed moves to her husband's imposing estate, where she must contend with his sinister housekeeper and the haunting shadow of his late wife.", ["Chilling", "Psychological", "Suspenseful", "Romantic", "Mystery"]);
    
    main = document.getElementById("main");
    main.innerHTML += `<div style = 'line-height:20px;position:absolute;top:calc(${rowtop}px + 80vw);left:0;width: 100vw;height:15px;'></div>`;
    
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 7000);
};

function showNetflix() {
    document.getElementById("choose-person").style.display = "none";
}

// To add movies in the rows of the main page
function addRow(height, width, heading, movies) {
    main = document.getElementById("main");
    inner = `<div class = 'row2' style = 'top: calc(${rowtop}px + 80vw);'><div class = 'row2-heading'>${heading}</div><div class = 'row2-movies-holder' style = 'height:${height+10}px;'>`;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].slice(-2) === "<>") {
            inner += `<div class = 'row2-movies' style = "background-image:url('${dict[movies[i].slice(0,-2)][0][1]}.jpg'); height:${height}px;width:${width}px;left:${i*(width+4)+10}px;" onclick = "call('${movies[i]}')"></div>`;
        }
        else if (movies[i].slice(-2) === "><") {
            inner += `<div class = 'row2-movies' style = "background-image:url('${dict[movies[i].slice(0,-2)][0][2]}.jpg'); height:${height}px;width:${width}px;left:${i*(width+4)+10}px;" onclick = "call('${movies[i]}')"></div>`;
        }
        else {
            inner += `<div class = 'row2-movies' style = "background-image:url('${dict[movies[i]][0][0]}.jpg'); height:${height}px;width:${width}px;left:${i*(width+4)+10}px;" onclick = "call('${movies[i]}')"></div>`;
        }
    }
    inner += "</div></div>";
    main.innerHTML += inner;
    rowtop+=height+90;
}

// For defining where the top navbar (in the main page) should be when we scroll
function NavBar() {
    mainNav = document.getElementById("main-nav");
    main = document.getElementById("main");
    var st = main.scrollTop;
    mainNav.style.background = `rgba(0,0,0,${st/300})`;
    navtop += lst - st;
    if (st > lst) {
        if (mainNav.offsetTop <= -50) {
            navtop = -50;
        }
        mainNav.style.top = navtop + "px";
    }
    else if (st < lst) {
        if (mainNav.offsetTop >= 0) {
            navtop = 0;
        }
        mainNav.style.top = navtop + "px";
    }
    lst = st;
}

// backbutton for the movie page
function BackHolder() {
    var mp = document.getElementById("movie-page");
    var bh = document.getElementById("back-holder");
    var st = mp.scrollTop;
    bh.style.background = `rgba(0,0,0,${st/200})`;
}

// Calling the movie page
function call(movie) {
    if (movie.slice(-2) === "<>" || movie.slice(-2) === "><") {
        movie = movie.slice(0,-2);
    }
    mn = movie;
    var mpp = document.getElementById("mp-plus");
    mpp.innerHTML = "+";
    mpp.style.fontSize = "70px";
    mpp.style.backgroundImage = "none";
    var rt = document.getElementById("rate-thumb");
    rt.style.backgroundColor = "transparent";
    rt.style.backgroundImage = `url("https://imgur.com/rLVi4GP.png")`;
    var mp = document.getElementById("movie-page");
    mp.style.left = "0";
    mp.style.width = "100vw";
    var bh = document.getElementById("back-holder");
    bh.style.left = "0";
    bh.style.width = "100vw";
    var mpbg = document.getElementById("mp-bg");
    mpbg.style.backgroundImage = `url('${dict[movie][0][0]}.jpg')`;
    var mpimg = document.getElementById("mp-img");
    mpimg.style.backgroundImage = `url('${dict[movie][0][0]}.jpg')`;
    var mps = document.getElementById("mp-synopsis");
    mps.innerHTML = dict[movie][1];
    var t1 = document.getElementById("mp-more-like-this");
    var t2 = document.getElementById("mp-trailer");
    t1.innerHTML = "";
    t2.innerHTML = "";
    SetTabs(movie);
    changeTab(0);
    CheckButtons();
}

function CheckButtons() {
    if (myLiked.includes(mn)) {
        let rt = document.getElementById("rate-thumb");
        rt.style.backgroundColor = "white"
        rt.style.backgroundImage = "url('https://imgur.com/iArC1rh.jpg')";
    }
    else if (myDisliked.includes(mn)) {
        let rt = document.getElementById("rate-thumb");
        rt.style.backgroundImage = "url('https://imgur.com/FVMIKtW.jpg')";
    }
    
    if (myList.includes(mn)) {
        let mpp = document.getElementById("mp-plus");
        mpp.innerHTML = "✔";
        mpp.style.fontSize = "40px";
    }
}

// When we click at the back button this function is called (for the movie page)
function remove() {
    var mp = document.getElementById("movie-page");
    mp.style.left = "100vw";
    mp.style.width = "0";
    mp.scrollTop = 0;
    var bh = document.getElementById("back-holder");
    bh.style.left = "100vw";
    bh.style.width = "0";
    let mlt = document.getElementById("mp-more-like-this");
    mlt.scrollTop = 0;
    let video = document.getElementsByTagName("video")[0];
    video.pause();
}

// Functionality of the rate button of the movie page
function rate() {
    var mp = document.getElementById("movie-page");
    var tu = document.getElementById("thumbs-up");
    var td = document.getElementById("thumbs-down");
    setTimeout(function() {
        mp.style.filter = "brightness(50%)";
        tu.style.display = "block";
        td.style.display = "block";
    },10);
}

// Back for the above button
function Back() {
    var mp = document.getElementById("movie-page");
    mp.style.filter = "none";
    var tu = document.getElementById("thumbs-up");
    var td = document.getElementById("thumbs-down");
    tu.style.display = "none";
    td.style.display = "none";
}

// This is called when the bottom tabs are changed (clicked)
function changeTab(x) {
    var mlt = document.getElementById("more-like-this");
    var trailer = document.getElementById("trailer");
    var tb = document.getElementById("tab-bar");
    var t1 = document.getElementById("mp-more-like-this");
    var t2 = document.getElementById("mp-trailer");
    if (x === 0) {
        mlt.style.filter = "none";
        trailer.style.filter = "brightness(0.5)";
        tb.style.left = "5px";
        t1.style.left = "0";
        t2.style.left = "100vw";
        let video = document.getElementsByTagName("video")[0];
        video.pause();
    }
    else {
        mlt.style.filter = "brightness(0.5)";
        trailer.style.filter = "none";
        tb.style.left = "160px";
        t1.style.left = "-100vw";
        t2.style.left = "0";
    }
}

// It is for the movie page tabs shown at the bottom (the 2 columns)
function SetTabs(m) {
    var t1 = document.getElementById("mp-more-like-this");
    var t2 = document.getElementById("mp-trailer");
    var mpp = document.getElementById("mp-play");
    if (dict[m].length === 4) {
        t1.innerHTML = dict[m][3];
    }
    if (dict[m].length >= 3) {
        t2.innerHTML = dict[m][2];
    }
}

// When we click at a movie in the 'more like this' column
function newMovie(name) {
    remove();
    setTimeout(function() {
        call(name);
    }, 500);
}

// activating the tabs when we click at them (the main ones)
function activate(x) {
    let tabs = document.getElementsByClassName("bottom-tabs");
    let pages = document.getElementsByClassName("pages");
    remove();
    for (let i = 0; i < 5; i++) {
        tabs[i].style.filter = "brightness(0.5)";
        pages[i].style.display = "none";
    }
    tabs[x].style.filter = "brightness(1)";
    pages[x].style.display = "block";
    if (x === 1 && !t2Active) {
        t2Active = true;
        t2 = setInterval(ShowSearchResults, 400)
    }
    else if (x !== 1) {
        clearInterval(t2);
        t2Active = false;
    }
    if (x === 0 && !tActive) {
        tActive = true;
        t = setInterval(NavBar, 10);
    }
    else if (x !== 0) {
        clearInterval(t);
        tActive = false;
    }
    if (x !== 4) {
        if (cml%2) {
            showML();
        }
        if (cmml%2) {
            showMML();
        }
    }
    if (x !== 2) {
        let el = document.getElementsByClassName("cs-movie-video");
        for (let i = 0; i < 5; i++) {
            el[i].pause()
        }
    }
}

// This is specially for the search page, and to make the process quick (no hangs) I have put some if conditions so that if the value is same the system doesn't need to do the whole searching process again
function ShowSearchResults() {
    var input = document.getElementsByTagName("input")[0];
    var sr = document.getElementById("search-results");
    var ai = document.getElementById("audio-icon");
    let movies = {};
    let x = input.value.toLowerCase();
    var list = [];
    let t=0,l=0;
    if (x !== lastvalue) {
        sr.innerHTML = "";
        if (input.value !== "") {
            ai.style.backgroundImage = "url('https://imgur.com/JLqZjiK.jpg')";
            for (let i of Object.keys(dict)) {
                if (i === x) {
                    movies[i] = Object.keys(movies).includes(i) ? movies[i]+100 : 100;
                }
                if (i.includes(x) || x.includes(i)) {
                    movies[i] = Object.keys(movies).includes(i) ? movies[i]+50 : 50;
                }
                for (let j of i.split(" ")) {
                    for (let k of x.split(" ")) {
                        if (j === k) {
                            movies[i] = Object.keys(movies).includes(i) ? movies[i]+10 : 10;
                        }
                        if (j.includes(k) || k.includes(j)) {
                            movies[i] = Object.keys(movies).includes(i) ? movies[i]+2 : 2;
                        }
                    }
                }
            }
            let len = Object.keys(movies).length;
            for (let i = 0; i < len; i++) {
                let max = Object.values(movies).indexOf(Math.max(...Object.values(movies)));
                sr.innerHTML += `<div class = "sr-movies" style = "top: ${t}vw; left: ${l}vw; background-image: url('${dict[Object.keys(movies)[max]][0][0]}.jpg')" onclick = "call('${Object.keys(movies)[max]}')"></div>`;
                l+=31;
                if (l >= 90) {
                    l = 0;
                    t += 47;
                }
                delete movies[Object.keys(movies)[max]];
            }
            if (sr.innerHTML === "") {
                sr.innerHTML = `<div class = "no-result">`
            }
        }
        else {
            ai.style.backgroundImage = "url('https://imgur.com/lXYziXE.jpg')";
            for (let i of Object.keys(dict)) {
                sr.innerHTML += `<div class = "sr-movies" style = "top: ${t}vw; left: ${l}vw; background-image: url('${dict[i][0][0]}.jpg')" onclick = "call('${i}')"></div>`;
                l+=31;
                if (l >= 90) {
                    l = 0;
                    t += 47;
                }
            }
        }
    }
    lastvalue = x
}

// For the cross button in the search page
function clearInput() {
    var input = document.getElementsByTagName("input")[0];
    input.value = "";
}

// For the notification page in the 'coming soon' tab
function showNots() {
    var nots = document.getElementById("nots");
    nots.style.left = "0";
    nots.style.width = "100vw";
}

// back button for the above mentioned page
function NotsBack() {
    var nots = document.getElementById("nots");
    nots.style.left = "100vw";
    nots.style.width = "0";
}

// Js loops and functions are awesome (as can be seen in the window.onload function), I can simply call this function to add more movies in the coming soon page. This made the process very easy and less time consuming
function addComingSoonContent(video, icon, name, synopsis, genre) {
    var csp = document.getElementById("coming-soon-page");
    csp.innerHTML += `<div class = "cs-movie" style = "top:calc(${cstop[0]}vw + ${cstop[1]}px);"><video class = "cs-movie-video" controls><source src = "${video}"></video><div class = "cs-movie-icon" style = "background-image:url('${icon}');"></div><div class = "remind-me"></div><div class = "share"></div><div class = "cs-movie-name">${name}</div><div class = "cs-movie-synopsis">${synopsis}</div><div class = "cs-movie-genre">${genre.join(" <span>•</span> ")}<br><br><br><br><br><br><br></div></div>`;
    cstop[0]+=60;
    cstop[1]+=200;
}

// Weird name though but very useful, it sets the scroll of the main page (first shown home page) when we click at the top buttons
function showShows(x) {
    t3 = setInterval(function() {
        let main = document.getElementById("main");
        if (main.scrollTop < x-15) {
            main.scrollTop+=25;
        }
        else if (main.scrollTop > x+15){
            main.scrollTop-=25;
        }
        else {
            clearInterval(t3)
        }
    }, 1);
}

function addDownloads() {
    if (downloads.includes(mn) === false && mn !== "") {
        downloads.push(mn);
        setTimeout(function() {
            alertBox(`${mn} downloaded`)
        }, 500);
    }
}

function alertBox(x) {
    var ab = document.getElementById("alert-box");
    var val = [];
    for (let i of x.split(" ")) {
        val.push(i.slice(0,1).toUpperCase() + i.slice(1))
    }
    ab.innerHTML = val.join(" ");
    ab.style.top = "70vh";
    setTimeout(function() {
        ab.style.top = "100vh";
    }, 1000);
}

function dpMovies() {
    var dp = document.getElementById("downloads-page");
    if (downloads.length === 0) {
        dp.innerHTML = '<div id = "dp-empty"></div>';
    }
    else {
        let inner = ""
        for (let i of downloads) {
            inner += `<div class = "dp-movie" onclick = "call('${i}')"><div class = "dp-movie-img" style = "background-image: url('${dict[i][0][0]}.jpg');"></div><div class = "dp-movie-name">${i.toUpperCase()}</div></div><div style = "height:10px;width:100vw;background:black;"></div>`;
        }
        dp.innerHTML = inner + "<br><br><br><br><br>";
    }
}

function showMML() {
    cmml++;
    let arrow = document.getElementById("mml-arrow");
    let movies = document.getElementById("mml-movies");
    let mml = document.getElementById("more-my-list");
    if (cmml%2) {
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.top = "-5px";
        arrow.style.left = "calc(100vw - 60px)";
        movies.style.height = "200px";
        mml.style.height = "250px";
        let val = "";
        for (let i of myList) {
            val += `<div class = "more-page-movies" onclick = "call('${i}')"><div class = "mpm-img" style = "background-image: url('${dict[i][0][0]}.jpg');"></div><div class = "mpm-name">${i.toUpperCase()}</div></div>`;
        }
        if (val === "") {
            val = "<div style = 'position: absolute; top:10px;left:0;height:50px;width:100vw;text-align:center;font-size:15px;'>No Movie or TV Show :(</div>";
        }
        movies.innerHTML = val;
    }
    else {
        arrow.style.transform = "rotate(90deg)";
        arrow.style.top = "15px";
        arrow.style.left = "calc(100vw - 50px)";
        movies.style.height = "0";
        mml.style.height = "50px";
        movies.innerHTML = "";
    }
}

function showML() {
    cml++;
    let arrow = document.getElementById("ml-arrow");
    let ml = document.getElementById("more-liked");
    let movies = document.getElementById("ml-movies");
    if (cml%2) {
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.top = "-5px";
        arrow.style.left = "calc(100vw - 60px)";
        movies.style.height = "200px";
        ml.style.height = "250px";
        let val = "";
        for (let i of myLiked) {
            val += `<div class = "more-page-movies" onclick = "call('${i}')"><div class = "mpm-img" style = "background-image: url('${dict[i][0][0]}.jpg');"></div><div class = "mpm-name">${i.toUpperCase()}</div></div>`;
        }
        if (val === "") {
            val = "<div style = 'position: absolute; top:10px;left:0;height:50px;width:100vw;text-align:center;font-size:15px;'>No Movie or TV Show :(</div>";
        }
        movies.innerHTML = val;
    }
    else {
        arrow.style.transform = "rotate(90deg)";
        arrow.style.top = "15px";
        arrow.style.left = "calc(100vw - 50px)";
        movies.style.height = "0";
        ml.style.height = "50px";
        movies.innerHTML = "";
    }
}

function like() {
    Back()
    if (myLiked.includes(mn) === false) {
        myLiked.push(mn);
        if (myDisliked.includes(mn)) {
            myDisliked.splice(myDisliked.indexOf(mn), 1)
        }
        alertBox(mn + " liked");
    }
    let rt = document.getElementById("rate-thumb");
    rt.style.backgroundColor = "white";
    rt.style.backgroundImage = "url('https://imgur.com/iArC1rh.jpg')";
}

function dislike() {
    Back()
    if (myDisliked.includes(mn) === false) {
        myDisliked.push(mn);
        if (myLiked.includes(mn)) {
            myLiked.splice(myLiked.indexOf(mn), 1)
        }
        alertBox(mn + " disliked");
    }
    let rt = document.getElementById("rate-thumb");
    rt.style.backgroundImage = "url('https://imgur.com/FVMIKtW.jpg')";
}

function addMyList(m = mn) {
    if (myList.includes(m) === false) {
        myList.push(m);
        alertBox(m + " added to My List");
    }
    let mpp = document.getElementById("mp-plus");
    mpp.innerHTML = "✔";
    mpp.style.fontSize = "40px";
    //mpp.style.backgroundImage = "url('https://imgur.com/q4OgwyF.jpg')";
}

function showTrailer() {
    let mp = document.getElementById("movie-page");
    mp.scrollTop = 500;
    changeTab(1);
    let video = document.getElementsByTagName("video")[0];
    video.play();
}

function addToMyList(x) {
    addMyList(x);
    let plus = document.getElementById("plus");
    plus.innerHTML = "✔";
    plus.style.fontSize = "40px";
}

function addToMyList2(x) {
    addMyList(x);
    let plus = document.getElementsByTagName("u")[0];
    plus.innerHTML = "✔";
    plus.style.fontSize = "30px"
}