---
name: compare
description: 'Compare two repos side-by-side. e.g. "/compare facebook/react vuejs/vue"'
arguments:
  - name: repo1
    description: e.g. "facebook/react" or "fastapi/fastapi"
    required: true
  - name: repo2
    description: e.g. "vuejs/vue" or "pallets/flask"
    required: true
  - name: aspect
    description: e.g. "state management" or "async support" (optional)
    required: false
---

# Compare Repositories

You are comparing two GitHub repositories:
- **Repository 1:** $ARGUMENTS.repo1
- **Repository 2:** $ARGUMENTS.repo2
- **Focus Aspect:** $ARGUMENTS.aspect

## Instructions

1. First, gather information about both repositories in parallel:
   - Use `read_wiki_structure` for both repos to understand their documentation structure
   - Use `ask_question` for both repos with targeted questions about their core purpose and architecture

2. For each repository, gather:
   - Core purpose and philosophy
   - Key features and capabilities
   - Architecture and design patterns
   - Performance characteristics (if available)
   - Ecosystem and community (plugins, extensions, integrations)
   - Learning curve and documentation quality

3. If a specific aspect was provided ("$ARGUMENTS.aspect"), dive deeper:
   - Use `ask_question` on both repos specifically about that aspect
   - Compare their approaches, trade-offs, and implementations

4. Present a structured comparison:

   ## Overview
   Brief description of what each project is and its primary use case.

   ## Philosophy & Approach
   How each project approaches the problem domain.

   ## Feature Comparison
   | Feature | $ARGUMENTS.repo1 | $ARGUMENTS.repo2 |
   |---------|------------------|------------------|
   | ... | ... | ... |

   ## Architecture
   Key architectural differences and similarities.

   ## When to Choose Each
   - Choose **$ARGUMENTS.repo1** when: [specific use cases]
   - Choose **$ARGUMENTS.repo2** when: [specific use cases]

   ## Trade-offs
   What you gain and lose with each choice.

5. Be objective and factual. Avoid bias toward either repository.

6. If information is limited for either repository, acknowledge this and suggest what additional research might be needed.
