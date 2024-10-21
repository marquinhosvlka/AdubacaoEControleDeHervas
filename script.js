function definirAdubacao(ph, tipoSolo, tipoCultivo, estadoFolhas, ervaDaninha) {
    const recomendacoes = [];

    // Recomendações baseadas no pH
    if (ph < 5.5) {
        recomendacoes.push("Solo muito ácido: Aplicar calcário para elevar o pH.");
    } else if (ph <= 6.5) {
        recomendacoes.push("pH adequado, continuar monitorando.");
    } else {
        recomendacoes.push("Solo alcalino: Usar adubos que reduzem o pH, como sulfato de amônio.");
    }

    // Recomendações baseadas no tipo de solo
    if (tipoSolo === "arenoso") {
        recomendacoes.push("Solo arenoso: Aumentar a aplicação de potássio (K) e irrigação constante.");
    } else if (tipoSolo === "argiloso") {
        recomendacoes.push("Solo argiloso: Certifique-se de corrigir com fósforo (P).");
    }

    // Recomendações para o tipo de cultivo
    if (tipoCultivo === "planta") {
        recomendacoes.push("Cultivo inicial (planta): Adubar com NPK nas seguintes proporções por hectare:");
        recomendacoes.push("Nitrogênio (N): até 30 kg/ha");
        recomendacoes.push("Fósforo (P): até 180 kg/ha");
        recomendacoes.push("Potássio (K): até 200 kg/ha");
    } else if (tipoCultivo === "soqueira") {
        recomendacoes.push("Soqueira: Adubar com NPK nas seguintes proporções por hectare:");
        recomendacoes.push("Nitrogênio (N): 60-120 kg/ha");
        recomendacoes.push("Fósforo (P): 30-60 kg/ha");
        recomendacoes.push("Potássio (K): 30-150 kg/ha");
        recomendacoes.push("Acompanhamento de micronutrientes também é recomendado.");
    }

    // Recomendações baseadas no estado das folhas
    if (estadoFolhas === "amareladas") {
        recomendacoes.push("Folhas amareladas: Possível deficiência de nitrogênio. Aplicar N.");
    } else if (estadoFolhas === "manchas escuras") {
        recomendacoes.push("Folhas com manchas escuras: Possível deficiência de fósforo. Aplicar P.");
    } else if (estadoFolhas === "bordas amarelas") {
        recomendacoes.push("Folhas com bordas amarelas: Possível deficiência de potássio. Aplicar K.");
    } else if (estadoFolhas === "nervuras claras") {
        recomendacoes.push("Nervuras claras: Possível deficiência de ferro ou magnésio. Aplicar micronutrientes.");
    }

    // Dicionário com ervas daninhas e seus respectivos herbicidas
    const ervasDaninhaHerbicida = {
        "capim colonião": "Glifosato",
        "tiririca": "Sulfentrazone",
        "grama-seda": "2,4-D",
        "capim-amargoso": "Haloxyfop",
        "braquiária": "Glifosato",
        "corda-de-viola": "2,4-D",
        "capim-marmelada": "Glifosato",
        "capim-carrapicho": "2,4-D",
        "capim-de-pé-de-galinha": "Atrazina",
        "amendoim-bravo": "Atrazina",
        "picão-preto": "Glifosato",
        "caruru": "Ametrina",
        "trapoeraba": "Imazapic",
        "mentrasto": "2,4-D",
        "beldroega": "Diuron",
        "capim-massambará": "Sulfentrazone",
        "capim-gengibre": "Flumioxazin",
        "erva-de-rola": "Atrazina",
        "poaia-branca": "Metribuzin",
        "guanxuma": "Fluazifop",
        "carrapicho-de-carneiro": "Picloram",
        "serralha": "Ametrina",
    };

    // Verificar qual herbicida usar para a erva daninha fornecida
    if (ervasDaninhaHerbicida[ervaDaninha]) {
        recomendacoes.push(`Erva daninha detectada: ${ervaDaninha}. Aplicar herbicida: ${ervasDaninhaHerbicida[ervaDaninha]}.`);
    } else {
        recomendacoes.push("Nenhuma erva daninha detectada ou erva daninha não listada.");
    }

    return recomendacoes;
}

document.getElementById("adubacaoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const ph = parseFloat(document.getElementById("ph").value);
    const tipoSolo = document.getElementById("tipoSolo").value;
    const tipoCultivo = document.getElementById("tipoCultivo").value;
    const estadoFolhas = document.getElementById("estadoFolhas").value;
    const ervaDaninha = document.getElementById("ervaDaninha").value;

    const recomendacoes = definirAdubacao(ph, tipoSolo, tipoCultivo, estadoFolhas, ervaDaninha);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = recomendacoes.map(recomendacao => `<p>${recomendacao}</p>`).join('');
});
