Migrate JS -> TS з використанням

Чи бувало у вас таке, що ви пишете код на JavaScript, а потім дивитесь на нього
і думаєте: "Чому не TypeScript?" 🤔
І начебто вже написали велику частину коду,
тому не хочеться повертатися назад і створювати репозиторій заново.
Починаєте шукати способи для плавного переходу з одного варіанта на інший?
Знайоме відчуття!

У мене був саме такий досвід, і я знайшов кілька простих і ефективних кроків
для успішної міграції проекту з JavaScript на TypeScript.
Давайте поділюся цими порадами з вами. Поїхали! 🚀
Міграція проєкту на TypeScript

Перехід з JavaScript на TypeScript може значно покращити ваш код, з
абезпечуючи типізацію та виявлення помилок ще на етапі розробки.
Ось покроковий план, як здійснити міграцію проєкту.

Крок 1: Встановлення TypeScript
Спочатку встановимо необхідні пакети:
npm install -D typescript @types/react @types/react-dom

Крок 2: Налаштування скриптів у package.json

Додайте скрипт для збірки проєкту:
"scripts": {
"build": "tsc && vite build"
}

Крок 3: Зміна конфігурації Vite
Перейменуйте файл конфігурації Vite з vite.config.js на vite.config.ts
та змініть розширення вашого основного файлу з main.jsx на main.tsx.

Крок 4: Налаштування main.tsx
Відредагуйте main.tsx наступним чином:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
<React.StrictMode>
<App />
</React.StrictMode>
);

Крок 5: Створення конфігураційних файлів TypeScript
tsconfig.json

Створіть файл tsconfig.json у корені проєкту:

{
"compilerOptions": {
"target": "ESNext",
"useDefineForClassFields": true,
"lib": ["DOM", "DOM.Iterable", "ESNext"],
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": false,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"module": "ESNext",
"moduleResolution": "Node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"
},
"include": ["src"],
"references": [{ "path": "./tsconfig.node.json" }]
}

tsconfig.node.json

Створіть додатковий файл tsconfig.node.json:

{
"compilerOptions": {
"composite": true,
"module": "ESNext",
"moduleResolution": "Node",
"allowSyntheticDefaultImports": true
},
"include": ["vite.config.ts"]
}

Крок 6: Додавання файлу vite-env.d.ts
Створіть файл vite-env.d.ts у папці src з наступним вмістом:
/// <reference types="vite/client" />

Крок 7: Зміна index.html
Змініть посилання на скрипт у index.html:

<script type="module" src="/src/main.tsx"></script>

Виконуючи ці кроки, ви зможете плавно та ефективно мігрувати свій проєкт
з JavaScript на TypeScript.

Успіхів у вашій міграції! 🚀
