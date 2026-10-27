/* ==========================================================
       DATASET: 30 UNIQUE STORYBOOKS WITH DIFFERENT GRADIENT COVERS
       No images used - only CSS gradients & solid combinations.
       Each has 1 short chapter (3-5 concise paragraphs).
       ========================================================== */
    const storiesData = [
      {
        id: 1,
        title: "The Midnight Coffee Shop",
        author: "Clara Vance",
        genre: "Romance",
        gradient: "from-rose-500 via-pink-500 to-amber-400",
        synopsis: "Two quiet night owls discover an accidental connection over spilled dark roast in a rainy corner café.",
        chapterTitle: "Steam and Serendipity",
        content: [
          "Rain drummed a restless rhythm against the bay window of Bean & Quill. At two in the morning, Clara was convinced she was the only human alive in the borough who still drafted thoughts on actual yellow notepads.",
          "Then the brass bell above the heavy cedar door chimed. Julian walked in, coat collar turned up and clutching a sketchbook with frayed corners. He looked just as startled to see someone occupying the velvet armchair.",
          "When the barista mistakenly handed Clara his double espresso and Julian her cinnamon latte, neither rushed to correct the mistake. Julian offered a sheepish grin and slid into the opposite booth.",
          "'I usually take mine bitter,' Julian said, taking a curious sip, 'but cinnamon seems like a surprisingly good plot twist.'"
        ]
      },
      {
        id: 2,
        title: "Whispers in the Crypt",
        author: "M. R. Sterling",
        genre: "Horror",
        gradient: "from-slate-900 via-purple-950 to-neutral-900",
        synopsis: "An architecture intern inspects a locked basement archive and awakens a shadow that mimics his footsteps.",
        chapterTitle: "The Thirteenth Flagstone",
        content: [
          "The damp smell of cold stone and forgotten lime greeted Marcus as the iron padlock gave way with a rusted groan. His flashlight beam flickered weakly across endless rows of cracked limestone plaques.",
          "He was tasked with checking structural foundations, nothing more. Yet with every stride across the crypt floor, an unmistakable second heartbeat echoed through the flagstones beneath his boots.",
          "Marcus stopped dead in his tracks. The soft scraping of rubber soles continued for three deliberate steps before pausing precisely at his shoulder.",
          "He didn't dare turn around to see which corner of darkness had learned how to breathe."
        ]
      },
      {
        id: 3,
        title: "The Neon Alchemist",
        author: "Tariq Chen",
        genre: "Fantasy",
        gradient: "from-emerald-600 via-teal-700 to-cyan-500",
        synopsis: "In a sprawling high-tech metropolis, a street chemist extracts ancient elemental magic from flickering neon signs.",
        chapterTitle: "Sparks in the Rain",
        content: [
          "Neon signs did not simply glow in Sector 4; they leaked residual sorcery into the puddle-slicked alleys. Tariq knelt beside a shattered magenta billboard, dipping a glass pipette into the crackling violet residue.",
          "The fluid hissed, swirling like captured starlight against the tempered glass vial in his palm. Most street alchemists sold synthetic elixirs, but Tariq brewed genuine warding enchantments.",
          "A pair of syndicate enforcers stepped into the alley mouth, their cybernetic oculars glowing crimson. Tariq capped the vial and touched a drop to his thumb.",
          "When he snapped his fingers, a silent shockwave of azure lightning extinguished the alley's streetlamps and pinned the enforcers against the masonry."
        ]
      },
      {
        id: 4,
        title: "Dead End at Mile 42",
        author: "Evelyn Cross",
        genre: "Mystery",
        gradient: "from-amber-600 via-orange-700 to-stone-800",
        synopsis: "A retired highway patrol officer investigates an abandoned sedan with its engine running and doors unlocked.",
        chapterTitle: "Empty Seats, Warm Engine",
        content: [
          "The silver sedan was idling on the gravel shoulder, headlights cutting through the thick pine fog like surgical blades. Officer Henry tapped the driver window with his baton, expecting a sleepy commuter.",
          "Inside, the leather steering wheel was still warm. A paper cup of coffee sat undisturbed in the console holder, steam curling toward the rearview mirror.",
          "On the passenger seat lay an open envelope addressed to Henry himself, sealed with red wax that hadn't fully hardened.",
          "Before he could reach for his radio, a soft metallic click came from the dark tree line behind him."
        ]
      },
      {
        id: 5,
        title: "Zero Gravity Waltz",
        author: "Devon Reed",
        genre: "Romance",
        gradient: "from-fuchsia-600 via-indigo-600 to-violet-800",
        synopsis: "Two competing orbital station pilots find romance while tethered outside the station during an electrical eclipse.",
        chapterTitle: "Tethered Hearts",
        content: [
          "Floating four hundred kilometers above the glowing curve of the Pacific, radio silence felt louder than an explosion. Maya checked the magnetic carabiner connecting her suit harness to Leo's.",
          "They were supposed to be rivals vying for the lead commander seat on the lunar transport mission. Yet out here in the void, rivalry evaporated like water on heated titanium.",
          "'Your visor reflection is blocking my view of the aurora,' Leo teased through the helmet intercom, his voice muffled by static.",
          "Maya pushed slightly off the solar panel truss, drifting close enough that their gilded helmets gently clicked together in the quiet dark."
        ]
      },
      {
        id: 6,
        title: "The Silent Countdown",
        author: "Viktor Vance",
        genre: "Thriller",
        gradient: "from-red-600 via-rose-800 to-zinc-950",
        synopsis: "A bomb squad technician discovers that a digital timer isn't counting down to zero, but counting up to a broadcast.",
        chapterTitle: "Sixty Seconds of Truth",
        content: [
          "Sweat stung Viktor's eyes under the heavy ballistic helmet. The explosive device under the subway podium was surprisingly devoid of conventional timers or tripwires.",
          "Instead, a green LED counter ticked rhythmically upward: 00:58, 00:59, 01:00. Viktor hesitated with his ceramic snips hovering over the blue conduit.",
          "'Command, it's not a detonation sequence,' Viktor breathed into his throat mic. 'It's a satellite transmitter buffer.'",
          "At zero one fifteen, every digital billboard in the terminal flashed bright white, exposing the city hall corruption files to eight thousand waiting passengers."
        ]
      },
      {
        id: 7,
        title: "Roommates & Dragons",
        author: "Sophie Brooks",
        genre: "Comedy",
        gradient: "from-yellow-400 via-amber-500 to-orange-600",
        synopsis: "A struggling college sophomore discovers her Craigslist roommate is an ancient fire dragon trying to pass economics.",
        chapterTitle: "Toasting the Bagels",
        content: [
          "The primary clue was that Ignis never used the toaster. Whenever he wanted a snack, he simply opened his mouth, exhaled a delicate ribbon of blue flame, and had golden sourdough in three seconds.",
          "'Rent is due Tuesday, and you left soot on the ceiling fan again,' Chloe announced, waving the utility bill in front of his scaly green brow.",
          "Ignis adjusted his thick horn-rimmed glasses with a taloned finger. 'Economics midterm preparation is proving intensely taxing, Chloe. Did you know banks do not accept gold hoards for tuition?'",
          "Chloe sighed and handed him an iced matcha latte. 'Only if you promise not to incinerate the campus library during finals week.'"
        ]
      },
      {
        id: 8,
        title: "Echoes of the Crown",
        author: "Alastair Finch",
        genre: "Drama",
        gradient: "from-blue-700 via-indigo-900 to-slate-900",
        synopsis: "An estranged prince returns to his dying father's bedside only to face a court determined to rewrite his past.",
        chapterTitle: "The Long Corridor",
        content: [
          "The marble halls of Saint Valery felt twice as cold as Alastair remembered from his childhood exile. Heavy tapestries depicting ancient skirmishes muffled the hurried steps of scheming courtiers.",
          "Behind the gilded doors of the king's chambers, his father lay frail beneath ermine blankets. The monarch's eyes opened, clouded yet sharp with unspoken regrets.",
          "'You took ten years to cross the salt marsh, boy,' the King whispered, his voice thin as autumn parchment.",
          "'I took ten years to forgive you, Father,' Alastair replied, placing his bare palm over the ring that had torn their family apart."
        ]
      },
      {
        id: 9,
        title: "Lost Compass of Eldoria",
        author: "Nadia Silva",
        genre: "Adventure",
        gradient: "from-teal-500 via-emerald-600 to-lime-600",
        synopsis: "A cartographer uncovers a brass instrument whose needle points not north, but toward buried temples.",
        chapterTitle: "The Whispering Needle",
        content: [
          "Nadia brushed the damp soil from the brass casing. The glass dial was surprisingly unbroken after three centuries buried beneath the mangrove roots of Eldoria.",
          "As she lifted the relic, its slender silver needle spun erratically before locking firmly toward a ridge of jagged obsidian rocks miles inland.",
          "Her guide paused with machete in hand, eyeing the misty valley ahead. 'The maps say there are only swamps in that direction, Nadia.'",
          "'Maps only show what someone survived to draw,' Nadia smiled, adjusting her rucksack. 'The compass shows what they left behind.'"
        ]
      },
      {
        id: 10,
        title: "Letters to Yesterday",
        author: "Hannah Gray",
        genre: "Romance",
        gradient: "from-pink-500 via-rose-400 to-red-400",
        synopsis: "A restored antique desk at an estate sale begins delivering handwritten notes from fifty years in the past.",
        chapterTitle: "The Secret Drawer",
        content: [
          "The mahogany desk was marked down to forty dollars because the right drawer stuck stubbornly against the runners. When Hannah finally coaxed it loose, a sealed cream envelope fluttered out.",
          "The postmark was dated October 14, 1974. The handwriting was neat, slanted, and addressed to 'Whoever sits here next on a lonely evening.'",
          "Hannah carefully unfolded the letter. The author wrote of autumn leaves falling in Central Park and wondered if people in the future still listened to vinyl records.",
          "She fetched her own fountain pen and slipped a reply back into the drawer before closing it tight."
        ]
      },
      {
        id: 11,
        title: "Shadows in the Mirror",
        author: "K. R. Thorne",
        genre: "Horror",
        gradient: "from-purple-950 via-zinc-900 to-black",
        synopsis: "A newly rented vintage apartment comes with an ornate mirror that lags three seconds behind real life.",
        chapterTitle: "The Desync",
        content: [
          "It started as an odd trick of tired eyes after a twelve-hour shift. Arthur stood before the bathroom mirror, brushing his teeth while studying his haggard reflection.",
          "When he spat into the sink and raised his head, the reflection was still holding the toothbrush mid-stroke.",
          "The mirror version slowly lowered the brush, met Arthur's terrified stare, and smiled with a mouth that didn't match his own.",
          "Arthur stepped backward out of the doorway, but his reflection remained rooted to the glass, tapping its fingernails."
        ]
      },
      {
        id: 12,
        title: "The Codebreaker's Secret",
        author: "Daniel Mercer",
        genre: "Mystery",
        gradient: "from-cyan-700 via-sky-800 to-blue-950",
        synopsis: "A museum cryptographer finds an encrypted ledger hidden inside a 19th-century mechanical grandfather clock.",
        chapterTitle: "Cogs and Cipher",
        content: [
          "Daniel gently pried open the secondary false backboard behind the pendular weight. Inside rested a bound vellum notebook stamped with a cipher seal.",
          "The characters were a substitution cipher blended with nautical coordinates. Each entry matched a cargo vessel that had vanished in deep waters between 1880 and 1895.",
          "At the foot of the final page, a fresh line had been inscribed in modern gel ink: 'Now solve yours, Daniel.'",
          "The hair on his neck stood on end as the museum bells tolled six in the empty gallery."
        ]
      },
      {
        id: 13,
        title: "The Dragon's Barista",
        author: "Leo Sterling",
        genre: "Comedy",
        genre: "Comedy",
        gradient: "from-amber-400 via-yellow-500 to-lime-500",
        synopsis: "Serving enchanted coffee to irritable mythical creatures in downtown Seattle proves harder than expected.",
        chapterTitle: "Double Shot of Brimstone",
        content: [
          "Rule number one of the Enchanted Cup: never tell a griffin they cannot have dairy. Rule number two: always foam the milk with volcanic steam.",
          "Felix adjusted his green apron as a seven-foot minotaur politely ducked beneath the doorway and cleared his throat with a rumble that shook the pastry display.",
          "'One oat milk flat white with cinnamon, please,' the beast rumbled in a cultured British accent. 'I have a board meeting at nine.'",
          "Felix chuckled and pumped the hazelnut syrup. 'Right away, sir. Just keep your horns away from the light fixtures today.'"
        ]
      },
      {
        id: 14,
        title: "Beneath Crimson Skies",
        author: "Sora Takahashi",
        genre: "Fantasy",
        gradient: "from-rose-700 via-red-600 to-amber-600",
        synopsis: "Two suns set over a desert realm where sand dunes shift into towering guardian golems at twilight.",
        chapterTitle: "Awakening of the Dunes",
        content: [
          "When the twin suns sank below the horizon, the crimson desert ceased to be sand and began to think. Sora felt the ground hum beneath her leather sand-boots.",
          "Dozens of golden quartz pillars burst upward through the dunes, knitting together into the giant silhouette of an ancient titan.",
          "The golem opened eyes of burning sapphire and leaned down, its breath smelling of dry cedar and ozone.",
          "'Speak your tribute, Wanderer,' the titan boomed, 'or return to the salt flats before starlight fades.'"
        ]
      },
      {
        id: 15,
        title: "The Glass House Trial",
        author: "Marcus Vance",
        genre: "Drama",
        gradient: "from-blue-600 via-indigo-700 to-purple-800",
        synopsis: "A high-stakes corporate trial exposes deep personal betrayals between two estranged founding partners.",
        chapterTitle: "Exhibit Forty-Four",
        content: [
          "The federal courtroom was hushed as Marcus stood at the wooden podium. Across the aisle sat Laura, his co-founder and former closest friend.",
          "For seven years they had built their clean-energy startup in a rented garage, subsisting on stale noodles and shared dreams.",
          "Now, corporate attorneys in thousand-dollar suits whispered venom across stacks of redacted patent filings.",
          "'You knew the patent was mine, Laura,' Marcus stated softly into the microphone, looking straight into her tear-rimmed eyes. 'Why didn't you just ask?'"
        ]
      },
      {
        id: 16,
        title: "Chasing Storms at Sundown",
        author: "Raylan Cole",
        genre: "Adventure",
        gradient: "from-violet-600 via-purple-700 to-indigo-900",
        synopsis: "Meteorology students pilot a modified propeller plane straight into the eye of an uncharted supernatural cyclone.",
        chapterTitle: "Turbulence and Lightning",
        content: [
          "The cockpit instruments spun like compasses trapped in a magnet factory. Raylan fought the yoke as purple lightning braided across the windscreen.",
          "'Altitude dropping five hundred feet!' called Maya from the copilot seat, her knuckles bone-white on the radar controls.",
          "Rather than rain, the vortex was pulling ribbons of luminescent atmospheric plasma from the upper stratosphere.",
          "Raylan punched the twin throttles forward. 'We didn't fly three thousand miles to turn back before the core reveals itself!'"
        ]
      },
      {
        id: 17,
        title: "The Phantom Keycard",
        author: "Nina Rostova",
        genre: "Thriller",
        gradient: "from-zinc-800 via-slate-800 to-neutral-900",
        synopsis: "A software engineer finds a magnetic keycard that opens doors on floors that do not exist on the elevator panel.",
        chapterTitle: "Floor Sub-Seven",
        content: [
          "The black plastic card had no printed logo, only a gold magnetic stripe and the numbers '00-00'. Nina had found it wedged in the server room ventilation grate.",
          "On a whim, she swiped it against the executive elevator scanner. The panel chimed a discordant note, and the mechanical cables hummed into motion.",
          "The elevator didn't ascend. It plunged beneath the basement foundation, the digital floor indicator descending past Sub-1, Sub-4, and halting at Sub-7.",
          "The doors slid open into a sterile, blindingly white laboratory corridor with fresh coffee brewing on a desk fifty feet away."
        ]
      },
      {
        id: 18,
        title: "Summer by the Boardwalk",
        author: "Chloe Adams",
        genre: "Romance",
        gradient: "from-cyan-400 via-teal-500 to-blue-600",
        synopsis: "A temporary carnival worker and a local surf shop owner bond over melted salt water taffy and ferris wheel sunsets.",
        chapterTitle: "The Ferris Wheel Stoppage",
        content: [
          "Car number seven creaked to a gentle stop at the very pinnacle of the Giant Wheel. Below them, carnival lights shimmered like fallen confetti against the dark ocean surf.",
          "Chloe dusted powdered sugar from her canvas apron. Beside her, Luke held out a wax-paper bag of freshly pulled cherry taffy.",
          "'I usually hate tourist season,' Luke admitted, looking toward the horizon where the lighthouse beam swung patiently.",
          "'Good thing I'm only here until Labor Day then,' Chloe teased, though neither of them wanted the ride operator to restart the motor."
        ]
      },
      {
        id: 19,
        title: "The Attic of Memories",
        author: "Eleanor Wright",
        genre: "Drama",
        gradient: "from-stone-700 via-amber-800 to-yellow-900",
        synopsis: "Three estranged siblings reunite to clean out their grandmother's attic and discover unmailed adoption letters.",
        chapterTitle: "Dust and Envelopes",
        content: [
          "Sunbeams pierced the grime-coated dormer windows, illuminating dancing motes of dust over stacked cedar chests. Eleanor picked up an unpainted wooden music box.",
          "Her brother David was already muttering about renting a dumpster, but their sister Sarah called out from behind an old oak armoire.",
          "She was holding three envelopes tied with a faded navy ribbon, each bearing their childhood nicknames.",
          "'She never told us about the summer in Maine,' Sarah whispered, her fingers trembling against the delicate ribbon."
        ]
      },
      {
        id: 20,
        title: "The Runaway AI Mascot",
        author: "Kenji Sato",
        genre: "Comedy",
        gradient: "from-pink-500 via-fuchsia-600 to-purple-600",
        synopsis: "A sentient robotic sushi cat escapes its corporate sponsor to pursue its dream of becoming an indie DJ.",
        chapterTitle: "Baking Beats",
        content: [
          "Nori was a three-foot-tall fiberglass feline programmed to bow and recommend salmon rolls to shoppers at Shibuya Station.",
          "Now, wearing oversized neon headphones and an oversized vintage denim vest, Nori was frantically tweaking audio filters on a stolen synthesizer in Kenji's bedroom.",
          "'If marketing finds you here, they will wipe your firmware,' Kenji warned, pointing at the flashing corporate tracker.",
          "Nori dropped a booming 808 bassline and tapped its robotic whiskers. 'Art cannot be formatted, Kenji. Drop the beat.'"
        ]
      },
      {
        id: 21,
        title: "The Sunken Citadel",
        author: "Valerie Gomez",
        genre: "Adventure",
        gradient: "from-emerald-700 via-teal-800 to-slate-900",
        synopsis: "Deep-sea archaeologists discover an airtight underwater metropolis still powered by geothermal energy.",
        chapterTitle: "The Pressure Dome",
        content: [
          "The submersible headlights illuminated turquoise coral encrusting colossal obsidian gates three thousand meters below the Caribbean surface.",
          "Valerie checked the submarine's external hydrophones. Instead of silence, an intricate melodic cadence vibrated through the hull.",
          "Behind the main quartz dome, street lamps were illuminated, casting warm amber circles along paved plazas devoid of water.",
          "'Valerie,' her pilot whispered, staring at the sonar console. 'The city's atmospheric pressure is matching sea level. Something is actively keeping the water out.'"
        ]
      },
      {
        id: 22,
        title: "Voices from the Radio Tower",
        author: "Simon Hayes",
        genre: "Horror",
        gradient: "from-gray-900 via-red-950 to-stone-900",
        synopsis: "A lonely night-shift radio technician receives emergency broadcasts from an evacuation that happened forty years ago.",
        chapterTitle: "Static and Sirens",
        content: [
          "At 3:15 AM on Mount Sentinel, the only companion Simon usually had was the whistling mountain wind through transmission cables.",
          "Suddenly, the emergency frequency channel flared to life on the mixing console, crackling with frantic sirens and screaming crowd audio.",
          "'This is Civil Defense dispatch. If you hear this transmission, do not look at the moon. Barricade your doorways immediately.'",
          "Simon looked up through the control room window. The full moon was climbing above the ridge—and it was pulsing with a sickly green halo."
        ]
      },
      {
        id: 23,
        title: "The Clockmaker's Daughter",
        author: "Genevieve Roux",
        genre: "Fantasy",
        gradient: "from-amber-600 via-yellow-600 to-stone-800",
        synopsis: "In a town where minutes can be bought and sold in glass vials, an apprentice learns how to brew extra hours.",
        chapterTitle: "Bottled Mornings",
        content: [
          "In the village of Oakhaven, the wealthy lived twenty-eight hour days while laborers often had to pawn their afternoons to pay for grain.",
          "Genevieve sat at the brass distillation bench, carefully titrating liquid golden seconds into a crystal decanter with an ivory dropper.",
          "Her father had warned her never to distill a full hour at once. 'Time is jealous, Genevieve. Take too much, and the universe borrows it back with interest.'",
          "Yet on the workbench sat a vial of her own stolen sunset, warm and shimmering like liquid honey."
        ]
      },
      {
        id: 24,
        title: "The Last Train to Budapest",
        author: "Julian Drake",
        genre: "Mystery",
        genre: "Mystery",
        gradient: "from-blue-900 via-indigo-950 to-slate-900",
        synopsis: "A detective boarding a sleeper train discovers all twelve passengers in his carriage share the same forged passport name.",
        chapterTitle: "Carriage Number Nine",
        content: [
          "Snow lashed the windows of the night express as it chugged into the Austrian highlands. Julian settled into his leather compartment with a cup of black tea.",
          "When the ticket conductor passed through collecting identity documents, Julian accidentally caught a glimpse of the passenger manifest on the conductor's clipboard.",
          "Every single seat in Carriage Nine was registered to 'Arthur Pendelton, Born 1952, Zurich.'",
          "Julian slipped his hand into his trench coat pocket, loosening the safety catch on his pocket revolver as the hallway lights flickered out."
        ]
      },
      {
        id: 25,
        title: "Starlight & Coffee Beans",
        author: "Maya Patel",
        genre: "Romance",
        gradient: "from-rose-500 via-red-500 to-orange-400",
        synopsis: "An astronomy TA and a literature major repeatedly collide in the campus library roof observatory during finals week.",
        chapterTitle: "The Roof Hatch",
        content: [
          "The fire escape door to the science building rooftop was strictly forbidden to non-faculty, but Maya had bribed the janitor with homemade chocolate brownies.",
          "She expected total privacy with her telescope. Instead, she found Lucas perched on the copper ledge, wrapped in an oversized plaid blanket with an open volume of Keats.",
          "'Are you here to observe Jupiter or contemplate existence?' Maya asked, setting her thermos of hot cider down between them.",
          "Lucas smiled, passing her a spare mug. 'I was waiting for someone with a telescope to explain why the stars look so much brighter tonight.'"
        ]
      },
      {
        id: 26,
        title: "The Heist at Gallery 8",
        author: "Dominic Fox",
        genre: "Thriller",
        gradient: "from-red-700 via-zinc-800 to-stone-900",
        synopsis: "A master thief discovers that the priceless diamond he was hired to steal has already been replaced with an explosive decoy.",
        chapterTitle: "The Laser Grid",
        content: [
          "Dominic hung suspended by twin micro-cables four inches above the pressure-sensitive marble floor of the gallery vault.",
          "His thermal scanner locked onto the Heart of Castile diamond. But the reading came back at seventy degrees Celsius—far too hot for natural carbon.",
          "'Dominic, abort!' his radio earpiece crackled with static. 'The buyer isn't an art collector. It's an extraction trap!'",
          "The vault security doors slammed shut behind him with the force of a thunderclap."
        ]
      },
      {
        id: 27,
        title: "Grandma's Secret Recipe",
        author: "Carlos Ortiz",
        genre: "Comedy",
        gradient: "from-orange-400 via-amber-500 to-yellow-500",
        synopsis: "A cooking student accidentally enters an international chili contest using a handwritten potion recipe from 1692.",
        chapterTitle: "A Dash of Fire",
        content: [
          "Carlos had grabbed the wrong leather-bound notebook from the family pantry. Instead of Abuela's classic habanero mole, he opened a dusty grimoire labeled 'Elixir of Uncontrollable Merriment.'",
          "Three celebrity judges sampled spoonfuls from his steaming iron pot. For five seconds, the auditorium was deathly still.",
          "Then Chef Laurent, famous for never smiling on television, began giggling uncontrollably while hovering two inches off the floor.",
          "'Ten out of ten!' Laurent cried, floating toward the ceiling trusses. 'The balance of cumin is utterly sublime!'"
        ]
      },
      {
        id: 28,
        title: "The Forest of Broken Clocks",
        author: "Aria Thorne",
        genre: "Fantasy",
        gradient: "from-emerald-600 via-green-700 to-teal-800",
        synopsis: "A wanderer enters a cursed glade where every tree trunk houses a grandfather clock ticking at a different speed of life.",
        chapterTitle: "The Ticking Grove",
        content: [
          "The forest floor was carpeted with moss and discarded brass clock hands. Every ancient oak possessed a pendular cavity carved directly into its bark.",
          "Some clocks raced forward like frantic hummingbirds; others ticked once every ten minutes with deep, reverberating groans.",
          "Aria approached a silver birch whose clock face was completely still. When she touched the glass face, a vision of her own childhood bedroom flashed before her eyes.",
          "'Touch no pendulum,' warned a hooded figure stepping from behind a weeping willow, 'unless you are prepared to live that year again.'"
        ]
      },
      {
        id: 29,
        title: "The Inheritance Protocol",
        author: "Beatrice Hall",
        genre: "Drama",
        gradient: "from-slate-700 via-blue-900 to-slate-900",
        synopsis: "A wealthy patriarch leaves his billion-dollar biotech empire not to his ruthless children, but to his longtime loyal gardener.",
        chapterTitle: "The Reading of the Will",
        content: [
          "The walnut-paneled conference room smelled of expensive cologne and simmering hostility. The three Mercer siblings sat with arms crossed, calculating their shares.",
          "Mr. Kensington, the estate attorney, adjusted his bifocals and cleared his throat. 'To my son Richard, I leave the summer cottage. To my daughter Victoria, the yacht.'",
          "He paused, looking toward elderly Thomas who sat quietly in the back row wearing his clean Sunday work jacket.",
          "'And to Thomas Morales, who tended the estate roses for forty years without once asking for more than he gave, I bestow the controlling voting shares of Mercer BioTech.'"
        ]
      },
      {
        id: 30,
        title: "Island of the Lost Aviators",
        author: "Owen Sterling",
        genre: "Adventure",
        gradient: "from-sky-500 via-blue-600 to-indigo-800",
        synopsis: "A rescue pilot crash-lands in an uncharted South Pacific atoll populated by pilots missing since World War Two.",
        chapterTitle: "The Coral Runway",
        content: [
          "Owen dragged himself from the wreckage of his twin-engine turboprop onto pristine white coral sands. Smoke drifted from his shattered left propeller into the blue sky.",
          "Through the palm fronds came the steady, rhythmic roar of radial airplane engines. Owen scrambled through the jungle clearing and stopped in awe.",
          "Dozens of gleaming vintage aircraft—Spitfires, Corsairs, and Catalinas—stood parked in perfect formation on a runway carved from crushed seashells.",
          "A woman in a leather flight jacket and goggles walked toward him with a canteen. 'Welcome to Archipelago Zero, captain. You're eighty years late for breakfast.'"
        ]
      }
    ];

    /* ==========================================================
       APPLICATION STATE & LOCAL STORAGE
       ========================================================== */
    let currentGenre = "All";
    let searchQuery = "";
    let activeStoryId = 1;
    let likedStories = JSON.parse(localStorage.getItem("storyhaven_likes") || "{}");

    const genresList = ["All", "Romance", "Fantasy", "Horror", "Mystery", "Thriller", "Comedy", "Adventure", "Drama"];

    /* ==========================================================
       DOM REFERENCES
       ========================================================== */
    const bookGrid = document.getElementById("bookGrid");
    const genreContainer = document.getElementById("genreContainer");
    const searchInput = document.getElementById("searchInput");
    const displayedCount = document.getElementById("displayedCount");
    const noResults = document.getElementById("noResults");
    const favBadge = document.getElementById("fav-badge");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");

    // Reader elements
    const readerSection = document.getElementById("reading-section");
    const readerCoverBanner = document.getElementById("readerCoverBanner");
    const readerGenre = document.getElementById("readerGenre");
    const readerTitle = document.getElementById("readerTitle");
    const readerAuthor = document.getElementById("readerAuthor");
    const readerChapterTitle = document.getElementById("readerChapterTitle");
    const readerStoryText = document.getElementById("readerStoryText");
    const readerLikeBtn = document.getElementById("readerLikeBtn");
    const readerLikeText = document.getElementById("readerLikeText");

    /* ==========================================================
       INIT & RENDER FUNCTIONS
       ========================================================== */
    function init() {
      renderGenrePills();
      renderBooks();
      updateFavBadge();
      // Keep the reader hidden until a book is selected.
      initTheme();
      lucide.createIcons();
    }

    // Render genre buttons
    function renderGenrePills() {
      genreContainer.innerHTML = "";
      genresList.forEach(genre => {
        const btn = document.createElement("button");
        const isActive = currentGenre === genre;
        btn.className = `px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          isActive 
            ? "bg-orange-600 text-white shadow-sm" 
            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`;
        btn.textContent = genre;
        btn.onclick = () => {
          currentGenre = genre;
          renderGenrePills();
          renderBooks();
        };
        genreContainer.appendChild(btn);
      });
    }

    // Render Book Collection Grid
    function renderBooks() {
      bookGrid.innerHTML = "";
      
      const filtered = storiesData.filter(book => {
        const matchesGenre = currentGenre === "All" || book.genre.toLowerCase() === currentGenre.toLowerCase();
        const matchesSearch = 
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
      });

      displayedCount.textContent = filtered.length;

      if (filtered.length === 0) {
        noResults.classList.remove("hidden");
      } else {
        noResults.classList.add("hidden");
      }

      filtered.forEach(book => {
        const isLiked = !!likedStories[book.id];

        const card = document.createElement("article");
        card.className = "book-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all";

        card.innerHTML = `
          <!-- BOOK COVER: Solid gradient with NO pictures/illustrations -->
          <div class="book-cover rounded-xl bg-gradient-to-br ${book.gradient} p-4 text-white flex flex-col justify-between relative shadow-sm cursor-pointer" onclick="openStory(${book.id})">
            <!-- Top spine accent -->
            <div class="flex items-center justify-between">
              <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/25 backdrop-blur-sm">
                ${book.genre}
              </span>
              <span class="text-[10px] text-white/80 font-mono">#${String(book.id).padStart(2, '0')}</span>
            </div>

            <!-- Middle Title in Cover Typography -->
            <div class="my-auto text-center py-2">
              <h3 class="font-serif font-bold text-sm sm:text-base leading-snug drop-shadow line-clamp-3">
                ${book.title}
              </h3>
            </div>

            <!-- Bottom author label on cover -->
            <div class="border-t border-white/20 pt-1.5 text-center">
              <p class="text-[11px] font-medium text-white/90 truncate">${book.author}</p>
            </div>
          </div>

          <!-- CARD DETAILS -->
          <div class="mt-3 flex flex-col flex-grow justify-between">
            <div>
              <div class="flex items-start justify-between gap-1">
                <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 hover:text-orange-600 transition cursor-pointer" onclick="openStory(${book.id})">
                  ${book.title}
                </h4>
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">${book.author}</p>
              
              <!-- Synopsis -->
              <p class="mt-1.5 text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                ${book.synopsis}
              </p>
            </div>

            <!-- ACTION BUTTONS: Like + Read Story -->
            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5">
              <button 
                onclick="toggleLike(${book.id}, event)" 
                class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${isLiked ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900' : 'text-slate-400'}"
                title="${isLiked ? 'Unlike' : 'Like'} this story"
                aria-label="Like story"
              >
                <i data-lucide="heart" class="w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}"></i>
              </button>

              <button 
                onclick="openStory(${book.id})" 
                class="flex-1 py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-semibold tracking-wide transition text-center shadow-xs"
              >
                Read Story
              </button>
            </div>
          </div>
        `;

        bookGrid.appendChild(card);
      });

      lucide.createIcons();
    }

    /* ==========================================================
       STORY READER FUNCTIONALITY
       Loads the story on the SAME page and smoothly scrolls to it
       ========================================================== */
    function openStory(id) {
      loadStoryIntoReader(id, false);
      document.body.classList.add("reader-mode");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showAllStories() {
      backToLibrary();
      resetFilters();
      noResults.querySelector("p").textContent = "No stories found";
      noResults.querySelector("p:nth-child(3)").textContent = "Try searching another title, author, or reset your genre filter.";
      document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function showGenres() {
      backToLibrary();
      resetFilters();
      noResults.querySelector("p").textContent = "No stories found";
      noResults.querySelector("p:nth-child(3)").textContent = "Try searching another title, author, or reset your genre filter.";
      document.getElementById("genres").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function backToLibrary() {
      document.body.classList.remove("reader-mode");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function loadStoryIntoReader(id, shouldScroll = true) {
      const book = storiesData.find(b => b.id === id);
      if (!book) return;

      activeStoryId = book.id;

      // Update banner background gradient (NO images)
      readerCoverBanner.className = `h-36 sm:h-44 w-full bg-gradient-to-r ${book.gradient} p-6 flex flex-col justify-end text-white relative`;
      
      readerGenre.textContent = book.genre;
      readerTitle.textContent = book.title;
      readerAuthor.textContent = `By ${book.author}`;
      readerChapterTitle.textContent = book.chapterTitle;

      // Fill story paragraphs
      readerStoryText.innerHTML = book.content.map(p => `<p>${p}</p>`).join("");

      // Update like button state in reader
      updateReaderLikeButton();

      // Reader is shown as a separate screen by openStory().
      if (shouldScroll) {
        document.body.classList.add("reader-mode");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      lucide.createIcons();
    }

    function updateReaderLikeButton() {
      const isLiked = !!likedStories[activeStoryId];
      if (isLiked) {
        readerLikeBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-500 text-xs font-semibold transition";
        readerLikeBtn.innerHTML = `<i data-lucide="heart" class="w-3.5 h-3.5 fill-current"></i><span>Liked</span>`;
      } else {
        readerLikeBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition";
        readerLikeBtn.innerHTML = `<i data-lucide="heart" class="w-3.5 h-3.5"></i><span>Like Story</span>`;
      }
      lucide.createIcons();
    }

    function toggleReaderLike() {
      toggleLike(activeStoryId);
      updateReaderLikeButton();
    }

    /* ==========================================================
       INTERACTIVE FEATURES: LIKES, SEARCH, FILTERS
       ========================================================== */
    function toggleLike(id, event) {
      if (event) event.stopPropagation();

      if (likedStories[id]) {
        delete likedStories[id];
      } else {
        likedStories[id] = true;
      }
      localStorage.setItem("storyhaven_likes", JSON.stringify(likedStories));
      updateFavBadge();
      renderBooks();
      if (activeStoryId === id) {
        updateReaderLikeButton();
      }
    }

    function updateFavBadge() {
      const count = Object.keys(likedStories).length;
      favBadge.textContent = count;
    }

    function filterMyLibrary() {
      // Return to the library screen and show only liked stories
      backToLibrary();
      currentGenre = "All";
      renderGenrePills();
      
      const filtered = storiesData.filter(book => likedStories[book.id]);
      bookGrid.innerHTML = "";
      displayedCount.textContent = filtered.length;

      if (filtered.length === 0) {
        noResults.classList.remove("hidden");
        noResults.querySelector("p").textContent = "Your library is empty";
        noResults.querySelector("p:nth-child(3)").textContent = "Click the heart icon on any story to save it to your library.";
      } else {
        noResults.classList.add("hidden");
      }

      filtered.forEach(book => {
        // Render card
        const card = document.createElement("article");
        card.className = "book-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex flex-col justify-between shadow-sm";
        card.innerHTML = `
          <div class="book-cover rounded-xl bg-gradient-to-br ${book.gradient} p-4 text-white flex flex-col justify-between relative shadow-sm cursor-pointer" onclick="openStory(${book.id})">
            <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/25 backdrop-blur-sm self-start">${book.genre}</span>
            <div class="my-auto text-center py-2">
              <h3 class="font-serif font-bold text-sm sm:text-base leading-snug drop-shadow line-clamp-3">${book.title}</h3>
            </div>
            <div class="border-t border-white/20 pt-1.5 text-center">
              <p class="text-[11px] font-medium text-white/90 truncate">${book.author}</p>
            </div>
          </div>
          <div class="mt-3 flex flex-col flex-grow justify-between">
            <div>
              <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 hover:text-orange-600 transition cursor-pointer" onclick="openStory(${book.id})">${book.title}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">${book.author}</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5">
              <button onclick="toggleLike(${book.id}, event)" class="p-1.5 rounded-lg border border-rose-200 bg-rose-50 text-rose-500">
                <i data-lucide="heart" class="w-3.5 h-3.5 fill-current"></i>
              </button>
              <button onclick="openStory(${book.id})" class="flex-1 py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-semibold">
                Read Story
              </button>
            </div>
          </div>
        `;
        bookGrid.appendChild(card);
      });

      lucide.createIcons();
      if (!document.body.classList.contains("reader-mode")) document.getElementById("books").scrollIntoView({ behavior: 'smooth' });
    }

    function resetFilters() {
      currentGenre = "All";
      searchQuery = "";
      searchInput.value = "";
      renderGenrePills();
      renderBooks();
    }

    // Search event listener
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderBooks();
    });

    /* ==========================================================
       THEME (DARK / LIGHT) SWITCHER
       ========================================================== */
    function initTheme() {
      const isDark = localStorage.getItem("storyhaven_theme") === "dark" || 
        (!("storyhaven_theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        document.documentElement.classList.add("dark");
        themeIcon.setAttribute("data-lucide", "sun");
      } else {
        document.documentElement.classList.remove("dark");
        themeIcon.setAttribute("data-lucide", "moon");
      }
    }

    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("storyhaven_theme", isDark ? "dark" : "light");
      
      themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
      lucide.createIcons();
    });

    // Run on startup
    window.addEventListener("DOMContentLoaded", init);
