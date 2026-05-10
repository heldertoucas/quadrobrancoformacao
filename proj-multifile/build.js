const fs = require('fs');
const path = require('path');

const cssFiles = [
    'variables.css',
    'layout.css',
    'ui.css',
    'animations.css'
];

const jsFiles = [
    'vendor-dompurify.js',
    'vendor-qrious.js',
    'vendor-confetti.js',
    'state.js',
    'ui.js',
    'features.js',
    'sync.js',
    'app.js'
];

function build() {
    console.log('🚀 Starting build...');

    try {
        let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

        // Concatenate CSS
        let cssContent = '';
        cssFiles.forEach(file => {
            console.log(`  📄 Adding CSS: ${file}`);
            cssContent += fs.readFileSync(path.join(__dirname, file), 'utf8') + '\n';
        });

        // Concatenate JS
        let jsContent = '';
        jsFiles.forEach(file => {
            console.log(`  📜 Adding JS: ${file}`);
            jsContent += fs.readFileSync(path.join(__dirname, file), 'utf8') + '\n';
        });

        // Remove Dev Only sections
        html = html.replace(/<!-- DEV_ONLY_START -->[\s\S]*?<!-- DEV_ONLY_END -->/g, '');

        // Inject
        html = html.replace('<!-- INJECT_STYLES -->', `<style>\n${cssContent}</style>`);
        html = html.replace('<!-- INJECT_SCRIPTS -->', `<script>\n${jsContent}</script>`);

        // Ensure output dir exists
        const distDir = path.join(__dirname, 'portable');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir);
        }

        // Write output
        fs.writeFileSync(path.join(distDir, 'index.html'), html);

        console.log('✨ Build complete! File saved to: portable/index.html');
    } catch (err) {
        console.error('❌ Build failed:', err);
        process.exit(1);
    }
}

build();