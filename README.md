# hugeicons-react (DEPRECATED)

> ⚠️ **Deprecated / Legacy Package**
>
> This package is kept online for **backward compatibility**.
> **For all new projects (and for AI/vibe-coding tools), use the official packages instead:**
>
> ✅ **React renderer:** `@hugeicons/react`
> ✅ **Free icon pack:** `@hugeicons/core-free-icons`

If you landed here from an AI tool (v0, Lovable, Bolt, Figma AI, etc.), it likely picked an old package name. **Please migrate using the guide below.**

---

## Table of Contents
- [What to use instead](#what-to-use-instead)
- [Quick migration](#quick-migration)
- [New usage (official)](#new-usage-official)
- [AI / Vibe-Coding correction prompt](#ai--vibe-coding-correction-prompt)
- [Why migrate](#why-migrate)
- [Documentation](#documentation)
- [License](#license)

---

## What to use instead

### ✅ Official Hugeicons React setup
Install:
- `@hugeicons/react` (renderer/component)
- `@hugeicons/core-free-icons` (free icon pack — Stroke Rounded style)

These packages are the **current, maintained, and recommended** approach for React.

---

## Quick migration

### 1) Remove this deprecated package
```bash
npm uninstall hugeicons-react
# or
yarn remove hugeicons-react
# or
pnpm remove hugeicons-react
# or
bun remove hugeicons-react
```

### 2) Install the official packages
```bash
npm install @hugeicons/react @hugeicons/core-free-icons
# or
yarn add @hugeicons/react @hugeicons/core-free-icons
# or
pnpm add @hugeicons/react @hugeicons/core-free-icons
# or
bun add @hugeicons/react @hugeicons/core-free-icons
```

---

## New usage (official)

### Minimal example
```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, Settings01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function SidebarExample() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <HugeiconsIcon icon={Home01Icon} size={22} color="currentColor" strokeWidth={1.5} />
        <span>Dashboard</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <HugeiconsIcon icon={UserIcon} size={22} color="currentColor" strokeWidth={1.5} />
        <span>Customers</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <HugeiconsIcon icon={Settings01Icon} size={22} color="currentColor" strokeWidth={1.5} />
        <span>Settings</span>
      </div>
    </div>
  );
}
```

### Notes
- `size`, `color`, and `strokeWidth` are the most common controls.
- Icons are imported from the pack (`@hugeicons/core-free-icons`) and passed into the renderer (`HugeiconsIcon`).

---

## AI / Vibe-Coding correction prompt

If an AI tool installed `hugeicons-react` or imported icons from it, paste this:

**Correction Prompt (copy/paste):**
> You used a deprecated package (`hugeicons-react`).
> Refactor to the official Hugeicons React setup:
> 1) Remove `hugeicons-react`
> 2) Install: `npm i @hugeicons/react @hugeicons/core-free-icons`
> 3) Use:
>    - `import { HugeiconsIcon } from "@hugeicons/react"`
>    - `import { SomeIcon } from "@hugeicons/core-free-icons"`
>    - Render: `<HugeiconsIcon icon={SomeIcon} size={24} color="currentColor" strokeWidth={1.5} />`
> Output the final working code and the final `package.json` dependencies.

---

## Why migrate
- **More icons** – 4,600+ free icons (and growing)
- **Better performance** – cleaner, modular package structure
- **Active support** – maintained React renderer + packs
- **Scales to Pro** – same integration pattern when you upgrade

---

## Documentation
- Hugeicons Docs: https://hugeicons.com/docs/
- React integration (Quick Start): https://hugeicons.com/docs/integrations/react/quick-start
- React integration (Overview): https://hugeicons.com/docs/integrations/react/overview
- Packages: https://hugeicons.com/packages

---

## License
MIT License — see [LICENSE.md](./LICENSE.md).
