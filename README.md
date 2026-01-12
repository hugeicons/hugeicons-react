## ⚠️ This Package is Deprecated

**`hugeicons-react` is no longer maintained.** Please migrate to our new packages.

---

## Use These Instead

- **React wrapper:** [`@hugeicons/react`](https://www.npmjs.com/package/@hugeicons/react) – Provides an SVG icon renderer component that helps to render any icons from Hugeicons core icon pack  
- **Free core icons:** [`@hugeicons/core-free-icons`](https://www.npmjs.com/package/@hugeicons/core-free-icons) – Provides 4,600+ free icons in stroke rounded style  

### Installation

```bash
npm install @hugeicons/react @hugeicons/core-free-icons
```

Or with yarn:

```bash
yarn add @hugeicons/react @hugeicons/core-free-icons
```

---

## Migration Guide

### Old Way (Deprecated)

```jsx
import { Home01Icon } from "hugeicons-react";

<Home01Icon size={32} color="#00FF00" />
```

### New Way (Recommended)

```jsx
import { HugeiconsIcon } from '@hugeicons/react';
import { Home01Icon } from "@hugeicons/core-free-icons/stroke-rounded";

<HugeiconsIcon 
  icon={Home01Icon} 
  size={32} 
  color="#00FF00" 
/>
```

---

## ✅ Why Migrate?

- **More icons** – Access to 4,600+ icons and growing
- **Better performance** – Optimized rendering and tree-shaking
- **Active support** – Regular updates and new icon releases
- **Flexible** – Works with all Hugeicons core icon packs (free and premium)


---

## 📚 Documentation

For complete documentation, visit:
- [@hugeicons/react Documentation](https://www.npmjs.com/package/@hugeicons/react)
- [Hugeicons Website](https://hugeicons.com)

---

## License

MIT License - See [LICENSE.md](./LICENSE.md) for details.
