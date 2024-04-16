var replacements = {
    "Lehrkraft": "Lehrer",
    "Lernender": "Schüler",
    "Mediziner\\*in": "Arzt",
    "Studierender": "Student",
    "Patient*in": "Patient",
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
    var elements = document.querySelectorAll('*');

    elements.forEach(function(element) {
        if (element.childNodes && element.childNodes.length > 0) {
            element.childNodes.forEach(function(childNode) {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    Object.keys(replacements).forEach(function(searchWord) {
                        var replaceValue = replacements[searchWord];
                        var searchRegex = new RegExp("\\b" + searchWord + "\\b", 'gi');
                        childNode.nodeValue = childNode.nodeValue.replace(searchRegex, replaceValue);
                    });
                }
            });
        }
    });
}

replaceWords();
