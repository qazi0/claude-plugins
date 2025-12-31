# DeepWiki Skill

Use DeepWiki to explore and understand GitHub repositories through AI-powered documentation and Q&A.

## When to Use DeepWiki

Use the DeepWiki MCP tools when you need to:
- Understand the architecture of an unfamiliar GitHub repository
- Learn how a library or framework works
- Find specific implementation details in open-source projects
- Get context about a codebase before making contributions
- Answer technical questions about public repositories

## Available Tools

### `read_wiki_structure`
Get the documentation structure/table of contents for a repository.

**Use this first** to understand what documentation is available.

```
repo_name: "owner/repo" (e.g., "facebook/react", "vercel/next.js")
```

### `read_wiki_contents`
Read specific documentation content from the wiki.

Use after `read_wiki_structure` to dive into specific topics.

```
repo_name: "owner/repo"
topic: "topic-name" (from the structure)
```

### `ask_question`
Ask an AI-powered question about the repository.

Best for specific questions when you know what you're looking for.

```
repo_name: "owner/repo"
question: "How does authentication work in this project?"
```

## Best Practices

1. **Start with structure**: Always call `read_wiki_structure` first to see what's available
2. **Be specific**: When using `ask_question`, ask focused questions for better answers
3. **Use repo format**: Always use `owner/repo` format (e.g., `anthropics/claude-code`)
4. **Public repos only**: DeepWiki only works with public GitHub repositories that have been indexed

## Example Workflow

1. User asks about a repository
2. Call `read_wiki_structure` to get the documentation overview
3. Identify relevant sections from the structure
4. Call `read_wiki_contents` for detailed information
5. Use `ask_question` for specific queries not covered in docs

## Limitations

- Only works with **public** GitHub repositories
- Repository must be indexed on DeepWiki.com
- For private repos, users need a Devin account
