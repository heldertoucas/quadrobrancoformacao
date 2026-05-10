/* --- 6. SYNC & BROADCAST --- */

const sync = {
    broadcastState() {
        if (!state.channel) return;
        state.channel.postMessage({
            type: 'sync',
            state: {
                view: state.view,
                theme: state.theme,
                brand: state.brand,
                isSerif: state.isSerif,
                isHighlight: state.isHighlight,
                isAnimated: state.isAnimated,
                textAlignment: state.textAlignment,
                history: state.history,
                historyIndex: state.historyIndex,
                scores: state.scores,
                timerActive: !!state.timerInterval,
                pollLabels: features.poll.labels,
                pollVotes: features.poll.votes,
                pollActive: features.poll.active
            },
            data: state.view === 'text' ? ui.els.mainText.innerHTML : (state.view === 'qr' ? state.history[state.historyIndex] : null)
        });
    },

    handleBroadcast(data) {
        const params = new URLSearchParams(window.location.search);
        const isProjector = params.get('mode') === 'projector';

        if (data.type === 'request_sync' && !isProjector) {
            this.broadcastState();
        }

        if (data.type === 'sync' && isProjector) {
            const s = data.state;
            state.theme = s.theme;
            state.brand = s.brand;
            state.isSerif = s.isSerif;
            state.isHighlight = s.isHighlight;
            state.isAnimated = s.isAnimated;
            state.textAlignment = s.textAlignment;
            state.history = s.history;
            state.historyIndex = s.historyIndex;
            state.scores = s.scores;
            ui.applyState();

            if (s.view === 'poll' && s.pollActive) {
                features.poll.votes = s.pollVotes;
                features.poll.build(s.pollLabels, true);
            } else if (s.view === 'score') {
                features.score.build(Object.keys(s.scores).length, true);
            } else {
                features.setView(s.view, data.data);
            }
        }

        if (data.type === 'ink_stroke' && isProjector) {
            if (!features.ink.ctx) {
                const canvas = document.getElementById('ink-canvas');
                features.ink.ctx = canvas.getContext('2d');
                features.ink.resize();
            }
            features.ink.ctx.strokeStyle = data.color;
            features.ink.ctx.lineWidth = data.width;
            features.ink.ctx.globalCompositeOperation = data.op;
            features.ink.ctx.lineCap = 'round';
            features.ink.ctx.lineJoin = 'round';
            features.ink.ctx.beginPath();
            features.ink.ctx.moveTo(data.from.x, data.from.y);
            features.ink.ctx.lineTo(data.to.x, data.to.y);
            features.ink.ctx.stroke();
        }

        if (data.type === 'ink_clear' && isProjector) {
            if (features.ink.ctx) features.ink.ctx.clearRect(0, 0, features.ink.ctx.canvas.width, features.ink.ctx.canvas.height);
        }
    }
};

// Aliases for compatibility with existing code calls
const broadcastState = () => sync.broadcastState();
const handleBroadcast = (data) => sync.handleBroadcast(data);