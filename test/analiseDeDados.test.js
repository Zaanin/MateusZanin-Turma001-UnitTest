const Analise = require("../src/analiseDeDados");

describe("Classe Analise - Método adicionarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Adicionar dados corretamente", async () => {
    const novoDado = [6, 7, 8];
    analise.adicionarDados(novoDado);
    expect(analise.dados).toEqual(expect.arrayContaining(novoDado));
  });

  test("Adicionar dados em formato inválido", async () => {
    const novoDado = "texto";
    expect(() => analise.adicionarDados(novoDado)).toThrow("Os dados devem ser um array.");
  });

});

describe("Classe Analise - Método limparDados", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Limpar dados corretamente", async () => {
    analise.limparDados();
    expect(analise.dados).toEqual(expect.arrayContaining([]));
  });

});

describe("Classe Analise - Método ordenarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [5, 3, 1, 4, 2];
  });

  test("Ordenar dados corretamente", async () => {
    const dadosOrdenados = analise.ordenarDados();
    expect(dadosOrdenados).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test("Ordenar dados vazios", async () => {
    analise.dados = [];
    const dadosOrdenados = analise.ordenarDados();
    expect(dadosOrdenados).toEqual(expect.arrayContaining([]));
  });

});

describe("Classe Analise - Método calcularMedia", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular média corretamente", async () => {
    const media = analise.calcularMedia();
    expect(media).toBe(3);
  });

  test("Calcular média de dados vazios", async () => {
    analise.dados = [];
    const media = analise.calcularMedia();
    expect(media).toBeNull();
  });

});

describe("Classe Analise - Método calcularMediana", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular mediana corretamente", async () => {
    const mediana = analise.calcularMediana();
    expect(mediana).toBe(3);
  });

  test("Calcular mediana de dados vazios", async () => {
    analise.dados = [];
    const mediana = analise.calcularMediana();
    expect(mediana).toBeNull();
  });

});

describe("Classe Analise - Método calcularModa", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular moda corretamente", async () => {
    const moda = analise.calcularModa();
    expect(moda).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test("Calcular moda de dados vazios", async () => {
    analise.dados = [];
    const moda = analise.calcularModa();
    expect(moda).toBeNull();
  });

  test("Calcular moda com dados repetidos", async () => {
    analise.dados = [1, 2, 2, 3, 4, 4, 5];
    const moda = analise.calcularModa();
    expect(moda).toEqual(expect.arrayContaining([2, 4]));
  });

});

describe("Classe Analise - Método calcularVariancia", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular variância corretamente", async () => {
    const variancia = analise.calcularVariancia();
    expect(variancia).toBe(2);
  });

  test("Calcular variância de dados vazios", async () => {
    analise.dados = [];
    const variancia = analise.calcularVariancia();
    expect(variancia).toBeNull();
  });

});

describe("Classe Analise - Método calcularDesvioPadrao", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular desvio padrão corretamente", async () => {
    const desvioPadrao = analise.calcularDesvioPadrao();
    expect(desvioPadrao).toBe(Math.sqrt(2));
  });

  test("Calcular desvio padrão de dados vazios", async () => {
    analise.dados = [];
    const desvioPadrao = analise.calcularDesvioPadrao();
    expect(desvioPadrao).toBeNull();
  });

});

describe("Classe Analise - Método encontrarMinimo", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Encontrar mínimo corretamente", async () => {
    const minimo = analise.encontrarMinimo();
    expect(minimo).toBe(1);
  });

  test("Encontrar mínimo de dados vazios", async () => {
    analise.dados = [];
    const minimo = analise.encontrarMinimo();
    expect(minimo).toBeNull();
  });

});

describe("Classe Analise - Método encontrarMaximo", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Encontrar máximo corretamente", async () => {
    const maximo = analise.encontrarMaximo();
    expect(maximo).toBe(5);
  });

  test("Encontrar máximo de dados vazios", async () => {
    analise.dados = [];
    const maximo = analise.encontrarMaximo();
    expect(maximo).toBeNull();
  });

});

describe("Classe Analise - Método normalizarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Normalizar dados corretamente", async () => {
    const dadosNormalizados = analise.normalizarDados();
    expect(dadosNormalizados).toEqual(expect.arrayContaining([0, 0.25, 0.5, 0.75, 1]));
  });

  test("Normalizar dados vazios", async () => {
    analise.dados = [];
    const dadosNormalizados = analise.normalizarDados();
    expect(dadosNormalizados).toEqual(expect.arrayContaining([]));
  });

});

describe("Classe Analise - Método calcularPercentil", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular percentil corretamente", async () => {
    const percentil = analise.calcularPercentil(50);
    expect(percentil).toBe(3);
  });

  test("Calcular percentil de dados vazios", async () => {
    analise.dados = [];
    const percentil = analise.calcularPercentil(50);
    expect(percentil).toBeNull();
  });

});

describe("Classe Analise - Método calcularSoma", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular soma corretamente", async () => {
    const soma = analise.calcularSoma();
    expect(soma).toBe(15);
  });

  test("Calcular soma de dados vazios", async () => {
    analise.dados = [];
    const soma = analise.calcularSoma();
    expect(soma).toBe(0);
  });

});

describe("Classe Analise - Método calcularProduto", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular produto corretamente", async () => {
    const produto = analise.calcularProduto();
    expect(produto).toBe(120);
  });

  test("Calcular produto de dados vazios", async () => {
    analise.dados = [];
    const produto = analise.calcularProduto();
    expect(produto).toBe(1);
  });

});
describe("Classe Analise - Método calcularAmplitude", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular amplitude corretamente", async () => {
    const amplitude = analise.calcularAmplitude();
    expect(amplitude).toBe(4);
  });

});
describe("Classe Analise - Método calcularCoeficienteVariacao", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular coeficiente de variação corretamente", async () => {
    const coeficiente = analise.calcularCoeficienteVariacao();
    expect(coeficiente).toBeCloseTo(47.14045207910317, 10);
  });

});
describe("Classe Analise - Método calcularCorrelacao ", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular correlação corretamente", async () => {
    const dados2 = [5, 4, 3, 2, 1];
    const correlacao = analise.calcularCorrelacao(dados2);
    expect(correlacao).toBe(-0.9999999999999998);
  });

  test("Calcular correlação de dados vazios", async () => {
    analise.dados = [];
    const dados2 = [];
    const correlacao = analise.calcularCorrelacao(dados2);
    expect(correlacao).toBeNull();
  });

});
describe("Classe Analise - Método calcularCorrelacao com dados de tamanhos diferentes", () => {
  let analise;

  beforeEach(() => {
    analise = new Analise(); 
    analise.dados = [1, 2, 3, 4, 5];
  });

  test("Calcular correlação com dados de tamanhos diferentes", async () => {
    const dados2 = [5, 4, 3];
    const correlacao = analise.calcularCorrelacao(dados2);
    expect(correlacao).toBeNull();
  });

    test("Remover outliers corretamente com fator padrão", async () => {
      analise.dados = [1, 2, 3, 4, 5, 100];
      analise.removerOutliers();
      expect(analise.dados).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    });


    test("Remover outliers de dados vazios", async () => {
      analise.dados = [];
      analise.removerOutliers();
      expect(analise.dados).toEqual(expect.arrayContaining([]));
    });

    test("Remover outliers quando não há outliers", async () => {
      analise.dados = [1, 2, 3, 4, 5];
      analise.removerOutliers();
      expect(analise.dados).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    });

    test("Remover outliers com todos os dados como outliers", async () => {
      analise.dados = [100, 200, 300, 400, 500];
      analise.removerOutliers();
      expect(analise.dados).toEqual(expect.arrayContaining([]));
    });
  });






