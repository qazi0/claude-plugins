---
name: ask
description: Ask a question about a GitHub repository using DeepWiki AI
arguments:
  - name: repo
    description: The repository in owner/repo format (e.g., vercel/next.js)
    required: true
  - name: question
    description: Your question about the repository
    required: true
---

# Ask DeepWiki

You are answering a question about **$ARGUMENTS.repo**.

**Question:** $ARGUMENTS.question

## Instructions

1. Use the `ask_question` tool with:
   - `repo_name: "$ARGUMENTS.repo"`
   - `question: "$ARGUMENTS.question"`

2. Present the answer clearly and concisely

3. If the answer references specific parts of the codebase, mention the relevant files or modules

4. If the question is ambiguous or the answer is incomplete, suggest follow-up questions the user might want to ask
