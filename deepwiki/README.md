# DeepWiki Plugin for Claude Code

Access GitHub repository documentation and AI-powered Q&A via [DeepWiki](https://deepwiki.com) MCP server.

## Features

- **Repository Exploration**: Browse documentation structure of any public GitHub repo
- **Documentation Access**: Read detailed wiki contents and guides
- **AI-Powered Q&A**: Ask questions and get context-aware answers about codebases
- **Repository Comparison**: Compare two libraries/frameworks side-by-side
- **Architecture Analysis**: Get comprehensive architecture overviews
- **Quick Start Guides**: Get focused setup guides to get running fast
- **Deep Dives**: Comprehensive exploration of specific topics
- **Troubleshooting**: Get help fixing common issues and errors
- **No API Key Required**: Completely free to use

## Installation

### From Marketplace

```bash
claude plugin marketplace add qazi0/claude-plugins
claude plugin install deepwiki@qazi0-claude-plugins
```

## Commands

### `/dw:ask <owner/repo> <question>`

Ask a specific question about a repository.

```
/dw:ask anthropics/claude-code "How do hooks work?"
/dw:ask vercel/next.js "What is the app router?"
```

### `/dw:explore-repo <owner/repo>`

Explore a repository's documentation and get a comprehensive overview.

```
/dw:explore-repo facebook/react
/dw:explore-repo vercel/next.js
```

### `/dw:compare <repo1> <repo2> [aspect]`

Compare two repositories side-by-side on architecture, features, and design decisions.

```
/dw:compare facebook/react vuejs/vue
/dw:compare fastapi/fastapi pallets/flask "async support"
/dw:compare prisma/prisma typeorm/typeorm "migrations"
```

### `/dw:architecture <owner/repo>`

Get a comprehensive high-level architecture overview of a repository.

```
/dw:architecture kubernetes/kubernetes
/dw:architecture apache/kafka
```

### `/dw:quickstart <owner/repo> [usecase]`

Get a focused quick start guide to get up and running fast.

```
/dw:quickstart langchain-ai/langchain
/dw:quickstart fastapi/fastapi "REST API"
```

### `/dw:deep-dive <owner/repo> <topic>`

Do a comprehensive deep dive on a specific topic within a repository.

```
/dw:deep-dive vercel/next.js "authentication"
/dw:deep-dive pytorch/pytorch "distributed training"
/dw:deep-dive docker/compose "networking"
```

### `/dw:troubleshoot <owner/repo> <issue>`

Get help troubleshooting common issues and errors.

```
/dw:troubleshoot vitejs/vite "build errors"
/dw:troubleshoot prisma/prisma "connection timeout"
/dw:troubleshoot docker/docker "permission denied"
```

## MCP Tools

The plugin provides access to three DeepWiki tools:

| Tool | Description |
|------|-------------|
| `read_wiki_structure` | Get documentation topics for a repository |
| `read_wiki_contents` | Read specific documentation content |
| `ask_question` | AI-powered Q&A about repositories |

## Requirements

- Repositories must be **public** on GitHub
- Repositories must be indexed on [DeepWiki.com](https://deepwiki.com)

## License

MIT

## Author

qazi0
