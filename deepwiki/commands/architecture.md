---
name: architecture
description: 'Get architecture overview of a repo. e.g. "/architecture apache/kafka"'
arguments:
  - name: repo
    description: Get architecture overview. e.g. "/architecture apache/kafka"
    required: true
---

# Architecture Deep Dive

You are analyzing the architecture of: **$ARGUMENTS.repo**

## Instructions

1. First, use `read_wiki_structure` with `repo_name: "$ARGUMENTS.repo"` to get the documentation structure

2. Identify architecture-related sections in the documentation (look for: architecture, design, internals, how it works, system design, components, modules)

3. Use `read_wiki_contents` to read the most relevant architecture sections (typically 2-3 sections)

4. Use `ask_question` with targeted architecture questions:
   - "What is the high-level architecture of this project?"
   - "What are the main components and how do they interact?"
   - "What design patterns does this project use?"

5. Synthesize and present a comprehensive architecture overview:

   ## Project Overview
   What the project does and its primary purpose.

   ## High-Level Architecture
   Describe the overall system architecture with main components.

   ```
   [Create an ASCII diagram if possible showing component relationships]
   ```

   ## Core Components
   For each major component:
   - **Component Name**: Purpose and responsibility
   - Key interfaces or APIs it exposes
   - Dependencies on other components

   ## Data Flow
   How data moves through the system for typical operations.

   ## Design Patterns
   Notable patterns used (e.g., MVC, event-driven, plugin architecture, middleware chain).

   ## Extension Points
   How the system is designed to be extended (plugins, hooks, middleware, etc.).

   ## Key Abstractions
   Important interfaces, base classes, or concepts that define the system.

   ## Technology Stack
   Languages, frameworks, and key dependencies.

6. Focus on clarity and visual representation where possible. Use diagrams (ASCII), bullet points, and tables to make the architecture easy to understand.

7. If architecture documentation is limited, acknowledge gaps and provide what can be inferred from available information.
