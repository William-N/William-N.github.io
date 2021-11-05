/**
 * 
 * 
 * 
 */

$('document').ready(function() {
    $('#Lokali-People-Cultures-Ariales').click(function() {
        $('#wiki-page').html(loadAriales())
    })

    $('#Lokali-People-Cultures-Astis').click(function() {
        $('#wiki-page').html(loadAstis())
    })

    $('#Lokali-People-Cultures-Caybluff').click(function() {
        $('#wiki-page').html(loadCaybluff())
    })

    $('#Lokali-People-Cultures-Gara').click(function() {
        $('#wiki-page').html(loadGara())
    })

    $('#Lokali-People-Cultures-Godobald').click(function() {
        $('#wiki-page').html(loadGodobald())
    })

    $('#Lokali-People-Cultures-Skoro').click(function() {
        $('#wiki-page').html(loadSkoro())
    })

    $('#Lokali-People-Cultures-Ngyemu').click(function() {
        $('#wiki-page').html(loadNgyemu())
    })

    $('#Lokali-People-Cultures-Kotal').click(function() {
        $('#wiki-page').html(loadKotal())
    })

    $('#Lokali-People-Cultures-Ryuga').click(function() {
        $('#wiki-page').html(loadRyuga())
    })

    $('#Lokali-People-Cultures-Tehueypec').click(function() {
        $('#wiki-page').html(loadTehueypec())
    })

    $('#Lokali-People-Cultures-Tizarna').click(function() {
        $('#wiki-page').html(loadTizarna())
    })

    $('#Lokali-People-Cultures-Vevide').click(function() {
        $('#wiki-page').html(loadVevide())
    })

    $('#Lokali-Geography-Continents-Anes').click(function() {
        $('#wiki-page').html(loadAnes())
    })

    $('#Lokali-Geography-Continents-Durios').click(function() {
        $('#wiki-page').html(loadDurios())
    })

    $('#Lokali-Geography-Continents-Duria').click(function() {
        $('#wiki-page').html(loadDuria())
    })

    $('#Magi-Early_Lokalian_Theory').click(function() {
        $('#wiki-page').html(loadEarlyLokalianTheory())
    })

    $('#Magi-Magi_2nd_Industrial_Era').click(function() {
        $('#wiki-page').html(loadMagiInTheSecondIndustrialEra())
    })

    $('#Magi-Industrial_Lokalian_Theory').click(function() {
        $('#wiki-page').html(loadIndustrialLokalianTheory())
    })
});

/**
 * 
 *  
 * 
 */

function loadArticle(title, text) {
    return `
    <div class='card'>
        <div class='card-body'>
            <h5 class='card-title'>${title}</h5>
            <p class='card-text'>
                ${text}
            </p>
        </div>
    </div>
    `
}

function loadAriales() {
    return loadArticle(ArialesTitle, ArialesText)
}

function loadAstis() {
    return loadArticle(AstisTitle, AstisText)
}

function loadCaybluff() {
    return loadArticle(CaybluffTitle, CaybluffText)
}

function loadGara() {
    return loadArticle(GaraTitle, GaraText)
}

function loadGodobald() {
    return loadArticle(GodobaldTitle, GodobaldText)
}

function loadSkoro() {
    return loadArticle(SkoroTitle, SkoroText)
}

function loadKotal() {
    return loadArticle(KotalTitle, KotalText)
}

function loadNgyemu() {
    return loadArticle(NgyemuTitle, NgyemuText)
}

function loadRyuga() {
    return loadArticle(RyugaTitle, RyugaText)
}

function loadTehueypec() {
    return loadArticle(TehueypecTitle, TehueypecText)
}

function loadTizarna() {
    return loadArticle(TizarnaTitle, TizarnaText)
}

function loadVevide() {
    return loadArticle(VevideTitle, VevideText)
}

function loadAnes() {
    return loadArticle(AnesTitle, AnesText)
}

function loadDurios() {
    return loadArticle(DuriosTitle, DuriosText)
}

function loadDuria() {
    return loadArticle(DuriaTitle, DuriaText)
}

function loadEarlyLokalianTheory() {
    return loadArticle(EarlyLokalianTheoryTitle, EarlyLokalianTheoryText)
}

function loadMagiInTheSecondIndustrialEra() {
    return loadArticle(MagiInTheSecondIndustrialEraTitle, MagiInTheSecondIndustrialEraText)
}

function loadIndustrialLokalianTheory() {
    return loadArticle(IndustrialLokalianTheoryTitle, IndustrialLokalianTheoryText)
}

/**
 * 
 * 
 * 
 */

const ArialesTitle =`
Ariales
`
const ArialesText =`
West of Anes, southwest of the Kotal, lies the lands of Ariales where civilization is at the pinnacle of progress.
Houses of knowledge push the boundaries of knowledge and transfer it to the people of the city. It is here that the study of Magi begins,
and where all Magnus originate from. Deserts are plentiful here, as are the rivers providing bountiful harvests. 
`
const AstisTitle =`
Astis
`
const AstisText =`
South of the Ariales lie the Astis, who live off rivers as much as the Ariales do, but instead of focusing on knowledge or military might,
the Astis are famed for their engineering marvels. Currently the Astis are vassilized by the Arilian Abdul Dynasty. 
`
const CaybluffTitle =`
Caybluff
`
const CaybluffText =`
North of the Jansen and Vevide lie the island of Caybluff and its people. With a long history of conquest by the Cirilians,
Godobald, and most recently the Jansen, before gaining independence. Though they claim to be their own people,
the influence of other civilizations has changed the course of Caybluffian history. 
Originally a subculture of the northern Godobaldians, the Bluffians invaded the former Cirilian territory with survivors of the empire
and the local Caydian inhabitants. After four decades of fighting, the capital of Caydian was renamed to Caybluff to represent peace between
the two people. Marriage resulted in a rapid synthesis of the two cultures and a newly defined royal class.
After the conflict settled, boats were dispatched to Anes to explore the formerly Cirlian lands and create a ground for future expansion. 
Unable to claim the entire southern coast, the king of Upper Godobald brokered an agreement with the then queen of Caybluff to divide the land
and protect each other from foreign or domestic colonial threats.
`
const GaraTitle =`
Gara
`
const GaraText =`
South of Astis is a thin portion of the crescent continent of Duria, where monsoons fuel the jungles of the region. The Gara are said to have
hailed from the planet of its same name, but their exact origins are questionable at best. Some things appear to be lost to history forever.
`
const GodobaldTitle =`
Godobald
`
const GodobaldText =`
Mountains mostly separate the Tehueypac from the other civilizations of Durios. As the continent curves east, one can find the Godobald people.
A massive culture group containing people from differing climates and biomes, they are united through their stories and traditions of fighting the
Cirilians centuries ago. Having evolved technologically since such battles, the Godobald collectives are forming new governments and societies within
themselves. Region originated as tribal society united against Cirilian Empire invasion of south. Tribes last united by King Mariwig Adald, or Mariwig
the Noble. Vast Kingdom split by five sons who wared in the resulting 3 kingdoms and a derivative Vevide kingdom to the east (Upper & Lower Godobald, Gratus, Vevide).
Hardcore feudal society, barons, counts, dukes, kings, but no emperors… yet. Most of land congregated by dukes, only 1 kingdom prevented internal warfare in legal code
(King Vaefar of Upper Godobald). Upper Godobald wealthier of Godobald kingdoms given port and trade. o Negotiate cooperation pact with Caybluff to peacefully settle
former Cirilian lands and trade by splitting the continent in half, east (Godobald) and west (Caybluff). • Like most vegetation on Lokali, grains are thicker and denser
than on other worlds. o Unlike in other cultures however, Godobaldians do not attempt to thin out their food, and eat less of dense meals. 
Class system relies highly on warfare, low born are picked to inherit lands based on martial ability. Rebellions often result in local despots being 
overthrown by great warriors. • Desire to expand lands and exploit resources comes from trade with Arilians. To rival them in wealth, lands of Cirilian Empire
are explored, and land given to the best warriors.
`
const SkoroTitle =`
Skoro
`
const SkoroText =`
Separated by a narrow sea in all parts but the most southern snowy plain, the Vevide are bordered by the Skoro raiders,
who thrive in the heat of battle. South of the Vevide and Skoro are small enclaves of Tizarnian people who are brave enough to be open
targets to the Skoro raiders. With a majority of the seasons being cold and not optimal for agriculture, grains are thinner than across the rest of the world,
and diets consist of more livestock, which can be sustained on the thinner grains of barely. • Originally stratified by a system of warrior classes, wealth
through sea travel raids brought change to the social structure of the land. Those who did not raid foreign shores attempted to raid local ones,
but a new system of tribal lords would defend the local shores while foreign raiders would plunder abroad. This created a divide between the loosely
organized tribes and those highly organized ones which exchanged food for protection. • Most loose tribes do not attempt to raid alone anymore and live
off the remote mountains on the eastern coast of the continent. These tribes are fleeting, every season more and more tribes people assimilate into the
highly organized tribes. • With some of the most sophisticated boats on the planet, the Skoro sail past Caybluff through the hard seas of the world,
onto both Anes and other continents throughout the world. • As local strife lessens, conflict turns towards raiding the world, fueling the local regional
wealth. Defended by mountains from the west, it is neigh impossible for war to conquer the Skoro through warfare. • The Cirilian Empire from Anes attempted
to wage war on the coasts of Skoro in eras past, leading to generations of hardened warriors to emerge. The Skoro learned from the Cirilian boat designs how
to cross the hard seas by deconstructing their technology and improving on it. The result was orchestrated raids on Cirilian lands and the start of the
raiding culture on Anes and the wider world.
`
const KotalTitle =`
Kotal
`
const KotalText =`
The Kotal reside to the far north of Anes on Lokali, a nomadic steppe people who rely on horses and other steppe animals to live their lives.
Living off the land, these people do not exploit the riches of the land that other civilizations might.
`
const NgyemuTitle =`
Ngyemu
`
const NgyemuText =`
Locked away from reaching the shores of Anes, the Ngyemu are congregation of tribal governments that trade goods across the desert to the
Arilians and Astis. Legends say that they possess mines of minerals that sparkle like the night sky.
`
const RyugaTitle =`
Ryuga
`
const RyugaText =`
Southeast of the Kotal are the Ryugans, whose vast culture group ranges from the rivers of Tumen and the island of Ryuga itself.
Aside from skirmishes with the Kotal, these are a more peaceful people who only notion of war is war with oneself.
`
const TehueypecTitle =`
Tehueypec
`
const TehueypecText =`
Though the Gara hold a grip on the southern region of Duria and its surrounding islands, Durios, whose crescent curves south from west to east,
neighbors the Gara with a hostile civilization known as the Tehueypec. Said to have once inhabited the lands from the mountains on their southern
border to the jungles of southern Duria, they have a long standing gripe against the Gara who've fought for those lands for centuries. The Tehueypec
practice human sacrifice to the gods above.
`
const TizarnaTitle =`
Tizarna
`
const TizarnaText =`
While Durios curves further east, to the south of the Godobald lie the Tizarna, who live in the tundra of the south, approaching the southern pole of the planet.
`
const VevideTitle =`
Vevide
`
const VevideText =`
As Durios curves no more and the continent meets its eastern end, the terrain becomes mountainous where the Vevide reside, next to the Godobald people.
`
const AnesTitle =`
Anes
`
const AnesText =`

`
const DuriosTitle =`
Durios
`
const DuriosText =`

`
const DuriaTitle =`
Duria
`
const EarlyLokalianTheoryTitle =`
Early Lokalian Theory
`
const EarlyLokalianTheoryText =`
The latest theory of Magi on Lokali, coming from the scholarly fields of Ariales, views incantations of Magi as requiring a Magnus, a theoretical construct that envisions the body’s way of controlling Magi. The Magnus is purely theoretical, one can see it akin to cognition. There are different casts of Magi that tear away from the Magnus and weaken it. However similar to a muscle, it can recover with rest. It also appears that, like a muscle, using Magi over time can strengthen the Magnus, allowing for more casts without rest. Not all casts take away from the Magnus, some casts referred to as Cantrips can be used repeatedly without fear of wearing away at the Magnus.

Those more in-tune with the Magnus, referred to as Sorcerers, can manipulate aspects of their Magnus to cast certain incantations by sacrificing other aspects of the Magnus. These sorcerers also appear to have more control over the Magnus as well, being able to use meta-magi. 

Warlocks must bond with a creature or being with a superior Magnus in order to draw from their power. Not fully understood, it would appear that one or both Magnus are used to cast various Magi.

Wizards, while not possessing the Magnus of a Sorcerer, can cast Magi with a little bit of help by uttering certain phrases and/or possessing certain objects. Instead of memorizing a spell, these Magnus carry casting books, with the details on how to perform such Magi.
`
const MagiInTheSecondIndustrialEraTitle =`
Magi in the Second Industrial Era
`
const MagiInTheSecondIndustrialEraText =`
With Magi becoming common-place, technology became intertwined with Magnus, who were being taught in droves. Magi fueled travel, communication, agriculture, industry, and medicine. Magi in this era was pushed to its limits, with theory of Magi seeing the development and training of Cantrips that could be used in everyday practice. Boats and air balloons were powered by Magi in new and unique forms. While the understanding of what Magi did not evolve, its applications and use was pushed to the limits of technology.
`
const IndustrialLokalianTheoryTitle =`
Industrial Lokalian Theory
`
const IndustrialLokalianTheoryText =`
As technology progresses, the fields of chemistry and alchemy come to study Magi and the Magnus as well. The prevailing theory still referring to the two phenomena as Magi and Magnus take the theory one step further, implying that the Magnus is a soul-like entity existing within most life that allows for the manipulation of chemical properties via a subatomic interface. Magi now refers to the theoretical particle which alchemically changes the environment to allow casts to occur.

Eventually renowned Magnus break open the planes of reality and discover Universal travel. The travelers refer to these locations as planes, being radically different from the worlds of Magnus. Not realizing where in the cosmos or universe these Magnus are, the most easily traveled worlds are thought of to be parallel realities broken into through Magi. In reality, Magi is being used to cross worlds by focusing on giant worlds with massive gravitational pulls. Ironically enough, one of the parallel planes is in fact the world of Osada, within the star of Magnus. 

After astrological studies on Osada realize that the Magnus on the planet are not in-fact in a different parallel plane of reality, ideas of what Magi travel could be spun theories of travel across space. Inhabitants of the planets thought that perhaps there was more to the universe than their star, that perhaps the grey stations rotating around the planets have connections with the gods of old after all! A new interest in traveling the stars now influences the science of tomorrow.
`