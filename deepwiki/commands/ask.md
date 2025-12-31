---
name: ask
description: 'Ask any question about a repo. e.g. "/ask vercel/next.js how does routing work?"'
arguments:
  - name: repo
    description: e.g. "vercel/next.js" or "facebook/react"
    required: true
  - name: question
    description: e.g. "how does routing work?" or "what is the architecture?"
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
