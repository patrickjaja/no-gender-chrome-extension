var replacements = {
    "Lehrkraft": "Lehrer",
    "Lernender": "Schüler",
    "Mediziner\\*in": "Arzt",
    "Studierender": "Student",
    "Patient\\*in": "Patient",
    "Bürger\\*in": "Bürger",
    "Lehrerin": "Lehrer",
    "Ärztin": "Arzt",
    "Schülerin": "Schüler",
    "Studierende": "Student",
    "Patientin": "Patient",
    "Bürgerin": "Bürger",
    "Lehrkräfte": "Lehrer",
    "Ärzte": "Arzt",
    "Schülerinnen": "Schüler",
    "Studentinnen": "Student",
    "Patientinnen": "Patient",
    "Bürgerinnen": "Bürger",
    "Lehrer\\*innen": "Lehrer",
    "Schüler\\*innen": "Schüler",
    "Student\\*innen": "Student",
    "Patient\\*innen": "Patient",
    "Bürger\\*innen": "Bürger",
    "Lehrkräften": "Lehrer",
    "Ärzten": "Arzt",
    "Schülern": "Schüler",
    "Studierenden": "Student",
    "Patienten": "Patient",
    "Bürgern": "Bürger",
    "Kolleginnen": "Kollegen",
    "Kolleg\\*innen": "Kollegen",
};

function replaceWords() {
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            Object.keys(replacements).forEach(function(searchWord) {
                var replaceValue = replacements[searchWord];
                var searchRegex = new RegExp("\\b" + searchWord + "\\b", 'gi');
                node.nodeValue = node.nodeValue.replace(searchRegex, replaceValue);
            });
        } else if (node.hasChildNodes()) {
            node.childNodes.forEach(replaceText);
        }
    }

    replaceText(document.body);
}

replaceWords();
