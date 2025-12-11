// ERWEITERTE VERBLISTE FÜR GRUNDSCHUL-GRUNDWORTSCHATZ
const VERB_LIST = [
    // Regelmäßige Verben
    { infinitive: "spielen", präsens: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" }, 
      präteritum: { ich: "spielte", du: "spieltest", er: "spielte", wir: "spielten", ihr: "spieltet", sie: "spielten" },
      perfekt: { ich: "habe gespielt", du: "hast gespielt", er: "hat gespielt", wir: "haben gespielt", ihr: "habt gespielt", sie: "haben gespielt" },
      plusquamperfekt: { ich: "hatte gespielt", du: "hattest gespielt", er: "hatte gespielt", wir: "hatten gespielt", ihr: "hattet gespielt", sie: "hatten gespielt" },
      type: "regular" },
    
    { infinitive: "lernen", präsens: { ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" }, 
      präteritum: { ich: "lernte", du: "lerntest", er: "lernte", wir: "lernten", ihr: "lerntet", sie: "lernten" },
      perfekt: { ich: "habe gelernt", du: "hast gelernt", er: "hat gelernt", wir: "haben gelernt", ihr: "habt gelernt", sie: "haben gelernt" },
      plusquamperfekt: { ich: "hatte gelernt", du: "hattest gelernt", er: "hatte gelernt", wir: "hatten gelernt", ihr: "hattet gelernt", sie: "hatten gelernt" },
      type: "regular" },
    
    { infinitive: "arbeiten", präsens: { ich: "arbeite", du: "arbeitest", er: "arbeitet", wir: "arbeiten", ihr: "arbeitet", sie: "arbeiten" }, 
      präteritum: { ich: "arbeitete", du: "arbeitetest", er: "arbeitete", wir: "arbeiteten", ihr: "arbeitetet", sie: "arbeiteten" },
      perfekt: { ich: "habe gearbeitet", du: "hast gearbeitet", er: "hat gearbeitet", wir: "haben gearbeitet", ihr: "habt gearbeitet", sie: "haben gearbeitet" },
      plusquamperfekt: { ich: "hatte gearbeitet", du: "hattest gearbeitet", er: "hatte gearbeitet", wir: "hatten gearbeitet", ihr: "hattet gearbeitet", sie: "hatten gearbeitet" },
      type: "regular" },
    
    { infinitive: "wohnen", präsens: { ich: "wohne", du: "wohnst", er: "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen" }, 
      präteritum: { ich: "wohnte", du: "wohntest", er: "wohnte", wir: "wohnten", ihr: "wohntet", sie: "wohnten" },
      perfekt: { ich: "habe gewohnt", du: "hast gewohnt", er: "hat gewohnt", wir: "haben gewohnt", ihr: "habt gewohnt", sie: "haben gewohnt" },
      plusquamperfekt: { ich: "hatte gewohnt", du: "hattest gewohnt", er: "hatte gewohnt", wir: "hatten gewohnt", ihr: "hattet gewohnt", sie: "hatten gewohnt" },
      type: "regular" },
    
    { infinitive: "kaufen", präsens: { ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" }, 
      präteritum: { ich: "kaufte", du: "kauftest", er: "kaufte", wir: "kauften", ihr: "kauftet", sie: "kauften" },
      perfekt: { ich: "habe gekauft", du: "hast gekauft", er: "hat gekauft", wir: "haben gekauft", ihr: "habt gekauft", sie: "haben gekauft" },
      plusquamperfekt: { ich: "hatte gekauft", du: "hattest gekauft", er: "hatte gekauft", wir: "hatten gekauft", ihr: "hattet gekauft", sie: "hatten gekauft" },
      type: "regular" },
    
    // Verben mit e->i-Wechsel
    { infinitive: "geben", präsens: { ich: "gebe", du: "gibst", er: "gibt", wir: "geben", ihr: "gebt", sie: "geben" }, 
      präteritum: { ich: "gab", du: "gabst", er: "gab", wir: "gaben", ihr: "gabt", sie: "gaben" },
      perfekt: { ich: "habe gegeben", du: "hast gegeben", er: "hat gegeben", wir: "haben gegeben", ihr: "habt gegeben", sie: "haben gegeben" },
      plusquamperfekt: { ich: "hatte gegeben", du: "hattest gegeben", er: "hatte gegeben", wir: "hatten gegeben", ihr: "hattet gegeben", sie: "hatten gegeben" },
      type: "strong" },
    
    { infinitive: "sehen", präsens: { ich: "sehe", du: "siehst", er: "sieht", wir: "sehen", ihr: "seht", sie: "sehen" }, 
      präteritum: { ich: "sah", du: "sahst", er: "sah", wir: "sahen", ihr: "saht", sie: "sahen" },
      perfekt: { ich: "habe gesehen", du: "hast gesehen", er: "hat gesehen", wir: "haben gesehen", ihr: "habt gesehen", sie: "haben gesehen" },
      plusquamperfekt: { ich: "hatte gesehen", du: "hattest gesehen", er: "hatte gesehen", wir: "hatten gesehen", ihr: "hattet gesehen", sie: "hatten gesehen" },
      type: "strong" },
    
    { infinitive: "sprechen", präsens: { ich: "spreche", du: "sprichst", er: "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen" }, 
      präteritum: { ich: "sprach", du: "sprachst", er: "sprach", wir: "sprachen", ihr: "spracht", sie: "sprachen" },
      perfekt: { ich: "habe gesprochen", du: "hast gesprochen", er: "hat gesprochen", wir: "haben gesprochen", ihr: "habt gesprochen", sie: "haben gesprochen" },
      plusquamperfekt: { ich: "hatte gesprochen", du: "hattest gesprochen", er: "hatte gesprochen", wir: "hatten gesprochen", ihr: "hattet gesprochen", sie: "hatten gesprochen" },
      type: "strong" },
    
    { infinitive: "nehmen", präsens: { ich: "nehme", du: "nimmst", er: "nimmt", wir: "nehmen", ihr: "nehmt", sie: "nehmen" }, 
      präteritum: { ich: "nahm", du: "nahmst", er: "nahm", wir: "nahmen", ihr: "nahmt", sie: "nahmen" },
      perfekt: { ich: "habe genommen", du: "hast genommen", er: "hat genommen", wir: "haben genommen", ihr: "habt genommen", sie: "haben genommen" },
      plusquamperfekt: { ich: "hatte genommen", du: "hattest genommen", er: "hatte genommen", wir: "hatten genommen", ihr: "hattet genommen", sie: "hatten genommen" },
      type: "strong" },
    
    { infinitive: "essen", präsens: { ich: "esse", du: "isst", er: "isst", wir: "essen", ihr: "esst", sie: "essen" }, 
      präteritum: { ich: "aß", du: "aßest", er: "aß", wir: "aßen", ihr: "aßt", sie: "aßen" },
      perfekt: { ich: "habe gegessen", du: "hast gegessen", er: "hat gegessen", wir: "haben gegessen", ihr: "habt gegessen", sie: "haben gegessen" },
      plusquamperfekt: { ich: "hatte gegessen", du: "hattest gegessen", er: "hatte gegessen", wir: "hatten gegessen", ihr: "hattet gegessen", sie: "hatten gegessen" },
      type: "strong" },
    
    // Modalverben
    { infinitive: "können", präsens: { ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können" }, 
      präteritum: { ich: "konnte", du: "konntest", er: "konnte", wir: "konnten", ihr: "konntet", sie: "konnten" },
      perfekt: { ich: "habe gekonnt", du: "hast gekonnt", er: "hat gekonnt", wir: "haben gekonnt", ihr: "habt gekonnt", sie: "haben gekonnt" },
      plusquamperfekt: { ich: "hatte gekonnt", du: "hattest gekonnt", er: "hatte gekonnt", wir: "hatten gekonnt", ihr: "hattet gekonnt", sie: "hatten gekonnt" },
      type: "modal" },
    
    { infinitive: "müssen", präsens: { ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen" }, 
      präteritum: { ich: "musste", du: "musstest", er: "musste", wir: "mussten", ihr: "musstet", sie: "mussten" },
      perfekt: { ich: "habe gemusst", du: "hast gemusst", er: "hat gemusst", wir: "haben gemusst", ihr: "habt gemusst", sie: "haben gemusst" },
      plusquamperfekt: { ich: "hatte gemusst", du: "hattest gemusst", er: "hatte gemusst", wir: "hatten gemusst", ihr: "hattet gemusst", sie: "hatten gemusst" },
      type: "modal" },
    
    { infinitive: "wollen", präsens: { ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen" }, 
      präteritum: { ich: "wollte", du: "wolltest", er: "wollte", wir: "wollten", ihr: "wolltet", sie: "wollten" },
      perfekt: { ich: "habe gewollt", du: "hast gewollt", er: "hat gewollt", wir: "haben gewollt", ihr: "habt gewollt", sie: "haben gewollt" },
      plusquamperfekt: { ich: "hatte gewollt", du: "hattest gewollt", er: "hatte gewollt", wir: "hatten gewollt", ihr: "hattet gewollt", sie: "hatten gewollt" },
      type: "modal" },
    
    { infinitive: "sollen", präsens: { ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen" }, 
      präteritum: { ich: "sollte", du: "solltest", er: "sollte", wir: "sollten", ihr: "solltet", sie: "sollten" },
      perfekt: { ich: "habe gesollt", du: "hast gesollt", er: "hat gesollt", wir: "haben gesollt", ihr: "habt gesollt", sie: "haben gesollt" },
      plusquamperfekt: { ich: "hatte gesollt", du: "hattest gesollt", er: "hatte gesollt", wir: "hatten gesollt", ihr: "hattet gesollt", sie: "hatten gesollt" },
      type: "modal" },
    
    { infinitive: "dürfen", präsens: { ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen" }, 
      präteritum: { ich: "durfte", du: "durftest", er: "durfte", wir: "durften", ihr: "durftet", sie: "durften" },
      perfekt: { ich: "habe gedurft", du: "hast gedurft", er: "hat gedurft", wir: "haben gedurft", ihr: "habt gedurft", sie: "haben gedurft" },
      plusquamperfekt: { ich: "hatte gedurft", du: "hattest gedurft", er: "hatte gedurft", wir: "hatten gedurft", ihr: "hattet gedurft", sie: "hatten gedurft" },
      type: "modal" },
    
    { infinitive: "mögen", präsens: { ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen" }, 
      präteritum: { ich: "mochte", du: "mochtest", er: "mochte", wir: "mochten", ihr: "mochtet", sie: "mochten" },
      perfekt: { ich: "habe gemocht", du: "hast gemocht", er: "hat gemocht", wir: "haben gemocht", ihr: "habt gemocht", sie: "haben gemocht" },
      plusquamperfekt: { ich: "hatte gemocht", du: "hattest gemocht", er: "hatte gemocht", wir: "hatten gemocht", ihr: "hattet gemocht", sie: "hatten gemocht" },
      type: "modal" }
];

// Personalpronomen in der richtigen Reihenfolge
const PRONOUNS = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
const PRONOUNS_KEYS = ["ich", "du", "er", "wir", "ihr", "sie"];

// Audio-Elemente
const correctSound = document.getElementById('correct-sound');
const errorSound = document.getElementById('error-sound');
const gameWonSound = document.getElementById('gamewon-sound');
const gameLostSound = document.getElementById('gamelost-sound');
const roundWonSound = document.getElementById('roundwon-sound');
const roundLostSound = document.getElementById('roundlost-sound');

// Generiere falsche Antworten für ein bestimmtes Verb, Zeitform und Pronomen
function generateWrongAnswers(verb, tense, pronoun, correctAnswer) {
    const wrongAnswers = [];
    const verbType = verb.type;
    const currentTenseForms = verb[tense];
    
    // Strategie 1: Verwechslung mit anderen Personalformen derselben Zeitform
    const allForms = Object.values(currentTenseForms);
    let similarForms = allForms.filter(form => 
        form !== correctAnswer && 
        !wrongAnswers.includes(form) &&
        Math.random() > 0.3
    );
    
    // Maximal 2 ähnliche Formen nehmen
    if (similarForms.length > 0) {
        wrongAnswers.push(similarForms[0]);
        if (similarForms.length > 1 && wrongAnswers.length < 3) {
            wrongAnswers.push(similarForms[1]);
        }
    }
    
    // Strategie 2: Typische Fehler basierend auf Verbtyp
    if (tense === "präsens") {
        const typicalErrors = generatePresentErrors(verb, pronoun, correctAnswer);
        typicalErrors.forEach(error => {
            if (error !== correctAnswer && !wrongAnswers.includes(error) && wrongAnswers.length < 3) {
                wrongAnswers.push(error);
            }
        });
    }
    
    // Strategie 3: Verwechslung mit anderen Zeitformen
    if (wrongAnswers.length < 3) {
        const otherTenses = ["präsens", "präteritum", "perfekt", "plusquamperfekt"].filter(t => t !== tense);
        const randomTense = otherTenses[Math.floor(Math.random() * otherTenses.length)];
        const otherTenseForm = verb[randomTense][pronoun];
        if (otherTenseForm !== correctAnswer && !wrongAnswers.includes(otherTenseForm)) {
            wrongAnswers.push(otherTenseForm);
        }
    }
    
    // Strategie 4: Komplett falsche Formen generieren
    while (wrongAnswers.length < 3) {
        // Fallback: Einfach eine andere korrekte Form nehmen
        const otherPronouns = PRONOUNS_KEYS.filter(p => p !== pronoun);
        const randomPronoun = otherPronouns[Math.floor(Math.random() * otherPronouns.length)];
        const fallbackForm = currentTenseForms[randomPronoun];
        if (fallbackForm !== correctAnswer && !wrongAnswers.includes(fallbackForm)) {
            wrongAnswers.push(fallbackForm);
        } else {
            // Falls alle Formen gleich sind, breche ab
            break;
        }
    }
    
    return wrongAnswers.slice(0, 3);
}

// Generiere typische Fehler für Präsens
function generatePresentErrors(verb, pronoun, correctAnswer) {
    const errors = [];
    const verbStem = verb.infinitive.replace(/en$/, '');
    
    // Typische Fehler für jedes Pronomen
    switch(pronoun) {
        case "ich":
            errors.push(verbStem + "en");  // Infinitiv statt ich-Form
            errors.push(verbStem + "t");   // er-Form statt ich-Form
            break;
        case "du":
            errors.push(verbStem + "e");   // ich-Form statt du-Form
            errors.push(verbStem + "t");   // er-Form statt du-Form
            errors.push(verbStem + "est"); // Falsche Endung
            break;
        case "er":
            errors.push(verbStem + "e");   // ich-Form statt er-Form
            errors.push(verbStem + "st");  // du-Form statt er-Form
            errors.push(verbStem + "en");  // Infinitiv statt er-Form
            break;
        case "wir":
            errors.push(verbStem + "t");   // ihr-Form statt wir-Form
            errors.push(verbStem + "e");   // ich-Form statt wir-Form
            break;
        case "ihr":
            errors.push(verbStem + "en");  // Infinitiv statt ihr-Form
            errors.push(verbStem + "et");  // Falsche Endung
            break;
        case "sie":
            errors.push(verbStem + "t");   // ihr-Form statt sie-Form
            errors.push(verbStem + "e");   // ich-Form statt sie-Form
            break;
    }
    
    return errors.filter(e => e !== correctAnswer);
}

// Spielzustand
let gameState = {
    score: 0,
    streak: 0,
    round: 0,
    maxRound: 10,
    maxStreak: 0,
    correctAnswers: 0,
    currentVerb: null,
    currentTense: "präsens",
    currentPronoun: "ich",
    gameActive: false,
    usedCombinations: []
};

// DOM-Elemente
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const roundElement = document.getElementById('round');
const currentVerbElement = document.getElementById('current-verb');
const pronounElement = document.getElementById('pronoun');
const feedbackElement = document.getElementById('feedback');
const choiceButtons = [
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3'),
    document.getElementById('choice4')
];
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const hintButton = document.getElementById('hint-btn');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const maxStreakElement = document.getElementById('max-streak');
const totalScoreElement = document.getElementById('total-score');
const gameResultElement = document.getElementById('game-result');
const gameMessageElement = document.getElementById('game-message');
const restartButton = document.getElementById('restart-btn');
const tenseButtons = document.querySelectorAll('.tense-btn');

// Zeitform-Buttons Event Listener
tenseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktiven Button markieren
        tenseButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Zeitform aktualisieren
        gameState.currentTense = btn.dataset.tense;
        
        // Wenn Spiel aktiv ist, neue Runde laden
        if (gameState.gameActive) {
            loadNextRound();
        } else {
            // Beispiel aktualisieren
            displayExample();
        }
    });
});

// Spiel initialisieren
function initGame() {
    gameState = {
        score: 0,
        streak: 0,
        round: 0,
        maxRound: 10,
        maxStreak: 0,
        correctAnswers: 0,
        currentVerb: null,
        currentTense: "präsens",
        currentPronoun: "ich",
        gameActive: false,
        usedCombinations: []
    };
    
    updateUI();
    resetChoices();
    feedbackElement.textContent = "Wähle eine Zeitform und klicke auf 'Spiel starten'!";
    feedbackElement.className = "feedback";
    
    // Buttons aktivieren/deaktivieren
    startButton.disabled = false;
    resetButton.disabled = true;
    hintButton.disabled = true;
    
    // Choice-Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
        btn.className = "choice-btn";
    });
    
    // Beispiel anzeigen
    displayExample();
}

// Beispiel anzeigen (vor Spielstart)
function displayExample() {
    const exampleVerb = VERB_LIST[0];
    const examplePronoun = "ich";
    const exampleTense = gameState.currentTense;
    
    currentVerbElement.textContent = exampleVerb.infinitive;
    pronounElement.textContent = PRONOUNS[PRONOUNS_KEYS.indexOf(examplePronoun)];
    
    const correctAnswer = exampleVerb[exampleTense][examplePronoun];
    const wrongAnswers = generateWrongAnswers(exampleVerb, exampleTense, examplePronoun, correctAnswer);
    
    // Alle Antworten mischen
    const allAnswers = [correctAnswer, ...wrongAnswers];
    shuffleArray(allAnswers);
    
    // Buttons mit Antworten befüllen
    choiceButtons.forEach((btn, index) => {
        if (allAnswers[index]) {
            btn.textContent = allAnswers[index];
            btn.dataset.answer = allAnswers[index];
        }
    });
}

// Spiel starten
function startGame() {
    gameState.gameActive = true;
    gameState.round = 1;
    gameState.usedCombinations = [];
    
    // Buttons aktivieren/deaktivieren
    startButton.disabled = true;
    resetButton.disabled = false;
    hintButton.disabled = false;
    
    // Choice-Buttons aktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = false;
    });
    
    feedbackElement.textContent = "Wähle die richtige konjugierte Form!";
    loadNextRound();
}

// Nächste Runde laden
function loadNextRound() {
    if (gameState.round > gameState.maxRound) {
        endGame();
        return;
    }
    
    // Zufälliges Verb auswählen
    const randomVerbIndex = Math.floor(Math.random() * VERB_LIST.length);
    gameState.currentVerb = VERB_LIST[randomVerbIndex];
    
    // Zufälliges Pronomen auswählen
    const randomPronounIndex = Math.floor(Math.random() * PRONOUNS_KEYS.length);
    gameState.currentPronoun = PRONOUNS_KEYS[randomPronounIndex];
    
    // Kombination prüfen (nicht zu oft dieselbe)
    const combination = `${gameState.currentVerb.infinitive}-${gameState.currentPronoun}-${gameState.currentTense}`;
    if (gameState.usedCombinations.includes(combination)) {
        // Versuche es erneut
        loadNextRound();
        return;
    }
    
    gameState.usedCombinations.push(combination);
    
    // UI aktualisieren mit großem Pronomen
    currentVerbElement.textContent = gameState.currentVerb.infinitive;
    pronounElement.textContent = PRONOUNS[randomPronounIndex];
    roundElement.textContent = `${gameState.round}/${gameState.maxRound}`;
    
    // Antwortoptionen generieren
    generateChoices();
    
    // Feedback zurücksetzen
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";
    
    // Choice-Buttons zurücksetzen
    resetChoices();
}

// Antwortoptionen generieren
function generateChoices() {
    const correctAnswer = gameState.currentVerb[gameState.currentTense][gameState.currentPronoun];
    const wrongAnswers = generateWrongAnswers(
        gameState.currentVerb, 
        gameState.currentTense, 
        gameState.currentPronoun, 
        correctAnswer
    );
    
    // Alle Optionen mischen
    const allAnswers = [correctAnswer, ...wrongAnswers];
    shuffleArray(allAnswers);
    
    // Buttons mit Antworten befüllen
    choiceButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.dataset.answer = allAnswers[index];
    });
}

// Array mischen
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Antwort überprüfen
function checkAnswer(selectedAnswer) {
    if (!gameState.gameActive) return;
    
    const correctAnswer = gameState.currentVerb[gameState.currentTense][gameState.currentPronoun];
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Choice-Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
        
        // Richtige und falsche Antworten markieren
        if (btn.dataset.answer === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === selectedAnswer && !isCorrect) {
            btn.classList.add('error');
        }
    });
    
    // Spielzustand aktualisieren
    if (isCorrect) {
        // Richtige Antwort
        gameState.score += 10;
        gameState.streak += 1;
        gameState.correctAnswers += 1;
        
        // Bonuspunkte für Serien
        if (gameState.streak >= 3) {
            gameState.score += 5;
        }
        
        // Maximalstreak aktualisieren
        if (gameState.streak > gameState.maxStreak) {
            gameState.maxStreak = gameState.streak;
        }
        
        // Feedback anzeigen mit großem Pronomen
        feedbackElement.textContent = `✓ Richtig! ${PRONOUNS[PRONOUNS_KEYS.indexOf(gameState.currentPronoun)]} ${gameState.currentVerb.infinitive} → ${correctAnswer}`;
        feedbackElement.className = "feedback correct";
        
        // Sound abspielen
        correctSound.currentTime = 0;
        correctSound.play();
        
        // Nach kurzer Verzögerung nächste Runde laden
        setTimeout(() => {
            gameState.round += 1;
            updateUI();
            loadNextRound();
        }, 1500);
    } else {
        // Falsche Antwort
        gameState.streak = 0;
        
        // Feedback anzeigen mit großem Pronomen
        feedbackElement.textContent = `✗ Falsch! ${PRONOUNS[PRONOUNS_KEYS.indexOf(gameState.currentPronoun)]} ${gameState.currentVerb.infinitive} → ${correctAnswer}`;
        feedbackElement.className = "feedback error";
        
        // Sound abspielen
        errorSound.currentTime = 0;
        errorSound.play();
        
        // Nach kurzer Verzögerung nächste Runde laden
        setTimeout(() => {
            gameState.round += 1;
            updateUI();
            loadNextRound();
        }, 2000);
    }
    
    updateUI();
}

// Spiel beenden
function endGame() {
    gameState.gameActive = false;
    
    // Buttons deaktivieren
    choiceButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    resetButton.disabled = true;
    hintButton.disabled = true;
    
    // Ergebnis ermitteln
    const percentage = (gameState.correctAnswers / gameState.maxRound) * 100;
    
    // Spiel-Overlay anzeigen
    finalScoreElement.textContent = `${gameState.score} Punkte`;
    correctAnswersElement.textContent = gameState.correctAnswers;
    maxStreakElement.textContent = gameState.maxStreak;
    totalScoreElement.textContent = gameState.score;
    
    if (percentage >= 80) {
        gameResultElement.textContent = "Ausgezeichnet!";
        gameMessageElement.textContent = "Du beherrschst die Verbkonjugation perfekt!";
        gameWonSound.currentTime = 0;
        gameWonSound.play();
    } else if (percentage >= 60) {
        gameResultElement.textContent = "Sehr gut!";
        gameMessageElement.textContent = "Du hast ein sehr gutes Verständnis der Konjugation.";
        roundWonSound.currentTime = 0;
        roundWonSound.play();
    } else if (percentage >= 40) {
        gameResultElement.textContent = "Gut gemacht!";
        gameMessageElement.textContent = "Übe weiter, dann wirst du noch besser!";
    } else {
        gameResultElement.textContent = "Weiter üben!";
        gameMessageElement.textContent = "Verbkonjugation ist knifflig. Übe regelmäßig!";
        gameLostSound.currentTime = 0;
        gameLostSound.play();
    }
    
    gameOverElement.classList.add('active');
}

// UI aktualisieren
function updateUI() {
    scoreElement.textContent = gameState.score;
    streakElement.textContent = gameState.streak;
    roundElement.textContent = `${gameState.round}/${gameState.maxRound}`;
}

// Choice-Buttons zurücksetzen
function resetChoices() {
    choiceButtons.forEach(btn => {
        btn.className = "choice-btn";
        btn.disabled = !gameState.gameActive;
    });
}

// Tipp anzeigen
function showHint() {
    if (!gameState.gameActive || !gameState.currentVerb) return;
    
    const hints = [
        `Das Verb "${gameState.currentVerb.infinitive}" ist ein ${gameState.currentVerb.type === "regular" ? "regelmäßiges" : "unregelmäßiges"} Verb.`,
        `Bei ${PRONOUNS[PRONOUNS_KEYS.indexOf(gameState.currentPronoun)]} endet die Präsensform meist auf ${getTypicalEnding(gameState.currentPronoun)}.`,
        `Achte auf Besonderheiten bei ${gameState.currentVerb.type === "strong" ? "starken" : gameState.currentVerb.type === "modal" ? "Modal" : "regelmäßigen"} Verben.`,
        `Im ${gameState.currentTense} wird bei "${gameState.currentVerb.infinitive}" oft ${getTenseHint(gameState.currentTense)}.`
    ];
    
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    feedbackElement.textContent = `Tipp: ${randomHint}`;
    feedbackElement.className = "feedback";
    
    // Tipp-Button für einige Sekunden deaktivieren
    hintButton.disabled = true;
    setTimeout(() => {
        if (gameState.gameActive) {
            hintButton.disabled = false;
        }
    }, 3000);
}

// Hilfsfunktionen für Tipps
function getTypicalEnding(pronoun) {
    const endings = {
        "ich": "-e",
        "du": "-st",
        "er": "-t",
        "wir": "-en",
        "ihr": "-t",
        "sie": "-en"
    };
    return endings[pronoun] || "";
}

function getTenseHint(tense) {
    const hints = {
        "präsens": "der Infinitivstamm verwendet",
        "präteritum": "-te oder der Stammvokal geändert",
        "perfekt": "haben/sein + Partizip II verwendet",
        "plusquamperfekt": "hatte/war + Partizip II verwendet"
    };
    return hints[tense] || "";
}

// Event Listener
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', initGame);
hintButton.addEventListener('click', showHint);
restartButton.addEventListener('click', () => {
    gameOverElement.classList.remove('active');
    initGame();
    startGame();
});

choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        checkAnswer(btn.dataset.answer);
    });
});

// Spiel initialisieren
initGame();
