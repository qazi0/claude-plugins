# Claude Plugins Marketplace

A collection of plugins for [Claude Code](https://claude.ai/claude-code).

## Installation

Add this marketplace to Claude Code:

```bash
claude plugin marketplace add qazi0/claude-plugins
```

## Available Plugins

### DeepWiki

Access GitHub repository documentation and AI-powered Q&A via [DeepWiki](https://deepwiki.com).

```bash
claude plugin install deepwiki@qazi0-claude-plugins
```

**Commands:**
- `/deepwiki:ask` - Ask questions about any GitHub repository
- `/deepwiki:explore-repo` - Explore repository documentation structure
- `/deepwiki:compare` - Compare two repositories side-by-side
- `/deepwiki:architecture` - Get architecture overviews
- `/deepwiki:quickstart` - Get quick start guides
- `/deepwiki:deep-dive` - Deep dive into specific topics
- `/deepwiki:troubleshoot` - Get help with common issues

[View full documentation](./deepwiki/README.md)

### Calculator

Exact mathematical calculations, unit conversions, and descriptive statistics — powered by [mathjs](https://mathjs.org/).

```bash
claude plugin install calculator@qazi0-claude-plugins
```

**Commands:**
- `/calculator:calc` - Evaluate any math expression (arithmetic, trig, logarithms, factorials, matrices, etc.)
- `/calculator:convert` - Convert between units (length, mass, temperature, data, etc.)

**MCP Tools:**
- `calculate` - Evaluate expressions with exact precision
- `convert` - Unit conversions
- `statistics` - Descriptive stats (mean, median, std dev, variance, range)

[View full documentation](./calculator/README.md)

## License

MIT
