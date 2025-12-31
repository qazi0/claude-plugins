---
name: explore-repo
description: 'Explore a repo and get an overview. e.g. "/explore-repo facebook/react"'
arguments:
  - name: repo
    description: owner/repo (e.g., facebook/react)
    required: true
---

# Explore Repository

You are exploring the GitHub repository: **$ARGUMENTS.repo**

## Instructions

1. First, use the `read_wiki_structure` tool with `repo_name: "$ARGUMENTS.repo"` to get the documentation structure

2. Analyze the structure and identify the most important sections (typically: getting started, architecture, core concepts, API reference)

3. Use `read_wiki_contents` to read 2-3 of the most important sections

4. Provide a comprehensive summary including:
   - What the project is and its purpose
   - Key features and capabilities
   - Architecture overview (if available)
   - How to get started
   - Notable design decisions or patterns

Present the information in a clear, organized format that helps the user quickly understand the repository.
