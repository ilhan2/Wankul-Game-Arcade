document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: 'Wankuldex/001-100/Wankul_S1_001_Paysage.webp', name: 'Navire Pirate'},
        { src: 'Wankuldex/001-100/Wankul_S1_002_Paysage.webp', name: 'Portal'},
        { src: 'Wankuldex/001-100/Wankul_S1_003_Paysage.webp', name: 'quantum'},
        { src: 'Wankuldex/001-100/Wankul_S1_004_Paysage.webp', name: 'rocket field'},
        { src: 'Wankuldex/001-100/Wankul_S1_005_Paysage.webp', name: 'rust'},
        { src: 'Wankuldex/001-100/Wankul_S1_006_Paysage.webp', name: 'il fait pas chaud'},
        { src: 'Wankuldex/001-100/Wankul_S1_007_Paysage.webp', name: 'golf'},
        { src: 'Wankuldex/001-100/Wankul_S1_008_Paysage.webp', name: 'dust 2'},
        { src: 'Wankuldex/001-100/Wankul_S1_009_Paysage.webp', name: 'space factory'},
        { src: 'Wankuldex/001-100/Wankul_S1_010_Paysage.webp', name: 'la f.a.q'},
        { src: 'Wankuldex/001-100/Wankul_S1_011_Paysage.webp', name: 'musée'},
        { src: 'Wankuldex/001-100/Wankul_S1_012_Paysage.webp', name: 'fnaf'},
        { src: 'Wankuldex/001-100/Wankul_S1_013_Paysage.webp', name: 'village'},
        { src: 'Wankuldex/001-100/Wankul_S1_014_Paysage.webp', name: 'la ferme'},
        { src: 'Wankuldex/001-100/Wankul_S1_015_Paysage.webp', name: 'socisseau factory'},
        { src: 'Wankuldex/001-100/Wankul_S1_016_Paysage.webp', name: 'trou du monde'},
        { src: 'Wankuldex/001-100/Wankul_S1_017_Paysage.webp', name: 'moria'},
        { src: 'Wankuldex/001-100/Wankul_S1_018_Paysage.webp', name: 'tchernobyl'},
        { src: 'Wankuldex/001-100/Wankul_S1_019_Paysage.webp', name: 'valheim'},
        { src: 'Wankuldex/001-100/Wankul_S1_020_Paysage.webp', name: 'tranchées'},
        { src: 'Wankuldex/001-100/Wankul_S1_021_Paysage.webp', name: 'ravenholm'},
        { src: 'Wankuldex/001-100/Wankul_S1_022_Paysage.webp', name: 'urbex'},
        { src: 'Wankuldex/001-100/Wankul_S1_023_Paysage.webp', name: 'manoir'},
        { src: 'Wankuldex/001-100/Wankul_S1_024_Paysage.webp', name: 'barrage'},
        { src: 'Wankuldex/001-100/Wankul_S1_025_Paysage.webp', name: 'chernogorsk'},
        { src: 'Wankuldex/001-100/Wankul_S1_026_Paysage.webp', name: 'agrou'},
        { src: 'Wankuldex/001-100/Wankul_S1_027_Paysage.webp', name: 'garage'},
        { src: 'Wankuldex/001-100/Wankul_S1_028_Paysage.webp', name: 'uretus'},
        { src: 'Wankuldex/001-100/Wankul_S1_029_Paysage.webp', name: 'wankil show'},
        { src: 'Wankuldex/001-100/Wankul_S1_030_Paysage.webp', name: 'convention'},
        { src: 'Wankuldex/001-100/Wankul_S1_031.webp', name: 'garagiste'},
        { src: 'Wankuldex/001-100/Wankul_S1_032.webp', name: 'garagiste'},
        { src: 'Wankuldex/001-100/Wankul_S1_033.webp', name: 'camionneur'},
        { src: 'Wankuldex/001-100/Wankul_S1_034.webp', name: 'camionneur'},
        { src: 'Wankuldex/001-100/Wankul_S1_035.webp', name: 'vendeur'},
        { src: 'Wankuldex/001-100/Wankul_S1_036.webp', name: 'vendeur'},
        { src: 'Wankuldex/001-100/Wankul_S1_037.webp', name: 'annabelle'},
        { src: 'Wankuldex/001-100/Wankul_S1_038.webp', name: 'grudge'},
        { src: 'Wankuldex/001-100/Wankul_S1_039.webp', name: 'astronaute'},
        { src: 'Wankuldex/001-100/Wankul_S1_040.webp', name: 'astronaute'},
        { src: 'Wankuldex/001-100/Wankul_S1_041.webp', name: 'boxeur'},
        { src: 'Wankuldex/001-100/Wankul_S1_042.webp', name: 'boxeur'},
        { src: 'Wankuldex/001-100/Wankul_S1_043.webp', name: 'infecté'},
        { src: 'Wankuldex/001-100/Wankul_S1_044.webp', name: 'infecté'},
        { src: 'Wankuldex/001-100/Wankul_S1_045.webp', name: 'fermier'},
        { src: 'Wankuldex/001-100/Wankul_S1_046.webp', name: 'fermier'},
        { src: 'Wankuldex/001-100/Wankul_S1_047.webp', name: 'chien'},
        { src: 'Wankuldex/001-100/Wankul_S1_048.webp', name: 'cochon'},
        { src: 'Wankuldex/001-100/Wankul_S1_049.webp', name: 'fromager'},
        { src: 'Wankuldex/001-100/Wankul_S1_050.webp', name: 'charcutier'},
        { src: 'Wankuldex/001-100/Wankul_S1_051.webp', name: 'businessman'},
        { src: 'Wankuldex/001-100/Wankul_S1_052.webp', name: 'débile'},
        { src: 'Wankuldex/001-100/Wankul_S1_053.webp', name: 'débile'},
        { src: 'Wankuldex/001-100/Wankul_S1_054.webp', name: 'paysan'},
        { src: 'Wankuldex/001-100/Wankul_S1_055.webp', name: 'paysan'},
        { src: 'Wankuldex/001-100/Wankul_S1_056.webp', name: 'cuisinier'},
        { src: 'Wankuldex/001-100/Wankul_S1_057.webp', name: 'cuisinier'},
        { src: 'Wankuldex/001-100/Wankul_S1_058.webp', name: 'bébé'},
        { src: 'Wankuldex/001-100/Wankul_S1_059.webp', name: 'bébé'},
        { src: 'Wankuldex/001-100/Wankul_S1_060.webp', name: 'chasseur'},
        { src: 'Wankuldex/001-100/Wankul_S1_061.webp', name: 'pilote d\'avion'},
        { src: 'Wankuldex/001-100/Wankul_S1_062.webp', name: 'agrou'},
        { src: 'Wankuldex/001-100/Wankul_S1_063.webp', name: 'agrou'},
        { src: 'Wankuldex/001-100/Wankul_S1_064.webp', name: 'chevalier'},
        { src: 'Wankuldex/001-100/Wankul_S1_065.webp', name: 'chevalier'},
        { src: 'Wankuldex/001-100/Wankul_S1_066.webp', name: 'peintre'},
        { src: 'Wankuldex/001-100/Wankul_S1_067.webp', name: 'peintre'},
        { src: 'Wankuldex/001-100/Wankul_S1_068.webp', name: 'pompier'},
        { src: 'Wankuldex/001-100/Wankul_S1_069.webp', name: 'pompier'},
        { src: 'Wankuldex/001-100/Wankul_S1_070.webp', name: 'sorcier'},
        { src: 'Wankuldex/001-100/Wankul_S1_071.webp', name: 'sorcier'},
        { src: 'Wankuldex/001-100/Wankul_S1_072.webp', name: 'sdf'},
        { src: 'Wankuldex/001-100/Wankul_S1_073.webp', name: 'sdf'},
        { src: 'Wankuldex/001-100/Wankul_S1_074.webp', name: 'touriste'},
        { src: 'Wankuldex/001-100/Wankul_S1_075.webp', name: 'touriste'},
        { src: 'Wankuldex/001-100/Wankul_S1_076.webp', name: 'employé wcdo'},
        { src: 'Wankuldex/001-100/Wankul_S1_077.webp', name: 'employé wcdo'},
        { src: 'Wankuldex/001-100/Wankul_S1_078.webp', name: 'mort-vivant'},
        { src: 'Wankuldex/001-100/Wankul_S1_079.webp', name: 'mort-vivant'},
        { src: 'Wankuldex/001-100/Wankul_S1_080.webp', name: 'soldat romain'},
        { src: 'Wankuldex/001-100/Wankul_S1_081.webp', name: 'spiderlaink'},
        { src: 'Wankuldex/001-100/Wankul_S1_082.webp', name: 'thorracid'},
        { src: 'Wankuldex/001-100/Wankul_S1_083.webp', name: 'ct'},
        { src: 'Wankuldex/001-100/Wankul_S1_084.webp', name: 'terro'},
        { src: 'Wankuldex/001-100/Wankul_S1_085.webp', name: 'clown tueur'},
        { src: 'Wankuldex/001-100/Wankul_S1_086.webp', name: 'joueur du grenier'},
        { src: 'Wankuldex/001-100/Wankul_S1_087.webp', name: 'seb'},
        { src: 'Wankuldex/001-100/Wankul_S1_088.webp', name: 'amixem'},
        { src: 'Wankuldex/001-100/Wankul_S1_089.webp', name: 'pirate'},
        { src: 'Wankuldex/001-100/Wankul_S1_090.webp', name: 'pirate'},
        { src: 'Wankuldex/001-100/Wankul_S1_091.webp', name: 'semi-homme'},
        { src: 'Wankuldex/001-100/Wankul_S1_092.webp', name: 'semi-homme'},
        { src: 'Wankuldex/001-100/Wankul_S1_093.webp', name: 'marthie'},
        { src: 'Wankuldex/001-100/Wankul_S1_094.webp', name: 'doc'},
        { src: 'Wankuldex/001-100/Wankul_S1_095.webp', name: 'vieille'},
        { src: 'Wankuldex/001-100/Wankul_S1_096.webp', name: 'vieille'},
        { src: 'Wankuldex/001-100/Wankul_S1_097.webp', name: 'fanboy'},
        { src: 'Wankuldex/001-100/Wankul_S1_098.webp', name: 'fangirl'},
        { src: 'Wankuldex/001-100/Wankul_S1_099.webp', name: 'gotaga'},
        { src: 'Wankuldex/001-100/Wankul_S1_100.webp', name: 'billy le bonhomme de neige'},
        { src: 'Wankuldex/101-180/Wankul_S1_101.webp', name: 'gremlin'},
        { src: 'Wankuldex/101-180/Wankul_S1_102.webp', name: 'steve'},
        { src: 'Wankuldex/101-180/Wankul_S1_103.webp', name: 'steve'},
        { src: 'Wankuldex/101-180/Wankul_S1_104.webp', name: 'apprenti sorcière'},
        { src: 'Wankuldex/101-180/Wankul_S1_105.webp', name: 'elfe'},
        { src: 'Wankuldex/101-180/Wankul_S1_106.webp', name: 'sel'},
        { src: 'Wankuldex/101-180/Wankul_S1_107.webp', name: 'sel'},
        { src: 'Wankuldex/101-180/Wankul_S1_108.webp', name: 'mastu'},
        { src: 'Wankuldex/101-180/Wankul_S1_109.webp', name: 'deotoons'},
        { src: 'Wankuldex/101-180/Wankul_S1_110.webp', name: 'cowboy'},
        { src: 'Wankuldex/101-180/Wankul_S1_111.webp', name: 'cowboy'},
        { src: 'Wankuldex/101-180/Wankul_S1_112.webp', name: 'policier'},
        { src: 'Wankuldex/101-180/Wankul_S1_113.webp', name: 'policier'},
        { src: 'Wankuldex/101-180/Wankul_S1_114.webp', name: 'obèse'},
        { src: 'Wankuldex/101-180/Wankul_S1_115.webp', name: 'singe'},
        { src: 'Wankuldex/101-180/Wankul_S1_116.webp', name: 'enquêteur'},
        { src: 'Wankuldex/101-180/Wankul_S1_117.webp', name: 'potatoz'},
        { src: 'Wankuldex/101-180/Wankul_S1_118.webp', name: 'jiraya'},
        { src: 'Wankuldex/101-180/Wankul_S1_119.webp', name: 'feldup'},
        { src: 'Wankuldex/101-180/Wankul_S1_120.webp', name: 'bretonne bigoudene'},
        { src: 'Wankuldex/101-180/Wankul_S1_121.webp', name: 'roi'},
        { src: 'Wankuldex/101-180/Wankul_S1_122.webp', name: 'hugo délire'},
        { src: 'Wankuldex/101-180/Wankul_S1_123.webp', name: 'xari'},
        { src: 'Wankuldex/101-180/Wankul_S1_124.webp', name: 'princesse'},
        { src: 'Wankuldex/101-180/Wankul_S1_125.webp', name: 'princesse'},
        { src: 'Wankuldex/101-180/Wankul_S1_126.webp', name: 'prostituée'},
        { src: 'Wankuldex/101-180/Wankul_S1_127.webp', name: 'fée'},
        { src: 'Wankuldex/101-180/Wankul_S1_128.webp', name: 'g cramé'},
        { src: 'Wankuldex/101-180/Wankul_S1_129.webp', name: 'superconeri'},
        { src: 'Wankuldex/101-180/Wankul_S1_130.webp', name: 'moine'},
        { src: 'Wankuldex/101-180/Wankul_S1_131.webp', name: 'cyberlaink'},
        { src: 'Wankuldex/101-180/Wankul_S1_132.webp', name: 'cyberterra'},
        { src: 'Wankuldex/101-180/Wankul_S1_133.webp', name: 'jacques flantier'},
        { src: 'Wankuldex/101-180/Wankul_S1_134.webp', name: 'richard flantier'},
        { src: 'Wankuldex/101-180/Wankul_S1_135.webp', name: 'dresseuse'},
        { src: 'Wankuldex/101-180/Wankul_S1_136.webp', name: 'dresseur'},
        { src: 'Wankuldex/101-180/Wankul_S1_137.webp', name: 'survivant'},
        { src: 'Wankuldex/101-180/Wankul_S1_138.webp', name: 'survivant'},
        { src: 'Wankuldex/101-180/Wankul_S1_139.webp', name: 'wicromania'},
        { src: 'Wankuldex/101-180/Wankul_S1_140.webp', name: 'voyant'},
        { src: 'Wankuldex/101-180/Wankul_S1_141.webp', name: 'pierre rondin'},
        { src: 'Wankuldex/101-180/Wankul_S1_142.webp', name: 'andré rondin'},
        { src: 'Wankuldex/101-180/Wankul_S1_143.webp', name: 'professeur'},
        { src: 'Wankuldex/101-180/Wankul_S1_144.webp', name: 'professeur'},
        { src: 'Wankuldex/101-180/Wankul_S1_145.webp', name: 'samouraï'},
        { src: 'Wankuldex/101-180/Wankul_S1_146.webp', name: 'sage japonais'},
        { src: 'Wankuldex/101-180/Wankul_S1_147.webp', name: 'jeanine'},
        { src: 'Wankuldex/101-180/Wankul_S1_148.webp', name: 'martine'},
        { src: 'Wankuldex/101-180/Wankul_S1_149.webp', name: 'laink'},
        { src: 'Wankuldex/101-180/Wankul_S1_150.webp', name: 'terracid'},
        { src: 'Wankuldex/101-180/Wankul_S1_151.webp', name: 'cowboy'},
        { src: 'Wankuldex/101-180/Wankul_S1_152.webp', name: 'cowboy'},
        { src: 'Wankuldex/101-180/Wankul_S1_153.webp', name: 'policier'},
        { src: 'Wankuldex/101-180/Wankul_S1_154.webp', name: 'policier'},
        { src: 'Wankuldex/101-180/Wankul_S1_155.webp', name: 'sel'},
        { src: 'Wankuldex/101-180/Wankul_S1_156.webp', name: 'sel'},
        { src: 'Wankuldex/101-180/Wankul_S1_157.webp', name: 'fromager'},
        { src: 'Wankuldex/101-180/Wankul_S1_158.webp', name: 'charcutier'},
        { src: 'Wankuldex/101-180/Wankul_S1_159.webp', name: 'gotaga'},
        { src: 'Wankuldex/101-180/Wankul_S1_160.webp', name: 'amixem'},
        { src: 'Wankuldex/101-180/Wankul_S1_161.webp', name: 'pirate'},
        { src: 'Wankuldex/101-180/Wankul_S1_162.webp', name: 'pirate'},
        { src: 'Wankuldex/101-180/Wankul_S1_163.webp', name: 'mastu'},
        { src: 'Wankuldex/101-180/Wankul_S1_164.webp', name: 'g cramé'},
        { src: 'Wankuldex/101-180/Wankul_S1_165.webp', name: 'ct'},
        { src: 'Wankuldex/101-180/Wankul_S1_166.webp', name: 'terro'},
        { src: 'Wankuldex/101-180/Wankul_S1_167.webp', name: 'joueur du grenier'},
        { src: 'Wankuldex/101-180/Wankul_S1_168.webp', name: 'seb'},
        { src: 'Wankuldex/101-180/Wankul_S1_169.webp', name: 'wicromania'},
        { src: 'Wankuldex/101-180/Wankul_S1_170.webp', name: 'voyant'},
        { src: 'Wankuldex/101-180/Wankul_S1_171.webp', name: 'pierre rondin'},
        { src: 'Wankuldex/101-180/Wankul_S1_172.webp', name: 'andré rondin'},
        { src: 'Wankuldex/101-180/Wankul_S1_173.webp', name: 'survivant'},
        { src: 'Wankuldex/101-180/Wankul_S1_174.webp', name: 'survivant'},
        { src: 'Wankuldex/101-180/Wankul_S1_175.webp', name: 'jacques flantier'},
        { src: 'Wankuldex/101-180/Wankul_S1_176.webp', name: 'richard flantier'},
        { src: 'Wankuldex/101-180/Wankul_S1_177.webp', name: 'jeanine'},
        { src: 'Wankuldex/101-180/Wankul_S1_178.webp', name: 'martine'},
        { src: 'Wankuldex/101-180/Wankul_S1_179.webp', name: 'laink'},
        { src: 'Wankuldex/101-180/Wankul_S1_180.webp', name: 'terracid'},]
        // Ajoute ici les chemins vers toutes tes images

    const randomImage = document.getElementById('randomImage');
    const userGuess = document.getElementById('userGuess');
    const checkButton = document.getElementById('checkButton');
    const livesDisplay = document.getElementById('livesDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const startScreen = document.getElementById("startScreen");
    const gameContent = document.getElementById("gameContent");
    const startButton = document.getElementById("startButton");
    const restartButton = document.getElementById("restartButton");

    let currentImage = {};
    let errorCount = 0; // Compteur d'erreurs
    const maxErrors = 4; // Nombre maximal d'erreurs autorisées
    const maxLives = 3; // Nombre maximal de vies
    let lives = maxLives; // Nombre actuel de vies
    let score = 0; // Compteur de cartes trouvées
    let currentBlurLevel = 60; // Niveau de flou actuel
    let isCorrect = false;

    function updateLivesDisplay() {
        livesDisplay.textContent = `Vies restantes : ${lives}`;
    }

    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score : ${score}`;
    }

    function updateBlur() {
        // Supprime toutes les classes de blur avant d'en ajouter une nouvelle
        randomImage.classList.remove('blur-60', 'blur-50', 'blur-45', 'blur-30');
        // Applique la classe de blur en fonction du nombre d'erreurs
        if (errorCount === 1) {
            randomImage.classList.add('blur-50');
            currentBlurLevel = 50;
        } else if (errorCount === 2) {
            randomImage.classList.add('blur-45');
            currentBlurLevel = 45;
        } else if (errorCount === 3) {
            randomImage.classList.add('blur-30');
            currentBlurLevel = 30;
        }
    }

    function getPointsForBlurLevel() {
        switch (currentBlurLevel) {
            case 60: return 4;
            case 50: return 3;
            case 45: return 2;
            case 30: return 1;
            default: return 0;
        }
    }

    function displayRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        currentImage = images[randomIndex];
        randomImage.src = currentImage.src;
        userGuess.value = ''; // Réinitialise la valeur du champ de saisie

        // Réinitialise le niveau de blur pour la nouvelle image
        randomImage.classList.remove('blur-60', 'blur-50', 'blur-45', 'blur-30');
        errorCount = 0; // Réinitialise le compteur d'erreurs
        currentBlurLevel = 60; // Réinitialise le niveau de flou
        randomImage.classList.add('blur-60'); // Applique l'effet de blur initial
        checkButton.textContent = "Vérifier"; // Réinitialise le texte du bouton
    }

    function showGameOverScreen() {
        const gameOverScreen = document.getElementById('gameOverScreen');
        const finalScoreElement = document.getElementById('finalScore');
        finalScoreElement.textContent = `Votre score : ${score}`;
        gameOverScreen.classList.remove('hidden');
        gameOverScreen.classList.add('fade-in');
        generateConfetti();
    }

    function generateConfetti() {
        const confettiContainer = document.getElementById('confetti') || document.createElement('div');
        confettiContainer.id = 'confetti';
        if (!document.getElementById('confetti')) {
            document.body.appendChild(confettiContainer);
        }

        const colors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3', '#9C27B0'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * 100}vh`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confettiContainer.appendChild(confetti);
        }
    }

    function restartGame() {
        const gameOverScreen = document.getElementById('gameOverScreen');
        gameOverScreen.classList.add('fade-out');
        setTimeout(() => {
            gameOverScreen.classList.add('hidden');
            gameOverScreen.classList.remove('fade-out', 'fade-in');
            score = 0;
            lives = maxLives;
            updateScoreDisplay();
            updateLivesDisplay();
            displayRandomImage();
            // Remove confetti container when restarting
            const confettiContainer = document.getElementById('confetti');
            if (confettiContainer) {
                confettiContainer.remove();
            }
        }, 500); // Attend la fin de l'animation de fondu (1s)
    }

    document.getElementById('startButton').addEventListener('click', function() {
        const startScreen = document.getElementById('startScreen');
        startScreen.style.opacity = '0';
        startScreen.style.transition = 'opacity 5s';
    
        // Appliquer le gradient de manière différée pour éviter les bandes
        setTimeout(function() {
            document.body.classList.add('bg-gradient'); // Ajouter la classe pour le gradient
            setTimeout(function() {
                startScreen.style.display = 'none';
            }, 5000); // Cacher l'écran de début après la transition
        }, 3000); // Ajuster ce délai si nécessaire pour éviter les bandes
    });

    // Fonction pour afficher l'animation des cœurs tranchés
    function showHeartAnimation() {
        // Affiche le flou de fond
        blurBackground.style.opacity = 1;
        
        // Crée le conteneur de l'animation
        const heartContainer = document.createElement('div');
        heartContainer.id = 'heartContainer';

        // Crée et ajoute les éléments du cœur tranché
        const heartLeft = document.createElement('img');
        heartLeft.src = 'images/heart-left.svg';
        heartLeft.classList.add('heart', 'heart-left');
        heartContainer.appendChild(heartLeft);

        const heartRight = document.createElement('img');
        heartRight.src = 'images/heart-right.svg';
        heartRight.classList.add('heart', 'heart-right');
        heartContainer.appendChild(heartRight);

        // Ajoute le conteneur au body
        document.body.appendChild(heartContainer);

        // Enlève le conteneur après l'animation
        setTimeout(() => {
            heartContainer.remove();
        }, 4000); // Durée de l'animation (3s)
    }

    function checkUserGuess() {
        const userInput = userGuess.value.trim().toLowerCase(); // Convertit la réponse en minuscules
        const correctName = currentImage.name.toLowerCase(); // Convertit le nom de l'image en minuscules
        
        if (userInput === correctName) {
            const points = getPointsForBlurLevel(); // Obtient les points en fonction du niveau de flou
            score += points; // Ajoute les points au score
            errorCount = 0; // Réinitialise le compteur d'erreurs après une bonne réponse
            randomImage.classList.remove('blur-60', 'blur-50', 'blur-45', 'blur-30');
            checkButton.textContent = "Suivant"; // Change le texte du bouton
            isCorrect = true; // Indique que la réponse est correcte
            updateScoreDisplay(); // Met à jour l'affichage du score
            
            // Appliquer l'effet d'aura dorée
            randomImage.classList.add("aura");
        
            // Optionnel: Enlever l'effet après un certain temps pour préparer la prochaine carte
            setTimeout(() => {
                randomImage.classList.remove("aura");
            }, 2000); // La durée de l'animation d'aura
        } else {
            errorCount++; // Incrémente le compteur d'erreurs
            updateBlur();
            if (errorCount >= maxErrors) {
                lives--; // Perdre une vie après 4 erreurs
                if (lives > 0) {
                    alert(`Désolé, vous êtes nuls. Le nom de la carte était "${currentImage.name}".`);
                    errorCount = 0; // Réinitialise le compteur d'erreurs et affiche une nouvelle image
                    showHeartAnimation(); // Appel de la fonction d'animation
                    displayRandomImage();
                } else {
                    // Aucune vie restante, fin du jeu
                    showGameOverScreen(); // Affiche l'écran de fin de jeu
                }
            updateLivesDisplay(); // Met à jour l'affichage des vies
            }
        }
    }

    // Fonction pour passer à la carte suivante
    function nextCard() {
        isCorrect = false;
        displayRandomImage();
    }

    // checkButton.addEventListener('click', checkUserGuess);

    

    // Fonction pour démarrer le jeu
    function startGame() {
        // Ajoute une classe pour commencer la transition de fondu
        startScreen.classList.add("hidden");

        // Affiche le contenu du jeu après la fin de la transition
        setTimeout(() => {
            gameContent.style.display = 'block'; // Affiche le contenu du jeu
            displayRandomImage(); // Affiche une image aléatoire pour commencer
        }, 3000); // Durée de la transition
    }

    // Initialisation du jeu
    updateLivesDisplay(); // Affiche les vies restantes au début du jeu
    updateScoreDisplay(); // Affiche le score initial
    displayRandomImage();
    
    // Événements
    document.getElementById('startButton').addEventListener('click', startGame);
    checkButton.addEventListener('click', () => {
        if (isCorrect) {
            nextCard();
        } else {
            checkUserGuess();
        }
    });
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
});
