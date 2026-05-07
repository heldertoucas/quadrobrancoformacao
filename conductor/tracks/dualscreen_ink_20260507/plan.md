# Implementation Plan: Dual Screen & Ink Overlay

## Phase 1: Dual Screen Infrastructure (Broadcast API)
- [ ] Task: Inicializar `BroadcastChannel` no carregamento da aplicação (`state.channel`).
- [ ] Task: Criar função `broadcastState()` para enviar o estado atual, view e configurações para o canal.
- [ ] Task: Criar listener para receber mensagens no canal e atualizar a UI de acordo com a mensagem recebida.
- [ ] Task: Adicionar botão "Projetor" no painel de controlo que invoca `window.open('index.html?mode=projector', '_blank')`.

## Phase 2: Projector Mode UI
- [ ] Task: Modificar `ui.init()` para detetar `mode=projector` via URL.
- [ ] Task: Em `mode=projector`, aplicar CSS que oculta o `#control-panel`, `.nav-arrow` e `#logo-area`.
- [ ] Task: Garantir que a Janela de Comando envia o estado inicial completo assim que a Janela de Projeção solicita ou se liga.

## Phase 3: Ink Overlay (Canvas)
- [ ] Task: Adicionar elemento `<canvas id="ink-canvas">` cobrindo o `#display-area` (pointer-events: none por defeito).
- [ ] Task: Adicionar botão "Caneta" na toolbar.
- [ ] Task: Criar módulo `features.ink` para gerir o estado de desenho (on/off, cor, espessura, borracha).
- [ ] Task: Implementar UI da paleta de cores e ferramentas que surge quando a caneta está ativa.

## Phase 4: Ink Drawing Logic
- [ ] Task: Implementar eventos de rato/touch (`mousedown`, `mousemove`, `mouseup`) no canvas para desenhar linhas no contexto 2D.
- [ ] Task: Implementar lógica da Borracha (limpar caminho ou usar `globalCompositeOperation = 'destination-out'`).
- [ ] Task: (Opcional) Capturar as coordenadas e transmiti-las via `BroadcastChannel` para desenhar simultaneamente na Janela de Projeção.

## Phase 5: Integration & Validation
- [ ] Task: Testar funcionamento de todas as ferramentas (Texto, Votação, Sorteio) entre Comando e Projeção.
- [ ] Task: Validar que o Ink Overlay não interfere com os cliques normais quando desativado.