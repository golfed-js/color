# `@golfed/color`

[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@golfed/color)](https://bundlephobia.com/package/@golfed/color)

Possibly the tiniest color library ever. 42 styles in barely 177 bytes of minified, gzipped, golfed, no dependency code.

```javascript
import color from '@golfed/color';

console.log(color(`
Hello, world!
{r}This is red!
{g}This is green!
{b}This is blue!
{/}Reset!
`.trim()))
```

## Supported styles

- `k`: black
- `r`: red
- `g`: green
- `y`: yellow
- `b`: blue
- `m`: magenta
- `c`: cyan
- `w`: white
- `kb`: background black
- `rb`: background red
- `gb`: background green
- `yb`: background yellow
- `bb`: background blue
- `mb`: background magenta
- `cb`: background cyan
- `wb`: background white
- `ki`: intense black
- `ri`: intense red
- `gi`: intense green
- `yi`: intense yellow
- `bi`: intense blue
- `mi`: intense magenta
- `ci`: intense cyan
- `wi`: intense white
- `kbi`: intense background black
- `rbi`: intense background red
- `gbi`: intense background green
- `ybi`: intense background yellow
- `bbi`: intense background blue
- `mbi`: intense background magenta
- `cbi`: intense background cyan
- `wbi`: intense background white
- `/`: reset
- `*`: bold
- `_`: italic
- `#`: dim
- `=`: underline
- `!`: blink
- `^`: inverse
- `-`: hidden
- `~`: strikethrough
