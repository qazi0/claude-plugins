# Calculator Plugin

Exact mathematical calculations, unit conversions, and descriptive statistics for Claude Code — powered by [mathjs](https://mathjs.org/).

## Features

- **Calculate** — Evaluate any math expression with exact precision (no `eval()`)
- **Convert** — Convert between hundreds of units (length, mass, temperature, data, etc.)
- **Statistics** — Descriptive stats on any dataset (mean, median, std dev, variance, etc.)

## Installation

```bash
claude plugin marketplace add qazi0/claude-plugins
claude plugin install calculator@qazi0-claude-plugins
```

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/calculator:calc <expr>` | Evaluate a math expression | `/calculator:calc sqrt(144) + 2^10` |
| `/calculator:convert <val> <from> <to>` | Convert between units | `/calculator:convert 100 celsius fahrenheit` |

## MCP Tools

| Tool | Description |
|------|-------------|
| `calculate` | Evaluate math expressions (arithmetic, trig, logarithms, factorials, matrices, complex numbers) |
| `convert` | Convert between units (length, mass, time, temperature, volume, speed, data, etc.) |
| `statistics` | Compute descriptive statistics (count, sum, mean, median, min, max, std dev, variance, range) |

## Requirements

- Node.js 18+
- Dependencies are installed automatically

## License

MIT
