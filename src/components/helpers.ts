export type SelectItem = {
  value: string;
  label: string;
}

export const startLocation = [25.229762, 55.289311];

export const startNodeCoords = [
  { lat: "55.7757235", lon: "37.4976773" }, // 4844411022
  { lat: "55.7230995", lon: "37.6215796" }, // 939217288
  { lat: "55.7580955", lon: "37.6158086" }, // 1229461501
  { lat: "55.7869963", lon: "37.5225753" }, // 5154817852
  { lat: "55.8154378", lon: "37.4951996" }, // 6777031378
  { lat: "55.7318295", lon: "37.6085418" }, // 6943361882
  { lat: "55.7360477", lon: "37.6271375" }, // 938070115
  { lat: "55.7498802", lon: "37.5648874" }, // 4560019783
  { lat: "55.7757235", lon: "37.4976773" }, // 4844411022
  { lat: "55.7594251", lon: "37.5970263" }, // 7640415431
];

export const startTeamsAndRoutes : any = {
  1: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 1,
    routeRound: 0,
    startPoint: startNodeCoords[0],
    routePoints: [startNodeCoords[0]],
  },
  2: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 2,
    routeRound: 0,
    startPoint: startNodeCoords[1],
    routePoints: [startNodeCoords[1]],
  },
  3: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 3,
    routeRound: 0,
    startPoint: startNodeCoords[2],
    routePoints: [startNodeCoords[2]],
  },
  4: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 4,
    routeRound: 0,
    startPoint: startNodeCoords[3],
    routePoints: [startNodeCoords[3]],
  },
  5: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 5,
    routeRound: 0,
    startPoint: startNodeCoords[4],
    routePoints: [startNodeCoords[4]],
  },
  6: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 6,
    routeRound: 0,
    startPoint: startNodeCoords[5],
    routePoints: [startNodeCoords[5]],
  },
  7: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 7,
    routeRound: 0,
    startPoint: startNodeCoords[6],
    routePoints: [startNodeCoords[6]],
  },
  8: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 8,
    routeRound: 0,
    startPoint: startNodeCoords[7],
    routePoints: [startNodeCoords[7]],
  },
  9: {
    maxRouteRound: 0,
    isDayFinished: false,
    teamId: 9,
    routeRound: 0,
    startPoint: startNodeCoords[8],
    routePoints: [startNodeCoords[8]],
  },
  10: {
    isDayFinished: false,
    teamId: 10,
    routeRound: 0,
    startPoint: startNodeCoords[9],
    routePoints: [startNodeCoords[9]],
  },
};

export const mockCarRoutes = [
  {'car_id': 1, 'atms': [4871521422, 4872597421, 2140237416, 6777023383, 6777070309, 6777023385, 4728957727, 7669855530, 3541486188, 8237624718, 6140344622, 6140344623, 6171249281, 2560452107, 6503797885, 6503797886, 9221097231, 12188595915, 3007434083, 1758067323, 1758067322, 6777059082, 2627662764, 3806834364, 1203193430, 924267480, 6769113486, 6769113595, 937713832, 3043881936, 938070115, 2590816084, 2583161219, 514169772, 1728779782, 6633733371, 4870352361, 6944280773, 4703535202, 6777019579, 4693441291, 4964043423, 1579582737, 1579582736, 6364967723, 11477279180, 11477263262, 8672487736], 'route': [266729320, 966977035, 1118302939, 969292214, 3239600929, 3148067838, 3158097652, 5955465293, 794161815, 1185020333, 765968879, 835550143, 7235626676, 272710750, 614464900, 2946337642, 6669840204, 2668343816, 198273555, 924267359, 244034087, 722212192, 5300042683, 5299356344, 2590816082, 1074003068, 178128666, 1114115509, 4895858853, 11365133490, 1872474025, 4511057817, 5361370048, 6455928270, 8842482119, 12157275843, 8672487738, 266729320], 'route_time': 28100},
  {'car_id': 2, 'atms': [4904836626, 6046142494, 4207884489, 1202220890, 4960497813, 9494695518, 2625460126, 6777070194, 5208111822, 1817510200, 9287137636, 7762570402, 7074821819, 1374552908, 1286587306, 6777084613, 2321688535, 2953468322, 5702925535, 3398360838, 9718286494, 4318697446, 2627597736, 3404487741, 4324874281, 4023618520, 7159408620, 1885193738, 3583952360, 1286586921, 11481235075, 11481235076, 8405792368, 8006896665, 9221097090, 9221089949, 6769113594, 7670717739, 6777061147, 9221096923, 7126057126, 5022331923, 10288133351, 10288133349], 'route': [266729320, 1705483807, 1234190752, 1381969231, 4929462105, 538159603, 1451244292, 1964710829, 1492413714, 652514715, 614104230, 250557164, 997634442, 1644037557, 12199699317, 1323899243, 1907467829, 5909715676, 1017783930, 11135203530, 946558763, 481345376, 4324874276, 2187180647, 1438127689, 253389150, 10235365334, 7952688484, 11481058288, 10563070009, 3970759892, 3959113611, 2411360433, 1844386353, 2621564611, 244034087, 5348835262, 2684993925, 1421100360, 1274134982, 266729320], 'route_time': 27727},
  {'car_id': 3, 'atms': [3725026903, 4717871885, 6984468091, 2611760895, 6777061155, 9718286915, 4466264595, 4421649691, 4298816691, 4336633490, 2625463244, 912959835, 4852619947, 2627783585, 2059700851, 9221096954, 3249138872, 2627806009, 4343899491, 4648878581, 5719859527, 5719859526, 4250621605, 4438972103, 8252410980, 9718286470, 6681156485, 9537436756, 4083152789, 1286587254, 4318697440, 9718286452, 6777082624, 6680114938, 9718286918, 1329350034, 1329350038, 1396687183, 3657565818], 'route': [266729320, 2863378919, 6378180939, 9734636770, 1097987742, 251299133, 7948859753, 9881034690, 11991537120, 268941585, 993627914, 912959821, 1594085616, 1225983714, 1225983692, 7111843664, 2612900027, 7004842386, 1939522604, 3037272569, 3102245735, 2730688203, 4438966696, 555943259, 248073671, 6698116255, 1253919173, 669553200, 3114562685, 376309609, 1872293647, 3054886048, 2323985680, 903015337, 9652130820, 2339231697, 1836570926, 971038773, 266729320], 'route_time': 27412},
  {'car_id': 4, 'atms': [2110382414, 2113515418, 12048027167, 5199976045, 5810791379, 12159545258, 2611726628, 938070104, 3478996674, 6402526624, 938253576, 9221096825, 3908290071, 4930362421, 2611726627, 2627628636, 1842900806, 2612128384, 3341683386, 4348267691, 5072905558, 5071321855, 12159545260, 4362163929, 2625463222, 8080451857, 2615442256, 2626849743, 4349721892, 4349721893, 4035589936, 3071819224, 1494166617, 618112479, 8956969827, 2564046956, 4789434221, 5226857790, 5545622121, 3842373556, 3834400133, 1955393561], 'route': [266729320, 2005994731, 272632723, 245941570, 1215414598, 7363090314, 993418419, 1123091097, 3478996676, 6402526935, 4487641750, 6949129528, 2863378942, 274116109, 620480236, 6195576784, 540684836, 3718462551, 1282400241, 3396803260, 268943529, 1217955763, 239987740, 4362163931, 5443945169, 4041951986, 1913207550, 2472623496, 658339164, 1113558384, 2625554250, 291707945, 2481949796, 2795154433, 1253962029, 5217351237, 1678186617, 485748966, 9624235394, 31448556, 266729320], 'route_time': 27237},
  {'car_id': 5, 'atms': [5027243524, 9221096941, 4690945932, 11173518589, 11173518588, 4682436791, 2284308668, 1204691868, 9297620547, 9297620552, 9221097023, 8758277937, 9046328284, 9046328283, 4318697441, 4318697443, 1988390151, 1286587031, 5597337971, 618112491, 9718286523, 2378295784, 9221097446, 9221097477, 9221096729, 7545652060, 1754270616, 2594504921, 5186059820, 4559790741, 3700986285, 717340926, 9221096960, 4558966089, 1286587368, 4683881474, 6679888641, 1286587391, 10209861432, 4243080396, 5351716219], 'route': [266729320, 4604162591, 305137298, 529257971, 480564880, 5223262392, 610821743, 2338041195, 486603698, 6590721275, 3476803055, 7995285764, 3481502690, 601151350, 376309444, 5450583593, 4788097031, 617981024, 2998106841, 10582777577, 678384336, 2814372305, 312149454, 5931557400, 7593099892, 757297351, 5101642309, 8150565772, 2160795178, 473428586, 2705310807, 4582170615, 6153596275, 2066336695, 252845536, 252847112, 3004645903, 338523768, 1751466154, 266729320], 'route_time': 28326},
  {'car_id': 6, 'atms': [5248724851, 1095382764, 941731733, 941731749, 4861374222, 4527751490, 4527751489, 8818694934, 9507030086, 4983944978, 4315683889, 4315677892, 8370874232, 5337288912, 9221097499, 1399520150, 751993249, 3683499632, 6153225178, 7036905766, 11181695310, 6574700111, 1817510198, 9221097021, 1929099935, 9221096982, 5599714449, 4318697444, 2876845174, 2627597734, 5667330835, 3437734151, 8529742062, 8529742063, 7881464883, 4366482901, 2626629798, 3512452649, 9033006900, 4199061890, 4069944094, 4070021191, 4070035289], 'route': [266729320, 4292763346, 4398583897, 663320212, 3003746369, 2883019417, 1613186404, 5756068322, 5594275090, 5007785313, 2880662667, 10300373190, 411807674, 2531942884, 1390377472, 6259372835, 1174036068, 1161618408, 6151852346, 2959350252, 3699843936, 11165933007, 1546908839, 1618163521, 704330760, 4700068987, 3754280237, 8238451582, 1433312846, 1885009604, 9926992076, 45138175, 983732143, 679396589, 2117389133, 7220496679, 266729320], 'route_time': 28443},
  {'car_id': 7, 'atms': [9718286917, 4285874992, 4285863691, 4728928790, 3703739044, 7086856379, 8006896666, 5108910290, 4245257589, 12247899613, 9769555911, 1296939902, 4144794768, 4144794763, 8154434483, 2788217118, 2108747232, 3405256534, 9718286785, 2611760901, 9221096926, 5130480322, 5130449524, 3076430202, 4226622397, 1883783145, 1883783144, 4298747698, 6777023370, 6777023304, 9718286418, 2611760893, 11197689058, 5435796627, 9221096840, 2016386743, 2016386878, 9221096979, 1286587379, 9326552063, 3194244152, 8026218185, 1286587352, 4080209289, 938253610, 3072553204, 3447562631, 4120902789], 'route': [266729320, 1685018050, 10672547116, 1578429951, 11423171168, 3013744726, 268943765, 1288484604, 5408431324, 1885292148, 340336662, 4144794771, 2477705675, 2601139344, 2606788873, 2616240395, 10642390271, 1441967404, 528965728, 2633464864, 613389517, 1885509144, 598696747, 8618100306, 969301527, 249731548, 5017085994, 4944438699, 7500982261, 179533092, 9490240492, 1255121090, 8790181018, 4078501602, 1488625802, 979329607, 528965933, 8152353728, 10814385242, 10782497919, 4076392786, 266729320], 'route_time': 27974},
  {'car_id': 8, 'atms': [5267440622, 2627628664, 9221096932, 4960088743, 884420360, 7640415432, 7640415431, 1286587257, 1693654699, 4574490292, 4558524492, 9221096763, 3006586609, 12219274617, 3329224116, 1817510197, 4904558526, 5218798143, 3650549481, 938070071, 6777070315, 6429641934, 4604812938, 2627628670, 5382891423, 5265370419, 12249069355, 9251425041, 791443260, 2100459507, 2017583575, 4325187293, 2596320761, 7047296617, 1286587293, 1818266062, 2898527938, 1827648502, 8356963965, 9750312015, 9718286879, 9221097498], 'route': [266729320, 1171712135, 461879308, 676018697, 6496704317, 7040618984, 939126883, 1148809078, 5327129849, 253291181, 5372366636, 7414874329, 80136809, 5239710402, 12181086216, 2973091697, 272765051, 6378471212, 6376808551, 5610265126, 2511163265, 3225657391, 9915212752, 423801347, 10073414944, 1579853251, 3992206863, 814623223, 5232309450, 2006644458, 9062452171, 4964435535, 10284195967, 11777822642, 3284887265, 7644571089, 5526066207, 2954889196, 962190826, 1965332950, 266729320], 'route_time': 27911},
  {'car_id': 9, 'atms': [9246049840, 5540586822, 6071309998, 4551158390, 4551174889, 2611760888, 7048869821, 4262574823, 9221097196, 9248426817, 1329350052, 1329350040, 6777041957, 4303395892, 9959933817, 7263998989, 9379350935, 9221096986, 2612128380, 8909993993, 961866438, 9221096919, 9221096910, 12052800011, 1529308055, 10669825284, 4126073933, 1625449565, 6777031396, 3094540596, 2626849744, 3683874533, 8237711134, 678295632, 2611708769, 5525203626, 4250489696, 1286587390, 4926705542, 1951643940, 2808972049, 5087499921, 3733213053], 'route': [266729320, 333598520, 7118337816, 450129127, 582164237, 1777182098, 1944101063, 338171809, 2232129273, 1689061612, 252116395, 7235626672, 7235626667, 945102190, 479731712, 11217266596, 1689004257, 797223569, 596545873, 613206701, 12078343408, 10669825281, 1579853121, 3740084418, 2947905221, 2859760719, 11447386063, 3037270233, 1300542011, 9985477019, 549258071, 60775948, 4997150454, 4267172318, 1067900186, 266729320], 'route_time': 27285},
  {'car_id': 10, 'atms': [3541832209, 9221096945, 6776897993, 4384764023, 2626653669, 1332146851, 4889619935, 4576758488, 9718286607, 8198518793, 5343774508, 7655922576, 7832507815, 2627671487, 3646541597, 6777080774, 9221096990, 4960088739, 9221096938, 6777080754, 6769113499, 6769113508, 4073297424, 5226130695, 6777084691, 1625449558, 6777084624, 11617079709, 11617079712, 11617079711, 11617079713, 9221097490, 9221097349, 4103678289, 1619081354, 3212676152, 5339901687, 12247899614, 934548772, 1272830760, 5478694486, 5478694487, 9828857417, 3218390301, 4310187839, 11164804857, 8758277952, 8758277943, 8758277940, 10267864011, 3007434081], 'route': [266729320, 3736006596, 3157962060, 8391990790, 985782867, 11638931478, 7133521982, 1306492229, 1306492035, 983182871, 4737154034, 5966000178, 1994400105, 3203420998, 6133643337, 10959747166, 480758094, 639299412, 1439291447, 4071672991, 2969136527, 333733870, 1579853216, 5509521821, 684377670, 614681318, 4486725122, 317464952, 2503894282, 2703815318, 659051447, 4936258430, 5316503436, 53845118, 10274209669, 4304717963, 272647519, 12309870418, 3476823173, 7837388652, 266729320], 'route_time': 28620},
  {'car_id': 11, 'atms': [11487140663, 938070089, 12159545261, 9221097479, 6777082536, 6777082539, 5244167439, 11343828318, 5801480654, 2626849750, 3153898584, 12026306247, 10841373799, 1286586888, 5518594822, 4573749743, 10119667789, 4537516554, 2007250839, 2555299245, 996053915, 1233308052, 4852619945, 3716041760, 1550428913, 3756053512, 5154817852, 4027401020, 4027401021, 4027401022, 2134694753, 3410453576, 6361772615, 4977568541, 11295399327, 9118543561, 9646160424, 5394375149, 6398039983, 7350916060, 4739936440, 5546399021, 941731758, 2626653667, 12219008731], 'route': [266729320, 8480282913, 4310728783, 1733860756, 4875412118, 1334069906, 968170636, 248787414, 1487177525, 269224731, 2781443982, 2431526026, 2725336916, 11099203895, 3787856008, 1698417525, 704656670, 570163130, 68886871, 11585225617, 2185779706, 613367948, 4936258703, 3210780549, 2260697826, 10303465611, 7644566929, 2959348306, 2425135572, 92882564, 1869020701, 11627920730, 6611945867, 3422010703, 6397254096, 494013885, 1846254231, 303901364, 11377575968, 266729320], 'route_time': 27124},
  {'car_id': 12, 'atms': [3558465029, 2626849747, 2280266048, 2626907992, 5286213655, 9221096929, 9510617338, 12161768699, 2499279512, 2612128375, 4199200424, 5533146721, 1734117142, 6777023300, 6777080750, 4114907679, 2611760890, 4408185294, 9221096971, 9718286647, 8154434484, 6124719986, 11526519008, 9718286738, 941766735, 8026209385, 2352525828, 7121996385, 7121995585, 1286587107, 7670717742, 4382023466, 5551583498, 938253590, 12247899616, 5341569687, 6501181790, 6501181789, 6501181788, 1286587382, 4685691365, 11699186376, 5407468148, 1655792062, 9221096922, 2627628693, 1653071981], 'route': [266729320, 4138853632, 2994786053, 1787789584, 9082010092, 1941756838, 330771776, 99997407, 1037956336, 1035379743, 3451131166, 316518164, 3691335290, 282419867, 5229756762, 197208731, 1229309238, 6456334009, 2158144693, 11421851662, 3905417955, 938666293, 963983602, 12185869302, 2388742263, 2268282973, 7936950555, 3412764371, 253039742, 5651440152, 250523960, 3732716792, 3423365515, 3182705165, 12111647529, 545912062, 3792446060, 6633170925, 967051222, 606256323, 5130278320, 1284975196, 266729320], 'route_time': 27730},
  {'car_id': 13, 'atms': [1896753233, 938253604, 4874716017, 8237711133, 8006896657, 2748288141, 938253562, 4560019783, 691744699, 2979638464, 4991372320, 8006902329, 1286587267, 2627597733, 6206469994, 11717137969, 9221096958, 7746379165, 9480875899, 2452280762, 6770262166, 4151982905, 5296129137, 8006896667, 1351526948, 10841373800, 9718286684, 982315284, 2017583578, 6438279129, 4860079584, 1286587186, 7826963969, 5770747056, 3749360999, 3749361000, 3749361001, 1229461506, 1172054320, 1172065741, 1172063290, 9718286648, 4512760793], 'route': [266729320, 1122148356, 11981418192, 4690389321, 88871118, 1865890013, 8515936517, 5610265014, 252175240, 252498392, 1456538564, 4991373831, 3081461821, 4480333543, 1024913808, 1024913835, 660558793, 666773530, 7746379167, 5020999375, 3992122852, 3102245734, 4270455516, 581903856, 1638980550, 1352420171, 2494457566, 6397254175, 10240176131, 1324648606, 5101642262, 923968954, 1192496251, 1993302327, 4585727151, 273112728, 1378047023, 6364360748, 2756754330, 1832195102, 266729320], 'route_time': 26261},
  {'car_id': 14, 'atms': [1681997274, 4321067437, 2432112617, 2611760899, 10309568720, 8507803831, 8507803830, 1389186868, 1424886799, 11289345386, 9221096837, 3783312674, 2940982952, 5034498542, 8757802471, 1903646830, 2611672577, 8772465452, 9097160500, 938070061, 5446041188, 9221096934, 1986978833, 1082239969, 1986978832, 3980376856, 1870260491, 6635636774, 6635636775, 6306728637, 8629907689, 10922438337, 10922438338, 10922438339, 11841159841, 5223109022, 11822889767, 9718286429, 11033189877, 3672326247, 3735078080, 1286587358], 'route': [266729320, 595347139, 918245457, 267252350, 1417811430, 266417063, 4908359754, 616294586, 1424886812, 1389963591, 4144902435, 4365072981, 5048342328, 11981418193, 2620877505, 2927201614, 3995769886, 4251248904, 8718542378, 8842880703, 8262076211, 1250859919, 1114115517, 981963798, 1086059997, 1439225813, 1437195487, 2287681287, 10559424487, 3156163389, 9603558840, 6373695757, 4049977164, 601604113, 1057361129, 2308529668, 266729320], 'route_time': 26421},
  {'car_id': 15, 'atms': [6777023360, 6769102883, 6777031356, 8006902331, 5275706953, 5481463449, 9221097485, 9221097491, 4127700589, 4127700689, 10811625618, 3053223974, 7182382749, 1286587356, 4343523536, 4520378790, 9996849885, 9996849884, 2626942697, 7670717219, 4130650329, 9718286951, 9062105931, 4327588190, 4327593691, 6124942585, 9221097481, 9221096940, 4701733243, 9113816156, 10085664451, 9221097083, 4423683390, 2092870514, 6777031285, 2625463223, 9221097212, 8867964994, 9221097350, 6808207585], 'route': [266729320, 1495262461, 408787113, 5285841487, 4809410423, 5256094114, 1789166146, 8676050664, 305701302, 9124989647, 411807710, 1044815185, 9276085188, 2016275082, 5457805790, 609624799, 4623921655, 5845213608, 299071011, 1481534453, 6150434177, 479745138, 1420349907, 638787164, 954237114, 1340923514, 517714578, 6852765559, 3642902922, 6165478137, 489444144, 1895028808, 2620503846, 3475682355, 266729320], 'route_time': 26792},
  {'car_id': 16, 'atms': [679133230, 2335274369, 1667728175, 939217288, 2656349128, 6777061125, 2656349124, 12000692198, 12000692199, 6967025610, 3507397025, 1320050774, 9221096927, 9221097221, 4916258317, 6488180932, 2626942699, 4687261465, 4813938136, 5770731156, 4897208706, 4897208707, 4580648693, 6956796850, 5387438122, 4337419790, 9221097487, 4519265389, 5343376857, 4450367661, 4124346492, 9221097211, 4412901196, 4693451389, 4693451289, 444776911, 2627783590, 9718286540], 'route': [266729320, 2341734148, 7376757304, 7534549463, 2360277758, 4713604691, 5738640409, 480019287, 3088408949, 10224079270, 699681335, 615698015, 6301946351, 12166473552, 687658339, 5020092881, 1112123126, 7376757309, 2445661763, 3285668859, 6417801791, 5705977436, 306558381, 324533347, 8239552349, 1600741339, 583509126, 330775690, 602009846, 934866441, 3824289505, 1389769206, 266729320], 'route_time': 27533},
  {'car_id': 17, 'atms': [8963762293, 12059173935, 9221096785, 4994501821, 5351716220, 7001514236, 9221096966, 9718286831, 9718286519, 2268611061, 9610759341, 4998573630, 4348262591, 4310019889, 2611535851, 2627628632, 9221096930, 3252650533, 8412899969, 8080478744, 1082826589, 3631729777, 2625463220, 6943361882, 8916027506, 2181347854, 2181319243, 9365408179, 3720509245, 10697371893, 5089140022, 4070321309, 9221097201, 11171038095, 11171038096, 6216728896, 6777031408, 9097160501, 1744047883, 9221096977, 1235549083, 8006896669, 2186629303, 8486840003, 8486840004], 'route': [266729320, 6061295321, 6030606012, 3478361649, 5182607107, 506513856, 3054497545, 595359944, 10257905000, 1132095220, 2206004953, 944325959, 9795255124, 480758175, 480448718, 5940645735, 595643764, 418752188, 3175036166, 3145612044, 1780168608, 7865988851, 1106831404, 2967959820, 5252047056, 1141358291, 4318081659, 418126547, 2497041446, 11813596697, 3164341848, 1618143941, 1939471681, 3829459355, 5020999374, 248798236, 705472959, 342064961, 8776848551, 2015351434, 450610849, 7702598054, 266729320], 'route_time': 28436},
  {'car_id': 18, 'atms': [5341356351, 5250605458, 2870319823, 2940986237, 9221097054, 627937161, 3326157053, 3768556410, 8477026987, 4207577782, 4693450591, 9254359675, 9254359674, 4933319851, 1751373247, 588069762, 9937432818, 3685929576, 4771892327, 8810943067, 6777023387, 4037292824, 1296939896, 4558862297, 9396692410, 9233445190, 6262657451, 1286587351, 6777031378, 6777031375, 2112691667, 9446929633, 5400998399, 6423573035, 4711754089, 4991374251, 1611748605, 6680114934, 2627628630, 6777070327, 5582720126, 6231778025, 2167788752, 9318132160, 1531266598, 938070111, 6777080772, 5240047814, 2455480483], 'route': [266729320, 997959680, 304765677, 2863378933, 2824201408, 11165933009, 2966689371, 253466910, 6042611341, 5292102900, 661165596, 3230423666, 9088917106, 209916130, 6521039760, 246699287, 3155928526, 1543110281, 4219298205, 4834915081, 5610265016, 1222744911, 3476765229, 601376393, 4847245124, 10692700003, 3375642496, 1303872499, 2863378925, 5972230357, 5400998397, 4745818919, 1470892801, 3790445766, 1187138837, 8282097557, 882327565, 247930802, 1274200445, 6225259148, 7137599543, 3439286156, 1157351975, 4837009237, 2926551938, 313373136, 5217099770, 266729320], 'route_time': 27686},
  {'car_id': 19, 'atms': [1201461584, 1086716549, 2627597739, 4809411208, 1507817306, 6634144353, 7682430808, 9221097495, 1963480933, 6646365237, 6645887671, 5170950022, 1286586784, 11619507158, 4191912157, 3298948765, 4078444714, 6777082542, 1722830585, 10238025893, 3740110019, 9221097198, 5601187521, 5382891227, 4364555975, 12092080396, 3893618245, 1272543254, 938253588, 6340159804, 6777070212, 6777070207, 8676050665, 8676050666, 8676050667, 2611760898, 4909411063, 4909411066, 4909411067, 8091202799, 6777080759, 6398564171, 751993285, 751993252], 'route': [266729320, 11203174932, 1532496744, 957120712, 615670754, 255183318, 5941492294, 1658275922, 622584701, 2901428697, 2696132342, 93377724, 10711268110, 8904848032, 1719510138, 4834914703, 2528507350, 198320745, 1722830588, 1391583651, 2390711612, 2151854249, 1035379733, 1035381477, 2432269117, 12092524318, 266437684, 5047564835, 2005070276, 4929462102, 931500639, 5217099764, 4616541842, 2435885604, 653966980, 2436822209, 253390535, 8618100311, 441899151, 1003783106, 266729320], 'route_time': 28506},
  {'car_id': 20, 'atms': [6207683287, 11409835104, 701246437, 9985138767, 6207683286, 2611760905, 6777031372, 5538199616, 6777031373, 6777031371, 5538199618, 4697743561, 6777031352, 7682548802, 9996849890, 2626942700, 7682548803, 6777070316, 9996849889, 6634144352, 6634144351, 5694380127, 5694380126, 630992218, 8282135345, 1000785708, 656132952, 4504211974, 4504211975, 4931308421, 6793335323, 7589687134, 5088305792, 4716997993, 4716997992, 4703535203, 4259313892, 4117098594, 4887361621, 938070079, 1324794223, 1324794217, 3613464464, 1286587049, 4487458826, 700872444, 2627741509], 'route': [266729320, 611834244, 571273700, 483344879, 489590993, 3706994741, 729710715, 5959744701, 1096955221, 530980088, 9391542782, 339235080, 12166473551, 12164423041, 1529618819, 10718888547, 8515930500, 5115333526, 272786481, 5400997726, 4504212668, 10219526521, 2397695274, 4080475604, 104185761, 1739797590, 3767303585, 965827167, 8006188609, 2125599921, 162171259, 4281806930, 10700748533, 3154911834, 92353679, 4284983294, 2219645768, 266729320], 'route_time': 27908},
  {'car_id': 21, 'atms': [4347697153, 5426372721, 2626849745, 10572314648, 2611760902, 4528816201, 4413683361, 9221096985, 1201461579, 2500443061, 11623725790, 4384769701, 4384769700, 1688117100, 1669762914, 938070122, 9221097194, 4909261742, 2851581007, 6357343214, 4730757809, 6633733370, 4420922468, 2447156903, 918690001, 9221097486, 5351709656, 9718286690, 1286587353, 7082257368, 7082257367, 1286587231, 3768556411, 11288672948, 6400217985, 939214602, 1185150642, 9341937034, 5771727438, 2627597737, 5273639600, 7670727095], 'route': [266729320, 4513436783, 10846730629, 3852331059, 9105235302, 4733889761, 668734687, 612785636, 1219592011, 11842035372, 5920792006, 11131978928, 1437752753, 9292807241, 2308529673, 4834914717, 331563434, 250723986, 2014048898, 10929975435, 736674342, 712674483, 1509541065, 214789590, 1038688977, 1390377471, 1009220417, 3259351159, 10712619844, 308477792, 4020099229, 10875296066, 1240913878, 3125542885, 2624362210, 613206735, 223959915, 1157353439, 12092524339, 434499682, 6885459334, 266729320], 'route_time': 28658},
  {'car_id': 22, 'atms': [5502237111, 2611760900, 4127528689, 9221096983, 9221097480, 5382888465, 4844411022, 11224311988, 9221096928, 7126057125, 6769113501, 634805752, 7929466097, 7341815471, 5016401921, 1351565031, 11327691761, 8252412485, 9718275888, 9221097238, 5764435044, 11718405531, 2119440249, 9718286809, 4921153437, 3396803236, 614958544, 614980357, 4053202882, 9261399594, 4294686299, 1952629418, 7682430811, 4703535204], 'route': [266729320, 5502237116, 5700519769, 962961053, 7641073088, 302418681, 626600564, 3111461675, 616213701, 3810105031, 721419469, 11020631942, 546872786, 12063461031, 1425313773, 546850238, 9422021335, 8512274815, 5356800500, 2891236029, 618281237, 552402054, 3986680518, 658339240, 9743140633, 10278029506, 421212683, 480773629, 1121331366, 12228642916, 309443535, 411304912, 60572990, 9679881843, 266729320], 'route_time': 26944},
  {'car_id': 23, 'atms': [5894578757, 6777023376, 6777084616, 6769113596, 8006896664, 4102826189, 9221096942, 1976909718, 11288672950, 4736660060, 1286587222, 3071821064, 5643792691, 9221097497, 6777041953, 5108309425, 3526824258, 1611748611, 5068427922, 7670717710, 408385048, 4686934585, 5164414192, 4951556069, 4508937689, 6047084287, 7931930179, 7931930178, 6777061172, 9263040699, 9221097343, 4318697442, 1628954787, 4318697447, 5478755199, 6634172578, 2626629800], 'route': [266729320, 660149275, 4711988262, 4947003172, 4450706115, 4035216437, 480433429, 304361267, 6511958100, 470248662, 4736659941, 3071797691, 2625554235, 1993648630, 460435161, 631502705, 3790542634, 6617755561, 4139545401, 4983945162, 5185882695, 1107533819, 251542444, 324533049, 4665560609, 4698741942, 318892122, 1119714822, 6398039982, 2041961636, 3903984442, 3481502689, 946558779, 4744748367, 4352916535, 266729320], 'route_time': 26055},
  {'car_id': 24, 'atms': [1229461501, 12247899617, 5218798144, 1274623215, 2627628649, 9221096730], 'route': [266729320, 1378047118, 7326254145, 5218798146, 1314765628, 4244049684, 3369875354, 266729320], 'route_time': 4777}
];

// export const teamsForSelect: SelectItem[] = mockCarRoutes.map(element => ({value: element.car_id.toString(), label: `Команда ${element.car_id}`}));
export const teamsForSelect: SelectItem[] = Object.keys(startTeamsAndRoutes).map(element => ({value: startTeamsAndRoutes[element].teamId.toString(), label: `Команда ${startTeamsAndRoutes[element].teamId}`}));

export const getAtmIndex = (carId: number, routeNode: number) => {
  return mockCarRoutes[carId - 1].route.indexOf(routeNode);
}

export const mockRandCoords: [number, number][] = [
  [
    55.763593,
    37.517438
  ],
  [
    55.816268,
    37.52861
  ],
  [
    55.888914,
    37.560797
  ],
  [
    55.841682,
    37.622211
  ],
  [
    55.799593,
    37.493774
  ],
  [
    55.826193,
    37.646394
  ],
  [
    55.793152,
    37.703067
  ],
  [
    55.839547,
    37.521971
  ],
  [
    55.876865,
    37.84296
  ],
  [
    55.785859,
    37.509429
  ],
  [
    55.867683,
    37.607611
  ],
  [
    55.884088,
    37.389459
  ],
  [
    55.801745,
    37.52742
  ],
  [
    55.797963,
    37.765042
  ],
  [
    55.760336,
    37.628058
  ],
  [
    55.823227,
    37.639552
  ],
  [
    55.841455,
    37.57425
  ],
  [
    55.877243,
    37.490453
  ],
  [
    55.828688,
    37.459173
  ],
  [
    55.865475,
    37.375127
  ],
  [
    55.899809,
    37.492203
  ],
  [
    55.853115,
    37.648225
  ],
  [
    55.905375,
    37.841843
  ],
  [
    55.822234,
    37.760094
  ],
  [
    55.792129,
    37.409466
  ],
  [
    55.883131,
    37.68663
  ],
  [
    55.900756,
    37.725759
  ],
  [
    55.838149,
    37.548698
  ],
  [
    55.774025,
    37.767355
  ],
  [
    55.757614,
    37.761927
  ],
  [
    55.771623,
    37.511251
  ],
  [
    55.879204,
    37.625075
  ],
  [
    55.821212,
    37.670218
  ],
  [
    55.89125,
    37.534708
  ],
  [
    55.906946,
    37.544315
  ],
  [
    55.796896,
    37.665936
  ],
  [
    55.789511,
    37.641741
  ],
  [
    55.75937,
    37.723669
  ],
  [
    55.853797,
    37.802444
  ],
  [
    55.764756,
    37.540007
  ],
  [
    55.808372,
    37.420933
  ],
  [
    55.861168,
    37.479878
  ],
  [
    55.895902,
    37.504359
  ],
  [
    55.824984,
    37.649525
  ],
  [
    55.863638,
    37.431775
  ],
  [
    55.772928,
    37.465778
  ],
  [
    55.802017,
    37.832331
  ],
  [
    55.755823,
    37.64931
  ],
  [
    55.769019,
    37.415739
  ],
  [
    55.866769,
    37.591013
  ],
  [
    55.880433,
    37.384777
  ],
  [
    55.888006,
    37.45195
  ],
  [
    55.886693,
    37.708011
  ],
  [
    55.889819,
    37.751559
  ],
  [
    55.857976,
    37.669601
  ],
  [
    55.799484,
    37.655855
  ],
  [
    55.851829,
    37.646055
  ],
  [
    55.769591,
    37.655954
  ],
  [
    55.839797,
    37.806482
  ],
  [
    55.786478,
    37.844184
  ],
  [
    55.855739,
    37.706935
  ],
  [
    55.828524,
    37.631453
  ],
  [
    55.888844,
    37.463309
  ],
  [
    55.844256,
    37.588354
  ],
  [
    55.794243,
    37.394232
  ],
  [
    55.768738,
    37.794088
  ],
  [
    55.864487,
    37.733908
  ],
  [
    55.782583,
    37.787714
  ],
  [
    55.791404,
    37.401307
  ],
  [
    55.791216,
    37.448671
  ],
  [
    55.875342,
    37.466346
  ],
  [
    55.866563,
    37.834433
  ],
  [
    55.892976,
    37.400379
  ],
  [
    55.905185,
    37.581979
  ],
  [
    55.897372,
    37.677441
  ],
  [
    55.877959,
    37.523523
  ],
  [
    55.791164,
    37.440690000000004
  ],
  [
    55.900873,
    37.656992
  ],
  [
    55.902247,
    37.463126
  ],
  [
    55.754757,
    37.707234
  ],
  [
    55.876789,
    37.565141
  ],
  [
    55.792806,
    37.688799
  ],
  [
    55.826136,
    37.670701
  ],
  [
    55.85468,
    37.531043
  ],
  [
    55.839508,
    37.478428
  ],
  [
    55.782132,
    37.613965
  ],
  [
    55.880232,
    37.757098
  ],
  [
    55.786578,
    37.62067
  ],
  [
    55.897891,
    37.601876
  ],
  [
    55.807893,
    37.439743
  ],
  [
    55.844827,
    37.732178
  ],
  [
    55.755142,
    37.532473
  ],
  [
    55.849858,
    37.60199
  ],
  [
    55.811766,
    37.822475
  ],
  [
    55.772196,
    37.498309
  ],
  [
    55.834015,
    37.436792
  ],
  [
    55.774807,
    37.518978
  ],
  [
    55.77217,
    37.439823
  ],
  [
    55.884469,
    37.512213
  ],
  [
    55.893976,
    37.751691
  ]
]