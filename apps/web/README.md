# 🎲 Numbers – Sorteador de Números

Aplicação em **Next.js** que sorteia números aleatórios dentro de um intervalo configurável, com interface inspirada em um layout do Figma, animação de resultado e camada de domínio separada da UI.

---

## ✨ Features

- Definição de:
  - **Quantidade de números** a sortear (`NÚMEROS`)
  - **Intervalo mínimo** (`DE`)
  - **Intervalo máximo** (`ATÉ`)
- Opção **“Não repetir número”** (switch do shadcn/ui)
- Layout **100% responsivo**:
  - Desktop: hero em duas colunas (texto + perguntas / formulário / resultado)
  - Mobile: fluxo “título → formulário → resultado → perguntas”, igual ao Figma
- Componente de resultado com:
  - **card “Resultado do sorteio”**
  - **animação** de um token roxo caindo/girando até “parar reto”
- Camada de **domínio** isolada (`drawNumbers`) com regras de negócio:
  - validação de intervalo
  - quantidade positiva
  - garantia de não repetição quando solicitado
- **Testes unitários** com Vitest:
  - domínio (`drawNumbers`)
  - hook (`useRandomNumberDraw`)
  - componente (`RandomNumberForm`)

---

## 🧰 Stack

- **Next.js** `15.0.0-rc.1` (App Router)
- **React** 18
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** + **Radix UI**
- **Vitest** + **@testing-library/react** + **jsdom**
- **pnpm** como gerenciador de pacotes

---

## 📁 Estrutura (simplificada)

Considerando o app em `apps/web`:

```txt
apps/
  web/
    src/
      app/
        layout.tsx        # Layout raiz do Next
        page.tsx          # Home – usa Header + HeroSection
      assets/
        logo.png
      components/
        header.tsx        # Logo + espaçamentos do topo
        home/
          hero-section/
            index.tsx     # Hero: título, "Quero sortear", perguntas
        sorter/
          index.tsx               # RandomNumberForm + ResultPanel (exporta página de sorteio)
          random-number-form.tsx  # Formulário com inputs, switch, botão SORTEAR
          result-panel.tsx        # Card "Resultado do sorteio"
          animated-result-token.tsx # Token animado (número caindo/girando)
      domain/
        random-draw/
          draw-numbers.ts  # Função de domínio para sortear números
      hooks/
        use-random-number-draw.ts # Hook que conversa com o domínio e expõe estado pra UI
      lib/
        utils.ts           # helper `cn` do shadcn
      styles/
        globals.css        # Tailwind base + animações de resultado
    vitest.config.ts
    vitest.setup.ts
    tailwind.config.ts
    postcss.config.mjs
    package.json
