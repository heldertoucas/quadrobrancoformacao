# Ferramentas de Apoio à Formação

Este repositório contém duas ferramentas interativas desenvolvidas para dinamizar sessões de formação:: **Quadro Branco** e **Futuro Digital**.

Ambas as ferramentas foram desenhadas com foco na **portabilidade** e facilidade de uso em qualquer contexto de sala de aula ou formação online.

---

## Enquadramento e Autoria

Este projeto foi desenvolvido com o foco principal de criar **recursos pedagógicos ágeis e acessíveis** para apoiar formadores, professores e facilitadores nas suas sessões de formação, quer em regime presencial, quer online.

* **Autoria e Desenvolvimento:** Desenvolvido por **Hélder Toucas** e **Vanessa Veríssimo**.
* **Objetivo de Utilização:** Disponibilizar aos formadores um conjunto de utilitários interativos (temporizadores, sorteios, painéis de pontuação, etc.) prontos a usar. O foco central é eliminar barreiras tecnológicas: as ferramentas não exigem instalação, permissões de administrador, dependências complexas ou sequer ligação à internet (se os ficheiros forem guardados e executados localmente).
* **Público-Alvo e Distribuição:** Destina-se a profissionais de educação que procurem dinâmicas de apoio visual. O projeto (código e ficheiros HTML) pode ser descarregado, partilhado e utilizado livremente para enriquecer a experiência formativa.


## Portabilidade

O conceito chave destas ferramentas é a simplicidade de distribuição e execução:

*   **Ficheiros Únicos (Standalone):** Cada ferramenta funciona a partir de um único ficheiro HTML (`index.html` para o Quadro Branco e `futuro-digital.html` para o Futuro Digital).
*   **Zero Instalação:** Não é necessário instalar software, servidores complexos ou configurações de base de dados. Basta abrir o ficheiro no navegador (browser).
*   **Fácil Partilha:** Podem ser transportadas numa pen drive, enviadas por email ou alojadas em qualquer servidor web estático (como o GitHub Pages).
*   **Persistência Local:** As configurações e histórico são guardados no `LocalStorage` do próprio navegador, mantendo a experiência personalizada sem necessidade de login ou backend.

---

## Parâmetros URL

Para facilitar a preparação das aulas, é possível configurar o estado inicial de ambas as ferramentas através de argumentos no URL. Isto permite criar links ou atalhos pré-configurados para diferentes momentos da formação.

### 1. Quadro Branco (`index.html`)

O `index.html` aceita uma vasta gama de parâmetros para controlar o comportamento e o visual ao iniciar.

**Exemplo de uso:**
`index.html?program=passaporte&text=Bem-Vindos&timer=10`

| Parâmetro | Descrição | Exemplo |
| :--- | :--- | :--- |
| **`text`** | Define o texto apresentado no centro do ecrã ao iniciar. | `?text=Bom Dia` |
| **`program`** | Altera a marca/logótipo da aplicação. Opções: `futuro`, `passaporte`, `ia`. | `?program=passaporte` |
| **`mode`** | Define o modo de operação. Opções: `pro`, `simple`. | `?mode=simple` |
| **`theme`** | Define o tema visual. Opções: `dark`, `light`, `neon`, `ocean`, `sketch`, `nature`, `sunset`, `gameboy`, `8bit`. | `?theme=neon` |
| **`timer`** | Inicia a aplicação com um temporizador ativo (em minutos). | `?timer=5` |
| **`placar`** | Inicia a aplicação no modo "Placar" com o número de equipas indicado (2-6). | `?placar=4` |
| **`dados`** | Inicia a aplicação a lançar dados automaticamente. | `?dados` ou `?dados=true` |
| **`sorteio`** | Inicia um sorteio com a lista de nomes fornecida (separados por vírgula). | `?sorteio=Ana,Rui,Eva` |
| **`sons`** | Inicia com a gaveta de efeitos sonoros aberta. | `?sons` |
| **`qrcode`** | Inicia a aplicação a exibir um QR Code com o conteúdo indicado. | `?qrcode=https://www.google.pt` |

### 2. Futuro Digital (`futuro-digital.html`)

O `futuro-digital.html` serve como um slide de apresentação dinâmico e também aceita configurações via URL.

**Exemplo de uso:**
`futuro-digital.html?text=Equipa%20Vencedora&theme=scheme2`

| Parâmetro | Descrição | Exemplo |
| :--- | :--- | :--- |
| **`text`** | Define o título principal do slide. | `?text=Pausa para Café` |
| **`theme`** | Define o esquema de cores. <br>• **(default)**: Amarelo/Laranja<br>• `scheme2`: Azul/Verde/Roxo<br>• `scheme3`: Amarelo/Verde/Vermelho | `?theme=scheme2` |

---

> **Dica:** Para usar espaços no texto via URL, utilize a codificação `%20` (ex: `Bom%20Dia`).
